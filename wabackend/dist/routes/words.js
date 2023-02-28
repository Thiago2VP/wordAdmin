"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Words = require('../controllers/Words'); var _Words2 = _interopRequireDefault(_Words);

const router = new (0, _express.Router)();

router.get("/", _Words2.default.index);
router.get("/:id", _Words2.default.search);
router.put("/:id", _Words2.default.edit);
router.post("/", _Words2.default.insert);
router.delete("/:id", _Words2.default.delete);

exports. default = router;
