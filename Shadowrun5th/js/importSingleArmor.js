function importSingleArmor(armor, attributes) {

    if(armor.armor.includes("/")) {
        var armorValueArray = armor.armor.toString().split("/");

        var splitArmor = armor;
        splitArmor.armor = armorValueArray[0];
        importSingleArmor(splitArmor, attributes);

        armor.armor = armorValueArray[1];
    }

    var newrowid = generateRowID()
    attributes["repeating_armors_"+newrowid+"_armorname"] = armor.name;
    attributes["repeating_armors_"+newrowid+"_armorrating"] = armor.armor;
    attributes["repeating_armors_"+newrowid+"_armornotes"] = "";
    if(armor.armormods!=null){
        if(armor.armormods.armormod.length > 1){
            for(var j=0; j < armor.armormods.armormod.length; j++){
                if(Number(armor.armormods.armormod[j].rating) > 0){
                    attributes["repeating_armors_"+newrowid+"_armornotes"] += armor.armormods.armormod[j].name + " " + armor.armormods.armormod[j].rating + "\n";
                }else{
                    attributes["repeating_armors_"+newrowid+"_armornotes"] += armor.armormods.armormod[j].name + "\n";
                }
            }
        }else{
            if(Number(armor.armormods.armormod.rating)>0){
                attributes["repeating_armors_"+newrowid+"_armornotes"] += armor.armormods.armormod.name + " " + armor.armormods.armormod.rating + "\n";
            }else{
                attributes["repeating_armors_"+newrowid+"_armornotes"] += armor.armormods.armormod.name + "\n";
            }
        }
    }
    if(armor.gears!=null){
        if(armor.gears.gear.length > 1){
            for(var j=0; j < armor.gears.gear.length; j++){
                attributes["repeating_armors_"+newrowid+"_armornotes"] += armor.gears.gear[j].name + "\n";
            }
        }else{
            attributes["repeating_armors_"+newrowid+"_armornotes"] += armor.gears.gear.name + "\n";
        }
    }
}
