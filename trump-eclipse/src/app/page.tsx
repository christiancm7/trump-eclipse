import Button from "@mui/material/Button";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 bg-cover"
      style={{ backgroundImage: 'url("/background2.webp")' }}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">$DJTE its a trump eclipse</code>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-32">
        <Button
          href="https://jupiter-terminal.dexscreener.com/?inputMint=CX5m6oZZftX4jbVh7spuHeRoyjwnCsNK868YpXcz2GDc&outputMint=So11111111111111111111111111111111111111112"
          target="_blank"
          variant="contained"
          sx={{
            borderRadius: "10px",
            background:
              "linear-gradient(45deg, #0033A0 30%, #FFFFFF 50%, #B22234 90%)",
            color: "#FFFFFF",
            textTransform: "none", // Keeps text in normal case for better readability
            fontWeight: "bold", // Makes text bold for better visibility
            boxShadow: `
      0 0 4px #0033A0, 
      0 0 8px #B22234, 
      0 0 12px #FFFFFF`,
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0.5,
            },
            "&:hover": {
              background:
                "linear-gradient(45deg, #002776 30%, #FFFFFF 50%, #992232 90%)",
            },
            textShadow: "0px 0px 8px rgba(0, 0, 0, 0.8)", // Adds shadow to text for better readability
          }}
        >
          Buy w/ Jupiter
        </Button>
        <Button
          variant="contained"
          href="https://raydium.io/swap/?outputCurrency=CX5m6oZZftX4jbVh7spuHeRoyjwnCsNK868YpXcz2GDc"
          target="_blank"
          sx={{
            borderRadius: "10px",
            background:
              "linear-gradient(45deg, #0033A0 30%, #FFFFFF 50%, #B22234 90%)",
            color: "#FFFFFF",
            textTransform: "none", // Keeps text in normal case for better readability
            fontWeight: "bold", // Makes text bold for better visibility
            boxShadow: `
      0 0 4px #0033A0, 
      0 0 8px #B22234, 
      0 0 12px #FFFFFF`,
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0.5,
            },
            "&:hover": {
              background:
                "linear-gradient(45deg, #002776 30%, #FFFFFF 50%, #992232 90%)",
            },
            textShadow: "0px 0px 8px rgba(0, 0, 0, 0.8)", // Adds shadow to text for better readability
          }}
        >
          Buy w/ Radium
        </Button>
        <Button
          href="https://dexscreener.com/solana/byuqkkpooqmxuhbq7x5qvfblxp1qergxs9tpighaee5j"
          target="_blank"
          variant="contained"
          sx={{
            borderRadius: "10px",
            background:
              "linear-gradient(45deg, #0033A0 30%, #FFFFFF 50%, #B22234 90%)",
            color: "#FFFFFF",
            textTransform: "none", // Keeps text in normal case for better readability
            fontWeight: "bold", // Makes text bold for better visibility
            boxShadow: `
      0 0 4px #0033A0, 
      0 0 8px #B22234, 
      0 0 12px #FFFFFF`,
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0.5,
            },
            "&:hover": {
              background:
                "linear-gradient(45deg, #002776 30%, #FFFFFF 50%, #992232 90%)",
            },
            textShadow: "0px 0px 8px rgba(0, 0, 0, 0.8)", // Adds shadow to text for better readability
          }}
        >
          DEX Scanner
        </Button>
        <Button
          variant="contained"
          href="https://twitter.com/magaeclipse"
          target="_blank"
          sx={{
            borderRadius: "10px",
            background:
              "linear-gradient(45deg, #0033A0 30%, #FFFFFF 50%, #B22234 90%)",
            color: "#FFFFFF",
            textTransform: "none", // Keeps text in normal case for better readability
            fontWeight: "bold", // Makes text bold for better visibility
            boxShadow: `
      0 0 4px #0033A0, 
      0 0 8px #B22234, 
      0 0 12px #FFFFFF`,
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0.5,
            },
            "&:hover": {
              background:
                "linear-gradient(45deg, #002776 30%, #FFFFFF 50%, #992232 90%)",
            },
            textShadow: "0px 0px 8px rgba(0, 0, 0, 0.8)", // Adds shadow to text for better readability
          }}
        >
          Twitter
        </Button>
        <Button
          href="https://t.me/+8Ml5ji0pHQpkNmJh"
          target="_blank"
          variant="contained"
          sx={{
            borderRadius: "10px",
            background:
              "linear-gradient(45deg, #0033A0 30%, #FFFFFF 50%, #B22234 90%)",
            color: "#FFFFFF",
            textTransform: "none", // Keeps text in normal case for better readability
            fontWeight: "bold", // Makes text bold for better visibility
            boxShadow: `
      0 0 4px #0033A0, 
      0 0 8px #B22234, 
      0 0 12px #FFFFFF`,
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0.5,
            },
            "&:hover": {
              background:
                "linear-gradient(45deg, #002776 30%, #FFFFFF 50%, #992232 90%)",
            },
            textShadow: "0px 0px 8px rgba(0, 0, 0, 0.8)", // Adds shadow to text for better readability
          }}
        >
          Telegram
        </Button>
      </div>

      {/* Rest of your existing code... */}
    </main>
  );
}
