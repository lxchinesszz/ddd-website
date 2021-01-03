import React from 'react';
import Layout from '@theme/Layout';
import CodeSnippet from "@site/src/theme/CodeSnippet";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const installs = [
    {
        label: 'Curl',
        snippet: `# Install
curl -Lsf https://sh.benthos.dev | bash

# Make a config
benthos create nats/protobuf/aws_sqs > ./config.yaml

# Run
benthos -c ./config.yaml`
    },
    {
        label: 'Homebrew',
        snippet: `# Install
brew install benthos

# Make a config
benthos create nats/protobuf/aws_sqs > ./config.yaml

# Run
benthos -c ./config.yaml`
    },
    {
        label: 'Docker',
        snippet: `# Pull
docker pull jeffail/benthos

# Make a config
docker run --rm jeffail/benthos create nats/protobuf/aws_sqs > ./config.yaml

# Run
docker run --rm -v $(pwd)/config.yaml:/benthos.yaml jeffail/benthos`
    },
]


function Hello() {
    return (
        <Layout title="Hello">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                    width: '100vw'
                }}>
                {installs && installs.length && (
                    <Tabs defaultValue={installs[0].label} values={installs.map((props, idx) => {
                        return {label:props.label, value:props.label};
                    })}>
                        {installs.map((props, idx) => (
                            <TabItem value={props.label}>
                                <CodeSnippet snippet={props.snippet} lang="bash"></CodeSnippet>
                            </TabItem>
                        ))}
                    </Tabs>
                )}
            </div>
            <div>

            </div>
        </Layout>
    );
}

export default Hello;
