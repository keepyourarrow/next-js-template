export default function(message, error=null) {
    const caller = new Error().stack.split("\n")[2]
    const loc = caller.search("at");
    const name = caller.substring(loc).split(" ")[1]

    console.log(`[INFO] ${name} ${message}`);
}