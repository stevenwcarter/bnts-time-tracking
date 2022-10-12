import { useEffect, useState } from 'react';
import { Flex, Box } from 'reflexbox';
import { TimeTrackingReport } from '@stevenwcarter/time-tracking-components';
import styled from 'styled-components';

const StyledClearButton = styled.button`
  max-width: 70px;
`;

const CodeBlock = styled(Flex)`
  flex-direction: column;
  font-family: monospace;
`;

function App() {
  const [source, setSource] = useState('');

  useEffect(() => {
    const savedData = window.localStorage.getItem('source');

    if (savedData) {
      setSource(savedData);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('source', source);
  }, [source]);

  const clearStorage = () => {
    // window.localStorage.removeItem('source');
    setSource('');
  };

  return (
    <Flex p={30}>
      <Flex flexDirection={'column'} flexGrow={0} flexBasis={'50%'}>
        <textarea
          rows={30}
          cols={100}
          value={source}
          onChange={(e) => setSource(e.target.value)}
        ></textarea>
        <StyledClearButton onClick={clearStorage}>Clear</StyledClearButton>
        <Flex mt={10} p={30} flexDirection={'column'} flexShrink={1}>
          You should enter your time in the format shown below. &quot;code1&quot; and
          &quot;code2&quot; can be anything you&apos;d like, and the time will be aggregated
          together, even if you work on other time codes in the interim. You can try copying the
          data below into the text area to see a sample report. From the report, you can then note
          the time and copy the comments into the notes field in your time tracker.
          <br />
          <br />
          <CodeBlock>
            <span>11:45-12:15 code1</span>
            <span>- Comment explaining what you did</span>
            <span>12:15-1:30 code2</span>
            <span>- Comment about what you were doing</span>
            <span>1:30-2 code1</span>
            <span>2-4 code3</span>
          </CodeBlock>
        </Flex>
      </Flex>
      <Box pl={20} pr={20} flexBasis={'50%'}>
        <TimeTrackingReport source={source} />
      </Box>
    </Flex>
  );
}

export default App;
