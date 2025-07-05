#!/usr/bin/env python
# coding: utf-8

# Copyright (c) lithium0003.
# Distributed under the terms of the Modified BSD License.

from ipywidgets import DOMWidget, ValueWidget, register
from traitlets import Unicode
from ._frontend import module_name, module_version

@register
class SmilesEditorWidget(DOMWidget, ValueWidget):
    _model_name = Unicode('SmilesEditorWidgetModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('SmilesEditorWidgetView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    # Attributes
    smiles = Unicode('').tag(sync=True)
    mol = Unicode('').tag(sync=True)
    
    def __init__(self, *pargs, **kwargs):
        init_struct = {}
        if 'smiles' in kwargs:
            init_struct['smiles'] = kwargs.pop('smiles')
        if 'mol' in kwargs:
            init_struct['mol'] = kwargs.pop('mol')
        super().__init__(*pargs, **kwargs)
        self.smiles = init_struct.get('smiles','')
        self.mol = init_struct.get('mol','')
