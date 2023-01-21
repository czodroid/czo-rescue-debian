<!--
Filename: README.md
Author: Olivier Sirol <czo@free.fr>
License: GPL-2.0 (http://www.gnu.org/copyleft)
File Created: 30 December 2022
Last Modified: Sunday 22 January 2023, 00:29
$Id:$
Edit Time: 0:04:56
Description:

Copyright: (C) 2022, 2023 Olivier Sirol <czo@free.fr>
-->

# Czo Rescue Debian

## Czo Rescue Debian with ZFS

Czo Debian Rescue: a usb or iso rescue, like SystemRescue, which is based
on Linux Arch, but on Debian.

It's has zfs binaries + 3ware raid + my
configuration files (.bashrc/.vimrc/.tmux.conf).

Xfce has its whisker menu and its xfce4-xkb plugin. There
is also firefox (no-esr) and firefox-ublock-origin.

Version 11.6 contains kernel/5.10.0-20-amd64 and zfs/2.0.3-9


## Project website

Source code: https://gitlab.com/czo/czo-rescue-debian

ISO files: https://sourceforge.net/projects/czo-rescue-debian

## Project sources

This git repository contains Czo Rescue Debian sources files.
https://gitlab.com/czo/czo-rescue-debian

## Building SystemRescue

SystemRescue can be built for x86_64 or i686 architectures. It must be built
on archlinux if you want to build a 64bit edition, or archlinux32 if you want
to create a 32bit edition. The following packages must be installed on the
build system: archiso, grub, mtools, edk2-shell. You need to use a modified
version of archiso for the build to work and for additional fixes and features
to be present. You can find the required archiso version and patches in the
"patches" folder in this git repository.

The package list contains packages which are not part of the official binary
package repositories. These packages need to be built from sources from the AUR
website. These sources are made of at least a PKGBUILD file and quite often
other related files, such as patches. These can be built using the makepkg
command which generates binary packages. These binary packages must be copied to
a custom package repository which can be hosted locally using httpd or nginx.
The repo-add command must be used to generate the repository package index.
The pacman.conf file must be updated with the address of this repository so
custom packages can be accessed.

The build process can be started by running the build.sh script. It will create
a large "work" sub-directory and the ISO file will be written in the "out"
sub-directory.

