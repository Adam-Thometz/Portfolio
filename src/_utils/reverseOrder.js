export default function reverseOrder(projects) {
  let start = 0, end = projects.length-1;
  while (start < end) {
    [projects[start], projects[end]] = [projects[end], projects[start]];
    start++;
    end--;
  };
  return projects;
};