package com.github.mrzhqiang.maplestory.wz;

import org.jsoup.Jsoup;
import org.jsoup.select.Elements;
import org.junit.Test;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;

import static org.junit.Assert.*;

public class WzManageTest {

    private static final String[] BASE_WZ_EXPECTED = { "StandardPDD.img.xml", "smap.img.xml",
            "zmap.img.xml", "zmap_cn.img.xml" };

    @Test
    public void testWzPath() {
        File root = new File(WzManage.WZ_DIR, "/Base.wz");
        String[] wzFileNames = root.list();
        Arrays.sort(wzFileNames);
        assertArrayEquals(BASE_WZ_EXPECTED, wzFileNames);
    }

    @Test
    public void testJsoupXml() throws IOException {
        File wz = new File(WzManage.WZ_DIR, "/Mob.wz/0100100.img.xml");
        Elements imgdirs = Jsoup.parse(wz, "UTF-8").body().children();
        assertEquals("0100100.img", imgdirs.attr("name"));
        Elements info = imgdirs.select("imgdir[name=info]");
        assertEquals("info", info.attr("name"));
        Elements maxHP = info.select("int[name=maxHP]");
        assertEquals("maxHP", maxHP.attr("name"));
        assertEquals("8", maxHP.attr("value"));
    }

}