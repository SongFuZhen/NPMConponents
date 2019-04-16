# React IFrame

React IFrame Components. Adding Loading and Exception Deal

# Installation

<code> npm install react-iframe</code>

_or_

<code>yarn add react-iframe</code>

# Usage - Sample

<pre>
import Iframe from 'react-iframe'


const iframeProps = {
    title: 'your nick title',
    src: 'http://your url',
    width: '100%',
    height: '100%'
}

<Iframe {...iframeProps} /> 

</pre>

# Properties

<table>
<thead>
<tr>
<th>Attribute</th>
<th>Desc</th>
<th>Type</th>
<th>Default Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>loading</td>
<td>need show iframe loading</td>
<td>boolean</td>
<td>true</td>
</tr>

<tr>
<td>loadingType</td>
<td>loading Types can Choose: balls, bars, bubbles, cubes, cylon, spin, spinningBubbles,spokes, blank</td>
<td>string</td>
<td>Spin</td>
</tr>

<tr>
<td>onLoad</td>
<td>onLoad Function, after Load, you can do something</td>
<td>function(e)</td>
<td></td>
</tr>

</tbody>
</table>

Tips: You can use iframe default Props
