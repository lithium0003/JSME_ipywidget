#!/usr/bin/env python
# coding: utf-8

# Copyright (c) lithium0003.
# Distributed under the terms of the Modified BSD License.

import pytest

from ..smileseditor import SmilesEditorWidget


def test_example_creation_blank():
    w = SmilesEditorWidget()
    assert w.smiles == ''
