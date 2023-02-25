# delete all __MACOSX folder like main/15 - Boss Level Challenge 2 The Simon Game/Folder - 192 - Simon-Game-Challenge-Step-1-Answer/__MACOSX


import os
import glob
import shutil


folders = glob.glob('main/**/.git', recursive=True)

for folder in folders:
    print(folder)

    try:
        shutil.rmtree(folder)
    except Exception as e:
        print(e)