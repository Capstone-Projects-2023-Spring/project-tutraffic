"""
Renders the TuTraffic configuration portal for the local Raspberry Pi.
"""
import socket_api
import streamlit as st
import pandas as pd
from PIL import Image, UnidentifiedImageError
from streamlit_drawable_canvas import st_canvas


TITLE = "TuTraffic Parking Detection Portal"


def open_image():
    """Reads the image file displayed on the page."""
    try:
        img = Image.open(socket_api.IMAGE_PATH)
        return img
    except (FileNotFoundError, UnidentifiedImageError):
        return None


if "maxParkingSpaces" not in st.session_state:
    st.session_state.maxParkingSpaces = socket_api.get_maxparkingspaces()
if "roi" not in st.session_state:
    st.session_state.roi = socket_api.get_roi()


st.set_page_config(page_title=TITLE, layout="wide")
st.title(TITLE)


# Select rectangular ROI using drawing canvas.
image = open_image()
canvas_result = st_canvas(
    fill_color="rgba(255, 255, 255, 0.2)",
    stroke_color="purple",
    stroke_width=1,
    background_color="grey",
    background_image=image,
    update_streamlit=True,
    height=image.height if image else 720,
    width=image.width if image else 1280,
    drawing_mode="rect",
    display_toolbar=True,
    key="select_roi",)


if not socket_api.is_camera_connected():
    # If camera is not connected, print message.
    st.text("Error: Camera is not connected.")
else:
    # If camera is connected, show refresh image button.
    st.button("Refresh Image", on_click=socket_api.refresh_image)

# Show previous roi.
st.text("Previous ROI:")
st.text(st.session_state.roi)

# Draw dialogue for ROI Submission.
if canvas_result.json_data is not None:
    objects = pd.json_normalize(canvas_result.json_data["objects"])
    for col in objects.select_dtypes(include=["object"]).columns:
        objects[col] = objects[col].astype("str")
    if not objects.empty:
        if objects.shape[0] == 1:
            df = objects[["left", "top", "width", "height"]].iloc[0]
            st.text("Selected ROI:")
            st.dataframe(df)
            if st.button("Submit ROI"):
                tup = tuple(df)
                socket_api.set_roi(tup)
                st.session_state.roi = str(tup)
        else:
            st.text("Please remove extraneous selections.")


# Set maximum number of parking spaces.
number = st.number_input(
    label="Maximum Number of Parking Spaces",
    min_value=1,
    step=1,
    value=st.session_state.maxParkingSpaces,
    key="set_maximum")


if st.button("Submit Maximum"):
    socket_api.set_maxparkingspaces(number)
