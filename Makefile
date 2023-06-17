# Filename: Makefile
# Author: Olivier Sirol <czo@free.fr>
# License: GPL-2.0 (http://www.gnu.org/copyleft)
# File Created: 16 June 2023
# Last Modified: Friday 16 June 2023, 16:54
# $Id:$
# Edit Time: 0:02:14
# Description:
#               Makefile for this project
#
#      $@ Target name
#      $< Name of the first dependency
#      $^ List of dependencies
#      $? List of dependencies newer than the target
#      $* Target name without suffix
#
# Copyright: (C) 2023 Olivier Sirol <czo@free.fr>

all:
	./make-czo-rescue-debian-iso
	@echo "<- all done!"

clean:
	rm -fr build-czo-rescue
	@echo "<- clean done!"

realclean: clean

fclean: realclean

re: realclean all

.PHONY: all clean realclean fclean re

