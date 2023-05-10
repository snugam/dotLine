import React from 'react';
import { createRoot } from 'react-dom/client';
import WindowFrame from '@misc/window/components/WindowFrame';
import Application from '@components/Application';



const app = (
    <WindowFrame title='LinerDOT' platform='windows'>
        <Application />
    </WindowFrame>
);

createRoot(document.getElementById('app')!).render(app);