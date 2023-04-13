import '@misc/window/windowPreload';

window.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app') as HTMLElement;
    const { env } = process;
    const versions: Record<string, unknown> = {};
    versions['erwt'] = env['npm_package_version'];
    versions['license'] = env['npm_package_version'];

    for (const type of ['chrome', 'node', 'electron']) {
        versions[type] = process.versions[type]?.replace('+', '');
    }

    for (const type of ['react']) {
        const v = env['npm_package_dependencies_' + type];
        if (v) versions[type] = v.replace('^', '');
    }

    // NPM @dev deps versions
    for (const type of ['webpack', 'typescript']) {
        const v = env['npm_package_devDependencies_' + type];
        if (v) versions[type] = v.replace('^', '');
    }

    app.setAttribute('data-versions', JSON.stringify(versions));
});