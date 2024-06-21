import { useEffect, useState } from 'react';
import '../styles/components/PWANotice.scss';

import { marked } from 'marked';

function PWANotice() {
    const [content, setContent] = useState("");

    useEffect(() => {
        async function loadContent() {
            setContent(await marked.parse("# Install app before use\nIt is strongly recommended to install this app before use.\nFor Android, use the button at the bottom.\nOn iOS, add a bookmark to your home screen!\n\n![google-play](https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/available/google-play_vector.svg)"));
        }

        loadContent();
    }, [])

    const htmlObj = { __html: content };

    return (
        <div className="pwa-notice" dangerouslySetInnerHTML={htmlObj}>
        </div>
    )
}

export default PWANotice;