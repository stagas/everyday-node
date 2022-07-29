<h1>
everyday-node <a href="https://npmjs.org/package/everyday-node"><img src="https://img.shields.io/badge/npm-v0.0.1-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-75-FFF.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

Everyday node utilities.

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i everyday-node </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add everyday-node </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add everyday-node</code>
</td></tr></table>
</h4>

## API

<p>  <details id="exec$23" title="Function" ><summary><span><a href="#exec$23">#</a></span>  <code><strong>exec</strong></code><em>(cmd, args, options)</em>    </summary>  <a href="src/everyday-node.ts#L74">src/everyday-node.ts#L74</a>  <ul>    <p>    <details id="cmd$25" title="Parameter" ><summary><span><a href="#cmd$25">#</a></span>  <code><strong>cmd</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="args$26" title="Parameter" ><summary><span><a href="#args$26">#</a></span>  <code><strong>args</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>[]</code></span>  </summary>    <ul><p>string  []</p>        </ul></details><details id="options$27" title="Parameter" ><summary><span><a href="#options$27">#</a></span>  <code><strong>options</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>{}</code></span>  </summary>    <ul><p><span>SpawnOptions</span></p>        </ul></details>  <p><strong>exec</strong><em>(cmd, args, options)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;unknown&gt;</ul></p></p>    </ul></details><details id="exists$1" title="Function" ><summary><span><a href="#exists$1">#</a></span>  <code><strong>exists</strong></code><em>(pathname)</em>    </summary>  <a href="src/everyday-node.ts#L7">src/everyday-node.ts#L7</a>  <ul>    <p>    <details id="pathname$3" title="Parameter" ><summary><span><a href="#pathname$3">#</a></span>  <code><strong>pathname</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong>exists</strong><em>(pathname)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;boolean&gt;</ul></p></p>    </ul></details><details id="keypress$7" title="Function" ><summary><span><a href="#keypress$7">#</a></span>  <code><strong>keypress</strong></code><em>(msg, cb)</em>    </summary>  <a href="src/everyday-node.ts#L43">src/everyday-node.ts#L43</a>  <ul>    <p>    <details id="msg$9" title="Parameter" ><summary><span><a href="#msg$9">#</a></span>  <code><strong>msg</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="cb$10" title="Function" ><summary><span><a href="#cb$10">#</a></span>  <code><strong>cb</strong></code><em>(char, key)</em>    </summary>    <ul>    <p>    <details id="char$13" title="Parameter" ><summary><span><a href="#char$13">#</a></span>  <code><strong>char</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="key$14" title="Parameter" ><summary><span><a href="#key$14">#</a></span>  <code><strong>key</strong></code>    </summary>    <ul><p><span>Key</span></p>        </ul></details>  <p><strong>cb</strong><em>(char, key)</em>  &nbsp;=&gt;  <ul>void</ul></p></p>    </ul></details>  <p><strong>keypress</strong><em>(msg, cb)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;<details id="__type$15" title="Function" ><summary><span><a href="#__type$15">#</a></span>  <em>()</em>    </summary>    <ul>    <p>      <p><strong></strong><em>()</em>  &nbsp;=&gt;  <ul>void</ul></p></p>    </ul></details>&gt;</ul></p></p>    </ul></details><details id="keypressSync$4" title="Function" ><summary><span><a href="#keypressSync$4">#</a></span>  <code><strong>keypressSync</strong></code><em>(msg)</em>    </summary>  <a href="src/everyday-node.ts#L17">src/everyday-node.ts#L17</a>  <ul>    <p>    <details id="msg$6" title="Parameter" ><summary><span><a href="#msg$6">#</a></span>  <code><strong>msg</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong>keypressSync</strong><em>(msg)</em>  &nbsp;=&gt;  <ul>string</ul></p></p>    </ul></details><details id="singleKeypress$17" title="Function" ><summary><span><a href="#singleKeypress$17">#</a></span>  <code><strong>singleKeypress</strong></code><em>(msg)</em>    </summary>  <a href="src/everyday-node.ts#L57">src/everyday-node.ts#L57</a>  <ul>    <p>    <details id="msg$19" title="Parameter" ><summary><span><a href="#msg$19">#</a></span>  <code><strong>msg</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong>singleKeypress</strong><em>(msg)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;{<p>  <details id="char$21" title="Property" ><summary><span><a href="#char$21">#</a></span>  <code><strong>char</strong></code>    </summary>  <a href="src/everyday-node.ts#L65">src/everyday-node.ts#L65</a>  <ul><p>string</p>        </ul></details><details id="key$22" title="Property" ><summary><span><a href="#key$22">#</a></span>  <code><strong>key</strong></code>    </summary>  <a href="src/everyday-node.ts#L65">src/everyday-node.ts#L65</a>  <ul><p><span>Key</span></p>        </ul></details></p>}&gt;</ul></p></p>    </ul></details></p>

## Credits

- [get-pty-output](https://npmjs.org/package/get-pty-output) by [CyriacBr](https://github.com/CyriacBr) &ndash; Execute an external command with a PTY, from Node

## Contributing

[Fork](https://github.com/stagas/everyday-node/fork) or [edit](https://github.dev/stagas/everyday-node) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
