/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
module.exports.isLongPressedName = function(name, typed) {
    let nameIdx = 0;
    let typedIdx = 0;

    while (typedIdx < typed.length) {
        if (name.charAt(nameIdx) === typed.charAt(typedIdx)) {
            nameIdx++;
            typedIdx++;
            continue;
        }

        // pointing to different char
        if (
            nameIdx > 0 &&
            name.charAt(nameIdx - 1) === typed.charAt(typedIdx)
        ) {
            typedIdx++;
            continue;
        }

        // pointing different char and not long pressed
        return false;
    }

    return nameIdx === name.length;
};
