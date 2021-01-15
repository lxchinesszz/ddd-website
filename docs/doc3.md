---
id: doc3
title: This is Document Number 3
---


## 一、tab标签
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Maven"
values={[
{label: 'Maven', value: 'Maven'},
{label: 'Gradle', value: 'Gradle'},
{label: 'SBT', value: 'SBT'},
]}>
<TabItem value="Maven">
</TabItem>
<TabItem value="Gradle">
说的
</TabItem>
<TabItem value="SBT">
fds
</TabItem>
</Tabs>


## 二、文本背景
export const Highlight = ({children, color}) => (
<span
style={{
backgroundColor: color,
borderRadius: '2px',
color: '#fff',
padding: '0.2rem',
}}>
{children}
</span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook
blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!


## 三、代码高亮

```jsx
console.log('Every repo must come with a mascot.');
```

### 3.1 代码标题

```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### 3.2 指定某一行选中

```jsx {3}
function HighlightSomeText(highlight) {
  if (highlight) {
    return 'This text is highlighted!';
  }

  return 'Nothing highlighted';
}
```


```jsx {1,4-6,11}
import React from 'react';

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
```

## 四、背景标签

:::note

The content and title *can* include markdown.

:::

:::tip You can specify an optional title

Heads up! Here's a pro-tip.

:::

:::info

Useful information.

:::

:::caution

Warning! You better pay attention!

:::

:::danger

Danger danger, mayday!

:::

:::note Your Title

The content and title *can* include markdown.

:::
