<!--
Filename: CHANGELOG.md
Author: Olivier Sirol <czo@free.fr>
License: GPL-2.0 (http://www.gnu.org/copyleft)
File Created: 30 December 2022
Last Modified: Sunday 26 May 2024, 17:29
Edit Time: 0:53:55
Description:

Copyright: (C) 2022-2024 Olivier Sirol <czo@free.fr>
-->

# Czo-Rescue-Debian ChangeLog

## 12.5-4 (2024-05-26):
- Version 12.5-4 contains kernel/6.1.0-21-amd64 and zfs/2.1.11-1
- debian 12
- add console-setup, mousepad, sanoid, vim-gtk3, xxd
- delete geany, netcat, vim-gtk
- ISO sha512:
```

```

## 11.6-4 (2023-03-19):
- Version 11.6-4 contains kernel/5.10.0-21-amd64 and zfs/2.0.3-9
- network additions: ifenslave and bridge-utils
- ISO sha512:
```
4c6b86af79aaf97e35514fa72bd1228d48ed6f7809a97342a4616c6ebfbc7d1f86a39a5e3450de881c322029bac5cb0f64ff0fd3df5f1d58ef4ed61018a8de30  czo-rescue-debian-11.6-4.iso
```

## 11.6-3 (2023-02-26):
- Version 11.6-3 contains kernel/5.10.0-21-amd64 and zfs/2.0.3-9

- First public release
- ISO sha512:
```
4f4369af7490a44e901088edd82e51e56065b3ca74ac2433b9dbc742dfbb03d4950e8c7652993b313e87a013476d70ad68010466a8e4d7ca094cf3891bc692c1  czo-rescue-debian-11.6-3.iso
```

## Czo-Rescue-Debian (2022-11-28):
- Czo-Rescue-Debian is based on Debian and built using debootstrap

Kernel:

    linux-image-amd64 linux-headers-amd64 intel-microcode amd64-microcode firmware-linux-free firmware-linux-nonfree firmware-misc-nonfree firmware-ath9k-htc firmware-atheros firmware-b43-installer firmware-b43legacy-installer firmware-bnx2 firmware-bnx2x firmware-brcm80211 firmware-cavium firmware-iwlwifi firmware-libertas firmware-realtek firmware-zd1211

Console packages:

    2to3 acpi aptitude apt-utils argon2 at atm-tools atop autofs avahi-utils bash bash-completion bc bind9 bind9-dnsutils bind9-host broadcom-sta-dkms bzip2 cabextract ca-certificates chntpw cifs-utils clonezilla cloud-guest-utils cloud-image-utils colordiff command-not-found cpio cron cryptsetup curl cvs dbus debconf-i18n debconf-utils debootstrap discount dislocker dmraid dnsmasq-utils dnsutils dosfstools dstat dump dwarves ecryptfs-utils efitools elinks ethtool ext4magic extrace exuberant-ctags fatresize fdisk fido2-tools file foremost fsarchiver gddrescue gdisk gettext-base git gnutls-bin gocryptfs gpart groff-base grub-efi-amd64-bin grub-efi-ia32-bin grub-pc-bin hardlink hashalot hdparm hexcurse htop hwinfo hwloc-nox icu-devtools ideviceinstaller idevicerestore iftop ifupdown info init ioping iotop iperf iperf3 ipmitool iproute2 iptraf iputils-arping iputils-clockdiff iputils-ping isc-dhcp-client isc-dhcp-common isolinux isomd5sum jfsutils jq kmod kpartx lame ldnsutils less lftp libarchive-tools libcap-ng-utils libguestfs-tools libimobiledevice-utils liblockfile-bin libncurses5 libnet-xmpp-perl libnfs-utils libnl-utils libnss3-tools libnss-systemd libpam-mount libpam-systemd libplist-utils libqcow-utils libsecret-tools libteam-utils libterm-readline-gnu-perl libusb-dev libusbmuxd-tools lm-sensors logrotate lrzip lsb-release lshw lsof lz4 m4 man-db manpages mc media-types memtester mime-support minicom mlocate moreutils mtools mtr multipath-tools nano nbd-client nbd-server ncat ncdu ncurses-term ndisc6 netcat netcat-traditional netdiag nettle-bin net-tools network-manager network-manager-openvpn network-manager-vpnc nfs-client nfs-kernel-server nftables nmap ntpdate numactl nvme-cli nwipe oathtool openconnect openssh-client p7zip-full paperkey par2 partclone parted partimage-server pciutils perltidy picocom pppoe procps pv qemu-guest-agent qrencode rar rclone rcs rdiff rdiff-backup rdiff-backup-fs readline-common recode reiser4progs reiserfsprogs rename reportbug rsync rsyslog sasl2-bin screen scrounge-ntfs sdparm sensible-utils smbclient socat sqlite3 squashfs-tools squashfs-tools-ng ssh stoken strace stress sysfsutils syslinux-efi syslinux-utils sysstat systemd systemd-sysv systemd-timesyncd tasksel tcpdump telnet testdisk tidy tmate tmux traceroute tree tzdata ucf udev udftools vim-common vim-tiny vlock vmfs6-tools wamerican wget whiptail whois wimtools wipe wireless-tools wodim xfsprogs xorriso xtrace xz-utils zfs-initramfs zsh zstd

X11/Wayland:

    xinit xfce4 xfce4-power-manager-plugins xfce4-screenshooter xfce4-systemload-plugin xfce4-taskmanager xfce4-terminal xfce4-whiskermenu-plugin xfce4-xkb-plugin avahi-discover avahi-ui-utils firefox-esr fonts-dejavu fonts-noto-color-emoji fonts-wqy-microhei galculator geany ghex gnome-themes-extra gparted grsync gsmartcontrol hardinfo lshw-gtk network-manager-gnome rdesktop remmina ristretto vim-gtk webext-ublock-origin-firefox x11vnc xarchiver xauth xclip xdotool xfburn xsel xterm

