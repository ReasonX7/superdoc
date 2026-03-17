import { getAllFieldAnnotations } from './getAllFieldAnnotations';

export function findFieldAnnotations(predicate, state) {
  let allFieldAnnotations = getAllFieldAnnotations(state);
  let fieldAnnotations = [];

  allFieldAnnotations.forEach((annotation) => {
    if (predicate(annotation.node)) {
      fieldAnnotations.push(annotation);
    }
  });

  return fieldAnnotations;
}
