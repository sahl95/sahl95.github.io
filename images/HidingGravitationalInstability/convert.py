import glob
import os

files = glob.glob('*.pdf')
for filename in files:
    f = filename[:-4]
    os.system('sips -s format png {}.pdf --out {}.png'.format(f, f))
