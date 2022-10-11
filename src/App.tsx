import React, { useState } from 'react';
import { Flex, Box } from 'reflexbox';
import {TimeTrackingReport} from './TimeTrackingReport';

function App() {
    const [source, setSource] = useState('');
  return (
    <Flex>
        <Box>
            <textarea rows={30} cols={100} value={source} onChange={e => setSource(e.target.value)}></textarea>
        </Box>
        <Box p={20}>
        <TimeTrackingReport source={source} />
        </Box>
    </Flex>
  );
}

export default App;
