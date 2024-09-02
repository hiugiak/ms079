try {
    load("nashorn:mozilla_compat.js");
} catch (e) {
   // ignore the exception - perhaps we are running on Rhino!
}

importPackage(Packages.tools);
function enter(pi) {
    pi.playPortalSE();
    pi.warp(200090010, 5);
    if (pi.getPlayer().getClient().getChannelServer().getEventSM().getEventManager("Boats").getProperty("haveBalrog").equals("true")) {
        pi.changeMusic("Bgm04/ArabPirate");
		pi.getPlayer().getMap().broadcastMessage(MaplePacketCreator.boatEffect(1034));
    } else if (pi.getPlayer().getClient().getChannelServer().getEventSM().getEventManager("Boats").getProperty("haveBalrog1").equals("true")) {
		pi.changeMusic("Bgm04/ArabPirate");
		pi.getPlayer().getMap().broadcastMessage(MaplePacketCreator.boatEffect(1034));
	}
	return true;
}