# Filename: Dockerfile
# Author: Olivier Sirol <czo@free.fr>
# License: GPL-2.0 (http://www.gnu.org/copyleft)
# File Created: 03 February 2025
# Last Modified: Sunday 02 March 2025, 11:38
# $Id: Dockerfile,v 1.42 2025/03/02 11:38:32 czo Git $
# Edit Time: 0:43:01
# Description:
#
#        docker file for czo-rescue-debian
#
# Copyright: (C) 2025 Olivier Sirol <czo@free.fr>

FROM debian:12

RUN apt-get update
RUN apt-get -y install aptitude vim tmux rsync zsh make curl xz-utils syslinux-efi grub-pc grub-pc-bin grub-efi-amd64-bin grub-efi-ia32-bin isolinux mtools dosfstools bash coreutils debootstrap squashfs-tools libarchive-tools xorriso isomd5sum
RUN cd /root; curl -fsSL https://raw.githubusercontent.com/czodroid/dotfiles/master/config-fast-copy | sh
WORKDIR /workspace

