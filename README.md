<!--
Filename: README.md
Author: Olivier Sirol <czo@free.fr>
License: GPL-2.0 (http://www.gnu.org/copyleft)
File Created: 30 December 2022
Last Modified: Sunday 22 January 2023, 08:59
Edit Time: 0:14:09
Description:

Copyright: (C) 2022, 2023 Olivier Sirol <czo@free.fr>
-->

# Czo Rescue Debian

Czo Debian Rescue: a usb or iso Live Linux Debian Rescue, like Linux Arch SystemRescue.

It's has zfs binaries + 3ware raid + my configuration files (.bashrc/.vimrc/.tmux.conf).

Xfce has its whisker menu and its xfce4-xkb plugin. There is also firefox-esr and firefox-ublock-origin.

Version 11.6 contains kernel/5.10.0-20-amd64 and zfs/2.0.3-9

## Project

- Source code: https://gitlab.com/czo/czo-rescue-debian

- ISO files: https://sourceforge.net/projects/czo-rescue-debian

## Building CzoRescueDebian

CzoRescueDebian can be built for x86_64 or i686 architectures. It must be built
on a debian11/amd64 if you want to build a 64bit edition, or a debian11/686
if you want to create a 32bit edition.

The following packages must be installed on the build system:
    syslinux-efi grub-pc-bin grub-efi-amd64-bin grub-efi-ia32-bin debootstrap squashfs-tools xorriso isomd5sum isolinux mtools dosfstools bash coreutils

The build process can be started by running the 'make-czo-rescue-debian-iso' script.
It will create a large 'build-czo-rescue' sub-directory and the ISO file will be there
if all goes well.

