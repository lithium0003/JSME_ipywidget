// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

// Add any needed widget imports here (or from controls)
// import {} from '@jupyter-widgets/base';

import { createTestModel } from './utils';

import { SmilesEditorModel } from '..';

describe('SmilesEditor', () => {
  describe('SmilesEditorModel', () => {
    it('should be createable', () => {
      const model = createTestModel(SmilesEditorModel);
      expect(model).toBeInstanceOf(SmilesEditorModel);
      expect(model.get('smiles')).toEqual('');
    });

    it('should be createable with a value', () => {
      const state = { value: 'ccc' };
      const model = createTestModel(SmilesEditorModel, state);
      expect(model).toBeInstanceOf(SmilesEditorModel);
      expect(model.get('smiles')).toEqual('ccc');
    });
  });
});
