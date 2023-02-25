import glob
import os
import zipfile

files = glob.glob('main/*/*.zip')


def unzip(file, path):
    with zipfile.ZipFile(file, 'r') as zip_ref:
        zip_ref.extractall(path)

    os.remove(file)



for file in files:

    print('Extracting ' + file)


    # add folder in the name of the end folder e.g. if
    # path is main/1/2.zip, then the folder will be
    # main/1/Folder_2

    path = file.split('/') # split the path

    path = '/'.join(path[:-1]) # remove the last element

    path = path + '/Folder - ' + file.split('/')[-1].split('.')[0] # add the folder

    print(path)



    if not os.path.exists(path):
        os.makedirs(path)




    unzip(file, path)
