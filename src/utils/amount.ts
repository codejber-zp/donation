export const formatAmount = (value = '') => {
  if (!value) {
    return '';
  }
  const [beforeDot = value, afterDot] = value.split(/\.(.*)/g);
  const plainNumberBD = beforeDot
    ?.replace(/\D/g, '')
    ?.split('')
    ?.reverse()
    ?.join('')
    ?.match(/.{1,3}/g)
    ?.join()
    ?.split('')
    ?.reverse()
    ?.join('');
  const plainNumberAD = afterDot?.replace(/\D/g, '')?.slice(0, 2);
  const suffix = plainNumberAD !== undefined ? `.${plainNumberAD}` : '';

  return `${plainNumberBD || 0}${suffix}`;
};
