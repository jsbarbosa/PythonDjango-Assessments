from glob import glob
from PIL import Image
import matplotlib.pyplot as plt

images = glob("*.png")
for image in images:
    img = Image.open(image)
    img2 = img.crop((50, 90, img.size[0]-10, img.size[1]))
    img2.save(image)
