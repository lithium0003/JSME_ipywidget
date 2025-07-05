# JSME_ipywidget
[JSME Molecule Editor][jsme] ipywidget for jupyter notebook.

This ipywidget can draw a molecule with [JSME Molecule Editor][jsme] and get its SMILES in jupyter notebook.

[jsme]:https://jsme-editor.github.io/

![demo image](https://github.com/lithium0003/JSME_ipywidget/blob/master/imgs/image2.png)
![demo image](https://github.com/lithium0003/JSME_ipywidget/blob/master/imgs/image3.png)
![demo image](https://github.com/lithium0003/JSME_ipywidget/blob/master/imgs/image4.png)
![demo image](https://github.com/lithium0003/JSME_ipywidget/blob/master/imgs/image5.png)
![demo image](https://github.com/lithium0003/JSME_ipywidget/blob/master/imgs/image6.png)

## How to run
Jupyter Notebook changed in secure, cannot load javascript directly, need to install package as plugin.

Install Jupyter Notebook and install plugin
```
# needs nodejs
conda install nodejs
# or other install option

# install plugin
pip install git+https://github.com/lithium0003/JSME_ipywidget
```

then open Demo_draw.ipynb (or Demo_smiles.ipynb, Demo_mol.ipynb)
