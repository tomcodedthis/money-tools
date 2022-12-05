export default function Footer(props: any) {
  return (
    <footer className="h-[60px] w-full absolute bottom-0 grid grid-cols-3 items-center bg-dark-green text-center text-base">
      <a
        className="underline underline-offset-4 opacity-80"
        href="https://github.com/tomcodedthis"
        target="_blank"
        rel="noopener noreferrer"
      >
        tomcodedthis
      </a>

      <div className="motion-safe:animate-flicker">
        {props.isConnected ? "CONNECTED" : "NOT CONNECTED"}
      </div>

      <div className="underline underline-offset-4 opacity-80">About</div>
    </footer>
  );
}
