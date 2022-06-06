
module.exports = {
  // pattern: '^(develop|main|release)$|^(chore|ci|docs|feature|fix|hotfix|perf|refactor|revert|style|test)/(SAGE-\\d{1,4}/)([a-z-]+)$',
  pattern: '^(develop|main|release)$|^(chore|ci|docs|feature|fix|hotfix|perf|refactor|revert|style|test)/([a-z-]+)$',
  errorMsg: 'Invalid branch name'
}
