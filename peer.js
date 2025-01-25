// <script src="https://cdn.jsdelivr.net/npm/peerjs@1.3.2/dist/peerjs.min.js"></script>

const peerId = Math.floor(Math.random()*(899-100)+100);
const peer = new Peer(peerId.toString());
var connection;

document.getElementById("id").innerHTML = peerId;

peer.on('connection', x => {
    x.on('data', data => {
        console.log(data);
        if (data.type === "sync") {document.getElementById("text").value = data.value}
        console.log(data);
    });
    x.on('open', () => {
        console.log("opened from "+x.id);
        x.send("hello");
    });
});

const connect = () => {
    const connectTo = document.getElementById("ip").value;
    console.log("connect to "+connectTo);

    if (!connection) {
        connection = peer.connect(connectTo);
    }
}

const onInput = () => {
    if (!connection) {
        return;
    }
    const value = document.getElementById("text").value;
    connection.send({ type: "sync", value });
};
