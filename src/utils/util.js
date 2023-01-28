function formatDate(date) {
  if (!date) {
    return '';
  }
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

const uuid = (prefix) => prefix + Math.random().toString(16).slice(2);

function getDomParents(doms) {
  const arr = [doms];
  function loop(dom) {
    if (dom.parentNode) {
      arr.push(dom.parentNode);
    } else {
      return;
    }
    loop(dom.parentNode);
  }

  loop(doms);
  return arr;
}

export { formatDate, uuid, getDomParents };
