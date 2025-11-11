export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>
    {children}
    <footer style={{marginTop:40,padding:"24px 0",fontSize:14,opacity:.8}}>
      <div>Information provided by Greedy.</div>
      <div><a href="/legal/privacy">Privacy</a> · <a href="/legal/methodology">Methodology</a> · <a href="/legal/disclosure">Disclosure</a></div>
    </footer>
  </body></html>
}
