<!--
// Filename: CHANGELOG.md
// Author: Olivier Sirol <czo@free.fr>
// License: GPL-2.0 (http://www.gnu.org/copyleft)
// File Created: 30 December 2022
// Last Modified: Sunday 05 April 2026, 10:05
// Edit Time: 2:18:48
// Description:
//
//           Czo-Rescue-Debian ChangeLog
//
// Copyright: (C) 2022-2026 Olivier Sirol <czo@free.fr>
-->

# Czo-Rescue-Debian ChangeLog

## 13.4-1 (2026-04-??):
- Version 13.4-1 from debian 13 (kernel/6.12.74+deb13+1-amd64 and zfs/2.3.2-2)
- get rid of the old grub-embed.cfg (for wrong cmdpath) and only for x64 bits
- packages file contains now kernel+firmaware, and is sorted
- added 7z, bat, btop, busybox-static, casync, flashrom, ghostscript, gvfs-backends,
  gvfs-fuse, inxi, iotop-c, libgetopt-simple-perl, libjson-perl, libnet-mqtt-simple-perl,
  libnotify-bin, libpar-packer-perl, ndctl, nilfs-tools, nmon, pass, pcre2-utils, plocate,
  pptp-linux, speedtest-cli, sshfs, thunar-archive-plugin, tigervnc-standalone-server,
  tigervnc-viewer, udpcast, wireguard-tools, wvdial, xfsdump, xl2tpd, yq and a lot of
  firmwares...
- deleted 2to3, dmraid, iotop, mime-support, mlocate, netdiag, ntpdate, p7zip, reiser4progs
- ISO sha512:
```
```

## 12.5-4 (2024-05-26):
- Version 12.5-4 from debian 12 (kernel/6.1.0-21-amd64 and zfs/2.1.11-1)
- added console-setup, mousepad, sanoid, vim-gtk3, xxd
- deleted geany, netcat, vim-gtk
- ISO sha512:
```
c6084ca2028b6b4edc86fd7f2440843aec53c9cd25142fc47eec84c32f0a1f1d9b95d4bba4be275192d2cf8318b4ec04c6bab1fd6c2033e7f2747384fb3d7f23  czo-rescue-debian-12.5-4.iso
```

## 11.6-4 (2023-03-19):
- Version 11.6-4 from debian 11 (kernel/5.10.0-21-amd64 and zfs/2.0.3-9)
- network additions: ifenslave and bridge-utils
- ISO sha512:
```
4c6b86af79aaf97e35514fa72bd1228d48ed6f7809a97342a4616c6ebfbc7d1f86a39a5e3450de881c322029bac5cb0f64ff0fd3df5f1d58ef4ed61018a8de30  czo-rescue-debian-11.6-4.iso
```

## 11.6-3 (2023-02-26):
- Version 11.6-3 from debian 11 (kernel/5.10.0-21-amd64 and zfs/2.0.3-9)
- First public release
- ISO sha512:
```
4f4369af7490a44e901088edd82e51e56065b3ca74ac2433b9dbc742dfbb03d4950e8c7652993b313e87a013476d70ad68010466a8e4d7ca094cf3891bc692c1  czo-rescue-debian-11.6-3.iso
```

## Czo-Rescue-Debian (2022-11-28):
- Czo-Rescue-Debian is based on Debian and built using debootstrap
- See 'packages' file for Kernel, Console packages and X11/Wayland packages.

