import { changeListLevel } from './changeListLevel';

/**
 * Increases the indent level of the current list item.
 * Works for both ordered and bullet lists, including lists toggled from ordered→bullet.
 */
export const increaseListIndent =
  () =>
  ({ editor, tr, dispatch }) => {
    const handled = changeListLevel(1, editor, tr);

    if (handled && dispatch) {
      dispatch(tr);
    }

    return handled;
  };
