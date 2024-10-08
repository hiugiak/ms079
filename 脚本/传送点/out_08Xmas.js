/*
 * This file is part of the OdinMS Maple Story Server
 * Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
 *                    Matthias Butz <matze@odinms.de>
 *                    Jan Christian Meyer <vimes@odinms.de>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License version 3
 * as published by the Free Software Foundation. You may not use, modify
 * or distribute this program under any other version of the
 * GNU Affero General Public License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/*
	Map(s): 		Hidden Street : Free Market Entrance (910000000)
	Description: 		Takes you back to original location
*/
try {
    load("nashorn:mozilla_compat.js");
} catch (e) {
   // ignore the exception - perhaps we are running on Rhino!
}

importPackage(org.server.maps);

function enter(pi) {
	var returnMap = pi.getSavedLocation("CHRISTMAS");
	pi.clearSavedLocation("CHRISTMAS");
	if (returnMap < 0) {
		returnMap = 100000000;
	}
	var target = pi.getMap(returnMap);
	var portal = target.getPortal(0);
	pi.getPlayer().changeMap(target, portal);
	return true;
}