# Third-party notices

The production design-system source does not vendor third-party fonts or
JavaScript libraries. Product consumers provide React through the declared
peer dependency.

The historical, browser-viewable canvases under `docs/assets/` load the
following exact development builds from public CDNs:

| Dependency | Version | License | Upstream |
| --- | --- | --- | --- |
| React and ReactDOM | 18.3.1 | MIT | [facebook/react](https://github.com/facebook/react/blob/v18.3.1/LICENSE) |
| Babel Standalone | 7.29.0 | MIT | [babel/babel](https://github.com/babel/babel/blob/v7.29.0/LICENSE) |

Those scripts are referenced by URL with SHA-384 Subresource Integrity hashes;
they are not copied into this repository.

The canvases request Cormorant Garamond, Kalam, Inter, and JetBrains Mono from
Google Fonts. The font files are not stored in this repository. Google Fonts
serves the typefaces under their upstream open-font licenses; consult the
[Google Fonts repository](https://github.com/google/fonts) and the
[JetBrains Mono repository](https://github.com/JetBrains/JetBrainsMono) for
the applicable license texts and author credits.

Development-only npm dependencies and their exact resolved versions are
recorded in `pnpm-lock.yaml`. They are not part of this repository's runtime
distribution.
