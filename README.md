# react-sweet-button

## About

a button component of react

## 来了就留个 :feet:吧，star一下证明你来过  :stuck_out_tongue_closed_eyes:

>  如果对您对此项目有兴趣，可以点 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍

>  传送门1：[vue2-admin-grace优雅的后台管理系统](https://github.com/artdong/vue-admin)

>  传送门2：[ionic3自定义组件及常用例子](https://github.com/artdong/ionic3-awesome)

## 技术栈

react + sass + classnames + webpack

## Install

```
npm i react-sweet-button -S
```

## Usage

```
import { SweetButton, DimensionButton } from 'react-sweet-button';
```

* SweetButton

```
<SweetButton className="m-t" type="light" size="xlarge" onClick={()=>{alert('我是超大按钮')}}>
  xlarge
</SweetButton>
<SweetButton className="m-l" type="primary" size="large">
  large
</Sweet
<SweetButton className="m-l" type="secondary" size="medium" outline>
  medium
</SweetButton>
<SweetButton className="m-l" type="danger" size="small" outline>
   small
</SweetButton>
<SweetButton className="m-l" type="dark" size="xsmall">
   xsmall
</SweetButton>
<SweetButton size="large" block>
  block button
</SweetButton>
```

* DimensionButton

```
<DimensionButton className="m-t" type="light" size="xlarge" onClick={()=>{alert('我是超大按钮')}}>
  xlarge
</DimensionButton>
<DimensionButton className="m-l" type="primary" size="large">
  large
</DimensionButton>
<DimensionButton className="m-l" type="secondary" size="medium">
   medium
</DimensionButton>
<DimensionButton className="m-l" type="danger" size="small">
   small
</DimensionButton>
<DimensionButton className="m-l" type="dark" size="xsmall">
   xsmall
</DimensionButton>
```

## 效果预览

![预览图](https://github.com/artdong/react-sweet-button/blob/develop/examples/demo/image/react-button.png?raw=true)

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：type -> size -> outline(仅适用于SweetButton) ->block(仅适用于SweetButton)

按钮的属性说明如下：

- type: 设置按钮类型，可选值为 light primary secondary danger dark或者不设 默认值为 primary

- size: 设置按钮大小，可选值为 xlarge large medium small xsmall或者不设 默认值large

- outline: 设置按钮样式(仅带边框按钮)

- block: 设置按钮样式(block button)

