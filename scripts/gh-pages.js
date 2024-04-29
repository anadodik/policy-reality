var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        silent: true,
        repo: 'https://' + process.env.GITHUB_TOKEN + '@github.com/anadodik/policy-reality.git',
        user: {
            name: 'Ana Dodik',
            email: 'anadodik@mit.edu'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)