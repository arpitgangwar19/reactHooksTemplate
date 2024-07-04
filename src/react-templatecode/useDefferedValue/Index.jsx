import { useState, useDeferredValue, Suspense } from 'react';
import SlowList from './SlowList';

export default function DemoForDefferedValue() {
    const [text, setText] = useState('');
    const deferredText = useDeferredValue(text);
    const isStale = text !== deferredText;
    return (
        <>
            <input value={text} onChange={e => setText(e.target.value)} />
            <Suspense fallback={<h2>Loading...</h2>} >
                <div style={{
                    opacity: isStale ? 0.5 : 1,
                    transition: isStale ? 'opacity 0.2s 0.2s linear' : 'opacity 0s 0s linear'
                }}>
                    <SlowList text={deferredText} />
                </div>

            </Suspense>
        </>
    );
}
