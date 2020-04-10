if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'venus'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'venus'.");
}
var venus = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var capitalize = Kotlin.kotlin.text.capitalize_pdl1vz$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var throwCCE = Kotlin.throwCCE;
  var hasClass = Kotlin.kotlin.dom.hasClass_46n0ku$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Collection = Kotlin.kotlin.collections.Collection;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Pair = Kotlin.kotlin.Pair;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  var equals = Kotlin.equals;
  var toString = Kotlin.toString;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var getCallableRef = Kotlin.getCallableRef;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var Throwable = Error;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var Exception = Kotlin.kotlin.Exception;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var numberToInt = Kotlin.numberToInt;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var NumberFormatException = Kotlin.kotlin.NumberFormatException;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var removePrefix = Kotlin.kotlin.text.removePrefix_gsj5wt$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var substring = Kotlin.kotlin.text.substring_fc3b62$;
  var throwUPAE = Kotlin.throwUPAE;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toString_0 = Kotlin.kotlin.text.toString_dqglrj$;
  var isNaN_0 = Kotlin.kotlin.isNaN_yrwdxr$;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var unboxChar = Kotlin.unboxChar;
  var toByte = Kotlin.toByte;
  var L15 = Kotlin.Long.fromInt(15);
  var L4294967296 = new Kotlin.Long(0, 1);
  var toChar = Kotlin.toChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var AssertionError = Kotlin.kotlin.AssertionError;
  var NotImplementedError = Kotlin.kotlin.NotImplementedError;
  var toCharArray = Kotlin.kotlin.text.toCharArray_pdl1vz$;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var union = Kotlin.kotlin.collections.union_q4559j$;
  var List = Kotlin.kotlin.collections.List;
  var Any = Object;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var lines = Kotlin.kotlin.text.lines_gw00vp$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init;
  var drop_0 = Kotlin.kotlin.text.drop_6ic1pp$;
  var dropLast = Kotlin.kotlin.text.dropLast_6ic1pp$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var slice = Kotlin.kotlin.text.slice_fc3b62$;
  var toRawBits = Kotlin.floatToRawBits;
  var toRawBits_0 = Kotlin.doubleToRawBits;
  var HashMap_init_0 = Kotlin.kotlin.collections.HashMap_init_73mtqc$;
  var intersect = Kotlin.kotlin.collections.intersect_q4559j$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init_6bul2c$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_sgbm27$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var RuntimeException_init_0 = Kotlin.kotlin.RuntimeException_init;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Map = Kotlin.kotlin.collections.Map;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var asList_0 = Kotlin.kotlin.collections.asList_us0mfu$;
  var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var get_lastIndex = Kotlin.kotlin.text.get_lastIndex_gw00vp$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var println_0 = Kotlin.kotlin.io.println;
  var padEnd = Kotlin.kotlin.text.padEnd_vrc1nu$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var elementAt = Kotlin.kotlin.collections.elementAt_ba2ldo$;
  var get_sign = Kotlin.kotlin.math.get_sign_s8ev3n$;
  var toShort = Kotlin.toShort;
  var Number_0 = Kotlin.kotlin.Number;
  var Comparable = Kotlin.kotlin.Comparable;
  var numberToLong = Kotlin.numberToLong;
  var numberToByte = Kotlin.numberToByte;
  var numberToShort = Kotlin.numberToShort;
  var ClassCastException = Kotlin.kotlin.ClassCastException;
  var get_sign_0 = Kotlin.kotlin.math.get_sign_mts6qi$;
  var flatten = Kotlin.kotlin.collections.flatten_yrqxlj$;
  var L1 = Kotlin.Long.ONE;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Long$Companion$MIN_VALUE = Kotlin.Long.MIN_VALUE;
  var Math_0 = Math;
  var toString_1 = Kotlin.kotlin.text.toString_if0zpk$;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var toInt_0 = Kotlin.kotlin.text.toInt_6ic1pp$;
  var toLong = Kotlin.kotlin.text.toLong_6ic1pp$;
  var removeRange = Kotlin.kotlin.text.removeRange_i511yc$;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var L0 = Kotlin.Long.ZERO;
  var L576460752303423488 = new Kotlin.Long(0, 134217728);
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var withSign = Kotlin.kotlin.math.withSign_38ydlf$;
  var L4294967295 = new Kotlin.Long(-1, 0);
  var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
  var L4 = Kotlin.Long.fromInt(4);
  var L5 = Kotlin.Long.fromInt(5);
  var L9 = Kotlin.Long.fromInt(9);
  var L10 = Kotlin.Long.fromInt(10);
  var L11 = Kotlin.Long.fromInt(11);
  var L13 = Kotlin.Long.fromInt(13);
  var L14 = Kotlin.Long.fromInt(14);
  var L16 = Kotlin.Long.fromInt(16);
  var L17 = Kotlin.Long.fromInt(17);
  var L18 = Kotlin.Long.fromInt(18);
  var L19 = Kotlin.Long.fromInt(19);
  var L20 = Kotlin.Long.fromInt(20);
  var L34 = Kotlin.Long.fromInt(34);
  var numberToChar = Kotlin.numberToChar;
  var ULong_init = Kotlin.kotlin.ULong;
  var kotlin_js_internal_ShortCompanionObject = Kotlin.kotlin.js.internal.ShortCompanionObject;
  var L_1 = Kotlin.Long.NEG_ONE;
  var min = Kotlin.kotlin.collections.min_exjks8$;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var toLong_0 = Kotlin.kotlin.text.toLong_pdl1vz$;
  var first_0 = Kotlin.kotlin.text.first_gw00vp$;
  var take = Kotlin.kotlin.text.take_6ic1pp$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var last_0 = Kotlin.kotlin.text.last_gw00vp$;
  var L39 = Kotlin.Long.fromInt(39);
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_emfgvx$;
  var get_lastIndex_0 = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var hashCode = Kotlin.hashCode;
  var Random = Kotlin.kotlin.random.Random_za3lpa$;
  var isInfinite = Kotlin.kotlin.isInfinite_yrwdxr$;
  var Random_0 = Kotlin.kotlin.random.Random;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var contains_0 = Kotlin.kotlin.collections.contains_2ws7j4$;
  var reversed_0 = Kotlin.kotlin.text.reversed_gw00vp$;
  var Array_0 = Array;
  var L268468224 = Kotlin.Long.fromInt(268468224);
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  CommandNotFoundError.prototype = Object.create(Throwable.prototype);
  CommandNotFoundError.prototype.constructor = CommandNotFoundError;
  CommandNotImplementedError.prototype = Object.create(Throwable.prototype);
  CommandNotImplementedError.prototype.constructor = CommandNotImplementedError;
  VFSDrive.prototype = Object.create(VFSFolder.prototype);
  VFSDrive.prototype.constructor = VFSDrive;
  VFSType.prototype = Object.create(Enum.prototype);
  VFSType.prototype.constructor = VFSType;
  AssemblerError.prototype = Object.create(Throwable.prototype);
  AssemblerError.prototype.constructor = AssemblerError;
  AssemblerWarning.prototype = Object.create(Throwable.prototype);
  AssemblerWarning.prototype.constructor = AssemblerWarning;
  PseudoDispatcher.prototype = Object.create(Enum.prototype);
  PseudoDispatcher.prototype.constructor = PseudoDispatcher;
  PseudoDispatcherError.prototype = Object.create(Throwable.prototype);
  PseudoDispatcherError.prototype.constructor = PseudoDispatcherError;
  BEQZ.prototype = Object.create(PseudoWriter.prototype);
  BEQZ.prototype.constructor = BEQZ;
  BGEZ.prototype = Object.create(PseudoWriter.prototype);
  BGEZ.prototype.constructor = BGEZ;
  BGT.prototype = Object.create(PseudoWriter.prototype);
  BGT.prototype.constructor = BGT;
  BGTU.prototype = Object.create(PseudoWriter.prototype);
  BGTU.prototype.constructor = BGTU;
  BGTZ.prototype = Object.create(PseudoWriter.prototype);
  BGTZ.prototype.constructor = BGTZ;
  BLE.prototype = Object.create(PseudoWriter.prototype);
  BLE.prototype.constructor = BLE;
  BLEU.prototype = Object.create(PseudoWriter.prototype);
  BLEU.prototype.constructor = BLEU;
  BLEZ.prototype = Object.create(PseudoWriter.prototype);
  BLEZ.prototype.constructor = BLEZ;
  BLTZ.prototype = Object.create(PseudoWriter.prototype);
  BLTZ.prototype.constructor = BLTZ;
  BNEZ.prototype = Object.create(PseudoWriter.prototype);
  BNEZ.prototype.constructor = BNEZ;
  CALL.prototype = Object.create(PseudoWriter.prototype);
  CALL.prototype.constructor = CALL;
  FABSD.prototype = Object.create(PseudoWriter.prototype);
  FABSD.prototype.constructor = FABSD;
  FABSS.prototype = Object.create(PseudoWriter.prototype);
  FABSS.prototype.constructor = FABSS;
  FMVD.prototype = Object.create(PseudoWriter.prototype);
  FMVD.prototype.constructor = FMVD;
  FMVS.prototype = Object.create(PseudoWriter.prototype);
  FMVS.prototype.constructor = FMVS;
  FNEGD.prototype = Object.create(PseudoWriter.prototype);
  FNEGD.prototype.constructor = FNEGD;
  FNEGS.prototype = Object.create(PseudoWriter.prototype);
  FNEGS.prototype.constructor = FNEGS;
  J.prototype = Object.create(PseudoWriter.prototype);
  J.prototype.constructor = J;
  JAL.prototype = Object.create(PseudoWriter.prototype);
  JAL.prototype.constructor = JAL;
  JALR.prototype = Object.create(PseudoWriter.prototype);
  JALR.prototype.constructor = JALR;
  JR.prototype = Object.create(PseudoWriter.prototype);
  JR.prototype.constructor = JR;
  LA.prototype = Object.create(PseudoWriter.prototype);
  LA.prototype.constructor = LA;
  LI.prototype = Object.create(PseudoWriter.prototype);
  LI.prototype.constructor = LI;
  Load.prototype = Object.create(PseudoWriter.prototype);
  Load.prototype.constructor = Load;
  MV.prototype = Object.create(PseudoWriter.prototype);
  MV.prototype.constructor = MV;
  NEG.prototype = Object.create(PseudoWriter.prototype);
  NEG.prototype.constructor = NEG;
  NEGW.prototype = Object.create(PseudoWriter.prototype);
  NEGW.prototype.constructor = NEGW;
  NOP.prototype = Object.create(PseudoWriter.prototype);
  NOP.prototype.constructor = NOP;
  NOT.prototype = Object.create(PseudoWriter.prototype);
  NOT.prototype.constructor = NOT;
  RET.prototype = Object.create(PseudoWriter.prototype);
  RET.prototype.constructor = RET;
  SEQ.prototype = Object.create(PseudoWriter.prototype);
  SEQ.prototype.constructor = SEQ;
  SEQZ.prototype = Object.create(PseudoWriter.prototype);
  SEQZ.prototype.constructor = SEQZ;
  SEXTW.prototype = Object.create(PseudoWriter.prototype);
  SEXTW.prototype.constructor = SEXTW;
  SGE.prototype = Object.create(PseudoWriter.prototype);
  SGE.prototype.constructor = SGE;
  SGT.prototype = Object.create(PseudoWriter.prototype);
  SGT.prototype.constructor = SGT;
  SGTZ.prototype = Object.create(PseudoWriter.prototype);
  SGTZ.prototype.constructor = SGTZ;
  SLE.prototype = Object.create(PseudoWriter.prototype);
  SLE.prototype.constructor = SLE;
  SLTZ.prototype = Object.create(PseudoWriter.prototype);
  SLTZ.prototype.constructor = SLTZ;
  SNE.prototype = Object.create(PseudoWriter.prototype);
  SNE.prototype.constructor = SNE;
  SNEZ.prototype = Object.create(PseudoWriter.prototype);
  SNEZ.prototype.constructor = SNEZ;
  Store.prototype = Object.create(PseudoWriter.prototype);
  Store.prototype.constructor = Store;
  TAIL.prototype = Object.create(PseudoWriter.prototype);
  TAIL.prototype.constructor = TAIL;
  CommandLineException.prototype = Object.create(RuntimeException.prototype);
  CommandLineException.prototype.constructor = CommandLineException;
  StopParsingException.prototype = Object.create(RuntimeException.prototype);
  StopParsingException.prototype.constructor = StopParsingException;
  HelpPrintedException.prototype = Object.create(StopParsingException.prototype);
  HelpPrintedException.prototype.constructor = HelpPrintedException;
  MissingArgumentException.prototype = Object.create(RuntimeException.prototype);
  MissingArgumentException.prototype.constructor = MissingArgumentException;
  MappedEvent.prototype = Object.create(SimpleEvent.prototype);
  MappedEvent.prototype.constructor = MappedEvent;
  FlagArgumentBase.prototype = Object.create(FlagActionBase.prototype);
  FlagArgumentBase.prototype.constructor = FlagArgumentBase;
  flagAction$ObjectLiteral.prototype = Object.create(FlagActionBase.prototype);
  flagAction$ObjectLiteral.prototype.constructor = flagAction$ObjectLiteral;
  flagArgument$ObjectLiteral.prototype = Object.create(FlagArgumentBase.prototype);
  flagArgument$ObjectLiteral.prototype.constructor = flagArgument$ObjectLiteral;
  foldFlagArguments$ObjectLiteral.prototype = Object.create(FlagArgumentBase.prototype);
  foldFlagArguments$ObjectLiteral.prototype.constructor = foldFlagArguments$ObjectLiteral;
  help$ObjectLiteral.prototype = Object.create(FlagActionBase.prototype);
  help$ObjectLiteral.prototype.constructor = help$ObjectLiteral;
  FlagValueArgumentBase.prototype = Object.create(FlagValueActionBase.prototype);
  FlagValueArgumentBase.prototype.constructor = FlagValueArgumentBase;
  flagValueAction$ObjectLiteral.prototype = Object.create(FlagValueActionBase.prototype);
  flagValueAction$ObjectLiteral.prototype.constructor = flagValueAction$ObjectLiteral;
  flagValueArgument$ObjectLiteral.prototype = Object.create(FlagValueArgumentBase.prototype);
  flagValueArgument$ObjectLiteral.prototype.constructor = flagValueArgument$ObjectLiteral;
  help$ObjectLiteral_0.prototype = Object.create(FlagActionBase.prototype);
  help$ObjectLiteral_0.prototype.constructor = help$ObjectLiteral_0;
  PositionalArgumentBase.prototype = Object.create(PositionalActionBase.prototype);
  PositionalArgumentBase.prototype.constructor = PositionalArgumentBase;
  SinglePositionalArgumentBase.prototype = Object.create(PositionalArgumentBase.prototype);
  SinglePositionalArgumentBase.prototype.constructor = SinglePositionalArgumentBase;
  ListPositionalArgumentBase.prototype = Object.create(PositionalActionBase.prototype);
  ListPositionalArgumentBase.prototype.constructor = ListPositionalArgumentBase;
  positionalAction$ObjectLiteral.prototype = Object.create(PositionalActionBase.prototype);
  positionalAction$ObjectLiteral.prototype.constructor = positionalAction$ObjectLiteral;
  positionalArgument$ObjectLiteral.prototype = Object.create(SinglePositionalArgumentBase.prototype);
  positionalArgument$ObjectLiteral.prototype.constructor = positionalArgument$ObjectLiteral;
  positionalArgument$ObjectLiteral_0.prototype = Object.create(SinglePositionalArgumentBase.prototype);
  positionalArgument$ObjectLiteral_0.prototype.constructor = positionalArgument$ObjectLiteral_0;
  positionalArgumentsList$ObjectLiteral.prototype = Object.create(ListPositionalArgumentBase.prototype);
  positionalArgumentsList$ObjectLiteral.prototype.constructor = positionalArgumentsList$ObjectLiteral;
  foldPositionalArguments$ObjectLiteral.prototype = Object.create(PositionalArgumentBase.prototype);
  foldPositionalArguments$ObjectLiteral.prototype.constructor = foldPositionalArguments$ObjectLiteral;
  DoubleQuadWord.prototype = Object.create(Number_0.prototype);
  DoubleQuadWord.prototype.constructor = DoubleQuadWord;
  QuadWord.prototype = Object.create(Number_0.prototype);
  QuadWord.prototype.constructor = QuadWord;
  InstructionField.prototype = Object.create(Enum.prototype);
  InstructionField.prototype.constructor = InstructionField;
  OpcodeFunct3Format.prototype = Object.create(InstructionFormat.prototype);
  OpcodeFunct3Format.prototype.constructor = OpcodeFunct3Format;
  BTypeFormat.prototype = Object.create(OpcodeFunct3Format.prototype);
  BTypeFormat.prototype.constructor = BTypeFormat;
  ITypeFormat.prototype = Object.create(OpcodeFunct3Format.prototype);
  ITypeFormat.prototype.constructor = ITypeFormat;
  RTypeFormat.prototype = Object.create(InstructionFormat.prototype);
  RTypeFormat.prototype.constructor = RTypeFormat;
  STypeFormat.prototype = Object.create(OpcodeFunct3Format.prototype);
  STypeFormat.prototype.constructor = STypeFormat;
  OpcodeFormat.prototype = Object.create(InstructionFormat.prototype);
  OpcodeFormat.prototype.constructor = OpcodeFormat;
  UTypeFormat.prototype = Object.create(OpcodeFormat.prototype);
  UTypeFormat.prototype.constructor = UTypeFormat;
  AMORTypeFormat.prototype = Object.create(InstructionFormat.prototype);
  AMORTypeFormat.prototype.constructor = AMORTypeFormat;
  CATypeFormat.prototype = Object.create(InstructionFormat.prototype);
  CATypeFormat.prototype.constructor = CATypeFormat;
  CRTypeFormat.prototype = Object.create(InstructionFormat.prototype);
  CRTypeFormat.prototype.constructor = CRTypeFormat;
  FRTypeFormat.prototype = Object.create(InstructionFormat.prototype);
  FRTypeFormat.prototype.constructor = FRTypeFormat;
  FSRS2TypeFormat.prototype = Object.create(InstructionFormat.prototype);
  FSRS2TypeFormat.prototype.constructor = FSRS2TypeFormat;
  R4TypeFormat.prototype = Object.create(InstructionFormat.prototype);
  R4TypeFormat.prototype.constructor = R4TypeFormat;
  OpcodeCFunct3Format.prototype = Object.create(InstructionFormat.prototype);
  OpcodeCFunct3Format.prototype.constructor = OpcodeCFunct3Format;
  ParserError.prototype = Object.create(Exception.prototype);
  ParserError.prototype.constructor = ParserError;
  BTypeInstruction.prototype = Object.create(Instruction.prototype);
  BTypeInstruction.prototype.constructor = BTypeInstruction;
  ITypeInstruction.prototype = Object.create(Instruction.prototype);
  ITypeInstruction.prototype.constructor = ITypeInstruction;
  LoadTypeInstruction.prototype = Object.create(Instruction.prototype);
  LoadTypeInstruction.prototype.constructor = LoadTypeInstruction;
  RTypeInstruction.prototype = Object.create(Instruction.prototype);
  RTypeInstruction.prototype.constructor = RTypeInstruction;
  ShiftImmediateInstruction.prototype = Object.create(Instruction.prototype);
  ShiftImmediateInstruction.prototype.constructor = ShiftImmediateInstruction;
  ShiftWImmediateInstruction.prototype = Object.create(Instruction.prototype);
  ShiftWImmediateInstruction.prototype.constructor = ShiftWImmediateInstruction;
  STypeInstruction.prototype = Object.create(Instruction.prototype);
  STypeInstruction.prototype.constructor = STypeInstruction;
  UTypeInstruction.prototype = Object.create(Instruction.prototype);
  UTypeInstruction.prototype.constructor = UTypeInstruction;
  AMORTypeInstruction.prototype = Object.create(Instruction.prototype);
  AMORTypeInstruction.prototype.constructor = AMORTypeInstruction;
  CATypeInstruction.prototype = Object.create(Instruction.prototype);
  CATypeInstruction.prototype.constructor = CATypeInstruction;
  CRTypeInstruction.prototype = Object.create(Instruction.prototype);
  CRTypeInstruction.prototype.constructor = CRTypeInstruction;
  F3RTypeInstruction.prototype = Object.create(Instruction.prototype);
  F3RTypeInstruction.prototype.constructor = F3RTypeInstruction;
  FclassRTypeInstruction.prototype = Object.create(Instruction.prototype);
  FclassRTypeInstruction.prototype.constructor = FclassRTypeInstruction;
  FFRRTypeInstruction.prototype = Object.create(Instruction.prototype);
  FFRRTypeInstruction.prototype.constructor = FFRRTypeInstruction;
  FITypeInstruction.prototype = Object.create(Instruction.prototype);
  FITypeInstruction.prototype.constructor = FITypeInstruction;
  FR4TypeInstruction.prototype = Object.create(Instruction.prototype);
  FR4TypeInstruction.prototype.constructor = FR4TypeInstruction;
  FRRTypeInstruction.prototype = Object.create(Instruction.prototype);
  FRRTypeInstruction.prototype.constructor = FRRTypeInstruction;
  FRTypeInstruction.prototype = Object.create(Instruction.prototype);
  FRTypeInstruction.prototype.constructor = FRTypeInstruction;
  FSTypeInstruction.prototype = Object.create(Instruction.prototype);
  FSTypeInstruction.prototype.constructor = FSTypeInstruction;
  FtRTypeInstruction.prototype = Object.create(Instruction.prototype);
  FtRTypeInstruction.prototype.constructor = FtRTypeInstruction;
  RtFTypeInstruction.prototype = Object.create(Instruction.prototype);
  RtFTypeInstruction.prototype.constructor = RtFTypeInstruction;
  InstructionNotFoundError.prototype = Object.create(Throwable.prototype);
  InstructionNotFoundError.prototype.constructor = InstructionNotFoundError;
  InstructionNotSupportedError.prototype = Object.create(Throwable.prototype);
  InstructionNotSupportedError.prototype.constructor = InstructionNotSupportedError;
  InstructionReservedError.prototype = Object.create(InstructionNotSupportedError.prototype);
  InstructionReservedError.prototype.constructor = InstructionReservedError;
  Syscall.prototype = Object.create(Enum.prototype);
  Syscall.prototype.constructor = Syscall;
  MemSize.prototype = Object.create(Enum.prototype);
  MemSize.prototype.constructor = MemSize;
  SimulatorError.prototype = Object.create(Throwable.prototype);
  SimulatorError.prototype.constructor = SimulatorError;
  AlignmentError.prototype = Object.create(SimulatorError.prototype);
  AlignmentError.prototype.constructor = AlignmentError;
  CacheError.prototype = Object.create(SimulatorError.prototype);
  CacheError.prototype.constructor = CacheError;
  PlacementPolicy.prototype = Object.create(Enum.prototype);
  PlacementPolicy.prototype.constructor = PlacementPolicy;
  BlockReplacementPolicy.prototype = Object.create(Enum.prototype);
  BlockReplacementPolicy.prototype.constructor = BlockReplacementPolicy;
  BlockState.prototype = Object.create(Enum.prototype);
  BlockState.prototype.constructor = BlockState;
  RW.prototype = Object.create(Enum.prototype);
  RW.prototype.constructor = RW;
  ExceededAllowedCyclesError.prototype = Object.create(SimulatorError.prototype);
  ExceededAllowedCyclesError.prototype.constructor = ExceededAllowedCyclesError;
  StoreError.prototype = Object.create(SimulatorError.prototype);
  StoreError.prototype.constructor = StoreError;
  function API() {
    API_instance = this;
    this.functionsLists = HashMap_init();
  }
  API.prototype.addList = function (s) {
    var $receiver = this.functionsLists;
    var value = new FunctionsList(s);
    $receiver.put_xwzc9p$(s, value);
  };
  API.prototype.evalList = function (s, args) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.functionsLists.get_11rb$(s)) != null ? tmp$.evalFunctions_s8jyv4$(args) : null) != null ? tmp$_0 : false;
  };
  API.prototype.addListener = function (locationID, pkgid, fnid, function_0) {
    if (this.functionsLists.containsKey_11rb$(locationID)) {
      var f = this.functionsLists.get_11rb$(locationID);
      f != null ? (f.add_t4ap30$(pkgid + '.' + fnid, function_0), Unit) : null;
      console.log("Added function to '" + locationID + "'");
    }
     else {
      console.error("Could not add function to '" + locationID + "' because the location ID does not exist!");
    }
  };
  API.prototype.removeListener = function (locationID, pkgid, fnid) {
    if (this.functionsLists.containsKey_11rb$(locationID)) {
      var f = this.functionsLists.get_11rb$(locationID);
      f != null ? (f.remove_61zpoe$(pkgid + '.' + fnid), Unit) : null;
      console.log("Remove function to '" + locationID + "'");
    }
     else {
      console.error("Could not remove function to '" + locationID + "' because the location ID does not exist!");
    }
  };
  API.prototype.addMainTab = function (name) {
    var tmp$;
    if (Renderer_getInstance().mainTabs.contains_11rb$(name)) {
      console.error('Tabs MUST have unique names!');
      return null;
    }
    var t = document.createElement('li');
    t.id = name + '-tab';
    var link = document.createElement('a');
    t.appendChild(link);
    link.setAttribute('onclick', 'driver.openGenericMainTab(' + '"' + name + '"' + ')');
    var font = document.createElement('font');
    link.appendChild(font);
    var tmp = name;
    font.innerHTML = capitalize(tmp);
    tmp$ = document.getElementById('venus-main-tabs');
    if (tmp$ == null) {
      return null;
    }
    var tabs_list = tmp$;
    tabs_list.appendChild(t);
    var s = document.createElement('section');
    addClass(s, ['section']);
    s.id = name + '-tab-view';
    s.setAttribute('style', 'display:none;');
    ensureNotNull(document.body).appendChild(s);
    Renderer_getInstance().mainTabs.add_11rb$(name);
    s.innerHTML = 'TEST';
    return s;
  };
  API.prototype.addMainTabAndShow = function (name, show) {
    var s = this.addMainTab(name);
    this.showMainTab(name);
    return s;
  };
  API.prototype.showMainTab = function (name) {
    var tmp$, tmp$_0;
    tmp$ = document.getElementById(name + '-tab');
    if (tmp$ == null) {
      return false;
    }
    var tab = Kotlin.isType(tmp$_0 = tmp$, HTMLLIElement) ? tmp$_0 : throwCCE();
    tab.style.display = '';
    return true;
  };
  API.prototype.hideMainTab = function (name) {
    var tmp$, tmp$_0;
    tmp$ = document.getElementById(name + '-tab');
    if (tmp$ == null) {
      return false;
    }
    var tab = Kotlin.isType(tmp$_0 = tmp$, HTMLLIElement) ? tmp$_0 : throwCCE();
    tab.style.display = 'none';
    if (hasClass(tab, 'is-active')) {
      Driver_getInstance().openVenus();
    }
    return true;
  };
  API.prototype.removeMainTab = function (name) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = document.getElementById(name + '-tab');
    if (tmp$ == null) {
      return false;
    }
    var t = Kotlin.isType(tmp$_0 = tmp$, HTMLLIElement) ? tmp$_0 : throwCCE();
    tmp$_1 = document.getElementById(name + '-tab-view');
    if (tmp$_1 == null) {
      return false;
    }
    var v = tmp$_1;
    if (hasClass(t, 'is-active')) {
      this.hideMainTab(name);
    }
    Renderer_getInstance().mainTabs.remove_11rb$(name);
    t.remove();
    v.remove();
    return true;
  };
  API.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'API',
    interfaces: []
  };
  var API_instance = null;
  function API_getInstance() {
    if (API_instance === null) {
      new API();
    }
    return API_instance;
  }
  function FunctionsList(id) {
    this.id = id;
    this.fns_0 = HashMap_init();
  }
  FunctionsList.prototype.add_t4ap30$ = function (id, f) {
    this.fns_0.put_xwzc9p$(id, f);
  };
  FunctionsList.prototype.remove_61zpoe$ = function (id) {
    this.fns_0.remove_11rb$(id);
  };
  FunctionsList.prototype.evalFunctions_s8jyv4$ = function (args) {
    var tmp$, tmp$_0, tmp$_1;
    var a = [];
    if (typeof (tmp$ = args.constructor === Array) === 'boolean' ? tmp$ : throwCCE()) {
      a = args;
    }
     else {
      if (Kotlin.isType(args, Collection)) {
        tmp$_0 = args.iterator();
        while (tmp$_0.hasNext()) {
          var arg = tmp$_0.next();
          a.push(arg);
        }
      }
    }
    var rv = true;
    tmp$_1 = this.fns_0.values.iterator();
    while (tmp$_1.hasNext()) {
      var f = tmp$_1.next();
      var v = f(a);
      if (typeof v !== 'undefined') {
        rv = (rv && v);
      }
    }
    return rv;
  };
  FunctionsList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FunctionsList',
    interfaces: []
  };
  function ScriptManager() {
    ScriptManager_instance = this;
    window.VenusScriptManager = this;
    this.packages = HashMap_init();
    this.loading_packages = HashSet_init();
  }
  ScriptManager.prototype.loadDefaults = function () {
    var tmp$;
    var defpkgs = hashMapOf([new Pair('packages/tester.js', false), new Pair('packages/disassembler.js', false), new Pair('packages/chocopy.js', true)]);
    var pstr = Driver_getInstance().LS.safeget('script_manager', '[]');
    var pkgs = JSON.parse(pstr);
    var i = 0;
    while (i < pkgs.length) {
      var p = pkgs[i];
      if (defpkgs.containsKey_11rb$(p.url)) {
        var key = p.url;
        var value = p.enabled;
        defpkgs.put_xwzc9p$(key, value);
      }
      i = i + 1 | 0;
    }
    tmp$ = defpkgs.entries.iterator();
    while (tmp$.hasNext()) {
      var pk = tmp$.next();
      ScriptManager_getInstance().addPackage_o0ij6q$(pk.key, pk.value, false);
    }
  };
  ScriptManager.prototype.loadScript_6hosri$ = function (url, onfail, onload) {
    var tmp$, tmp$_0;
    var urlelm = document.getElementById(url);
    (tmp$ = urlelm != null ? urlelm.parentNode : null) != null ? tmp$.removeChild(urlelm) : null;
    var script = document.createElement('script');
    script.setAttribute('onerror', onfail);
    script.setAttribute('onload', onload);
    script.setAttribute('src', url);
    script.setAttribute('id', url);
    (tmp$_0 = document.getElementsByTagName('head')[0]) != null ? tmp$_0.appendChild(script) : null;
  };
  ScriptManager.prototype.addPackage_o0ij6q$ = function (url, enabled, removable) {
    if (enabled === void 0)
      enabled = true;
    if (removable === void 0)
      removable = true;
    var onfail = "window.VenusScriptManager.addPackageFailure('" + url + "');";
    var onload = "window.VenusScriptManager.addPackageSuccess('" + url + "', " + enabled + ', ' + removable + ');';
    this.loadScript_6hosri$(url, onfail, onload);
  };
  ScriptManager.prototype.addPackageSuccess = function (url, en, removable) {
    if (en === void 0)
      en = true;
    if (removable === void 0)
      removable = true;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    this.loading_packages.remove_11rb$(url);
    var enabled = en;
    if (equals(venuspackage, undefined)) {
      this.addPackageFailure(url);
      return;
    }
    if (!equals(typeof venuspackage.requires, 'undefined')) {
      if (venuspackage.requires.constructor === Array) {
        var i = venuspackage.requires.length;
        while (i > 0) {
          var k = venuspackage.requires[i - 1];
          if (!this.packages.containsKey_11rb$(k)) {
            var msg = "This package requires '" + k.toString() + "' which was not found in the currently installed packages! Thus it cannot be loaded!";
            Renderer_getInstance().pkgMsg_61zpoe$(msg);
            console.warn(msg);
            this.addPackageFailure(url);
            return;
          }
          i--;
        }
      }
       else {
        venuspackage.requires = [];
      }
    }
     else {
      venuspackage.requires = [];
    }
    venuspackage.dependent = [];
    if (this.packages.containsKey_11rb$(venuspackage.id)) {
      var orig = this.packages.get_11rb$(venuspackage.id);
      if (!ensureNotNull(orig).removable) {
        window.venuspackage = undefined;
        throw Kotlin.newThrowable('Cannot update a default script!');
      }
      this.removePackage_61zpoe$(venuspackage.id);
    }
    venuspackage.url = url;
    var i_0 = typeof (tmp$ = window.venuspackage.requires.length) === 'number' ? tmp$ : throwCCE();
    while (i_0 > 0) {
      var k_0 = typeof (tmp$_0 = window.venuspackage.requires[i_0 - 1]) === 'string' ? tmp$_0 : throwCCE();
      if (!((tmp$_2 = (tmp$_1 = this.packages.get_11rb$(k_0)) != null ? tmp$_1.enabled : null) != null ? tmp$_2 : true)) {
        var msg_0 = "Could not enable package '" + venuspackage.id + "' because it requires a package which has been disabled (" + k_0 + ')!';
        Renderer_getInstance().pkgMsg_61zpoe$(msg_0);
        console.warn(msg_0);
        enabled = false;
      }
      i_0 = i_0 - 1 | 0;
    }
    if (en) {
      tmp$_3 = 'initenabled';
    }
     else {
      tmp$_3 = 'initdisabled';
    }
    var state = tmp$_3;
    var worked = true;
    if (enabled) {
      try {
        window.venuspackage.load(state);
      }
       catch (e) {
        console.error(e);
        worked = false;
        window.VenusScriptManager.addPackageFailure();
      }
    }
    if (worked) {
      venuspackage.enabled = enabled;
      venuspackage.removable = removable;
      var i_1 = typeof (tmp$_4 = venuspackage.requires.length) === 'number' ? tmp$_4 : throwCCE();
      while (i_1 > 0) {
        var k_1 = venuspackage.requires[i_1 - 1];
        var p = this.packages.get_11rb$(k_1);
        p.dependent.push(venuspackage.id);
        i_1 = i_1 - 1 | 0;
      }
      Renderer_getInstance().rendererAddPackage_o0ij6q$(venuspackage.id, enabled, removable);
      this.packages.put_xwzc9p$(venuspackage.id, venuspackage);
      this.updateLS();
      var msg_1 = 'Loaded script (' + url + ')!';
      Renderer_getInstance().pkgMsg_61zpoe$(msg_1);
      if (Driver_getInstance().debug) {
        console.log(msg_1);
      }
      window.venuspackage = undefined;
    }
  };
  ScriptManager.prototype.addPackageFailure = function (url) {
    this.loading_packages.remove_11rb$(url);
    var msg = 'Could not load the script (' + url + ')!';
    Renderer_getInstance().pkgMsg_61zpoe$(msg);
    console.warn(msg);
    window.venuspackage = undefined;
  };
  ScriptManager.prototype.removePackage_61zpoe$ = function (id) {
    var tmp$, tmp$_0, tmp$_1;
    var msg = "Removing package '" + id + "'!";
    Renderer_getInstance().pkgMsg_61zpoe$(msg);
    if (Driver_getInstance().debug) {
      console.log(msg);
    }
    if (!this.packages.containsKey_11rb$(id)) {
      msg = "Could not find package '" + id + "'";
      Renderer_getInstance().pkgMsg_61zpoe$(msg);
      if (Driver_getInstance().debug) {
        console.log(msg);
      }
      return;
    }
    this.disablePackage_61zpoe$(id);
    var p = this.packages.remove_11rb$(id);
    if (p != null) {
      var s = document.getElementById(p.url);
      if (s != null) {
        (tmp$ = s.parentElement) != null ? tmp$.removeChild(s) : null;
      }
      var i = typeof (tmp$_0 = p.requires.length) === 'number' ? tmp$_0 : throwCCE();
      while (i > 0) {
        var k = p.requires[i - 1];
        var pk = this.packages.get_11rb$(k);
        try {
          pk.dependent.pop(k);
        }
         catch (e) {
          console.error(e);
        }
        i = i - 1 | 0;
      }
      i = typeof (tmp$_1 = p.dependent.length) === 'number' ? tmp$_1 : throwCCE();
      while (i > 0) {
        var k_0 = p.dependent[i - 1];
        this.removePackage_61zpoe$(k_0);
        i = i - 1 | 0;
      }
    }
    var worked = true;
    try {
      p.unload('remove');
    }
     catch (e) {
      console.error(e);
      worked = false;
    }
    this.updateLS();
    if (worked) {
      Renderer_getInstance().rendererRemovePackage_61zpoe$(id);
      msg = "Package '" + id + "' uninstalled successfully!";
      Renderer_getInstance().pkgMsg_61zpoe$(msg);
      if (Driver_getInstance().debug) {
        console.log(msg);
      }
    }
     else {
      Renderer_getInstance().rendererUpdatePackage_ivxn3r$(id, false);
      msg = "Could not remove package '" + id + "'!";
      Renderer_getInstance().pkgMsg_61zpoe$(msg);
      if (Driver_getInstance().debug) {
        console.log(msg);
      }
    }
  };
  ScriptManager.prototype.disablePackage_61zpoe$ = function (id) {
    var tmp$;
    var msg = "Disabling package '" + id + "'!";
    Renderer_getInstance().pkgMsg_61zpoe$(msg);
    if (Driver_getInstance().debug) {
      console.log(msg);
    }
    if (!this.packages.containsKey_11rb$(id)) {
      msg = "Could not find package '" + id + "'";
      Renderer_getInstance().pkgMsg_61zpoe$(msg);
      if (Driver_getInstance().debug) {
        console.log(msg);
      }
      return;
    }
    var p = this.packages.get_11rb$(id);
    if ((p != null ? p.enabled : null) === false) {
      msg = "Package '" + id + "' is already disabled!";
      Renderer_getInstance().pkgMsg_61zpoe$(msg);
      if (Driver_getInstance().debug) {
        console.log(msg);
      }
      return;
    }
    var worked = true;
    try {
      p.unload('disable');
    }
     catch (e) {
      console.error(e);
      worked = false;
    }
    if (worked) {
      p != null ? (p.enabled = false) : null;
      Renderer_getInstance().rendererUpdatePackage_ivxn3r$(id, false);
      this.updateLS();
      var i = typeof (tmp$ = p.dependent.length) === 'number' ? tmp$ : throwCCE();
      while (i > 0) {
        var k = p.dependent[i - 1];
        this.disablePackage_61zpoe$(k);
        i = i - 1 | 0;
      }
      msg = "Successfully disable package '" + id + "'!";
      Renderer_getInstance().pkgMsg_61zpoe$(msg);
      if (Driver_getInstance().debug) {
        console.log(msg);
      }
    }
     else {
      Renderer_getInstance().rendererUpdatePackage_ivxn3r$(id, true);
      msg = "Could not disable package '" + id + "'!";
      Renderer_getInstance().pkgMsg_61zpoe$(msg);
      if (Driver_getInstance().debug) {
        console.log(msg);
      }
    }
  };
  ScriptManager.prototype.enablePackage_61zpoe$ = function (id) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var msg = "Enabling package '" + id + "'!";
    Renderer_getInstance().pkgMsg_61zpoe$(msg);
    if (Driver_getInstance().debug) {
      console.log(msg);
    }
    if (!this.packages.containsKey_11rb$(id)) {
      msg = "Could not find package '" + id + "'";
      Renderer_getInstance().pkgMsg_61zpoe$(msg);
      if (Driver_getInstance().debug) {
        console.log(msg);
      }
      return;
    }
    var p = this.packages.get_11rb$(id);
    if ((p != null ? p.enabled : null) === true) {
      msg = "Package '" + id + "' is already enabled!";
      Renderer_getInstance().pkgMsg_61zpoe$(msg);
      if (Driver_getInstance().debug) {
        console.log(msg);
      }
      return;
    }
    var i = typeof (tmp$ = p.requires.length) === 'number' ? tmp$ : throwCCE();
    while (i > 0) {
      var k = typeof (tmp$_0 = p.requires[i - 1]) === 'string' ? tmp$_0 : throwCCE();
      if (!((tmp$_2 = (tmp$_1 = this.packages.get_11rb$(k)) != null ? tmp$_1.enabled : null) != null ? tmp$_2 : true)) {
        var msg_0 = "Could not enable package '" + toString(p != null ? p.id : null) + "' because it requires a package which has been disabled (" + k + ')!';
        Renderer_getInstance().pkgMsg_61zpoe$(msg_0);
        console.warn(msg_0);
        Renderer_getInstance().rendererUpdatePackage_ivxn3r$(id, false);
        return;
      }
      i = i - 1 | 0;
    }
    var worked = true;
    try {
      p.load('enabled');
    }
     catch (e) {
      console.error(e);
      worked = false;
    }
    if (worked) {
      p != null ? (p.enabled = true) : null;
      Renderer_getInstance().rendererUpdatePackage_ivxn3r$(id, true);
      this.updateLS();
      msg = "Successfully enabled package '" + id + "'!";
      Renderer_getInstance().pkgMsg_61zpoe$(msg);
      if (Driver_getInstance().debug) {
        console.log(msg);
      }
    }
     else {
      Renderer_getInstance().rendererUpdatePackage_ivxn3r$(id, false);
      msg = "Could not enable package '" + id + "'!";
      Renderer_getInstance().pkgMsg_61zpoe$(msg);
      if (Driver_getInstance().debug) {
        console.log(msg);
      }
    }
  };
  ScriptManager.prototype.togglePackage_61zpoe$ = function (id) {
    var tmp$;
    var msg = "Toggling package '" + id + "'!";
    Renderer_getInstance().pkgMsg_61zpoe$(msg);
    if (Driver_getInstance().debug) {
      console.log(msg);
    }
    if (!this.packages.containsKey_11rb$(id)) {
      msg = "Could not find package '" + id + "'";
      Renderer_getInstance().pkgMsg_61zpoe$(msg);
      if (Driver_getInstance().debug) {
        console.log(msg);
      }
      return;
    }
    var p = this.packages.get_11rb$(id);
    if ((p != null ? p.enabled : null) === true) {
      this.disablePackage_61zpoe$(p.id);
    }
     else {
      this.enablePackage_61zpoe$((tmp$ = p != null ? p.id : null) != null ? tmp$ : '');
    }
  };
  ScriptManager.prototype.updateLS = function () {
    var tmp$;
    var l = ArrayList_init();
    tmp$ = this.packages.values.iterator();
    while (tmp$.hasNext()) {
      var p = tmp$.next();
      var n = new pkg(p.id, p.url, p.enabled, p.removable);
      l.add_11rb$(n);
    }
    Driver_getInstance().LS.set('script_manager', JSON.stringify(l));
  };
  ScriptManager.prototype.loadPackages = function () {
    var pstr = Driver_getInstance().LS.safeget('script_manager', '[]');
    var pkgs = JSON.parse(pstr);
    var i = 0;
    while (i < pkgs.length) {
      var p = pkgs[i];
      if (p.removable) {
        this.addPackage_o0ij6q$(p.url, p.enabled, p.removable);
      }
       else {
        this.loadPKGTimeout_ivxn3r$(p.id, p.enabled);
      }
      this.loading_packages.add_11rb$(p.url);
      i = i + 1 | 0;
    }
  };
  ScriptManager.prototype.packagesLoading = function () {
    return !this.loading_packages.isEmpty();
  };
  ScriptManager.prototype.loadPKGTimeout_ivxn3r$ = function (id, enabled) {
    if (this.packages.containsKey_11rb$(id)) {
      if (enabled) {
        this.enablePackage_61zpoe$(id);
      }
       else {
        this.disablePackage_61zpoe$(id);
      }
    }
     else {
      window.setTimeout(getCallableRef('loadPKGTimeout', function ($receiver, id, enabled) {
        return $receiver.loadPKGTimeout_ivxn3r$(id, enabled), Unit;
      }.bind(null, ScriptManager_getInstance())), 100, id, enabled);
    }
  };
  ScriptManager.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ScriptManager',
    interfaces: []
  };
  var ScriptManager_instance = null;
  function ScriptManager_getInstance() {
    if (ScriptManager_instance === null) {
      new ScriptManager();
    }
    return ScriptManager_instance;
  }
  function pkg(id, url, enabled, removable) {
    if (id === void 0)
      id = '';
    if (url === void 0)
      url = '';
    if (enabled === void 0)
      enabled = false;
    if (removable === void 0)
      removable = true;
    this.id = id;
    this.url = url;
    this.enabled = enabled;
    this.removable = removable;
  }
  pkg.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'pkg',
    interfaces: []
  };
  function Simulator() {
    Simulator_instance = this;
  }
  Simulator.prototype.isDone = function (sim) {
    return sim.isDone();
  };
  Simulator.prototype.getCycles = function (sim) {
    return sim.getCycles();
  };
  Simulator.prototype.addArg = function (sim, arg) {
    sim.addArg_61zpoe$(arg);
  };
  Simulator.prototype.step = function (sim) {
    sim.step();
  };
  Simulator.prototype.getReg = function (sim, id) {
    return sim.getReg_za3lpa$(id);
  };
  Simulator.prototype.getFReg = function (sim, id) {
    return sim.getFReg_za3lpa$(id);
  };
  Simulator.prototype.loadByte = function (sim, addr) {
    return sim.loadByte_3p81yu$(addr);
  };
  Simulator.prototype.reset = function (sim) {
    sim.reset_6taknv$();
  };
  Simulator.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Simulator',
    interfaces: []
  };
  var Simulator_instance = null;
  function Simulator_getInstance() {
    if (Simulator_instance === null) {
      new Simulator();
    }
    return Simulator_instance;
  }
  function CookieJar() {
    (function (factory) {
      var registeredInModuleLoader = false;
      if (typeof define === 'function' && define.amd) {
        define(factory);
        registeredInModuleLoader = true;
      }
      if (typeof exports === 'object') {
        module.exports = factory();
        registeredInModuleLoader = true;
      }
      if (!registeredInModuleLoader) {
        var OldCookies = window.Cookies;
        var api = window.Cookies = factory();
        api.noConflict = function () {
          window.Cookies = OldCookies;
          return api;
        };
      }
    }(function () {
      function extend() {
        var i = 0;
        var result = {};
        for (; i < arguments.length; i++) {
          var attributes = arguments[i];
          for (var key in attributes) {
            result[key] = attributes[key];
          }
        }
        return result;
      }
      function init(converter) {
        function api(key, value, attributes) {
          var result;
          if (typeof document === 'undefined') {
            return;
          }
          if (arguments.length > 1) {
            attributes = extend({path: '/'}, api.defaults, attributes);
            if (typeof attributes.expires === 'number') {
              var expires = new Date();
              expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 8.64E7);
              attributes.expires = expires;
            }
            attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';
            try {
              result = JSON.stringify(value);
              if (/^[\{\[]/.test(result)) {
                value = result;
              }
            }
             catch (e) {
            }
            if (!converter.write) {
              value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
            }
             else {
              value = converter.write(value, key);
            }
            key = encodeURIComponent(String(key));
            key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
            key = key.replace(/[\(\)]/g, escape);
            var stringifiedAttributes = '';
            for (var attributeName in attributes) {
              if (!attributes[attributeName]) {
                continue;
              }
              stringifiedAttributes += '; ' + attributeName;
              if (attributes[attributeName] === true) {
                continue;
              }
              stringifiedAttributes += '=' + attributes[attributeName];
            }
            return document.cookie = key + '=' + value + stringifiedAttributes;
          }
          if (!key) {
            result = {};
          }
          var cookies = document.cookie ? document.cookie.split('; ') : [];
          var rdecode = /(%[0-9A-Z]{2})+/g;
          var i = 0;
          for (; i < cookies.length; i++) {
            var parts = cookies[i].split('=');
            var cookie = parts.slice(1).join('=');
            if (!this.json && cookie.charAt(0) === '"') {
              cookie = cookie.slice(1, -1);
            }
            try {
              var name = parts[0].replace(rdecode, decodeURIComponent);
              cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);
              if (this.json) {
                try {
                  cookie = JSON.parse(cookie);
                }
                 catch (e) {
                }
              }
              if (key === name) {
                result = cookie;
                break;
              }
              if (!key) {
                result[name] = cookie;
              }
            }
             catch (e) {
            }
          }
          return result;
        }
        api.set = api;
        api.get = function (key) {
          return api.call(api, key);
        };
        api.getJSON = function () {
          return api.apply({json: true}, [].slice.call(arguments));
        };
        api.defaults = {};
        api.remove = function (key, attributes) {
          api(key, '', extend(attributes, {expires: -1}));
        };
        api.withConverter = init;
        return api;
      }
      return init(function () {
      });
    }));
  }
  CookieJar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CookieJar',
    interfaces: []
  };
  function Driver() {
    Driver_instance = this;
    this.VFS = new VirtualFileSystem('/');
    this.active_abs_file_name = null;
    this.active_abs_file_path = null;
    this.sim = new Simulator_0(new LinkedProgram(), this.VFS);
    this.tr = new Tracer(this.sim);
    this.mainCache = new CacheHandler(1);
    this.cache = this.mainCache;
    this.cacheLevels = arrayListOf([this.mainCache]);
    this.simSettings = new SimulatorSettings();
    this.simState64 = new SimulatorState64();
    this.temp = new QuadWord();
    this.timer_0 = null;
    this.LS = new LocalStorage();
    this.useLS = false;
    this.saveInterval_0 = null;
    this.p = '';
    this.ready_0 = false;
    this.FReginputAsFloat = true;
    this.ScriptManager = ScriptManager_getInstance();
    this.debug = false;
    this.terminal = new Terminal(this.VFS);
    this.activeFileinEditor = '';
    this.driver_complete_loading = false;
    var tmp$;
    window.eval_in_venus_env = function (s) {
      return eval(s);
    };
    load_update_message('Initializing Venus: Init');
    this.simState64.getReg_za3lpa$(0);
    Linter_getInstance().lint_61zpoe$('');
    console.log('Loading driver...');
    this.mainCache.attach_6taknv$(false);
    this.useLS = equals(this.LS.get('venus'), 'true');
    Renderer_getInstance().renderButton_ypl1d1$(Kotlin.isType(tmp$ = document.getElementById('sv'), HTMLButtonElement) ? tmp$ : throwCCE(), this.useLS);
    window.setTimeout(getCallableRef('initTimeout', function ($receiver) {
      return $receiver.initTimeout(), Unit;
    }.bind(null, Driver_getInstance())), 5);
    console.log('Finished loading driver!');
    this.TIMEOUT_CYCLES_8be2vx$ = 100;
    this.TIMEOUT_TIME_8be2vx$ = 10;
    this.trTimer = null;
    this.fileExplorerCurrentLocation_ebhuak$_0 = this.fileExplorerCurrentLocation_ebhuak$_0;
  }
  Driver.prototype.set_active_afpath_pdl1vj$ = function (path) {
    this.active_abs_file_path = path;
    ensureNotNull(document.getElementById('activeFileInEditor')).innerHTML = toString(path);
    this.activeFileinEditor = path != null ? path : '';
  };
  Driver.prototype.initTimeout = function () {
    load_update_message('Initializing Venus: Local Storage');
    this.loadAll_6taknv$(this.useLS);
    load_update_message('Initializing Venus: Renderer');
    Renderer_getInstance().loadSimulator_pivkot$(this.sim);
    Renderer_getInstance().renderAssembleButtons();
    this.saveInterval_0 = window.setInterval(getCallableRef('saveIntervalFn', function ($receiver) {
      return $receiver.saveIntervalFn(), Unit;
    }.bind(null, Driver_getInstance())), 10000);
    Driver_getInstance().ready_0 = true;
    this.initFinish();
  };
  Driver.prototype.initFinish = function () {
    if (Driver_getInstance().ready_0) {
      if (this.fileExplorerCurrentLocation_ebhuak$_0 == null) {
        this.fileExplorerCurrentLocation = this.VFS.sentinel;
        this.openVFObjectfromObj_hijjve$(this.VFS.sentinel);
      }
      window.onbeforeunload = function () {
        driver.saveAll();
      };
      window.driver_load_done();
    }
     else {
      window.setInterval(getCallableRef('initFinish', function ($receiver) {
        return $receiver.initFinish(), Unit;
      }.bind(null, Driver_getInstance())), 100);
    }
  };
  Driver.prototype.lint = function (text) {
    return Linter_getInstance().lint_61zpoe$(text);
  };
  Driver.prototype.openSimulator = function () {
    this.openGenericMainTab('simulator');
  };
  Driver.prototype.noAssemble = function () {
    Renderer_getInstance().renderSimButtons();
  };
  Driver.prototype.getDefaultArgs = function () {
    var tmp$;
    return (Kotlin.isType(tmp$ = document.getElementById('ArgsList'), HTMLInputElement) ? tmp$ : throwCCE()).value;
  };
  Driver.prototype.assembleSimulator = function () {
    var tmp$, tmp$_0, tmp$_1;
    var text = this.getText();
    if (equals(text, '')) {
      codeMirror.refresh();
      codeMirror.save();
      text = this.getText();
    }
    if (this.ready_0) {
      try {
        var editorFileName = (tmp$ = this.active_abs_file_name) != null ? tmp$ : 'editor.S';
        var fpath = (tmp$_0 = this.active_abs_file_path) != null ? tmp$_0 : this.VFS.currentLocation.getPath() + ('/' + editorFileName);
        var remove = false;
        if (this.VFS.getObjectFromPath_s9h4kc$(fpath) == null) {
          this.VFS.addFile(fpath, text);
          remove = true;
        }
        var success = this.assemble_p1hijf$(text, editorFileName, fpath);
        if (success != null) {
          if (this.link_ondwee$(listOf(success))) {
            var args = Lexer_getInstance().lex_61zpoe$(this.getDefaultArgs());
            tmp$_1 = args.iterator();
            while (tmp$_1.hasNext()) {
              var arg = tmp$_1.next();
              this.sim.addArg_61zpoe$(arg);
            }
            Renderer_getInstance().loadSimulator_pivkot$(this.sim);
            this.setCacheSettings();
            Renderer_getInstance().updateCache_e3g4se$(new Address(0, MemSize$WORD_getInstance()));
          }
        }
        if (remove) {
          this.VFS.remove(fpath);
        }
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          Renderer_getInstance().loadSimulator_pivkot$(new Simulator_0(new LinkedProgram(), this.VFS));
          handleError('Open Simulator', e);
        }
         else
          throw e;
      }
    }
     else {
      window.setTimeout(getCallableRef('openSimulator', function ($receiver) {
        return $receiver.openSimulator(), Unit;
      }.bind(null, Driver_getInstance())), 100);
    }
  };
  Driver.prototype.checkURLParams = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var clearparams = true;
    var currentURL = new URL(window.location.href);
    var s = currentURL.searchParams.get('code');
    if (s != null) {
      s = this.parseString_61zpoe$(s);
      codeMirror.save();
      if (!equals(this.getText(), '')) {
        if (!equals(this.getText(), s)) {
          var override = currentURL.searchParams.get('override');
          var tmp$_3 = override != null;
          if (tmp$_3) {
            tmp$_3 = equals(override.toLowerCase(), 'true');
          }
          var overrideb = tmp$_3;
          if (overrideb) {
            tmp$ = true;
          }
           else {
            tmp$ = window.confirm('You have some saved code already in venus! Do you want to override it with the code in your url?');
          }
          var choice = tmp$;
          if (choice) {
            codeMirror.setValue(s);
          }
           else {
            clearparams = false;
          }
        }
      }
       else {
        codeMirror.setValue(s);
      }
    }
    s = currentURL.searchParams.get('tab');
    if (s != null) {
      s = this.parseString_61zpoe$(s.toString());
      if (Renderer_getInstance().mainTabs.contains_11rb$(s)) {
        Renderer_getInstance().renderTab(s, Renderer_getInstance().mainTabs);
      }
       else {
        console.log('Unknown Tag!');
      }
    }
    s = currentURL.searchParams.get('target');
    if (s != null) {
      s = this.parseString_61zpoe$(s);
      loadfromtarget(s);
    }
    s = currentURL.searchParams.get('save');
    if (!equals(typeof s, undefined)) {
      s = this.parseString_61zpoe$(toString(s));
      if (equals(s.toLowerCase(), 'true')) {
        this.persistentStorage(true);
        Renderer_getInstance().renderButton_ypl1d1$(Kotlin.isType(tmp$_0 = document.getElementById('sv'), HTMLButtonElement) ? tmp$_0 : throwCCE(), true);
      }
      if (equals(s.toLowerCase(), 'false')) {
        this.persistentStorage(false);
        Renderer_getInstance().renderButton_ypl1d1$(Kotlin.isType(tmp$_1 = document.getElementById('sv'), HTMLButtonElement) ? tmp$_1 : throwCCE(), false);
      }
    }
    try {
      s = currentURL.searchParams.get('packages');
      if (s != null) {
        s = this.parseString_61zpoe$(s.toString());
        var $receiver = s;
        var l = Regex_init(',').split_905azu$($receiver, 0);
        tmp$_2 = l.iterator();
        while (tmp$_2.hasNext()) {
          var pack = tmp$_2.next();
          this.ScriptManager.addPackage_o0ij6q$(pack);
        }
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        console.warn('An error occurred when parsing the packages!');
        console.warn(e);
      }
       else
        throw e;
    }
    if (clearparams) {
      this.clearURLParams();
    }
  };
  Driver.prototype.clearURLParams = function () {
    var location = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, location);
  };
  Driver.prototype.parseString_61zpoe$ = function (s) {
    var ps = replace(replace(s, '\\n', '\n'), '\\t', '\t');
    return ps;
  };
  Driver.prototype.unparseString_61zpoe$ = function (s) {
    var ps = replace(replace(s, '\n', '\\n'), '\t', '\\t');
    return ps;
  };
  Driver.prototype.openEditor = function () {
    this.runEnd();
    this.openGenericMainTab('editor');
    codeMirror.refresh();
  };
  Driver.prototype.openVenus = function () {
    this.openGenericMainTab('venus');
  };
  Driver.prototype.openGenericMainTab = function (name) {
    Renderer_getInstance().renderTab(name, Renderer_getInstance().mainTabs);
    if (equals(name, 'editor')) {
      Renderer_getInstance().renderAssembleButtons();
    }
    this.LS.set('defaultTab', name);
  };
  Driver.prototype.openURLMaker = function () {
    setUpURL();
    Renderer_getInstance().renderURLMaker();
  };
  Driver.prototype.getText = function () {
    var tmp$;
    var editor = Kotlin.isType(tmp$ = document.getElementById('asm-editor'), HTMLTextAreaElement) ? tmp$ : throwCCE();
    return editor.value;
  };
  Driver.prototype.assemble_p1hijf$ = function (text, name, absPath) {
    if (name === void 0)
      name = '';
    var tmp$;
    if (!equals(name, '')) {
      tmp$ = Assembler_getInstance().assemble_6hosri$(text, name, absPath);
    }
     else {
      tmp$ = Assembler_getInstance().assemble_6hosri$(text, void 0, absPath);
    }
    var tmp$_0 = tmp$;
    var prog = tmp$_0.component1()
    , errors = tmp$_0.component2()
    , warnings = tmp$_0.component3();
    if (!errors.isEmpty()) {
      Renderer_getInstance().displayAssemblerError_9fh0nh$(first(errors));
      return null;
    }
    return prog;
  };
  Driver.prototype.link_ondwee$ = function (progs) {
    try {
      var PandL = new ProgramAndLibraries(progs, this.VFS);
      var linked = Linker_getInstance().link_lpgfe$(PandL);
      this.loadSim_a67xwl$(linked);
      return true;
    }
     catch (e) {
      if (Kotlin.isType(e, AssemblerError)) {
        Renderer_getInstance().displayAssemblerError_9fh0nh$(e);
        return false;
      }
       else
        throw e;
    }
  };
  Driver.prototype.loadSim_a67xwl$ = function (linked) {
    this.sim = new Simulator_0(linked, this.VFS, this.simSettings);
    this.mainCache.reset_6taknv$();
    this.sim.state.cache = this.mainCache;
    this.tr = new Tracer(this.sim);
  };
  Driver.prototype.getMaxSteps = function () {
    var tmp$;
    return toInt((Kotlin.isType(tmp$ = document.getElementById('tmaxsteps-val'), HTMLInputElement) ? tmp$ : throwCCE()).value);
  };
  Driver.prototype.updateMaxSteps = function () {
    this.runEnd();
    this.simSettings.maxSteps = this.getMaxSteps();
  };
  Driver.prototype.exitcodecheck = function () {
    var tmp$;
    if (this.sim.exitcode != null) {
      var msg = 'Exited with error code ' + toString(this.sim.exitcode);
      if (((tmp$ = this.sim.exitcode) != null ? tmp$ : 0) === 0) {
        window.alertify.message(msg);
      }
       else {
        window.alertify.error(msg);
      }
    }
  };
  Driver.prototype.externalAssemble = function (text, absPath) {
    if (absPath === void 0)
      absPath = '';
    var success = true;
    var errs = '';
    var sim = undefined;
    var tmp$ = Assembler_getInstance().assemble_6hosri$(text, void 0, absPath);
    var prog = tmp$.component1()
    , errors = tmp$.component2()
    , warnings = tmp$.component3();
    if (!errors.isEmpty()) {
      errs = first(errors).toString();
      success = false;
    }
     else {
      try {
        var PandL = new ProgramAndLibraries(listOf(prog), this.VFS);
        var linked = Linker_getInstance().link_lpgfe$(PandL);
        sim = new Simulator_0(linked, this.VFS, this.simSettings);
      }
       catch (e) {
        if (Kotlin.isType(e, AssemblerError)) {
          errs = e.toString();
          success = false;
        }
         else
          throw e;
      }
    }
    return [success, sim, errs, warnings];
  };
  Driver.prototype.run = function () {
    if (this.currentlyRunning()) {
      this.runEnd();
    }
     else {
      try {
        Renderer_getInstance().setRunButtonSpinning_6taknv$(true);
        this.timer_0 = window.setTimeout(getCallableRef('runStart', function ($receiver, useBreakPoints) {
          return $receiver.runStart_vft4zs$(useBreakPoints), Unit;
        }.bind(null, Driver_getInstance())), 10, true);
        this.sim.step();
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          this.runEnd();
          handleError('RunStart', e, Kotlin.isType(e, AlignmentError) || Kotlin.isType(e, StoreError) || Kotlin.isType(e, ExceededAllowedCyclesError));
        }
         else
          throw e;
      }
    }
  };
  Driver.prototype.reset = function () {
    var tmp$;
    try {
      var args = this.sim.args;
      this.sim = new Simulator_0(this.sim.linkedProgram, this.VFS, this.sim.settings, void 0, this.sim.simulatorID);
      this.tr.sim = this.sim;
      tmp$ = args.iterator();
      while (tmp$.hasNext()) {
        var arg = tmp$.next();
        this.sim.addArg_61zpoe$(arg);
      }
      this.mainCache.reset_6taknv$();
      this.sim.state.setCacheHandler_gfyr0r$(this.mainCache);
      Renderer_getInstance().loadSimulator_pivkot$(this.sim);
      this.setCacheSettings();
      Renderer_getInstance().updateCache_e3g4se$(new Address(0, MemSize$WORD_getInstance()));
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        Renderer_getInstance().loadSimulator_pivkot$(new Simulator_0(new LinkedProgram(), this.VFS));
        handleError('Reset Simulator', e);
      }
       else
        throw e;
    }
  };
  Driver.prototype.toggleBreakpoint = function (idx) {
    var isBreakpoint = this.sim.toggleBreakpointAt_za3lpa$(idx);
    Renderer_getInstance().renderBreakpointAt_fzusl$(idx, isBreakpoint);
  };
  Driver.prototype.runStart_vft4zs$ = function (useBreakPoints) {
    try {
      var cycles = 0;
      while (cycles < 100) {
        if (this.sim.isDone() || (this.sim.atBreakpoint() && useBreakPoints)) {
          this.exitcodecheck();
          this.runEnd();
          Renderer_getInstance().updateAll();
          return;
        }
        this.handleNotExitOver_0();
        this.sim.step();
        Renderer_getInstance().updateCache_e3g4se$(new Address(0, MemSize$WORD_getInstance()));
        cycles = cycles + 1 | 0;
      }
      this.timer_0 = window.setTimeout(getCallableRef('runStart', function ($receiver, useBreakPoints) {
        return $receiver.runStart_vft4zs$(useBreakPoints), Unit;
      }.bind(null, Driver_getInstance())), 10, useBreakPoints);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.runEnd();
        handleError('RunStart', e, Kotlin.isType(e, AlignmentError) || Kotlin.isType(e, StoreError) || Kotlin.isType(e, ExceededAllowedCyclesError));
      }
       else
        throw e;
    }
  };
  Driver.prototype.runEnd = function () {
    var tmp$;
    this.handleNotExitOver_0();
    Renderer_getInstance().updatePC_3p81yu$(this.sim.getPC());
    Renderer_getInstance().updateAll();
    Renderer_getInstance().setRunButtonSpinning_6taknv$(false);
    if ((tmp$ = this.timer_0) != null) {
      getCallableRef('clearTimeout', function ($receiver, handle) {
        return $receiver.clearTimeout(handle), Unit;
      }.bind(null, window))(tmp$);
    }
    this.timer_0 = null;
  };
  Driver.prototype.step = function () {
    try {
      var diffs = this.sim.step();
      this.handleNotExitOver_0();
      Renderer_getInstance().updateFromDiffs_lk28az$(diffs);
      Renderer_getInstance().updateCache_e3g4se$(new Address(0, MemSize$WORD_getInstance()));
      Renderer_getInstance().updateControlButtons();
      this.exitcodecheck();
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        handleError('step', e, Kotlin.isType(e, AlignmentError) || Kotlin.isType(e, StoreError) || Kotlin.isType(e, ExceededAllowedCyclesError));
      }
       else
        throw e;
    }
  };
  Driver.prototype.handleNotExitOver_0 = function () {
    if (this.sim.settings.ecallOnlyExit && (numberToInt(this.sim.getPC()) >= numberToInt(this.sim.getMaxPC()) || numberToInt(this.sim.getPC()) < MemorySegments_getInstance().TEXT_BEGIN)) {
      var pcloc = numberToInt(this.sim.getPC());
      this.sim.incMaxPC_3p81yu$(4);
      var mcode = new MachineCode(0);
      var progLine = '';
      try {
        mcode = this.sim.getNextInstruction();
        Renderer_getInstance().addToProgramListing_oi48jx$(pcloc, mcode, Instruction$Companion_getInstance().get_6cx2xq$(mcode).disasm.invoke_6cx2xq$(mcode));
      }
       catch (e) {
        if (Kotlin.isType(e, SimulatorError)) {
          var short0 = this.sim.loadHalfWord_3p81yu$(this.sim.getPC());
          var short1 = this.sim.loadHalfWord_3p81yu$(plus(this.sim.getPC(), 2));
          Renderer_getInstance().addToProgramListing_oi48jx$(pcloc, new MachineCode(short1 << 16 | short0), 'Invalid Instruction', true);
        }
         else
          throw e;
      }
    }
  };
  Driver.prototype.undo = function () {
    try {
      var diffs = this.sim.undo();
      Renderer_getInstance().updateFromDiffs_lk28az$(diffs);
      Renderer_getInstance().updateControlButtons();
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        handleError('undo', e, Kotlin.isType(e, AlignmentError) || Kotlin.isType(e, StoreError) || Kotlin.isType(e, ExceededAllowedCyclesError));
      }
       else
        throw e;
    }
  };
  Driver.prototype.openMemoryTab = function () {
    Renderer_getInstance().renderMemoryTab();
  };
  Driver.prototype.openRegisterTab = function () {
    Renderer_getInstance().renderRegisterTab();
  };
  Driver.prototype.openRegsTab = function () {
    Renderer_getInstance().renderRegsTab();
  };
  Driver.prototype.openFRegsTab = function () {
    Renderer_getInstance().renderFRegsTab();
  };
  Driver.prototype.openTracerSettingsTab = function () {
    Renderer_getInstance().renderTracerSettingsTab();
  };
  Driver.prototype.openPackagesTab = function () {
    Renderer_getInstance().renderPackagesTab();
  };
  Driver.prototype.openCacheTab = function () {
    Renderer_getInstance().renderCacheTab();
  };
  Driver.prototype.openSettingsTab = function () {
    Renderer_getInstance().renderSettingsTab();
  };
  Driver.prototype.openGeneralSettingsTab = function () {
    Renderer_getInstance().renderGeneralSettingsTab();
  };
  Driver.prototype.currentlyRunning = function () {
    return this.timer_0 != null;
  };
  Driver.prototype.destructiveGetSimOut = function () {
    var tmp = this.sim.stdout;
    this.sim.stdout = '';
    return tmp;
  };
  Driver.prototype.openVenusTab = function (tabid) {
    var tabs = listOf_0(['venus-terminal', 'venus-files', 'venus-url', 'venus-jvm']);
    Renderer_getInstance().renderTab(tabid, tabs);
    if (equals(tabid, 'venus-files')) {
      this.refreshVFS();
    }
  };
  Driver.prototype.saveRegister = function (reg, id) {
    if (!this.currentlyRunning()) {
      try {
        var input = reg.value;
        this.sim.setRegNoUndo_135bro$(id, userStringToInt(input));
      }
       catch (e) {
        if (!Kotlin.isType(e, NumberFormatException))
          throw e;
      }
    }
    Renderer_getInstance().updateRegister_lirtej$(id, this.sim.getReg_za3lpa$(id));
  };
  Driver.prototype.saveFRegister = function (freg, id) {
    if (!this.currentlyRunning()) {
      try {
        var input = freg.value;
        var d = new Decimal(userStringToFloat(input), userStringToDouble(input), this.FReginputAsFloat);
        this.sim.setFRegNoUndo_i6jhoq$(id, d);
      }
       catch (e) {
        if (!Kotlin.isType(e, NumberFormatException))
          throw e;
      }
    }
    Renderer_getInstance().updateFRegister_zc64of$(id, this.sim.getFReg_za3lpa$(id));
  };
  Driver.prototype.updateRegMemDisplay = function () {
    Renderer_getInstance().updateRegMemDisplay();
  };
  Driver.prototype.moveMemoryJump = function () {
    Renderer_getInstance().moveMemoryJump();
  };
  Driver.prototype.moveMemoryUp = function () {
    Renderer_getInstance().moveMemoryUp();
  };
  Driver.prototype.moveMemoryDown = function () {
    Renderer_getInstance().moveMemoryDown();
  };
  Driver.prototype.moveMemoryLocation = function (address) {
    try {
      var addr = userStringToInt(address);
      Renderer_getInstance().updateMemory_za3lpa$(addr);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        handleError('MoveMemLoc', e, true);
      }
       else
        throw e;
    }
  };
  Driver.prototype.getInstructionDump = function () {
    var tmp$;
    var sb = StringBuilder_init();
    tmp$ = this.sim.linkedProgram.prog.insts.size;
    for (var i = 0; i < tmp$; i++) {
      var mcode = this.sim.linkedProgram.prog.insts.get_za3lpa$(i);
      var hexRepresentation = Renderer_getInstance().toHex_ydzd23$(mcode.get_cv51c2$(InstructionField$ENTIRE_getInstance()));
      sb.append_gw00v9$(hexRepresentation);
      sb.append_gw00v9$('\n');
    }
    return sb.toString();
  };
  Driver.prototype.dump = function () {
    var tmp$;
    try {
      Renderer_getInstance().clearConsole();
      Renderer_getInstance().printConsole_kcmwxo$(this.getInstructionDump());
      var ta = Kotlin.isType(tmp$ = document.getElementById('console-output'), HTMLTextAreaElement) ? tmp$ : throwCCE();
      ta.select();
      var success = document.execCommand('copy');
      if (success) {
        console.log('Successfully copied machine code to clipboard');
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        handleError('dump', e);
      }
       else
        throw e;
    }
  };
  Driver.prototype.setOnlyEcallExit = function (b) {
    this.simSettings.ecallOnlyExit = b;
  };
  Driver.prototype.setAllowAccessBtnStackHeap = function (b) {
    this.simSettings.allowAccessBtnStackHeap = b;
  };
  Driver.prototype.setSetRegsOnInit = function (b) {
    this.simSettings.setRegesOnInit = b;
  };
  Driver.prototype.verifyText = function (input) {
    var tmp$;
    try {
      if (!this.currentlyRunning()) {
        try {
          var i = userStringToInt(input.value);
          try {
            MemorySegments_getInstance().setTextBegin_za3lpa$(i);
            var tabDisplay = Kotlin.isType(tmp$ = document.getElementById('simulator-tab'), HTMLElement) ? tmp$ : throwCCE();
            if (tabDisplay.classList.contains('is-active')) {
              this.openSimulator();
            }
          }
           catch (e) {
            if (Kotlin.isType(e, SimulatorError)) {
              console.warn(e.toString());
            }
             else
              throw e;
          }
        }
         catch (e) {
          if (Kotlin.isType(e, NumberFormatException)) {
            console.warn('Unknown number format!');
          }
           else
            throw e;
        }
      }
       else {
        console.warn('Could not change text because the program is currently running!');
      }
      var ts = Renderer_getInstance().intToString_za3lpa$(MemorySegments_getInstance().TEXT_BEGIN);
      input.value = ts;
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        handleError('Verify Text', e);
      }
       else
        throw e;
    }
  };
  Driver.prototype.setNumberOfCacheLevels = function (i) {
    var tmp$, tmp$_0;
    if (i < 1) {
      (Kotlin.isType(tmp$ = document.getElementById('setNumCacheLvls'), HTMLInputElement) ? tmp$ : throwCCE()).value = this.cacheLevels.size.toString();
      handleError('Set Number of Cache Levels (LT0)', CacheError_init('You must set the number of caches to at least 1! If you do not want to use any cache, set this to 1 and then disable the cache.'), true);
      return;
    }
    (Kotlin.isType(tmp$_0 = document.getElementById('setNumCacheLvls'), HTMLInputElement) ? tmp$_0 : throwCCE()).value = i.toString();
    if (i === this.cacheLevels.size) {
      return;
    }
    if (this.cacheLevels.size < i) {
      var lastCache = this.cacheLevels.get_za3lpa$(this.cacheLevels.size - 1 | 0);
      while (this.cacheLevels.size < i) {
        var newCache = new CacheHandler(this.cacheLevels.size + 1 | 0);
        this.cacheLevels.get_za3lpa$(this.cacheLevels.size - 1 | 0).nextLevelCacheHandler = newCache;
        this.cacheLevels.add_11rb$(newCache);
        Renderer_getInstance().renderAddCacheLevel();
      }
      lastCache.update();
    }
     else if (this.cacheLevels.size > i) {
      while (this.cacheLevels.size > i) {
        var prevCacheIndex = this.cacheLevels.size - 1 | 0;
        var prevCache = this.cacheLevels.get_za3lpa$(prevCacheIndex);
        this.cacheLevels.removeAt_za3lpa$(prevCacheIndex);
        var lastCache_0 = this.cacheLevels.get_za3lpa$(this.cacheLevels.size - 1 | 0);
        lastCache_0.nextLevelCacheHandler = null;
        if (this.cache.cacheLevel === prevCache.cacheLevel) {
          this.cache = lastCache_0;
          Renderer_getInstance().renderSetCacheLevel_za3lpa$(this.cache.cacheLevel);
        }
        Renderer_getInstance().renderRemoveCacheLevel();
      }
      this.setCacheSettings();
    }
  };
  Driver.prototype.setCacheEnabled = function (enabled) {
    this.cache.attach_6taknv$(enabled);
    Renderer_getInstance().updateCache_e3g4se$(new Address(0, MemSize$WORD_getInstance()));
  };
  Driver.prototype.updateCacheLevel = function (e_0) {
    try {
      var level = toInt(removePrefix(e_0.value, 'L'));
      this.updateCacheLvl_za3lpa$(level);
    }
     catch (e) {
      if (Kotlin.isType(e, NumberFormatException)) {
        handleError('Update Cache Level (NFE)', e, true);
      }
       else
        throw e;
    }
  };
  Driver.prototype.updateCacheLvl_za3lpa$ = function (level) {
    var tmp$;
    tmp$ = this.cacheLevels.size;
    if (1 <= level && level <= tmp$) {
      this.cache = this.cacheLevels.get_za3lpa$(level - 1 | 0);
      Renderer_getInstance().renderSetCacheLevel_za3lpa$(level);
      this.setCacheSettings();
    }
     else {
      handleError('Update Cache Level (LVL)', CacheError_init("Cache level '" + toString(level) + "' does not exist in your current cache!"), true);
    }
  };
  Driver.prototype.updateCacheBlockSize = function (e) {
    var v = toInt(e.value);
    try {
      this.cache.setCacheBlockSize_za3lpa$(v);
    }
     catch (er) {
      if (Kotlin.isType(er, CacheError)) {
        Renderer_getInstance().clearConsole();
        Renderer_getInstance().printConsole_kcmwxo$(er.toString());
      }
       else
        throw er;
    }
    e.value = this.cache.cacheBlockSize().toString();
    this.setCacheSettings();
  };
  Driver.prototype.updateCacheNumberOfBlocks = function (e) {
    var v = toInt(e.value);
    try {
      this.cache.setNumberOfBlocks_za3lpa$(v);
    }
     catch (er) {
      if (Kotlin.isType(er, CacheError)) {
        Renderer_getInstance().clearConsole();
        Renderer_getInstance().printConsole_kcmwxo$(er.toString());
      }
       else
        throw er;
    }
    e.value = this.cache.numberOfBlocks().toString();
    this.setCacheSettings();
  };
  Driver.prototype.updateCacheAssociativity = function (e) {
    var v = toInt(e.value);
    try {
      this.cache.setAssociativity_fzusl$(v);
    }
     catch (er) {
      if (Kotlin.isType(er, CacheError)) {
        Renderer_getInstance().clearConsole();
        Renderer_getInstance().printConsole_kcmwxo$(er.toString());
      }
       else
        throw er;
    }
    e.value = this.cache.associativity().toString();
    this.setCacheSettings();
  };
  Driver.prototype.updateCachePlacementPolicy = function (e) {
    if (equals(e.value, 'N-Way Set Associative')) {
      this.cache.setPlacementPol_wfyhai$(PlacementPolicy$NWAY_SET_ASSOCIATIVE_getInstance());
    }
     else if (equals(e.value, 'Fully Associative')) {
      this.cache.setPlacementPol_wfyhai$(PlacementPolicy$FULLY_ASSOCIATIVE_getInstance());
    }
     else {
      this.cache.setPlacementPol_wfyhai$(PlacementPolicy$DIRECT_MAPPING_getInstance());
      e.value = 'Direct Mapped';
    }
    this.setCacheSettings();
  };
  Driver.prototype.updateCacheReplacementPolicy = function (e) {
    if (equals(e.value, 'Random')) {
      this.cache.setBlockRepPolicy_nu1lus$(BlockReplacementPolicy$RANDOM_getInstance());
    }
     else {
      this.cache.setBlockRepPolicy_nu1lus$(BlockReplacementPolicy$LRU_getInstance());
      e.value = 'LRU';
    }
    this.setCacheSettings();
  };
  Driver.prototype.setCacheSeed = function (v) {
    this.cache.setCurrentSeed_61zpoe$(v);
    this.setCacheSettings();
  };
  Driver.prototype.setCacheSettings = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    var bs = this.cache.cacheBlockSize().toString();
    var nb = this.cache.numberOfBlocks().toString();
    var av = this.cache.associativity().toString();
    var avenabled = this.cache.canSetAssociativity();
    var at = this.cache.placementPol().toMyString();
    var rp = this.cache.blockRepPolicy().toMyString();
    var cs = this.cache.cacheSize().toString();
    var cseed = this.cache.seed;
    var attached = this.cache.attached;
    (Kotlin.isType(tmp$ = document.getElementById('block-size-val'), HTMLInputElement) ? tmp$ : throwCCE()).value = bs;
    (Kotlin.isType(tmp$_0 = document.getElementById('numblocks-val'), HTMLInputElement) ? tmp$_0 : throwCCE()).value = nb;
    var ave = Kotlin.isType(tmp$_1 = document.getElementById('associativity-val'), HTMLInputElement) ? tmp$_1 : throwCCE();
    ave.value = av;
    ave.disabled = !avenabled;
    (Kotlin.isType(tmp$_2 = document.getElementById('associativity-type'), HTMLSelectElement) ? tmp$_2 : throwCCE()).value = at;
    (Kotlin.isType(tmp$_3 = document.getElementById('replacementPolicy'), HTMLSelectElement) ? tmp$_3 : throwCCE()).value = rp;
    (Kotlin.isType(tmp$_4 = document.getElementById('cache-size-val'), HTMLInputElement) ? tmp$_4 : throwCCE()).value = cs;
    (Kotlin.isType(tmp$_5 = document.getElementById('cache-seed'), HTMLInputElement) ? tmp$_5 : throwCCE()).value = cseed;
    var attachedButton = Kotlin.isType(tmp$_6 = document.getElementById('cacheEnabled'), HTMLButtonElement) ? tmp$_6 : throwCCE();
    attachedButton.value = attached.toString();
    if (attached) {
      addClass(attachedButton, ['is-primary']);
    }
     else {
      removeClass(attachedButton, ['is-primary']);
    }
    Renderer_getInstance().makeCacheBlocks();
    Renderer_getInstance().updateCache_e3g4se$(new Address(0, MemSize$WORD_getInstance()));
  };
  Driver.prototype.setAlignedAddressing = function (b) {
    this.simSettings.alignedAddress = b;
  };
  Driver.prototype.setMutableText = function (b) {
    this.simSettings.mutableText = b;
  };
  Driver.prototype.addPackage = function (button) {
    var tmp$;
    if (!hasClass(button, 'is-loading')) {
      addClass(button, ['is-loading']);
      window.venuspackage = {id: 'LOADING!'};
      var purlinput = Kotlin.isType(tmp$ = document.getElementById('package-url-val'), HTMLInputElement) ? tmp$ : throwCCE();
      var url = purlinput.value;
      this.ScriptManager.addPackage_o0ij6q$(url);
      window.setTimeout(getCallableRef('packageLoaded', function ($receiver, b) {
        return $receiver.packageLoaded_cqtaea$(b), Unit;
      }.bind(null, Driver_getInstance())), 100, button);
    }
     else {
      console.log('Cannot add a new package until the previous package has finished!');
    }
  };
  Driver.prototype.togglePackage = function (packageID) {
    window.setTimeout(getCallableRef('togglePackage', function ($receiver, id) {
      return $receiver.togglePackage_61zpoe$(id), Unit;
    }.bind(null, this.ScriptManager)), 10, packageID);
  };
  Driver.prototype.removePackage = function (packageID) {
    window.setTimeout(getCallableRef('removePackage', function ($receiver, id) {
      return $receiver.removePackage_61zpoe$(id), Unit;
    }.bind(null, this.ScriptManager)), 10, packageID);
  };
  Driver.prototype.packageLoaded_cqtaea$ = function (b) {
    if (equals(venuspackage, undefined)) {
      removeClass(b, ['is-loading']);
      return;
    }
    window.setTimeout(getCallableRef('packageLoaded', function ($receiver, b) {
      return $receiver.packageLoaded_cqtaea$(b), Unit;
    }.bind(null, Driver_getInstance())), 100, b);
  };
  Driver.prototype.trace = function () {
    var tmp$;
    if (this.trTimer != null) {
      Renderer_getInstance().setNameButtonSpinning_ivxn3r$('simulator-trace', false);
      if ((tmp$ = this.trTimer) != null) {
        getCallableRef('clearTimeout', function ($receiver, handle) {
          return $receiver.clearTimeout(handle), Unit;
        }.bind(null, window))(tmp$);
      }
      this.trTimer = null;
      this.tr.traceFullReset();
      this.sim.reset_6taknv$();
      Renderer_getInstance().updateControlButtons();
      return;
    }
    Renderer_getInstance().setNameButtonSpinning_ivxn3r$('simulator-trace', true);
    Renderer_getInstance().clearConsole();
    this.loadTraceSettings_0();
    this.trTimer = window.setTimeout(getCallableRef('traceSt', function ($receiver) {
      return $receiver.traceSt_8be2vx$(), Unit;
    }.bind(null, Driver_getInstance())), 10);
  };
  Driver.prototype.loadTraceSettings_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    this.tr.format = (Kotlin.isType(tmp$ = document.getElementById('tregPattern'), HTMLTextAreaElement) ? tmp$ : throwCCE()).value;
    this.tr.base = toInt((Kotlin.isType(tmp$_0 = document.getElementById('tbase-val'), HTMLInputElement) ? tmp$_0 : throwCCE()).value);
    this.tr.totCommands = toInt((Kotlin.isType(tmp$_1 = document.getElementById('ttot-cmds-val'), HTMLInputElement) ? tmp$_1 : throwCCE()).value);
    this.tr.maxSteps = toInt((Kotlin.isType(tmp$_2 = document.getElementById('tmaxsteps-val'), HTMLInputElement) ? tmp$_2 : throwCCE()).value);
    this.tr.instFirst = equals((Kotlin.isType(tmp$_3 = document.getElementById('tinst-first'), HTMLButtonElement) ? tmp$_3 : throwCCE()).value, 'true');
    this.tr.twoStage = equals((Kotlin.isType(tmp$_4 = document.getElementById('tTwoStage'), HTMLButtonElement) ? tmp$_4 : throwCCE()).value, 'true');
    Tracer$Companion_getInstance().wordAddressed = equals((Kotlin.isType(tmp$_5 = document.getElementById('tPCWAddr'), HTMLButtonElement) ? tmp$_5 : throwCCE()).value, 'true');
  };
  Driver.prototype.traceSt_8be2vx$ = function () {
    var tmp$;
    try {
      this.tr.traceStart();
      this.traceLoop_8be2vx$();
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        handleError('Trace tr Start', e, Kotlin.isType(e, AlignmentError) || Kotlin.isType(e, StoreError) || Kotlin.isType(e, ExceededAllowedCyclesError));
        Renderer_getInstance().setNameButtonSpinning_ivxn3r$('simulator-trace', false);
        if ((tmp$ = this.trTimer) != null) {
          getCallableRef('clearTimeout', function ($receiver, handle) {
            return $receiver.clearTimeout(handle), Unit;
          }.bind(null, window))(tmp$);
        }
        this.trTimer = null;
      }
       else
        throw e;
    }
  };
  Driver.prototype.traceLoop_8be2vx$ = function () {
    var tmp$;
    try {
      var cycles = 0;
      while (cycles < 100) {
        if (this.sim.isDone()) {
          this.trTimer = window.setTimeout(getCallableRef('runTrEnd', function ($receiver, err) {
            return $receiver.runTrEnd_r53ojt$(err), Unit;
          }.bind(null, Driver_getInstance())), 10);
          return;
        }
        try {
          this.tr.traceStep();
        }
         catch (err) {
          if (Kotlin.isType(err, SimulatorError)) {
            this.trTimer = window.setTimeout(getCallableRef('runTrEnd', function ($receiver, err) {
              return $receiver.runTrEnd_r53ojt$(err), Unit;
            }.bind(null, Driver_getInstance())), 10, err);
            return;
          }
           else
            throw err;
        }
        cycles = cycles + 1 | 0;
      }
      this.trTimer = window.setTimeout(getCallableRef('traceLoop', function ($receiver) {
        return $receiver.traceLoop_8be2vx$(), Unit;
      }.bind(null, Driver_getInstance())), 10);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        handleError('Trace tr Loop', e, Kotlin.isType(e, AlignmentError) || Kotlin.isType(e, StoreError) || Kotlin.isType(e, ExceededAllowedCyclesError));
        Renderer_getInstance().setNameButtonSpinning_ivxn3r$('simulator-trace', false);
        if ((tmp$ = this.trTimer) != null) {
          getCallableRef('clearTimeout', function ($receiver, handle) {
            return $receiver.clearTimeout(handle), Unit;
          }.bind(null, window))(tmp$);
        }
        this.trTimer = null;
      }
       else
        throw e;
    }
  };
  Driver.prototype.runTrEnd_r53ojt$ = function (err) {
    if (err === void 0)
      err = null;
    var tmp$;
    try {
      this.tr.traceEnd();
      if (err != null) {
        this.tr.traceAddError_pdchbv$(err);
      }
      this.tr.traceStringStart();
      this.trTimer = window.setTimeout(getCallableRef('traceStringLoop', function ($receiver) {
        return $receiver.traceStringLoop_8be2vx$(), Unit;
      }.bind(null, Driver_getInstance())), 10);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        handleError('Trace Tr End', e, Kotlin.isType(e, AlignmentError) || Kotlin.isType(e, StoreError) || Kotlin.isType(e, ExceededAllowedCyclesError));
        Renderer_getInstance().setNameButtonSpinning_ivxn3r$('simulator-trace', false);
        if ((tmp$ = this.trTimer) != null) {
          getCallableRef('clearTimeout', function ($receiver, handle) {
            return $receiver.clearTimeout(handle), Unit;
          }.bind(null, window))(tmp$);
        }
        this.trTimer = null;
      }
       else
        throw e;
    }
  };
  Driver.prototype.traceStringLoop_8be2vx$ = function () {
    var tmp$;
    try {
      var cycles = 0;
      while (cycles < 100) {
        if (!this.tr.traceStringStep()) {
          this.trTimer = window.setTimeout(getCallableRef('traceStringEnd', function ($receiver) {
            return $receiver.traceStringEnd_8be2vx$(), Unit;
          }.bind(null, Driver_getInstance())), 10);
          return;
        }
      }
      this.trTimer = window.setTimeout(getCallableRef('traceStringLoop', function ($receiver) {
        return $receiver.traceStringLoop_8be2vx$(), Unit;
      }.bind(null, Driver_getInstance())), 10);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        handleError('Trace String Loop', e, Kotlin.isType(e, AlignmentError) || Kotlin.isType(e, StoreError) || Kotlin.isType(e, ExceededAllowedCyclesError));
        Renderer_getInstance().setNameButtonSpinning_ivxn3r$('simulator-trace', false);
        if ((tmp$ = this.trTimer) != null) {
          getCallableRef('clearTimeout', function ($receiver, handle) {
            return $receiver.clearTimeout(handle), Unit;
          }.bind(null, window))(tmp$);
        }
        this.trTimer = null;
      }
       else
        throw e;
    }
  };
  Driver.prototype.traceStringEnd_8be2vx$ = function () {
    var tmp$;
    try {
      this.tr.traceStringEnd();
      Renderer_getInstance().clearConsole();
      Renderer_getInstance().printConsole_kcmwxo$(this.tr.getString());
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        handleError('Trace String End', e, Kotlin.isType(e, AlignmentError) || Kotlin.isType(e, StoreError) || Kotlin.isType(e, ExceededAllowedCyclesError));
      }
       else
        throw e;
    }
    Renderer_getInstance().setNameButtonSpinning_ivxn3r$('simulator-trace', false);
    if ((tmp$ = this.trTimer) != null) {
      getCallableRef('clearTimeout', function ($receiver, handle) {
        return $receiver.clearTimeout(handle), Unit;
      }.bind(null, window))(tmp$);
    }
    this.trTimer = null;
  };
  Driver.prototype.traceStart_8be2vx$ = function () {
    try {
      this.tr.trace();
      window.setTimeout(getCallableRef('traceString', function ($receiver) {
        return $receiver.traceString_8be2vx$(), Unit;
      }.bind(null, Driver_getInstance())), 10);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        handleError('Trace Start', e, Kotlin.isType(e, AlignmentError) || Kotlin.isType(e, StoreError) || Kotlin.isType(e, ExceededAllowedCyclesError));
        Renderer_getInstance().setNameButtonSpinning_ivxn3r$('simulator-trace', false);
      }
       else
        throw e;
    }
  };
  Driver.prototype.traceString_8be2vx$ = function () {
    try {
      this.tr.traceString();
      Renderer_getInstance().clearConsole();
      Renderer_getInstance().printConsole_kcmwxo$(this.tr.getString());
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        handleError('Trace to String', e);
      }
       else
        throw e;
    }
    Renderer_getInstance().setNameButtonSpinning_ivxn3r$('simulator-trace', false);
  };
  Driver.prototype.persistentStorage = function (b) {
    this.useLS = b;
    if (this.useLS) {
      console.log('Persistent storage has been enabled!');
      this.LS.set('venus', 'true');
      this.saveAll_6taknv$();
    }
     else {
      console.log('Persistent storage has been disabled!');
      this.LS.set('venus', 'false');
    }
  };
  Driver.prototype.psReset = function () {
    this.LS.reset();
    console.log('Persistent storage has been reset!');
  };
  Driver.prototype.saveIntervalFn = function () {
    if (this.useLS) {
      this.blinkSave_6taknv$(true);
      window.setTimeout(getCallableRef('blinkSave', function ($receiver, b) {
        return $receiver.blinkSave_6taknv$(b), Unit;
      }.bind(null, Driver_getInstance())), 500, false);
      this.saveAll_6taknv$();
    }
  };
  Driver.prototype.blinkSave_6taknv$ = function (b) {
    var tmp$;
    var e = Kotlin.isType(tmp$ = document.getElementById('sv'), HTMLButtonElement) ? tmp$ : throwCCE();
    if (b) {
      e.style.color = 'yellow';
    }
     else {
      e.style.color = '';
    }
  };
  Driver.prototype.saveAll_6taknv$ = function (override) {
    if (override === void 0)
      override = false;
    var tmp$, tmp$_0, tmp$_1;
    if (!(this.useLS | override)) {
      return;
    }
    this.loadTraceSettings_0();
    this.LS.set('trace_format', this.tr.format);
    this.LS.set('trace_base', this.tr.base.toString());
    this.LS.set('trace_totCommands', this.tr.totCommands.toString());
    this.LS.set('trace_maxSteps', this.tr.maxSteps.toString());
    this.LS.set('trace_instFirst', this.tr.instFirst.toString());
    this.LS.set('trace_wordAddressed', Tracer$Companion_getInstance().wordAddressed.toString());
    this.LS.set('trace_TwoStage', this.tr.twoStage.toString());
    this.LS.set('text_begin', MemorySegments_getInstance().TEXT_BEGIN.toString());
    this.LS.set('aligned_memory', this.simSettings.alignedAddress.toString());
    this.LS.set('mutable_text', this.simSettings.mutableText.toString());
    this.LS.set('ecall_exit_only', this.simSettings.ecallOnlyExit.toString());
    this.LS.set('set_regs_on_init', this.simSettings.setRegesOnInit.toString());
    this.LS.set('simargs', this.getDefaultArgs());
    codeMirror.save();
    this.LS.set('prog', this.getText());
    var numExtraCache = toInt(this.LS.safeget('cache_levels', '1'));
    if (this.cacheLevels.size < numExtraCache) {
      for (var i = this.cacheLevels.size + 1 | 0; i <= numExtraCache; i++) {
        this.LS.remove('cache_L' + toString(i) + '_associativity');
        this.LS.remove('cache_L' + toString(i) + '_cacheBlockSize');
        this.LS.remove('cache_L' + toString(i) + '_numberOfBlocks');
        this.LS.remove('cache_L' + toString(i) + '_placementPol');
        this.LS.remove('cache_L' + toString(i) + '_blockRepPolicy');
        this.LS.remove('cache_L' + toString(i) + '_seed');
        this.LS.remove('cache_L' + toString(i) + '_attach');
      }
    }
    this.LS.set('cache_levels', this.cacheLevels.size.toString());
    this.LS.set('cache_current_level', this.cache.cacheLevel.toString());
    tmp$ = this.cacheLevels;
    for (var i_0 = 0; i_0 !== tmp$.size; ++i_0) {
      var curCache = this.cacheLevels.get_za3lpa$(i_0);
      this.LS.set('cache_L' + toString(i_0 + 1 | 0) + '_associativity', curCache.associativity().toString());
      this.LS.set('cache_L' + toString(i_0 + 1 | 0) + '_cacheBlockSize', curCache.cacheBlockSize().toString());
      this.LS.set('cache_L' + toString(i_0 + 1 | 0) + '_numberOfBlocks', curCache.numberOfBlocks().toString());
      this.LS.set('cache_L' + toString(i_0 + 1 | 0) + '_placementPol', curCache.placementPol().toString());
      this.LS.set('cache_L' + toString(i_0 + 1 | 0) + '_blockRepPolicy', curCache.blockRepPolicy().toString());
      this.LS.set('cache_L' + toString(i_0 + 1 | 0) + '_seed', curCache.seed);
      this.LS.set('cache_L' + toString(i_0 + 1 | 0) + '_attach', curCache.attached.toString());
    }
    this.LS.set('activeFileinEditor', this.activeFileinEditor);
    if (this.active_abs_file_name == null) {
      tmp$_0 = 'n';
    }
     else {
      tmp$_0 = 'p' + toString(this.active_abs_file_name);
    }
    var s = tmp$_0;
    this.LS.set('active_abs_file_name', s);
    if (this.active_abs_file_path == null) {
      tmp$_1 = 'n';
    }
     else {
      tmp$_1 = 'p' + toString(this.active_abs_file_path);
    }
    s = tmp$_1;
    this.LS.set('active_abs_file_path', s);
    if (this.fileExplorerCurrentLocation_ebhuak$_0 != null) {
      this.LS.set('fileExplorerCurrentLocation', this.fileExplorerCurrentLocation.getPath());
    }
    this.LS.set('terminalCurrentLocation', this.terminal.vfs.currentLocation.getPath());
  };
  function Driver$loadAll$checkToSetTab$lambda(closure$checkToSetTab) {
    return function () {
      closure$checkToSetTab();
    };
  }
  function Driver$loadAll$checkToSetTab(this$Driver, closure$defaultTab) {
    return function closure$checkToSetTab() {
      load_update_message('Initializing Venus: Waiting on packages to load...');
      if (!this$Driver.ScriptManager.packagesLoading()) {
        this$Driver.openGenericMainTab(closure$defaultTab.v);
        this$Driver.driver_complete_loading = true;
        return;
      }
      window.setTimeout(Driver$loadAll$checkToSetTab$lambda(closure$checkToSetTab), 10);
    };
  }
  function Driver$loadAll$lambda(closure$checkToSetTab) {
    return function () {
      closure$checkToSetTab();
    };
  }
  Driver.prototype.loadAll_6taknv$ = function (b) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14;
    var t = new Tracer(this.sim);
    var fmt = t.format;
    var bs = t.base.toString();
    var totC = t.totCommands.toString();
    var ms = this.simSettings.maxSteps.toString();
    var instf = t.instFirst.toString();
    var tws = t.twoStage.toString();
    var wa = Tracer$Companion_getInstance().wordAddressed.toString();
    var txtStart = Renderer_getInstance().intToString_za3lpa$(MemorySegments_getInstance().TEXT_BEGIN);
    var am = this.simSettings.alignedAddress.toString();
    var mt = this.simSettings.mutableText.toString();
    var eeo = this.simSettings.ecallOnlyExit.toString();
    var sroi = this.simSettings.setRegesOnInit.toString();
    var simargs = '';
    var defaultTab = {v: 'venus'};
    codeMirror.save();
    this.p = this.getText();
    if (this.useLS) {
      console.log('Using local storage!');
      fmt = this.LS.safeget('trace_format', fmt);
      bs = this.LS.safeget('trace_base', bs);
      totC = this.LS.safeget('trace_totCommands', totC);
      ms = this.LS.safeget('trace_maxSteps', ms);
      instf = this.LS.safeget('trace_instFirst', instf);
      tws = this.LS.safeget('trace_TwoStage', tws);
      wa = this.LS.safeget('trace_wordAddressed', wa);
      txtStart = this.LS.safeget('text_begin', txtStart);
      am = this.LS.safeget('aligned_memory', am);
      mt = this.LS.safeget('mutable_text', mt);
      eeo = this.LS.safeget('ecall_exit_only', eeo);
      sroi = this.LS.safeget('set_regs_on_init', sroi);
      simargs = this.LS.safeget('simargs', simargs);
      defaultTab.v = this.LS.safeget('defaultTab', defaultTab.v);
      this.p = this.LS.safeget('prog', this.p);
      try {
        this.setNumberOfCacheLevels(toInt(this.LS.safeget('cache_levels', this.cacheLevels.size.toString())));
        this.updateCacheLvl_za3lpa$(toInt(this.LS.safeget('cache_current_level', this.cache.cacheLevel.toString())));
        tmp$ = this.cacheLevels;
        for (var i = 0; i !== tmp$.size; ++i) {
          var currentCache = this.cacheLevels.get_za3lpa$(i);
          currentCache.setCacheBlockSize_za3lpa$(toInt(this.LS.safeget('cache_L' + toString(i + 1 | 0) + '_cacheBlockSize', currentCache.cacheBlockSize().toString())));
          currentCache.setNumberOfBlocks_za3lpa$(toInt(this.LS.safeget('cache_L' + toString(i + 1 | 0) + '_numberOfBlocks', currentCache.numberOfBlocks().toString())));
          currentCache.setBlockRepPolicy_nu1lus$(BlockReplacementPolicy$valueOf(this.LS.safeget('cache_L' + toString(i + 1 | 0) + '_blockRepPolicy', currentCache.blockRepPolicy().toString())));
          currentCache.setPlacementPol_wfyhai$(PlacementPolicy$valueOf(this.LS.safeget('cache_L' + toString(i + 1 | 0) + '_placementPol', currentCache.placementPol().toString())));
          currentCache.setAssociativity_fzusl$(toInt(this.LS.safeget('cache_L' + toString(i + 1 | 0) + '_associativity', currentCache.associativity().toString())));
          currentCache.attach_6taknv$(equals(this.LS.safeget('cache_L' + toString(i + 1 | 0) + '_attach', currentCache.attached.toString()), 'true'));
          currentCache.setCurrentSeed_61zpoe$(this.LS.safeget('cache_L' + toString(i + 1 | 0) + '_seed', currentCache.seed));
        }
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          console.warn('An error occurred when loading the cache data!');
          console.warn(e);
        }
         else
          throw e;
      }
      try {
        this.VFS.load();
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          console.warn('An error occurred when loading the VFS data!');
          console.warn(e);
        }
         else
          throw e;
      }
      var tmp = this.LS.safeget('active_abs_file_name', '');
      if (equals(tmp, '') || equals(tmp, 'n')) {
        tmp$_0 = null;
      }
       else {
        tmp$_0 = substring(tmp, until(1, tmp.length));
      }
      this.active_abs_file_name = tmp$_0;
      tmp = this.LS.safeget('active_abs_file_path', '');
      if (equals(tmp, '') || equals(tmp, 'n')) {
        tmp$_1 = null;
      }
       else {
        tmp$_1 = substring(tmp, until(1, tmp.length));
      }
      var ntmp = tmp$_1;
      this.set_active_afpath_pdl1vj$(ntmp);
      this.activeFileinEditor = this.LS.safeget('activeFileinEditor', '');
      tmp = this.LS.safeget('fileExplorerCurrentLocation', '');
      this.fileExplorerCurrentLocation = this.VFS.sentinel;
      this.openVFObject(tmp);
      this.terminal.vfs.cd(this.LS.safeget('terminalCurrentLocation', ''));
      try {
        term.reset();
      }
       catch (e) {
        console.error(e);
      }
    }
     else {
      console.log('Local Storage has been disabled!');
    }
    (Kotlin.isType(tmp$_2 = document.getElementById('tregPattern'), HTMLTextAreaElement) ? tmp$_2 : throwCCE()).value = fmt;
    this.tr.format = fmt;
    (Kotlin.isType(tmp$_3 = document.getElementById('tbase-val'), HTMLInputElement) ? tmp$_3 : throwCCE()).value = bs;
    this.tr.base = toInt(bs);
    (Kotlin.isType(tmp$_4 = document.getElementById('ttot-cmds-val'), HTMLInputElement) ? tmp$_4 : throwCCE()).value = totC;
    this.tr.totCommands = toInt(totC);
    (Kotlin.isType(tmp$_5 = document.getElementById('tmaxsteps-val'), HTMLInputElement) ? tmp$_5 : throwCCE()).value = ms;
    this.tr.maxSteps = toInt(ms);
    this.simSettings.maxSteps = toInt(ms);
    Renderer_getInstance().renderButton_ypl1d1$(Kotlin.isType(tmp$_6 = document.getElementById('tinst-first'), HTMLButtonElement) ? tmp$_6 : throwCCE(), equals(instf, 'true'));
    this.tr.instFirst = equals(instf, 'true');
    Renderer_getInstance().renderButton_ypl1d1$(Kotlin.isType(tmp$_7 = document.getElementById('tPCWAddr'), HTMLButtonElement) ? tmp$_7 : throwCCE(), equals(wa, 'true'));
    Tracer$Companion_getInstance().wordAddressed = equals(wa, 'true');
    Renderer_getInstance().renderButton_ypl1d1$(Kotlin.isType(tmp$_8 = document.getElementById('tTwoStage'), HTMLButtonElement) ? tmp$_8 : throwCCE(), equals(tws, 'true'));
    this.tr.twoStage = equals(tws, 'true');
    var ts = Kotlin.isType(tmp$_9 = document.getElementById('text-start'), HTMLInputElement) ? tmp$_9 : throwCCE();
    ts.value = txtStart;
    this.verifyText(ts);
    Renderer_getInstance().renderButton_ypl1d1$(Kotlin.isType(tmp$_10 = document.getElementById('alignAddr'), HTMLButtonElement) ? tmp$_10 : throwCCE(), equals(am, 'true'));
    this.simSettings.alignedAddress = equals(am, 'true');
    Renderer_getInstance().renderButton_ypl1d1$(Kotlin.isType(tmp$_11 = document.getElementById('mutableText'), HTMLButtonElement) ? tmp$_11 : throwCCE(), equals(mt, 'true'));
    this.simSettings.mutableText = equals(mt, 'true');
    Renderer_getInstance().renderButton_ypl1d1$(Kotlin.isType(tmp$_12 = document.getElementById('ecallExit'), HTMLButtonElement) ? tmp$_12 : throwCCE(), equals(eeo, 'true'));
    this.simSettings.ecallOnlyExit = equals(eeo, 'true');
    Renderer_getInstance().renderButton_ypl1d1$(Kotlin.isType(tmp$_13 = document.getElementById('setRegsOnInit'), HTMLButtonElement) ? tmp$_13 : throwCCE(), equals(sroi, 'true'));
    this.simSettings.setRegesOnInit = equals(sroi, 'true');
    (Kotlin.isType(tmp$_14 = document.getElementById('ArgsList'), HTMLInputElement) ? tmp$_14 : throwCCE()).value = simargs;
    codeMirror.setValue(driver.p);
    this.p = '';
    this.mainCache.update();
    this.setCacheSettings();
    this.ScriptManager.loadDefaults();
    this.ScriptManager.loadPackages();
    this.checkURLParams();
    var checkToSetTab = Driver$loadAll$checkToSetTab(this, defaultTab);
    window.setTimeout(Driver$loadAll$lambda(checkToSetTab), 10);
    codeMirror.refresh();
  };
  Object.defineProperty(Driver.prototype, 'fileExplorerCurrentLocation', {
    get: function () {
      if (this.fileExplorerCurrentLocation_ebhuak$_0 == null)
        return throwUPAE('fileExplorerCurrentLocation');
      return this.fileExplorerCurrentLocation_ebhuak$_0;
    },
    set: function (fileExplorerCurrentLocation) {
      this.fileExplorerCurrentLocation_ebhuak$_0 = fileExplorerCurrentLocation;
    }
  });
  Driver.prototype.deleteVFObject = function (name) {
    this.VFS.rm_kcpqh4$(name, this.fileExplorerCurrentLocation);
    this.refreshVFS();
  };
  Driver.prototype.openVFObject = function (name) {
    var s = this.VFS.chdir_kcpqh4$(name, this.fileExplorerCurrentLocation);
    if (Kotlin.isType(s, VFSObject) && listOf_0([VFSType$Drive_getInstance(), VFSType$Folder_getInstance()]).contains_11rb$(s.type)) {
      this.fileExplorerCurrentLocation = s;
      this.openVFObjectfromObj_hijjve$(this.fileExplorerCurrentLocation);
    }
     else {
      console.log(s);
    }
  };
  Driver.prototype.openVFObjectfromObj_hijjve$ = function (obj) {
    var tmp$, tmp$_0, tmp$_1;
    Renderer_getInstance().clearObjectsFromDisplay();
    Renderer_getInstance().addFilePWD_hijjve$(obj);
    tmp$ = this.fileExplorerCurrentLocation.contents.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_2 = tmp$.next();
      var key = tmp$_2.key;
      var value = tmp$_2.value;
      if (listOf_0(['.', '..']).contains_11rb$(key)) {
        Renderer_getInstance().addObjectToDisplay_hhgamg$(Kotlin.isType(tmp$_0 = value, VFSObject) ? tmp$_0 : throwCCE(), key);
      }
       else {
        Renderer_getInstance().addObjectToDisplay_hhgamg$(Kotlin.isType(tmp$_1 = value, VFSObject) ? tmp$_1 : throwCCE());
      }
    }
  };
  Driver.prototype.refreshVFS = function () {
    this.openVFObject('.');
  };
  Driver.prototype.editVFObjectfromObj_hijjve$ = function (obj) {
    var tmp$;
    if (obj.type !== VFSType$File_getInstance()) {
      window.alert('Only files can be loaded into the editor.');
      return;
    }
    try {
      var txt = (Kotlin.isType(tmp$ = obj, VFSFile) ? tmp$ : throwCCE()).readText();
      this.active_abs_file_name = obj.label;
      this.set_active_afpath_pdl1vj$(obj.getPath());
      codeMirror.setValue(txt);
      this.openEditor();
      codeMirror.refresh();
      this.activeFileinEditor = obj.getPath();
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        console.error(e);
        window.alert('Could not load file to the editor!');
      }
       else
        throw e;
    }
  };
  Driver.prototype.editVFObject = function (name) {
    var s = this.VFS.getObjectFromPath_s9h4kc$(name, void 0, this.fileExplorerCurrentLocation);
    if (Kotlin.isType(s, VFSObject)) {
      this.editVFObjectfromObj_hijjve$(s);
    }
     else {
      console.log(s);
    }
  };
  Driver.prototype.saveVFObjectfromObj_cmd4wv$ = function (obj, save) {
    if (save === void 0)
      save = true;
    var tmp$;
    var txt;
    try {
      codeMirror.save();
      txt = this.getText();
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        console.error(e);
        window.alert('Could not save file!');
        return;
      }
       else
        throw e;
    }
    if (save) {
      if (obj.type !== VFSType$File_getInstance()) {
        window.alert('You can (currently) only save to files!');
        return;
      }
      var file = Kotlin.isType(tmp$ = obj, VFSFile) ? tmp$ : throwCCE();
      file.setText(txt);
      this.VFS.save();
    }
    this.active_abs_file_name = obj.label;
    this.set_active_afpath_pdl1vj$(obj.getPath());
    this.activeFileinEditor = obj.getPath();
  };
  Driver.prototype.saveVFObject = function (name) {
    var s = this.VFS.getObjectFromPath_s9h4kc$(name, void 0, this.fileExplorerCurrentLocation);
    if (Kotlin.isType(s, VFSObject)) {
      this.saveVFObjectfromObj_cmd4wv$(s);
    }
     else {
      console.log(s);
    }
  };
  Driver.prototype.clearActiveFileInEditor = function () {
    this.active_abs_file_name = null;
    this.set_active_afpath_pdl1vj$(null);
  };
  Driver.prototype.vdbVFObject = function (name) {
    var s = this.VFS.getObjectFromPath_s9h4kc$(name, void 0, this.fileExplorerCurrentLocation);
    if (Kotlin.isType(s, VFSObject)) {
      var cur_loc = this.VFS.currentLocation;
      this.VFS.currentLocation = this.fileExplorerCurrentLocation;
      var res = vdb.execute(arrayListOf([s.getPath()]), this.terminal, false);
      this.VFS.currentLocation = cur_loc;
      if (!equals(res, '')) {
        alert('[ERROR]\n' + res);
      }
    }
     else {
      console.log(s);
    }
  };
  Driver.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Driver',
    interfaces: []
  };
  var Driver_instance = null;
  function Driver_getInstance() {
    if (Driver_instance === null) {
      new Driver();
    }
    return Driver_instance;
  }
  function handleError(where, error, h) {
    if (h === void 0)
      h = false;
    var tmp$, tmp$_0;
    if (!h)
      if (Kotlin.isType(error, SimulatorError)) {
        tmp$_0 = (tmp$ = error.handled) != null ? tmp$ : false;
      }
       else {
        tmp$_0 = false;
      }
     else
      tmp$_0 = true;
    var handled = tmp$_0;
    if (!(Kotlin.isType(error, SimulatorError) && error.infe != null)) {
      Renderer_getInstance().clearConsole();
    }
     else {
      handled = true;
    }
    try {
      var olduseLS = Driver_getInstance().useLS;
      Driver_getInstance().useLS = false;
      var oldlsm = Driver_getInstance().LS.lsm_8be2vx$;
      Driver_getInstance().LS.lsm_8be2vx$ = new LocalStorageManager('venus_error');
      Driver_getInstance().LS.remove('venus_error');
      Driver_getInstance().LS.set('venus', 'true');
      Driver_getInstance().saveAll_6taknv$(true);
      var t_0 = window.localStorage.getItem('venus_error');
      window.localStorage.removeItem('venus_error');
      Driver_getInstance().LS.lsm_8be2vx$ = oldlsm;
      Driver_getInstance().useLS = olduseLS;
      if (handled) {
        Renderer_getInstance().displayError_za3rmp$('[ERROR] An error has occurred!\n\n');
      }
       else {
        Renderer_getInstance().displayError_za3rmp$('[ERROR] An uncaught error has occurred! Here are the details that may help solve this issue.\n\n');
      }
      Renderer_getInstance().displayError_za3rmp$('Error:\n`' + error.toString());
      Renderer_getInstance().displayError_za3rmp$("\n\nID:\n'" + where + "'!\n\n");
      if (!handled) {
        Renderer_getInstance().displayError_za3rmp$('`\n\nData:\n' + t_0);
      }
    }
     catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        Renderer_getInstance().displayError_za3rmp$("An error occurred when trying to handle the error! Please tell me what you did since I do not fully know how you caused this error and could not generate a trace for me to figure that out. All I know is that the error was here: '" + where + "' and was:\n" + error.toString());
      }
       else
        throw t;
    }
  }
  function LocalStorage() {
    this.lsm_8be2vx$ = new LocalStorageManager('venus');
  }
  LocalStorage.prototype.get = function (key) {
    return this.lsm_8be2vx$.get(key);
  };
  LocalStorage.prototype.set = function (key, value) {
    this.lsm_8be2vx$.set(key, value);
  };
  LocalStorage.prototype.remove = function (key) {
    this.lsm_8be2vx$.remove(key);
  };
  LocalStorage.prototype.reset = function () {
    this.lsm_8be2vx$.reset();
  };
  LocalStorage.prototype.safeget = function (key, prevVal) {
    var v = this.get(key);
    if (equals(v, 'undefined')) {
      return prevVal;
    }
    return v;
  };
  LocalStorage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalStorage',
    interfaces: []
  };
  function Renderer() {
    Renderer_instance = this;
    this.activeRegister_0 = null;
    this.activeInstruction_0 = null;
    this.activeMemoryAddress = 0;
    this.sim_0 = new Simulator_0(new LinkedProgram(), new VirtualFileSystem('dummy'));
    this.displayType_0 = 'hex';
    this.mainTabs = arrayListOf(['simulator', 'editor', 'venus']);
    this.MEMORY_CONTEXT = 6;
    this.pkgmsgTimeout = null;
    this.hexMap_0 = listOf_0([toBoxedChar(48), toBoxedChar(49), toBoxedChar(50), toBoxedChar(51), toBoxedChar(52), toBoxedChar(53), toBoxedChar(54), toBoxedChar(55), toBoxedChar(56), toBoxedChar(57), toBoxedChar(65), toBoxedChar(66), toBoxedChar(67), toBoxedChar(68), toBoxedChar(69), toBoxedChar(70)]);
  }
  Renderer.prototype.renderTab = function (tab, tabs) {
    var tmp$;
    if (!tabs.contains_11rb$(tab)) {
      return;
    }
    tmp$ = tabs.iterator();
    while (tmp$.hasNext()) {
      var t = tmp$.next();
      var disp = 'none';
      if (equals(t, tab)) {
        disp = 'block';
      }
      this.tabSetVisibility(t, disp);
    }
  };
  Renderer.prototype.addTab = function (tabName, tabList) {
    if (!tabList.contains_11rb$(tabName)) {
      tabList.add_11rb$(tabName);
      return true;
    }
    return false;
  };
  Renderer.prototype.removeTab = function (tabName, tabList) {
    if (tabList.contains_11rb$(tabName)) {
      tabList.remove_11rb$(tabName);
      return true;
    }
    return false;
  };
  Renderer.prototype.renderSimulator = function () {
    this.renderTab('simulator', this.mainTabs);
  };
  Renderer.prototype.loadSimulator_pivkot$ = function (displaySim) {
    this.sim_0 = displaySim;
    this.setRunButtonSpinning_6taknv$(false);
    this.renderProgramListing_0();
    this.clearConsole();
    this.updateAll();
    this.renderSimButtons();
  };
  Renderer.prototype.renderSimButtons = function () {
    var tmp$, tmp$_0;
    var simbtns = Kotlin.isType(tmp$ = document.getElementById('simulator-buttons'), HTMLDivElement) ? tmp$ : throwCCE();
    var simassmbbtns = Kotlin.isType(tmp$_0 = document.getElementById('simulator-assemble-buttons'), HTMLDivElement) ? tmp$_0 : throwCCE();
    simassmbbtns.style.display = 'none';
    simbtns.style.display = '';
  };
  Renderer.prototype.renderAssembleButtons = function () {
    var tmp$, tmp$_0;
    var simbtns = Kotlin.isType(tmp$ = document.getElementById('simulator-buttons'), HTMLDivElement) ? tmp$ : throwCCE();
    var simassmbbtns = Kotlin.isType(tmp$_0 = document.getElementById('simulator-assemble-buttons'), HTMLDivElement) ? tmp$_0 : throwCCE();
    simassmbbtns.style.display = '';
    simbtns.style.display = 'none';
  };
  Renderer.prototype.renderEditor = function () {
    this.renderTab('editor', this.mainTabs);
    this.renderAssembleButtons();
  };
  Renderer.prototype.renderVenus = function () {
    this.renderTab('venus', this.mainTabs);
  };
  Renderer.prototype.renderURLMaker = function () {
    this.renderTab('urlmaker', this.mainTabs);
  };
  Renderer.prototype.tabSetVisibility = function (tab, display) {
    var tmp$, tmp$_0;
    var tabView = Kotlin.isType(tmp$ = document.getElementById(tab + '-tab-view'), HTMLElement) ? tmp$ : throwCCE();
    var tabDisplay = Kotlin.isType(tmp$_0 = document.getElementById(tab + '-tab'), HTMLElement) ? tmp$_0 : throwCCE();
    tabView.style.display = display;
    if (equals(display, 'none')) {
      tabDisplay.classList.remove('is-active');
    }
     else {
      tabDisplay.classList.add('is-active');
    }
  };
  Renderer.prototype.displayWarning_61zpoe$ = function (w) {
    this.printConsole_kcmwxo$(w);
  };
  Renderer.prototype.displayError_za3rmp$ = function (thing) {
    this.printConsole_kcmwxo$('\n------STDERR------\n');
    this.printConsole_kcmwxo$(thing);
    this.printConsole_kcmwxo$('\n----STDERR_END----\n');
  };
  Renderer.prototype.stdout_za3rmp$ = function (thing) {
    this.printConsole_kcmwxo$(thing);
  };
  Renderer.prototype.stderr_za3rmp$ = function (thing) {
    this.displayError_za3rmp$(thing);
  };
  Renderer.prototype.displayAssemblerError_9fh0nh$ = function (e) {
    alert('[ERROR]\n' + e.message);
  };
  Renderer.prototype.renderProgramListing_0 = function () {
    var tmp$;
    this.clearProgramListing();
    tmp$ = this.sim_0.linkedProgram.prog.insts.size;
    for (var i = 0; i < tmp$; i++) {
      var programDebug = this.sim_0.linkedProgram.dbg.get_za3lpa$(i);
      var dbg = programDebug.component2();
      var line = dbg.component2();
      var mcode = this.sim_0.linkedProgram.prog.insts.get_za3lpa$(i);
      var pc = ensureNotNull(this.sim_0.instOrderMapping.get_11rb$(i));
      this.addToProgramListing_oi48jx$(pc, mcode, line);
    }
  };
  Renderer.prototype.updateAll = function () {
    this.updateText();
    this.updatePC_3p81yu$(this.sim_0.getPC());
    this.updateMemory_za3lpa$(this.activeMemoryAddress);
    this.updateControlButtons();
    for (var i = 0; i <= 31; i++) {
      this.updateRegister_lirtej$(i, this.sim_0.getReg_za3lpa$(i));
    }
    for (var i_0 = 0; i_0 <= 31; i_0++) {
      this.updateFRegister_zc64of$(i_0, this.sim_0.getFReg_za3lpa$(i_0));
    }
  };
  Renderer.prototype.updateFromDiffs_lk28az$ = function (diffs) {
    var tmp$;
    tmp$ = diffs.iterator();
    while (tmp$.hasNext()) {
      var diff = tmp$.next();
      if (Kotlin.isType(diff, RegisterDiff))
        this.updateRegister_lirtej$(diff.id, diff.v, true);
      else if (Kotlin.isType(diff, FRegisterDiff))
        this.updateFRegister_zc64of$(diff.id, diff.v, true);
      else if (Kotlin.isType(diff, PCDiff))
        this.updatePC_3p81yu$(diff.pc);
      else if (Kotlin.isType(diff, MemoryDiff))
        this.updateMemory_za3lpa$(numberToInt(diff.addr));
      else if (Kotlin.isType(diff, CacheDiff))
        this.updateCache_e3g4se$(diff.addr);
      else if (!Kotlin.isType(diff, InstructionDiff)) {
        println('diff not yet implemented');
      }
    }
  };
  Renderer.prototype.clearProgramListing = function () {
    this.getElement_61zpoe$('program-listing-body').innerHTML = '';
  };
  function Renderer$addToProgramListing$lambda(closure$pcx) {
    return function (it) {
      Driver_getInstance().toggleBreakpoint(closure$pcx);
      return Unit;
    };
  }
  Renderer.prototype.addToProgramListing_oi48jx$ = function (pcx, mcode, progLine, invalidInst) {
    if (invalidInst === void 0)
      invalidInst = false;
    var tmp$, tmp$_0;
    var programTable = Kotlin.isType(tmp$ = this.getElement_61zpoe$('program-listing-body'), HTMLTableSectionElement) ? tmp$ : throwCCE();
    var newRow = Kotlin.isType(tmp$_0 = programTable.insertRow(), HTMLTableRowElement) ? tmp$_0 : throwCCE();
    newRow.id = 'instruction-' + pcx;
    newRow.onclick = Renderer$addToProgramListing$lambda(pcx);
    var pcline = newRow.insertCell(0);
    var pcText = document.createTextNode('0x' + toString_0(pcx, 16));
    pcline.appendChild(pcText);
    var hexRepresention = this.toHex_ydzd23$(mcode.get_cv51c2$(InstructionField$ENTIRE_getInstance()), mcode.length * 2 | 0);
    var machineCode = newRow.insertCell(1);
    var machineCodeText = document.createTextNode(hexRepresention);
    machineCode.appendChild(machineCodeText);
    var basicCode = newRow.insertCell(2);
    var basicCodeText = document.createTextNode(invalidInst ? progLine : Instruction$Companion_getInstance().get_6cx2xq$(mcode).disasm.invoke_6cx2xq$(mcode));
    basicCode.appendChild(basicCodeText);
    var line = newRow.insertCell(3);
    var lineText = document.createTextNode(progLine);
    line.appendChild(lineText);
  };
  Renderer.prototype.updateProgramListing_fttt2j$ = function (idx, inst, orig) {
    if (orig === void 0)
      orig = null;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var instTab = document.getElementById('instruction-' + idx.toString());
    var children = instTab != null ? instTab.children : null;
    var mcode = new MachineCode(inst);
    var code = 'Invalid Instruction';
    try {
      code = Instruction$Companion_getInstance().get_6cx2xq$(mcode).disasm.invoke_6cx2xq$(mcode);
    }
     catch (e) {
      if (!Kotlin.isType(e, SimulatorError))
        throw e;
    }
    var pre = new InstructionDiff(numberToInt(idx), userStringToInt((tmp$_0 = (tmp$ = children != null ? children[1] : null) != null ? tmp$.innerHTML : null) != null ? tmp$_0 : '-1'), (tmp$_2 = (tmp$_1 = children != null ? children[3] : null) != null ? tmp$_1.innerHTML : null) != null ? tmp$_2 : '');
    (tmp$_3 = children != null ? children[1] : null) != null ? (tmp$_3.innerHTML = this.toHex_ydzd23$(mcode.get_cv51c2$(InstructionField$ENTIRE_getInstance()))) : null;
    (tmp$_4 = children != null ? children[2] : null) != null ? (tmp$_4.innerHTML = code) : null;
    (tmp$_5 = children != null ? children[3] : null) != null ? (tmp$_5.innerHTML = orig != null ? orig : code) : null;
    return pre;
  };
  Renderer.prototype.getElement_61zpoe$ = function (id) {
    var tmp$;
    return Kotlin.isType(tmp$ = document.getElementById(id), HTMLElement) ? tmp$ : throwCCE();
  };
  Renderer.prototype.updateRegister_lirtej$ = function (id, value, setActive) {
    if (setActive === void 0)
      setActive = false;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var register = Kotlin.isType(tmp$ = this.getElement_61zpoe$('reg-' + id + '-val'), HTMLInputElement) ? tmp$ : throwCCE();
    switch (this.displayType_0) {
      case 'Hex':
        tmp$_0 = this.toHex_ydzd23$(numberToInt(value));
        break;
      case 'Decimal':
        tmp$_0 = value.toString();
        break;
      case 'Unsigned':
        tmp$_0 = this.toUnsigned_0(numberToInt(value));
        break;
      case 'ASCII':
        tmp$_0 = this.toAscii_0(numberToInt(value));
        break;
      default:tmp$_0 = this.toHex_ydzd23$(numberToInt(value));
        break;
    }
    register.value = tmp$_0;
    if (setActive) {
      (tmp$_2 = (tmp$_1 = this.activeRegister_0) != null ? tmp$_1.classList : null) != null ? (tmp$_2.remove('is-modified'), Unit) : null;
      register.classList.add('is-modified');
      this.activeRegister_0 = register;
    }
  };
  Renderer.prototype.updateFRegister_zc64of$ = function (id, v, setActive) {
    if (setActive === void 0)
      setActive = false;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var fregister = Kotlin.isType(tmp$ = this.getElement_61zpoe$('freg-' + id + '-val'), HTMLInputElement) ? tmp$ : throwCCE();
    switch (this.displayType_0) {
      case 'Hex':
        tmp$_0 = v.toHex();
        break;
      case 'Decimal':
        tmp$_0 = v.toDecimal();
        break;
      case 'Unsigned':
        tmp$_0 = v.toUnsigned();
        break;
      case 'ASCII':
        tmp$_0 = v.toAscii();
        break;
      default:tmp$_0 = v.toHex();
        break;
    }
    fregister.value = tmp$_0;
    if (setActive) {
      (tmp$_2 = (tmp$_1 = this.activeRegister_0) != null ? tmp$_1.classList : null) != null ? (tmp$_2.remove('is-modified'), Unit) : null;
      fregister.classList.add('is-modified');
      this.activeRegister_0 = fregister;
    }
  };
  Renderer.prototype.intToString_za3lpa$ = function (value) {
    var tmp$;
    switch (this.displayType_0) {
      case 'Hex':
        tmp$ = this.toHex_ydzd23$(value);
        break;
      case 'Decimal':
        tmp$ = value.toString();
        break;
      case 'Unsigned':
        tmp$ = this.toUnsigned_0(value);
        break;
      case 'ASCII':
        tmp$ = this.toAscii_0(value);
        break;
      default:tmp$ = this.toHex_ydzd23$(value);
        break;
    }
    var v = tmp$;
    return v;
  };
  Renderer.prototype.updateCache_e3g4se$ = function (a) {
    var tmp$, tmp$_0, tmp$_1;
    (Kotlin.isType(tmp$ = document.getElementById('hit-count'), HTMLInputElement) ? tmp$ : throwCCE()).value = Driver_getInstance().cache.getHitCount().toString();
    var hr = Driver_getInstance().cache.getHitRate();
    (Kotlin.isType(tmp$_0 = document.getElementById('hit-rate'), HTMLInputElement) ? tmp$_0 : throwCCE()).value = (isNaN_0(hr) ? '???' : hr).toString();
    (Kotlin.isType(tmp$_1 = document.getElementById('access-amt'), HTMLInputElement) ? tmp$_1 : throwCCE()).value = Driver_getInstance().cache.memoryAccessCount().toString();
    try {
      this.updateAllCacheBlocks();
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.makeCacheBlocks();
        this.updateAllCacheBlocks();
      }
       else
        throw e;
    }
  };
  Renderer.prototype.renderSetCacheLevel_za3lpa$ = function (i) {
    var tmp$;
    var clvl = Kotlin.isType(tmp$ = document.getElementById('cacheLevel'), HTMLSelectElement) ? tmp$ : throwCCE();
    clvl.value = 'L' + i.toString();
  };
  Renderer.prototype.renderAddCacheLevel = function () {
    var tmp$, tmp$_0;
    var clvl = Kotlin.isType(tmp$ = document.getElementById('cacheLevel'), HTMLSelectElement) ? tmp$ : throwCCE();
    var newCacheNumber = clvl.options.length + 1 | 0;
    var option = Kotlin.isType(tmp$_0 = document.createElement('option'), HTMLOptionElement) ? tmp$_0 : throwCCE();
    option.innerHTML = 'L' + newCacheNumber.toString();
    clvl.options[clvl.options.length] = option;
  };
  Renderer.prototype.renderRemoveCacheLevel = function () {
    var tmp$;
    var clvl = Kotlin.isType(tmp$ = document.getElementById('cacheLevel'), HTMLSelectElement) ? tmp$ : throwCCE();
    clvl.options[clvl.options.length - 1 | 0] = null;
  };
  Renderer.prototype.makeCacheBlocks = function () {
    var tmp$;
    var t = document.createElement('table');
    t.setAttribute('style', 'border-collapse: collapse;border: 1px solid black;width:100%;');
    var bs = Driver_getInstance().cache.getBlocksState();
    var b = Driver_getInstance().cache.currentState().getChangedBlockState();
    for (var i = 0; i !== bs.size; ++i) {
      var tr = document.createElement('tr');
      var th = document.createElement('th');
      if (!b.noChange && b.block === i) {
        tr.setAttribute('style', 'border: 2px solid black;');
      }
       else {
        tr.setAttribute('style', 'border: 1px solid black;');
      }
      th.id = 'cache-block-' + i.toString();
      th.innerHTML = i.toString() + ') ' + bs.get_za3lpa$(i);
      tr.appendChild(th);
      t.appendChild(tr);
    }
    var cb = Kotlin.isType(tmp$ = document.getElementById('cacheBlocks'), HTMLDivElement) ? tmp$ : throwCCE();
    cb.innerHTML = '';
    cb.appendChild(t);
  };
  Renderer.prototype.updateCacheBlocks_xfjuj9$ = function (b) {
    if (b === void 0)
      b = Driver_getInstance().cache.currentState().getChangedBlockState();
    var tmp$, tmp$_0;
    if (!b.noChange) {
      var pb = Driver_getInstance().cache.currentState().getPrevChangedBlock();
      if (pb !== -1) {
        var prevelm = document.getElementById('cache-block-' + pb.toString());
        (tmp$ = prevelm != null ? prevelm.parentElement : null) != null ? (tmp$.setAttribute('style', 'border: 1px solid black;'), Unit) : null;
      }
      var elm = document.getElementById('cache-block-' + b.block.toString());
      (tmp$_0 = elm != null ? elm.parentElement : null) != null ? (tmp$_0.setAttribute('style', 'border: 2px solid black;'), Unit) : null;
      if (b.state === BlockState$HIT_getInstance()) {
        elm != null ? (elm.innerHTML = b.block.toString() + ') HIT') : null;
        elm != null ? (elm.setAttribute('style', 'background-color:#00d1b2;'), Unit) : null;
      }
       else if (b.state === BlockState$MISS_getInstance()) {
        elm != null ? (elm.innerHTML = b.block.toString() + ') MISS') : null;
        elm != null ? (elm.setAttribute('style', 'background-color:#ff4e4e;'), Unit) : null;
      }
       else {
        elm != null ? (elm.innerHTML = b.block.toString() + ') EMPTY') : null;
        elm != null ? (elm.setAttribute('style', ''), Unit) : null;
      }
    }
  };
  Renderer.prototype.updateAllCacheBlocks = function () {
    var bs = Driver_getInstance().cache.currentState().getBlocksState();
    for (var i = 0; i !== bs.size; ++i) {
      var tmp$;
      var elm = document.getElementById('cache-block-' + i.toString());
      (tmp$ = elm != null ? elm.parentElement : null) != null ? (tmp$.setAttribute('style', 'border: 1px solid black;'), Unit) : null;
      if (BlockState$valueOf(bs.get_za3lpa$(i)) === BlockState$HIT_getInstance()) {
        elm != null ? (elm.innerHTML = i.toString() + ') HIT') : null;
        elm != null ? (elm.setAttribute('style', 'background-color:#00d1b2;'), Unit) : null;
      }
       else if (BlockState$valueOf(bs.get_za3lpa$(i)) === BlockState$MISS_getInstance()) {
        elm != null ? (elm.innerHTML = i.toString() + ') MISS') : null;
        elm != null ? (elm.setAttribute('style', 'background-color:#ff4e4e;'), Unit) : null;
      }
       else {
        elm != null ? (elm.innerHTML = i.toString() + ') EMPTY') : null;
        elm != null ? (elm.setAttribute('style', ''), Unit) : null;
      }
    }
    this.updateCacheBlocks_xfjuj9$();
  };
  Renderer.prototype.updatePC_3p81yu$ = function (pc) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var idx = numberToInt(pc);
    (tmp$_0 = (tmp$ = this.activeInstruction_0) != null ? tmp$.classList : null) != null ? (tmp$_0.remove('is-selected'), Unit) : null;
    var newActiveInstruction = (tmp$_1 = document.getElementById('instruction-' + idx)) == null || Kotlin.isType(tmp$_1, HTMLElement) ? tmp$_1 : throwCCE();
    (tmp$_2 = newActiveInstruction != null ? newActiveInstruction.classList : null) != null ? (tmp$_2.add('is-selected'), Unit) : null;
    newActiveInstruction != null ? (newActiveInstruction.scrollIntoView(false), Unit) : null;
    this.activeInstruction_0 = newActiveInstruction;
  };
  Renderer.prototype.printConsole_kcmwxo$ = function (thing) {
    var tmp$;
    var console = Kotlin.isType(tmp$ = this.getElement_61zpoe$('console-output'), HTMLTextAreaElement) ? tmp$ : throwCCE();
    console.value = console.value + thing.toString();
  };
  Renderer.prototype.clearConsole = function () {
    var tmp$;
    var console = Kotlin.isType(tmp$ = this.getElement_61zpoe$('console-output'), HTMLTextAreaElement) ? tmp$ : throwCCE();
    console.value = '';
  };
  Renderer.prototype.setRunButtonSpinning_6taknv$ = function (spinning) {
    var runButton = this.getElement_61zpoe$('simulator-run');
    if (spinning) {
      runButton.classList.add('is-loading');
      this.disableControlButtons();
    }
     else {
      runButton.classList.remove('is-loading');
      this.updateControlButtons();
    }
  };
  Renderer.prototype.setNameButtonSpinning_ivxn3r$ = function (name, spinning) {
    var runButton = this.getElement_61zpoe$(name);
    if (spinning) {
      runButton.classList.add('is-loading');
      this.disableControlButtons();
    }
     else {
      runButton.classList.remove('is-loading');
      this.updateControlButtons();
    }
  };
  Renderer.prototype.setButtonDisabled_0 = function (id, disabled) {
    var tmp$;
    var button = Kotlin.isType(tmp$ = this.getElement_61zpoe$(id), HTMLButtonElement) ? tmp$ : throwCCE();
    button.disabled = disabled;
  };
  Renderer.prototype.updateControlButtons = function () {
    this.setButtonDisabled_0('simulator-reset', !this.sim_0.canUndo());
    this.setButtonDisabled_0('simulator-undo', !this.sim_0.canUndo());
    this.setButtonDisabled_0('simulator-step', this.sim_0.isDone());
    this.setButtonDisabled_0('simulator-run', this.sim_0.isDone());
    this.setButtonDisabled_0('simulator-trace', this.sim_0.instOrderMapping.isEmpty() | this.sim_0.isDone());
  };
  Renderer.prototype.disableControlButtons = function () {
    this.setButtonDisabled_0('simulator-reset', true);
    this.setButtonDisabled_0('simulator-undo', true);
    this.setButtonDisabled_0('simulator-step', true);
  };
  Renderer.prototype.renderBreakpointAt_fzusl$ = function (idx, state) {
    var row = this.getElement_61zpoe$('instruction-' + idx);
    if (state) {
      row.classList.add('is-breakpoint');
    }
     else {
      row.classList.remove('is-breakpoint');
    }
  };
  Renderer.prototype.renderMemoryTab = function () {
    this.tabSetVisibility('memory', 'block');
    this.tabSetVisibility('register', 'none');
    this.tabSetVisibility('cache', 'none');
  };
  Renderer.prototype.renderRegisterTab = function () {
    this.tabSetVisibility('register', 'block');
    this.tabSetVisibility('memory', 'none');
    this.tabSetVisibility('cache', 'none');
  };
  Renderer.prototype.renderCacheTab = function () {
    this.tabSetVisibility('cache', 'block');
    this.tabSetVisibility('memory', 'none');
    this.tabSetVisibility('register', 'none');
  };
  Renderer.prototype.renderSettingsTab = function () {
    this.tabSetVisibility('settings', 'block');
  };
  Renderer.prototype.renderGeneralSettingsTab = function () {
    this.tabSetVisibility('general-settings', 'block');
    this.tabSetVisibility('tracer-settings', 'none');
    this.tabSetVisibility('packages', 'none');
  };
  Renderer.prototype.renderTracerSettingsTab = function () {
    this.tabSetVisibility('general-settings', 'none');
    this.tabSetVisibility('tracer-settings', 'block');
    this.tabSetVisibility('packages', 'none');
  };
  Renderer.prototype.renderPackagesTab = function () {
    this.tabSetVisibility('general-settings', 'none');
    this.tabSetVisibility('tracer-settings', 'none');
    this.tabSetVisibility('packages', 'block');
  };
  Renderer.prototype.renderRegsTab = function () {
    this.tabSetVisibility('regs', 'block');
    this.tabSetVisibility('fregs', 'none');
  };
  Renderer.prototype.renderFRegsTab = function () {
    this.tabSetVisibility('regs', 'none');
    this.tabSetVisibility('fregs', 'block');
  };
  Renderer.prototype.rendererAddPackage_o0ij6q$ = function (pid, enabled, removable) {
    if (removable === void 0)
      removable = true;
    var tmp$;
    var rp = document.createElement('div');
    addClass(rp, ['panel-block']);
    rp.id = 'package-' + pid;
    var name = document.createElement('div');
    name.innerHTML = pid;
    rp.appendChild(name);
    var enabledButton = document.createElement('button');
    enabledButton.id = 'penable-button-' + pid;
    addClass(enabledButton, ['button']);
    if (enabled) {
      addClass(enabledButton, ['is-primary']);
    }
    enabledButton.setAttribute('onclick', "this.classList.add('is-loading');driver.togglePackage('" + pid + "')");
    enabledButton.innerHTML = 'Enabled';
    rp.appendChild(enabledButton);
    if (removable) {
      var deleteButton = document.createElement('button');
      deleteButton.id = 'pdelete-button-' + pid;
      addClass(deleteButton, ['button']);
      deleteButton.setAttribute('onclick', "this.classList.add('is-loading');driver.removePackage('" + pid + "')");
      deleteButton.setAttribute('style', 'background-color: red;');
      deleteButton.innerHTML = 'Delete';
      rp.appendChild(deleteButton);
    }
    (tmp$ = document.getElementById('package-list')) != null ? tmp$.appendChild(rp) : null;
  };
  Renderer.prototype.rendererRemovePackage_61zpoe$ = function (pid) {
    var tmp$;
    (tmp$ = document.getElementById('package-' + pid)) != null ? (tmp$.remove(), Unit) : null;
  };
  Renderer.prototype.rendererUpdatePackage_ivxn3r$ = function (pid, state) {
    var p = document.getElementById('penable-button-' + pid);
    if (p != null) {
      if (state) {
        addClass(p, ['is-primary']);
      }
       else {
        removeClass(p, ['is-primary']);
      }
      removeClass(p, ['is-loading']);
    }
     else {
      console.log("Could not find package '" + pid + "!'");
    }
  };
  Renderer.prototype.pkgMsg_61zpoe$ = function (m) {
    var tmp$, tmp$_0;
    if (this.pkgmsgTimeout != null) {
      tmp$_0 = (tmp$ = this.pkgmsgTimeout) != null ? tmp$ : -1;
      window.clearTimeout(tmp$_0);
    }
    var d = document.getElementById('package-msgs');
    d != null ? (d.innerHTML = m) : null;
    this.pkgmsgTimeout = window.setTimeout(getCallableRef('clearPkgMsg', function ($receiver) {
      return $receiver.clearPkgMsg(), Unit;
    }.bind(null, Renderer_getInstance())), 10000);
  };
  Renderer.prototype.clearPkgMsg = function () {
    var tmp$;
    (tmp$ = document.getElementById('package-msgs')) != null ? (tmp$.innerHTML = '') : null;
  };
  Renderer.prototype.updateMemory_za3lpa$ = function (addr) {
    var wordAddress = addr >> 2 << 2;
    if (this.mustMoveMemoryDisplay_0(wordAddress)) {
      this.activeMemoryAddress = wordAddress;
    }
    for (var rowIdx = -6; rowIdx <= 6; rowIdx++) {
      var row = this.getElement_61zpoe$('mem-row-' + rowIdx);
      var rowAddr = this.activeMemoryAddress + (4 * rowIdx | 0) | 0;
      this.renderMemoryRow_0(row, rowAddr);
    }
  };
  Renderer.prototype.mustMoveMemoryDisplay_0 = function (wordAddress) {
    var tmp$;
    tmp$ = this.activeMemoryAddress - wordAddress >> 2;
    return !(-6 <= tmp$ && tmp$ <= 6);
  };
  Renderer.prototype.renderMemoryRow_0 = function (urow, rowAddr) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var row = this.cleanTableRow_0(urow);
    var tdAddress = Kotlin.isType(tmp$ = row.childNodes[0], HTMLTableCellElement) ? tmp$ : throwCCE();
    if (rowAddr >= 0) {
      tdAddress.innerText = this.toHex_ydzd23$(rowAddr);
      for (var i = 1; i <= 4; i++) {
        var tdByte = Kotlin.isType(tmp$_0 = row.childNodes[i], HTMLTableCellElement) ? tmp$_0 : throwCCE();
        var byte = this.sim_0.loadByte_3p81yu$(rowAddr + i - 1 | 0);
        switch (this.displayType_0) {
          case 'Hex':
            tmp$_1 = this.byteToHex_0(byte);
            break;
          case 'Decimal':
            tmp$_1 = this.byteToDec_0(byte);
            break;
          case 'Unsigned':
            tmp$_1 = this.byteToUnsign_0(byte);
            break;
          case 'ASCII':
            tmp$_1 = this.toAscii_0(byte, 2);
            break;
          default:tmp$_1 = this.byteToHex_0(byte);
            break;
        }
        tdByte.innerText = tmp$_1;
      }
    }
     else {
      tdAddress.innerText = '----------';
      for (var i_0 = 1; i_0 <= 4; i_0++) {
        var tdByte_0 = Kotlin.isType(tmp$_2 = row.childNodes[i_0], HTMLTableCellElement) ? tmp$_2 : throwCCE();
        tdByte_0.innerText = '--';
      }
    }
  };
  Renderer.prototype.cleanTableRow_0 = function (row) {
    var tmp$;
    tmp$ = asList(row.childNodes).iterator();
    while (tmp$.hasNext()) {
      var n = tmp$.next();
      if (!Kotlin.isType(n, HTMLTableCellElement)) {
        row.removeChild(n);
      }
    }
    return row;
  };
  Renderer.prototype.byteToHex_0 = function (b) {
    var leftNibble = unboxChar(this.hexMap_0.get_za3lpa$(b >>> 4));
    var rightNibble = unboxChar(this.hexMap_0.get_za3lpa$(b & 15));
    return String.fromCharCode(leftNibble) + String.fromCharCode(rightNibble);
  };
  Renderer.prototype.byteToDec_0 = function (b) {
    return toByte(b).toString();
  };
  Renderer.prototype.byteToUnsign_0 = function (b) {
    return b.toString();
  };
  Renderer.prototype.toHex_ydzd23$ = function (value, num_nibbles, add_prefix) {
    if (num_nibbles === void 0)
      num_nibbles = 8;
    if (add_prefix === void 0)
      add_prefix = true;
    var remainder = {v: Kotlin.Long.fromInt(value)};
    var suffix = {v: ''};
    for (var index = 0; index < num_nibbles; index++) {
      var hexDigit = unboxChar(this.hexMap_0.get_za3lpa$(remainder.v.and(L15).toInt()));
      var other = suffix.v;
      suffix.v = String.fromCharCode(hexDigit) + other;
      remainder.v = remainder.v.shiftRightUnsigned(4);
    }
    if (add_prefix) {
      suffix.v = '0x' + suffix.v;
    }
    return suffix.v;
  };
  Renderer.prototype.toHex_3p81yu$ = function (value) {
    return this.toHex_ydzd23$(numberToInt(value));
  };
  Renderer.prototype.toUnsigned_0 = function (value) {
    return value >= 0 ? value.toString() : Kotlin.Long.fromInt(value).add(L4294967296).toString();
  };
  Renderer.prototype.toAscii_0 = function (value, num_nibbles) {
    if (num_nibbles === void 0)
      num_nibbles = 8;
    var tmp$, tmp$_0;
    var s = '';
    var v = value;
    tmp$_0 = s;
    if (v < 0 || v > 255)
      tmp$ = this.toHex_ydzd23$(v, num_nibbles);
    else if (v < 32 || v > 126)
      tmp$ = this.toHex_ydzd23$(v, num_nibbles);
    else
      tmp$ = String.fromCharCode(toChar(v));
    s = tmp$_0 + tmp$;
    return s;
  };
  Renderer.prototype.updateRegMemDisplay = function () {
    var tmp$;
    var displaySelect = Kotlin.isType(tmp$ = this.getElement_61zpoe$('display-settings'), HTMLSelectElement) ? tmp$ : throwCCE();
    this.displayType_0 = displaySelect.value;
    this.updateAll();
  };
  Renderer.prototype.moveMemoryJump = function () {
    var tmp$, tmp$_0;
    var jumpSelect = Kotlin.isType(tmp$ = this.getElement_61zpoe$('address-jump'), HTMLSelectElement) ? tmp$ : throwCCE();
    var where = jumpSelect.value;
    switch (where) {
      case 'Text':
        tmp$_0 = MemorySegments_getInstance().TEXT_BEGIN;
        break;
      case 'Data':
        tmp$_0 = MemorySegments_getInstance().STATIC_BEGIN;
        break;
      case 'Heap':
        tmp$_0 = 268468224;
        break;
      case 'Stack':
        tmp$_0 = 2147483632;
        break;
      default:tmp$_0 = MemorySegments_getInstance().TEXT_BEGIN;
        break;
    }
    this.activeMemoryAddress = tmp$_0;
    this.updateMemory_za3lpa$(this.activeMemoryAddress);
    jumpSelect.selectedIndex = 0;
  };
  Renderer.prototype.moveMemoryBy_0 = function (rows) {
    var bytes = 4 * rows | 0;
    if ((this.activeMemoryAddress + bytes | 0) < 0)
      return;
    this.activeMemoryAddress = this.activeMemoryAddress + bytes | 0;
    this.updateMemory_za3lpa$(this.activeMemoryAddress);
  };
  Renderer.prototype.moveMemoryUp = function () {
    this.moveMemoryBy_0(6);
  };
  Renderer.prototype.moveMemoryDown = function () {
    this.moveMemoryBy_0(-6);
  };
  Renderer.prototype.updateText = function () {
    var tmp$;
    var t = Kotlin.isType(tmp$ = document.getElementById('text-start'), HTMLInputElement) ? tmp$ : throwCCE();
    t.value = this.intToString_za3lpa$(userStringToInt(t.value));
  };
  Renderer.prototype.renderButton_ypl1d1$ = function (e, b) {
    if (b) {
      e.classList.add('is-primary');
    }
     else {
      e.classList.remove('is-primary');
    }
    e.value = b.toString();
  };
  Renderer.prototype.addObjectToDisplay_hhgamg$ = function (obj, special) {
    if (special === void 0)
      special = '';
    var b = ensureNotNull(document.getElementById('files-listing-body'));
    var elm = document.createElement('tr');
    if (equals(special, '')) {
      elm.setAttribute('id', obj.label);
      elm.innerHTML = '<td>' + obj.label + '<\/td>';
      elm.innerHTML = elm.innerHTML + ('<td>' + obj.type.name + '<\/td>');
      var options = '<td>';
      if (Kotlin.isType(obj, VFSDrive))
        options += '<button class=' + '"' + 'button is-primary' + '"' + ' onclick=' + '"' + "driver.openVFObject('" + obj.getPath() + "')" + '"' + '>Open<\/button>' + '\n';
      else if (Kotlin.isType(obj, VFSFile)) {
        options += '<button class=' + '"' + 'button is-primary' + '"' + ' onclick=' + '"' + "driver.editVFObject('" + obj.getPath() + "')" + '"' + '>Edit<\/button>' + '\n';
        options += '<button class=' + '"' + 'button is-primary' + '"' + ' onclick=' + '"' + "driver.saveVFObject('" + obj.getPath() + "')" + '"' + '>Save<\/button>' + '\n';
        options += '<button class=' + '"' + 'button is-primary' + '"' + ' onclick=' + '"' + "driver.vdbVFObject('" + obj.getPath() + "')" + '"' + '>VDB<\/button>' + '\n';
      }
       else if (Kotlin.isType(obj, VFSFolder))
        options += '<button class=' + '"' + 'button is-primary' + '"' + ' onclick=' + '"' + "driver.openVFObject('" + obj.getPath() + "')" + '"' + '>Open<\/button>' + '\n';
      else if (!Kotlin.isType(obj, VFSLinkedProgram))
        Kotlin.isType(obj, VFSProgram);
      options += '<button class="button is-primary" style="background-color:red;" ' + ('onclick=' + '"' + "driver.deleteVFObject('" + obj.getPath() + "')" + '"' + '>Delete<\/button>');
      options += '<\/td>';
      elm.innerHTML = elm.innerHTML + options;
    }
     else {
      elm.setAttribute('id', special);
      elm.innerHTML = '<td>' + special + '<\/td>';
      elm.innerHTML = elm.innerHTML + ('<td>' + obj.type.name + '<\/td>');
      var options_0 = '<td>';
      options_0 += '<button class=' + '"' + 'button is-primary' + '"' + ' onclick=' + '"' + "driver.openVFObject('" + special + "')" + '"' + '>Open<\/button>' + '\n';
      options_0 += '<\/td>';
      elm.innerHTML = elm.innerHTML + options_0;
    }
    b.appendChild(elm);
  };
  Renderer.prototype.addFilePWD_hijjve$ = function (obj) {
    var b = ensureNotNull(document.getElementById('files-listing-pwd'));
    var pwd = '';
    var o = obj;
    while (!Kotlin.isType(o, VFSDrive)) {
      var path = o.getPath();
      pwd = '<a onclick=' + '"' + "driver.openVFObject('" + path + "')" + '"' + '>' + o.label + '<\/a>/' + pwd;
      o = o.parent;
    }
    var path_0 = o.getPath();
    pwd = '<a onclick=' + '"' + "driver.openVFObject('" + path_0 + "')" + '"' + '>' + o.label + '<\/a>/' + pwd;
    b.innerHTML = pwd;
  };
  Renderer.prototype.clearObjectsFromDisplay = function () {
    var b = ensureNotNull(document.getElementById('files-listing-body'));
    b.innerHTML = '';
    b = ensureNotNull(document.getElementById('files-listing-pwd'));
    b.innerHTML = '';
  };
  Renderer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Renderer',
    interfaces: []
  };
  var Renderer_instance = null;
  function Renderer_getInstance() {
    if (Renderer_instance === null) {
      new Renderer();
    }
    return Renderer_instance;
  }
  function assemble$lambda(args, t, sudo) {
    var tmp$, tmp$_0, tmp$_1;
    if (!listOf_0([1, 2]).contains_11rb$(args.size)) {
      return Command$Companion_getInstance().get_61zpoe$('assemble').help;
    }
    var filein = args.get_za3lpa$(0);
    var programout = args.size === 2 ? args.get_za3lpa$(1) : 'a.out';
    var file = t.vfs.getObjectFromPath_s9h4kc$(filein);
    if (file === null) {
      return 'venusbackend.assembler: Could not find file ' + filein;
    }
    if (file.type !== VFSType$File_getInstance()) {
      return 'assemble: ' + filein + ': Is a directory';
    }
    if (!file.contents.containsKey_11rb$(VFSFile$Companion_getInstance().innerTxt)) {
      return 'assemble: ' + filein + ': COULD NOT FIND FILE CONTENTS!';
    }
    if (!VFSObject$Companion_getInstance().isValidName_61zpoe$(programout)) {
      return 'assemble: ' + programout + ': Invalid name';
    }
    var msg = '';
    var tmp$_2 = Assembler_getInstance().assemble_6hosri$(typeof (tmp$ = file.contents.get_11rb$(VFSFile$Companion_getInstance().innerTxt)) === 'string' ? tmp$ : throwCCE(), programout, file.getPath());
    var prog = tmp$_2.component1()
    , errors = tmp$_2.component2()
    , warnings = tmp$_2.component3();
    if (!errors.isEmpty()) {
      msg += 'assemble: Could not assemble file! Here are the errors:';
      tmp$_0 = errors.iterator();
      while (tmp$_0.hasNext()) {
        var error = tmp$_0.next();
        msg += '\n' + error.toString();
      }
      return msg;
    }
    if (!warnings.isEmpty()) {
      msg += 'assemble: Assembled file with a few warnings:';
      tmp$_1 = warnings.iterator();
      while (tmp$_1.hasNext()) {
        var warning = tmp$_1.next();
        msg += '\n' + warning.toString();
      }
    }
    var p = new VFSProgram(programout, file.parent, prog);
    file.parent.addChild_hijjve$(p);
    return msg;
  }
  function assemble$lambda_0(args, t, sudo) {
    if (args.size === 1) {
      var prefix = args.get_za3lpa$(args.size - 1 | 0);
      return arrayListOf([prefix, t.vfs.filesFromPrefix_61zpoe$(prefix)]);
    }
    return arrayListOf(['', ArrayList_init()]);
  }
  var assemble;
  function cat$lambda(args, t, sudo) {
    return t.vfs.cat(joinToString(args, ' '));
  }
  function cat$lambda_0(args, t, sudo) {
    if (args.size === 1) {
      var prefix = args.get_za3lpa$(args.size - 1 | 0);
      return arrayListOf([prefix, t.vfs.filesFromPrefix_61zpoe$(prefix)]);
    }
    return arrayListOf(['', ArrayList_init()]);
  }
  var cat;
  function cd$lambda(args, t, sudo) {
    return t.vfs.cd(joinToString(args, ' '));
  }
  function cd$lambda_0(args, t, sudo) {
    if (args.size === 1) {
      var prefix = args.get_za3lpa$(args.size - 1 | 0);
      return arrayListOf([prefix, t.vfs.filesFromPrefix_61zpoe$(prefix)]);
    }
    return arrayListOf(['', ArrayList_init()]);
  }
  var cd;
  function cp$lambda(args, t, sudo) {
    var tmp$, tmp$_0;
    if (args.size < 1) {
      return Command$Companion_getInstance().get_61zpoe$('cp').help;
    }
    var result = '';
    tmp$ = t.vfs.getObjectFromPath_s9h4kc$(args.get_za3lpa$(0));
    if (tmp$ == null) {
      return 'cp: could not find the source file!';
    }
    var f = tmp$;
    tmp$_0 = t.vfs.getObjectFromPath_s9h4kc$(args.get_za3lpa$(1));
    if (tmp$_0 == null) {
      return 'cp: could not find the destination folder!';
    }
    var d = tmp$_0;
    if (Kotlin.isType(f, VFSFile)) {
      var text = f.readText();
      var new_f = new VFSFile(f.label, d);
      new_f.setText(text);
      new_f.permissions = f.permissions;
      d.addChild_hijjve$(new_f);
    }
     else {
      result = 'cp: Copy currently only works on files!';
    }
    return result;
  }
  function cp$lambda_0(args, t, sudo) {
    return arrayListOf(['', ArrayList_init()]);
  }
  var cp;
  function download$lambda(args, t, sudo) {
    var tmp$, tmp$_0, tmp$_1;
    var s = StringBuilder_init();
    tmp$ = args.iterator();
    while (tmp$.hasNext()) {
      var fname = tmp$.next();
      var f = (tmp$_0 = t.vfs.getObjectFromPath_s9h4kc$(fname)) != null ? tmp$_0 : new VFSDummy();
      if (f.type === VFSType$File_getInstance()) {
        downloadFile(fname, (Kotlin.isType(tmp$_1 = f, VFSFile) ? tmp$_1 : throwCCE()).readText());
      }
       else {
        s.append_gw00v9$("'" + fname + "' is not a path to a file!");
      }
    }
    return s.toString();
  }
  function download$lambda_0(args, t, sudo) {
    if (args.size === 1) {
      var prefix = args.get_za3lpa$(args.size - 1 | 0);
      return arrayListOf([prefix, t.vfs.filesFromPrefix_61zpoe$(prefix)]);
    }
    return arrayListOf(['', ArrayList_init()]);
  }
  var download;
  function downloadFile(filename, text) {
    var element = document.createElement('a');
    var encoded = '';
    for (var i = 0; i < text.length; i++) {
      var byte = text.charCodeAt(i).toString(16);
      if (byte.length == 1) {
        byte = '0' + byte;
      }
      encoded += '%' + byte;
    }
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encoded);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  function edit$lambda(args, t, sudo) {
    var tmp$;
    if (args.size !== 1) {
      return 'edit: Takes in one argument [filename]';
    }
    var obj = t.vfs.getObjectFromPath_s9h4kc$(args.get_za3lpa$(0));
    if (obj === null) {
      var tout = t.vfs.touch(args.get_za3lpa$(0));
      if (!equals(tout, '')) {
        return 'edit: ' + tout;
      }
      tmp$ = t.vfs.getObjectFromPath_s9h4kc$(args.get_za3lpa$(0));
      if (tmp$ == null) {
        return 'edit: Failed to make the file!';
      }
      obj = tmp$;
    }
    if (obj.type !== VFSType$File_getInstance()) {
      return 'edit: Only files can be loaded into the editor.';
    }
    try {
      Driver_getInstance().editVFObjectfromObj_hijjve$(obj);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        return 'edit: Could not load file to the editor!';
      }
       else
        throw e;
    }
    return '';
  }
  function edit$lambda_0(args, t, sudo) {
    if (args.size === 1) {
      var prefix = args.get_za3lpa$(args.size - 1 | 0);
      return arrayListOf([prefix, t.vfs.filesFromPrefix_61zpoe$(prefix)]);
    }
    return arrayListOf(['', ArrayList_init()]);
  }
  var edit;
  function help$lambda(args, t, sudo) {
    var tmp$;
    if (args.size !== 1) {
      return Command$Companion_getInstance().get_61zpoe$('help').help;
    }
    try {
      tmp$ = Command$Companion_getInstance().get_61zpoe$(args.get_za3lpa$(0)).help;
    }
     catch (e) {
      if (Kotlin.isType(e, CommandNotFoundError)) {
        tmp$ = "help: Could not find command '" + args.get_za3lpa$(0) + "'";
      }
       else
        throw e;
    }
    return tmp$;
  }
  function help$lambda_0(args, t, sudo) {
    var tmp$, tmp$_0;
    if (args.size === 1) {
      var possibleCommands = ArrayList_init();
      var prefix = args.get_za3lpa$(0);
      tmp$ = Command$Companion_getInstance().getCommands().iterator();
      while (tmp$.hasNext()) {
        var c = tmp$.next();
        if (startsWith(c, prefix)) {
          possibleCommands.add_11rb$(c);
        }
      }
      tmp$_0 = arrayListOf([prefix, possibleCommands]);
    }
     else {
      tmp$_0 = arrayListOf(['', ArrayList_init()]);
    }
    return tmp$_0;
  }
  var help;
  function link$lambda(args, t, sudo) {
    var tmp$, tmp$_0, tmp$_1;
    if (args.size === 0) {
      return 'link: Takes in names of programs which you want to link together. EG link out.l a.out b.out c.out';
    }
    if (args.size === 1) {
      return 'link: Takes in a minimum of two args link [output] [input], ...';
    }
    var progs = ArrayList_init();
    var output = first(args);
    args.removeAt_za3lpa$(0);
    tmp$ = args.iterator();
    while (tmp$.hasNext()) {
      var program = tmp$.next();
      var obj = t.vfs.getObjectFromPath_s9h4kc$(program);
      if (obj === null) {
        return 'link: Could not find file at path to ' + program;
      }
      if (obj.type !== VFSType$Program_getInstance()) {
        return 'link: The inputs must be programs! (' + program + ')';
      }
      progs.add_11rb$((Kotlin.isType(tmp$_0 = obj, VFSProgram) ? tmp$_0 : throwCCE()).getProgram());
    }
    try {
      tmp$_1 = new ProgramAndLibraries(progs, t.vfs);
    }
     catch (e) {
      if (Kotlin.isType(e, AssertionError)) {
        return 'link: An error occurred when getting the imports: ' + e;
      }
       else
        throw e;
    }
    var PandL = tmp$_1;
    var linkedProgram;
    try {
      linkedProgram = Linker_getInstance().link_lpgfe$(PandL);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        return 'link: An error occurred when running the linked program: ' + e;
      }
       else
        throw e;
    }
    if (!VFSObject$Companion_getInstance().isValidName_61zpoe$(output)) {
      return 'link: The name of the output file is not valid! (' + output + ')';
    }
    var obj_0 = new VFSLinkedProgram(output, t.vfs.currentLocation, linkedProgram);
    return t.vfs.currentLocation.addChild_hijjve$(obj_0) ? '' : 'link: Could not add linked program to the files!';
  }
  function link$lambda_0(args, t, sudo) {
    if (args.size > 1) {
      var prefix = args.get_za3lpa$(args.size - 1 | 0);
      return arrayListOf([prefix, t.vfs.filesFromPrefix_61zpoe$(prefix)]);
    }
    return arrayListOf(['', ArrayList_init()]);
  }
  var link;
  function ls$lambda(args, t, sudo) {
    return t.vfs.ls();
  }
  function ls$lambda_0(args, t, sudo) {
    throw new NotImplementedError();
  }
  var ls;
  function mkdir$lambda(args, t, sudo) {
    if (args.size < 1) {
      return 'mkdir: mkdir takes in a folder name.';
    }
    var result = t.vfs.mkdir(args.get_za3lpa$(0));
    if (equals(result, '')) {
      t.vfs.save();
    }
    return result;
  }
  function mkdir$lambda_0(args, t, sudo) {
    return arrayListOf(['', ArrayList_init()]);
  }
  var mkdir;
  function mv$lambda(args, t, sudo) {
    var tmp$, tmp$_0;
    if (args.size < 1) {
      return Command$Companion_getInstance().get_61zpoe$('cp').help;
    }
    var result = '';
    tmp$ = t.vfs.getObjectFromPath_s9h4kc$(args.get_za3lpa$(0));
    if (tmp$ == null) {
      return 'mv: could not find the source file!';
    }
    var f = tmp$;
    tmp$_0 = t.vfs.getObjectFromPath_s9h4kc$(args.get_za3lpa$(1));
    if (tmp$_0 == null) {
      return 'mv: could not find the destination folder!';
    }
    var d = tmp$_0;
    f.parent.removeChild_61zpoe$(f.label);
    f.parent = d;
    d.addChild_hijjve$(f);
    return result;
  }
  function mv$lambda_0(args, t, sudo) {
    return arrayListOf(['', ArrayList_init()]);
  }
  var mv;
  function pwd$lambda(args, t, sudo) {
    return t.vfs.path();
  }
  function pwd$lambda_0(args, t, sudo) {
    return arrayListOf(['', ArrayList_init()]);
  }
  var pwd;
  function rm$lambda(args, t, sudo) {
    var tmp$;
    var output = '';
    var fails = 0;
    var attempts = 0;
    tmp$ = args.iterator();
    while (tmp$.hasNext()) {
      var arg = tmp$.next();
      attempts = attempts + 1 | 0;
      var out = t.vfs.remove(arg);
      if (!equals(out, '')) {
        output += out + '\n';
        fails = fails + 1 | 0;
      }
    }
    if (fails < attempts) {
      t.vfs.save();
    }
    return output;
  }
  function rm$lambda_0(args, t, sudo) {
    if (args.size > 0) {
      var prefix = args.get_za3lpa$(args.size - 1 | 0);
      return arrayListOf([prefix, t.vfs.filesFromPrefix_61zpoe$(prefix)]);
    }
    return arrayListOf(['', ArrayList_init()]);
  }
  var rm;
  function run$lambda(args, t, sudo) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    if (args.size === 0) {
      return 'run: Takes in names of programs which you want to link together and run.';
    }
    var file = args.removeAt_za3lpa$(0);
    var linkedprogs = ArrayList_init();
    var progs = ArrayList_init();
    var files = ArrayList_init();
    var obj = t.vfs.getObjectFromPath_s9h4kc$(file);
    if (obj == null) {
      return 'run: Could not find file ' + file;
    }
     else {
      switch (obj.type.name) {
        case 'File':
          files.add_11rb$(Kotlin.isType(tmp$ = obj, VFSFile) ? tmp$ : throwCCE());
          break;
        case 'Program':
          progs.add_11rb$((Kotlin.isType(tmp$_0 = obj, VFSProgram) ? tmp$_0 : throwCCE()).getProgram());
          break;
        case 'LinkedProgram':
          if ((files.size + progs.size + linkedprogs.size | 0) > 0) {
            return 'run: You must either have no linked programs or just one linked program!';
          }

          linkedprogs.add_11rb$((Kotlin.isType(tmp$_1 = obj, VFSLinkedProgram) ? tmp$_1 : throwCCE()).getLinkedProgram());
          break;
        default:return 'run: Unsupported type: ' + obj.type;
      }
    }
    if ((files.size + progs.size + linkedprogs.size | 0) === 0) {
      return 'run: Could not find any of the inputted files!';
    }
    var msg = '';
    tmp$_2 = files.iterator();
    while (tmp$_2.hasNext()) {
      var file_0 = tmp$_2.next();
      var tmp$_7 = Assembler_getInstance().assemble_6hosri$(typeof (tmp$_3 = file_0.contents.get_11rb$(VFSFile$Companion_getInstance().innerTxt)) === 'string' ? tmp$_3 : throwCCE(), file_0.label, file_0.getPath());
      var prog = tmp$_7.component1()
      , errors = tmp$_7.component2()
      , warnings = tmp$_7.component3();
      if (!errors.isEmpty()) {
        msg += 'assemble: Could not assemble file! Here are the errors:';
        tmp$_4 = errors.iterator();
        while (tmp$_4.hasNext()) {
          var error = tmp$_4.next();
          msg += '\n' + error.toString();
        }
        return msg;
      }
      if (!warnings.isEmpty()) {
        msg += 'assemble: Assembled file with a few warnings:';
        tmp$_5 = warnings.iterator();
        while (tmp$_5.hasNext()) {
          var warning = tmp$_5.next();
          msg += '\n' + warning.toString();
        }
      }
      progs.add_11rb$(prog);
    }
    if (progs.size > 0) {
      try {
        tmp$_6 = new ProgramAndLibraries(progs, t.vfs);
      }
       catch (e) {
        if (Kotlin.isType(e, AssemblerError)) {
          return 'run: An error occurred when getting the imports: ' + e;
        }
         else
          throw e;
      }
      var PandL = tmp$_6;
      var linkedProgram;
      try {
        linkedProgram = Linker_getInstance().link_lpgfe$(PandL);
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          return 'run: An error occurred when running the linked program: ' + e;
        }
         else
          throw e;
      }
      linkedprogs.add_11rb$(linkedProgram);
    }
    if (linkedprogs.size !== 1) {
      return msg + 'run: There must only be one linked program!';
    }
    var linkedProgram_0 = linkedprogs.get_za3lpa$(0);
    var sim;
    try {
      Driver_getInstance().loadSim_a67xwl$(linkedProgram_0);
      Driver_getInstance().sim.addArg_mhpeer$(args);
      Driver_getInstance().runStart_vft4zs$(false);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        return 'run: An error occurred when running the programs execution: ' + e;
      }
       else
        throw e;
    }
    return 'VDIRECTIVE:RUNNING...';
  }
  function run$lambda_0(args, t, sudo) {
    if (args.size > 0) {
      var prefix = args.get_za3lpa$(args.size - 1 | 0);
      return arrayListOf([prefix, t.vfs.filesFromPrefix_61zpoe$(prefix)]);
    }
    return arrayListOf(['', ArrayList_init()]);
  }
  var run;
  function save$lambda(args, t, sudo) {
    if (args.size !== 1) {
      return 'save: Takes in one argument [filename] which you want to save the editor to.';
    }
    var txt;
    try {
      codeMirror.save();
      txt = Driver_getInstance().getText();
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        console.error(e);
        return 'save: Could not save file!';
      }
       else
        throw e;
    }
    var result = t.vfs.write(args.get_za3lpa$(0), txt);
    if (!equals(result, '')) {
      result = t.vfs.touch(args.get_za3lpa$(0));
      if (equals(result, '')) {
        result = t.vfs.write(args.get_za3lpa$(0), txt);
      }
    }
    if (equals(result, '')) {
      t.vfs.save();
      var obj = ensureNotNull(t.vfs.getObjectFromPath_s9h4kc$(args.get_za3lpa$(0)));
      Driver_getInstance().saveVFObjectfromObj_cmd4wv$(obj, false);
    }
    return result;
  }
  function save$lambda_0(args, t, sudo) {
    if (args.size === 1) {
      var prefix = args.get_za3lpa$(args.size - 1 | 0);
      return arrayListOf([prefix, t.vfs.filesFromPrefix_61zpoe$(prefix)]);
    }
    return arrayListOf(['', ArrayList_init()]);
  }
  var save;
  function touch$lambda(args, t, sudo) {
    if (args.size < 1) {
      return Command$Companion_getInstance().get_61zpoe$('touch').help;
    }
    var result = t.vfs.touch(args.get_za3lpa$(0));
    if (equals(result, '')) {
      t.vfs.save();
    }
    return result;
  }
  function touch$lambda_0(args, t, sudo) {
    return arrayListOf(['', ArrayList_init()]);
  }
  var touch;
  function tree$lambda(args, t, sudo) {
    throw CommandNotImplementedError_init('tree');
  }
  function tree$lambda_0(args, t, sudo) {
    throw new NotImplementedError();
  }
  var tree;
  function unzip$lambda(args, t, sudo) {
    var tmp$, tmp$_0, tmp$_1;
    if (args.size !== 1) {
      return 'unzip: Takes one arg. The file to unzip.';
    }
    var s = StringBuilder_init();
    var filename = args.removeAt_za3lpa$(0);
    tmp$ = t.vfs.getObjectFromPath_s9h4kc$(filename);
    if (tmp$ == null) {
      return 'unzip: Could not find the file specified!';
    }
    var file = tmp$;
    if (file.type !== VFSType$File_getInstance()) {
      return 'unzip: The specified file is not a file.';
    }
    var z = new Zip();
    z.loadZip_24y0pm$(Kotlin.isType(tmp$_0 = file, VFSFile) ? tmp$_0 : throwCCE(), t.vfs, Kotlin.isType(tmp$_1 = t.vfs.currentLocation, VFSFolder) ? tmp$_1 : throwCCE());
    return 'VDIRECTIVE:EXEFN...';
  }
  function unzip$lambda_0(args, t, sudo) {
    if (args.size > 0) {
      var prefix = args.get_za3lpa$(args.size - 1 | 0);
      return arrayListOf([prefix, t.vfs.filesFromPrefix_61zpoe$(prefix)]);
    }
    return arrayListOf(['', ArrayList_init()]);
  }
  var unzip;
  function upload$lambda$lambda(e, t) {
    handleFileUploads(e, t);
    return Unit;
  }
  function upload$lambda(args, t, sudo) {
    var tmp$;
    var uploadbtn = Kotlin.isType(tmp$ = document.getElementById('venus_upload'), HTMLInputElement) ? tmp$ : throwCCE();
    uploadbtn.click();
    window.setTimeout(upload$lambda$lambda, 100, uploadbtn, t);
    return '';
  }
  function upload$lambda_0(args, t, sudo) {
    return arrayListOf(['', ArrayList_init()]);
  }
  var upload;
  function handleFileUploads$lambda(e, t) {
    handleFileUploads(e, t);
    return Unit;
  }
  function handleFileUploads(e, t) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (e.files !== null && (Kotlin.isType(tmp$ = e.files, FileList) ? tmp$ : throwCCE()).length > 0) {
      var files = Kotlin.isType(tmp$_0 = e.files, FileList) ? tmp$_0 : throwCCE();
      tmp$_1 = files.length;
      for (var i = 0; i < tmp$_1; i++) {
        var file = Kotlin.isType(tmp$_2 = files[i], File) ? tmp$_2 : throwCCE();
        setup_reader(file);
      }
      e.value = '';
      t.vfs.save();
    }
     else {
      window.setTimeout(handleFileUploads$lambda, 100, e, t);
    }
  }
  function setup_reader(file) {
    var name = file.name;
    var reader = new FileReader();
    reader.onload = function (e) {
      var contents = e.target.result;
      driver.VFS.touch(name);
      driver.VFS.write(name, contents);
    };
    reader.readAsBinaryString(file);
  }
  function vdb$lambda(args, t, sudo) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    if (args.size < 1) {
      return 'vdb: Takes in at least one File/Program or a single LinkedProgram';
    }
    var file = args.removeAt_za3lpa$(0);
    var linkedprogs = ArrayList_init();
    var progs = ArrayList_init();
    var files = ArrayList_init();
    var obj = t.vfs.getObjectFromPath_s9h4kc$(file);
    if (obj == null) {
      return 'vdb: Could not find file ' + file;
    }
     else {
      switch (obj.type.name) {
        case 'File':
          files.add_11rb$(Kotlin.isType(tmp$ = obj, VFSFile) ? tmp$ : throwCCE());
          break;
        case 'Program':
          progs.add_11rb$((Kotlin.isType(tmp$_0 = obj, VFSProgram) ? tmp$_0 : throwCCE()).getProgram());
          break;
        case 'LinkedProgram':
          if ((files.size + progs.size + linkedprogs.size | 0) > 0) {
            return 'vdb: You must either have no linked programs or just one linked program!';
          }

          linkedprogs.add_11rb$((Kotlin.isType(tmp$_1 = obj, VFSLinkedProgram) ? tmp$_1 : throwCCE()).getLinkedProgram());
          break;
        default:return 'vdb: Unsupported type: ' + obj.type;
      }
    }
    if ((files.size + progs.size + linkedprogs.size | 0) === 0) {
      return 'vdb: Could not find any of the inputted files!';
    }
    var msg = '';
    tmp$_2 = files.iterator();
    while (tmp$_2.hasNext()) {
      var file_0 = tmp$_2.next();
      var tmp$_7 = Assembler_getInstance().assemble_6hosri$(typeof (tmp$_3 = file_0.contents.get_11rb$(VFSFile$Companion_getInstance().innerTxt)) === 'string' ? tmp$_3 : throwCCE(), file_0.label, file_0.getPath());
      var prog = tmp$_7.component1()
      , errors = tmp$_7.component2()
      , warnings = tmp$_7.component3();
      if (!errors.isEmpty()) {
        msg += 'assemble: Could not assemble file! Here are the errors:';
        tmp$_4 = errors.iterator();
        while (tmp$_4.hasNext()) {
          var error = tmp$_4.next();
          msg += '\n' + error.toString();
        }
        return msg;
      }
      if (!warnings.isEmpty()) {
        msg += 'assemble: Assembled file with a few warnings:';
        tmp$_5 = warnings.iterator();
        while (tmp$_5.hasNext()) {
          var warning = tmp$_5.next();
          msg += '\n' + warning.toString();
        }
      }
      progs.add_11rb$(prog);
    }
    if (progs.size > 0) {
      try {
        tmp$_6 = new ProgramAndLibraries(progs, t.vfs);
      }
       catch (e) {
        if (Kotlin.isType(e, AssemblerError)) {
          return 'vdb: An error occurred when getting the imports: ' + e;
        }
         else
          throw e;
      }
      var PandL = tmp$_6;
      var linkedProgram;
      try {
        linkedProgram = Linker_getInstance().link_lpgfe$(PandL);
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          return 'vdb: An error occurred when running the linked program: ' + e;
        }
         else
          throw e;
      }
      linkedprogs.add_11rb$(linkedProgram);
    }
    if (linkedprogs.size !== 1) {
      return msg + 'vdb: There must only be one linked program!';
    }
    var lp = linkedprogs.get_za3lpa$(0);
    try {
      Driver_getInstance().loadSim_a67xwl$(lp);
      Driver_getInstance().sim.addArg_mhpeer$(args);
      Renderer_getInstance().loadSimulator_pivkot$(Driver_getInstance().sim);
      Driver_getInstance().setCacheSettings();
      Renderer_getInstance().updateCache_e3g4se$(new Address(0, MemSize$WORD_getInstance()));
      Driver_getInstance().openSimulator();
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        console.error(e);
        return 'vdb: An error has occurred';
      }
       else
        throw e;
    }
    return '';
  }
  function vdb$lambda_0(args, t, sudo) {
    if (args.size > 0) {
      var prefix = args.get_za3lpa$(args.size - 1 | 0);
      return arrayListOf([prefix, t.vfs.filesFromPrefix_61zpoe$(prefix)]);
    }
    return arrayListOf(['', ArrayList_init()]);
  }
  var vdb;
  function xxd$lambda(args, t, sudo) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    if (args.size < 1) {
      return Command$Companion_getInstance().get_61zpoe$('xxd').help;
    }
    var result = '';
    var charchunk = 2;
    var charsperline = 16;
    tmp$ = t.vfs.getObjectFromPath_s9h4kc$(args.get_za3lpa$(0));
    if (tmp$ == null) {
      return 'xxd: could not find the file!';
    }
    var f = tmp$;
    if (Kotlin.isType(f, VFSFile)) {
      var text = f.readText();
      var i = 0;
      var curline = '';
      if (text.length > 0) {
        result += Renderer_getInstance().toHex_ydzd23$(0, void 0, false) + ':';
      }
      tmp$_0 = toCharArray(text);
      for (tmp$_1 = 0; tmp$_1 !== tmp$_0.length; ++tmp$_1) {
        var chr = unboxChar(tmp$_0[tmp$_1]);
        if (curline.length === charsperline) {
          result += '  ' + curline + '\n';
          result += Renderer_getInstance().toHex_ydzd23$(i, void 0, false) + ':';
          curline = '';
        }
        if (curline.length % charchunk === 0) {
          result += ' ';
        }
        var cv = chr | 0;
        result += Renderer_getInstance().toHex_ydzd23$(cv, 2, false);
        tmp$_3 = curline;
        if (cv < 32 || cv > 126)
          tmp$_2 = '.';
        else
          tmp$_2 = String.fromCharCode(chr);
        curline = tmp$_3 + tmp$_2;
        i = i + 1 | 0;
      }
      if (curline.length > 0) {
        var charsLeft = charsperline - curline.length | 0;
        if (charsLeft % 2 === 1) {
          charsLeft = charsLeft - 1 | 0;
          result += '  ';
        }
        charsLeft = charsLeft / 2 | 0;
        tmp$_4 = charsLeft;
        for (var j = 0; j < tmp$_4; j++) {
          result += '     ';
        }
        result += '  ' + curline;
      }
    }
     else {
      result = 'xxd: only works on files!';
    }
    return result;
  }
  function xxd$lambda_0(args, t, sudo) {
    if (args.size > 0) {
      var prefix = args.get_za3lpa$(args.size - 1 | 0);
      return arrayListOf([prefix, t.vfs.filesFromPrefix_61zpoe$(prefix)]);
    }
    return arrayListOf(['', ArrayList_init()]);
  }
  var xxd;
  function zip$lambda(args, t, sudo) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (args.size < 2) {
      return 'zip: Takes at least two arguments, the zip file name and the file you want to add to the zip.';
    }
    var s = StringBuilder_init();
    var output = args.removeAt_za3lpa$(0);
    var z = new Zip();
    tmp$ = args.iterator();
    while (tmp$.hasNext()) {
      var fname = tmp$.next();
      var f = (tmp$_0 = t.vfs.getObjectFromPath_s9h4kc$(fname)) != null ? tmp$_0 : new VFSDummy();
      if (f.type === VFSType$File_getInstance()) {
        z.addFile_bm4g0d$(fname, (Kotlin.isType(tmp$_1 = f, VFSFile) ? tmp$_1 : throwCCE()).readText());
      }
       else if (f.type === VFSType$Folder_getInstance()) {
        z.addFolder_lkrkff$(Kotlin.isType(tmp$_2 = f, VFSFolder) ? tmp$_2 : throwCCE());
      }
       else {
        s.append_gw00v9$("'" + fname + "' is not a path to a file! For now, this function only accepts files." + '\n');
      }
    }
    z.save_61zpoe$(output);
    return s.toString();
  }
  function zip$lambda_0(args, t, sudo) {
    if (args.size > 1) {
      var prefix = args.get_za3lpa$(args.size - 1 | 0);
      return arrayListOf([prefix, t.vfs.filesFromPrefix_61zpoe$(prefix)]);
    }
    return arrayListOf(['', ArrayList_init()]);
  }
  var zip_0;
  function Command(name, execute, tab, help) {
    Command$Companion_getInstance();
    if (execute === void 0)
      execute = Command_init$lambda;
    if (tab === void 0)
      tab = Command_init$lambda_0;
    if (help === void 0)
      help = 'Command does not have a help yet!';
    this.name = name;
    this.execute = execute;
    this.tab = tab;
    this.help = help;
    Command$Companion_getInstance().allCommands_0.add_11rb$(this);
  }
  function Command$Companion() {
    Command$Companion_instance = this;
    this.allCommands_0 = ArrayList_init();
  }
  Command$Companion.prototype.getCommands = function () {
    var tmp$;
    var cmds = ArrayList_init();
    tmp$ = this.allCommands_0.iterator();
    while (tmp$.hasNext()) {
      var cmd = tmp$.next();
      cmds.add_11rb$(cmd.name);
    }
    return cmds;
  };
  Command$Companion.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    var $receiver = this.allCommands_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (equals(element.name, name)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    tmp$ = firstOrNull$result;
    if (tmp$ == null) {
      throw CommandNotFoundError_init(name);
    }
    return tmp$;
  };
  Command$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Command$Companion_instance = null;
  function Command$Companion_getInstance() {
    if (Command$Companion_instance === null) {
      new Command$Companion();
    }
    return Command$Companion_instance;
  }
  Command.prototype.toString = function () {
    return this.name;
  };
  function Command_init$lambda(a, b, c) {
    throw new NotImplementedError();
  }
  function Command_init$lambda_0(a, b, c) {
    throw new NotImplementedError();
  }
  Command.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Command',
    interfaces: []
  };
  function CommandNotFoundError() {
    Kotlin.captureStack(Throwable, this);
    this.name = 'CommandNotFoundError';
  }
  Object.defineProperty(CommandNotFoundError.prototype, 'message', {
    get: function () {
      return this.message_22qlo2$_0;
    }
  });
  Object.defineProperty(CommandNotFoundError.prototype, 'cause', {
    get: function () {
      return this.cause_qubmq8$_0;
    }
  });
  CommandNotFoundError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandNotFoundError',
    interfaces: [Throwable]
  };
  function CommandNotFoundError_init(command, $this) {
    if (command === void 0)
      command = null;
    $this = $this || Object.create(CommandNotFoundError.prototype);
    Throwable.call($this);
    $this.message_22qlo2$_0 = command + ': command not found';
    $this.cause_qubmq8$_0 = null;
    CommandNotFoundError.call($this);
    return $this;
  }
  function CommandNotImplementedError() {
    Kotlin.captureStack(Throwable, this);
    this.name = 'CommandNotImplementedError';
  }
  Object.defineProperty(CommandNotImplementedError.prototype, 'message', {
    get: function () {
      return this.message_ftukr2$_0;
    }
  });
  Object.defineProperty(CommandNotImplementedError.prototype, 'cause', {
    get: function () {
      return this.cause_fprf4$_0;
    }
  });
  CommandNotImplementedError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandNotImplementedError',
    interfaces: [Throwable]
  };
  function CommandNotImplementedError_init(command, $this) {
    if (command === void 0)
      command = null;
    $this = $this || Object.create(CommandNotImplementedError.prototype);
    Throwable.call($this);
    $this.message_ftukr2$_0 = command + ': command found but not implemented yet!';
    $this.cause_fprf4$_0 = null;
    CommandNotImplementedError.call($this);
    return $this;
  }
  function Terminal(vfs) {
    this.vfs = vfs;
    this.externalCommands_0 = listOf_0(['clear', 'clock', 'date', 'exit', 'help', 'uname', 'sudo']);
  }
  Terminal.prototype.processInput = function (input) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    try {
      var args = this.extractArgs_61zpoe$(input);
      if (args.get_za3lpa$(0).toLowerCase() === 'sudo') {
        args.removeAt_za3lpa$(0);
        tmp$ = true;
      }
       else {
        tmp$ = false;
      }
      var sudo = tmp$;
      if (args.size > 0) {
        tmp$_0 = args.get_za3lpa$(0);
      }
       else {
        tmp$_0 = '';
      }
      var prog = tmp$_0;
      try {
        var cmd = Command$Companion_getInstance().get_61zpoe$(args.removeAt_za3lpa$(0));
        return cmd.execute(args, this, sudo);
      }
       catch (e) {
        if (Kotlin.isType(e, CommandNotFoundError)) {
          var obj = (tmp$_1 = this.vfs.getObjectFromPath_s9h4kc$(prog)) != null ? tmp$_1 : new VFSDummy();
          if (listOf_0([VFSType$File_getInstance(), VFSType$LinkedProgram_getInstance(), VFSType$Program_getInstance()]).contains_11rb$(obj.type)) {
            var r = Command$Companion_getInstance().get_61zpoe$(run.name);
            args.add_wxm5ur$(0, prog);
            return r.execute(args, this, sudo);
          }
          return (tmp$_2 = e.message) != null ? tmp$_2 : ': command not found';
        }
         else
          throw e;
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        console.error(e);
        return 'Unknown error occurred: ' + e.toString();
      }
       else
        throw e;
    }
  };
  Terminal.prototype.extractArgs_61zpoe$ = function (input) {
    var tmp$;
    return Kotlin.isType(tmp$ = Lexer_getInstance().lex_61zpoe$(input), ArrayList) ? tmp$ : throwCCE();
  };
  Terminal.prototype.getCommands = function () {
    var tmp$;
    var cmds = [];
    var ktcmds = Command$Companion_getInstance().getCommands();
    tmp$ = ktcmds.iterator();
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      cmds.push(c);
    }
    return cmds;
  };
  Terminal.prototype.tab = function (lineinput) {
    var tmp$, tmp$_0, tmp$_1;
    var ktcmds = union(Command$Companion_getInstance().getCommands(), this.externalCommands_0);
    var args = this.extractArgs_61zpoe$(lineinput);
    try {
      if (!args.isEmpty()) {
        if (args.get_za3lpa$(0) === 'sudo') {
          args.removeAt_za3lpa$(0);
          tmp$ = true;
        }
         else {
          tmp$ = false;
        }
        var sudo = tmp$;
        if (args.isEmpty()) {
          return [];
        }
        if (args.size === 1) {
          var possibleCommands = ArrayList_init();
          var prefix = args.get_za3lpa$(0);
          tmp$_0 = ktcmds.iterator();
          while (tmp$_0.hasNext()) {
            var c = tmp$_0.next();
            if (startsWith(c, prefix)) {
              possibleCommands.add_11rb$(c);
            }
          }
          return this.listTojsList_giv38x$(listOf_0([prefix, this.listTojsList_giv38x$(possibleCommands)]));
        }
         else {
          var cmd = Command$Companion_getInstance().get_61zpoe$(args.removeAt_za3lpa$(0));
          var options = cmd.tab(args, this, sudo);
          return this.listTojsList_giv38x$(listOf_0([options.get_za3lpa$(0), this.listTojsList_giv38x$(Kotlin.isType(tmp$_1 = options.get_za3lpa$(1), List) ? tmp$_1 : throwCCE())]));
        }
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        console.error(e);
        return 'An error occurred! ' + e;
      }
       else
        throw e;
    }
    return 'Something bad happened!';
  };
  Terminal.prototype.listTojsList_giv38x$ = function (l) {
    var tmp$;
    var list = [];
    tmp$ = l.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      list.push(i);
    }
    return list;
  };
  Terminal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Terminal',
    interfaces: []
  };
  function JsonContainer() {
    this.type = 'Dummy';
    this.label = 'DUMMY';
    this.contents = ArrayList_init();
    this.permissions = new VFSPermissions();
    this.innerobj = '';
  }
  JsonContainer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonContainer',
    interfaces: []
  };
  function VFSDrive(n, parent) {
    VFSDrive$Companion_getInstance();
    VFSFolder.call(this, n, parent);
    this.n = n;
    this.parent_sxwqhx$_0 = parent;
    this.type_32561h$_0 = VFSType$Drive_getInstance();
    this.contents.put_xwzc9p$('..', this);
  }
  Object.defineProperty(VFSDrive.prototype, 'parent', {
    get: function () {
      return this.parent_sxwqhx$_0;
    },
    set: function (parent) {
      this.parent_sxwqhx$_0 = parent;
    }
  });
  Object.defineProperty(VFSDrive.prototype, 'type', {
    get: function () {
      return this.type_32561h$_0;
    }
  });
  function VFSDrive$Companion() {
    VFSDrive$Companion_instance = this;
  }
  VFSDrive$Companion.prototype.inflate_pc8vqv$ = function (jsonContainer, parent) {
    var tmp$, tmp$_0, tmp$_1;
    var folder = new VFSDrive(jsonContainer.label, parent);
    tmp$ = jsonContainer.contents.length;
    for (var i = 0; i < tmp$; i++) {
      var value = jsonContainer.contents[i];
      var addchild = true;
      tmp$_0 = value.type;
      if (equals(tmp$_0, VFSType$Folder_getInstance().toString()))
        tmp$_1 = VFSFolder$Companion_getInstance().inflate_pc8vqv$(value, folder);
      else if (equals(tmp$_0, VFSType$Program_getInstance().toString())) {
        addchild = false;
        tmp$_1 = VFSProgram$Companion_getInstance().inflate_pc8vqv$(value, folder);
      }
       else if (equals(tmp$_0, VFSType$LinkedProgram_getInstance().toString())) {
        addchild = false;
        tmp$_1 = VFSLinkedProgram$Companion_getInstance().inflate_pc8vqv$(value, folder);
      }
       else if (equals(tmp$_0, VFSType$File_getInstance().toString()))
        tmp$_1 = VFSFile$Companion_getInstance().inflate_pc8vqv$(value, folder);
      else if (equals(tmp$_0, VFSType$Drive_getInstance().toString()))
        tmp$_1 = this.inflate_pc8vqv$(value, folder);
      else {
        tmp$_1 = new VFSDummy();
      }
      var obj = tmp$_1;
      if (addchild) {
        folder.addChild_hijjve$(obj);
      }
    }
    return folder;
  };
  VFSDrive$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var VFSDrive$Companion_instance = null;
  function VFSDrive$Companion_getInstance() {
    if (VFSDrive$Companion_instance === null) {
      new VFSDrive$Companion();
    }
    return VFSDrive$Companion_instance;
  }
  VFSDrive.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VFSDrive',
    interfaces: [VFSFolder]
  };
  function VFSDummy() {
    this.type_l2vclp$_0 = VFSType$Dummy_getInstance();
    this.label_icsavh$_0 = 'DUMMY';
    this.contents_jnpbe5$_0 = HashMap_init();
    this.permissions_4ova1v$_0 = new VFSPermissions();
    this.parent_cu71z1$_0 = this.parent_cu71z1$_0;
  }
  Object.defineProperty(VFSDummy.prototype, 'type', {
    get: function () {
      return this.type_l2vclp$_0;
    }
  });
  Object.defineProperty(VFSDummy.prototype, 'label', {
    get: function () {
      return this.label_icsavh$_0;
    },
    set: function (label) {
      this.label_icsavh$_0 = label;
    }
  });
  Object.defineProperty(VFSDummy.prototype, 'contents', {
    get: function () {
      return this.contents_jnpbe5$_0;
    },
    set: function (contents) {
      this.contents_jnpbe5$_0 = contents;
    }
  });
  Object.defineProperty(VFSDummy.prototype, 'permissions', {
    get: function () {
      return this.permissions_4ova1v$_0;
    },
    set: function (permissions) {
      this.permissions_4ova1v$_0 = permissions;
    }
  });
  Object.defineProperty(VFSDummy.prototype, 'parent', {
    get: function () {
      if (this.parent_cu71z1$_0 == null)
        return throwUPAE('parent');
      return this.parent_cu71z1$_0;
    },
    set: function (parent) {
      this.parent_cu71z1$_0 = parent;
    }
  });
  VFSDummy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VFSDummy',
    interfaces: [VFSObject]
  };
  function VFSFile(label, parent) {
    VFSFile$Companion_getInstance();
    this.label_zfa2kv$_0 = label;
    this.parent_q9eiyt$_0 = parent;
    this.type_ss15bp$_0 = VFSType$File_getInstance();
    this.contents_jx6d63$_0 = HashMap_init();
    this.permissions_lkjkgv$_0 = new VFSPermissions();
    var $receiver = this.contents;
    var key = VFSFile$Companion_getInstance().innerTxt;
    $receiver.put_xwzc9p$(key, '');
  }
  Object.defineProperty(VFSFile.prototype, 'label', {
    get: function () {
      return this.label_zfa2kv$_0;
    },
    set: function (label) {
      this.label_zfa2kv$_0 = label;
    }
  });
  Object.defineProperty(VFSFile.prototype, 'parent', {
    get: function () {
      return this.parent_q9eiyt$_0;
    },
    set: function (parent) {
      this.parent_q9eiyt$_0 = parent;
    }
  });
  Object.defineProperty(VFSFile.prototype, 'type', {
    get: function () {
      return this.type_ss15bp$_0;
    }
  });
  Object.defineProperty(VFSFile.prototype, 'contents', {
    get: function () {
      return this.contents_jx6d63$_0;
    },
    set: function (contents) {
      this.contents_jx6d63$_0 = contents;
    }
  });
  Object.defineProperty(VFSFile.prototype, 'permissions', {
    get: function () {
      return this.permissions_lkjkgv$_0;
    },
    set: function (permissions) {
      this.permissions_lkjkgv$_0 = permissions;
    }
  });
  function VFSFile$Companion() {
    VFSFile$Companion_instance = this;
    this.innerTxt = 'innertext';
  }
  VFSFile$Companion.prototype.inflate_pc8vqv$ = function (jsonContainer, parent) {
    var tmp$;
    var file = new VFSFile(jsonContainer.label, parent);
    file.setText(typeof (tmp$ = jsonContainer.innerobj) === 'string' ? tmp$ : throwCCE());
    return file;
  };
  VFSFile$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var VFSFile$Companion_instance = null;
  function VFSFile$Companion_getInstance() {
    if (VFSFile$Companion_instance === null) {
      new VFSFile$Companion();
    }
    return VFSFile$Companion_instance;
  }
  VFSFile.prototype.readText = function () {
    var tmp$;
    return typeof (tmp$ = this.contents.get_11rb$(VFSFile$Companion_getInstance().innerTxt)) === 'string' ? tmp$ : throwCCE();
  };
  VFSFile.prototype.setText = function (s) {
    var $receiver = this.contents;
    var key = VFSFile$Companion_getInstance().innerTxt;
    $receiver.put_xwzc9p$(key, s);
  };
  VFSFile.prototype.stringify = function () {
    var tmp$;
    var me = new JsonContainer();
    me.label = this.label;
    me.permissions = this.permissions;
    me.type = this.type.toString();
    me.innerobj = typeof (tmp$ = this.contents.get_11rb$(VFSFile$Companion_getInstance().innerTxt)) === 'string' ? tmp$ : throwCCE();
    return me;
  };
  VFSFile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VFSFile',
    interfaces: [VFSObject]
  };
  function VFSFolder(name, parent) {
    VFSFolder$Companion_getInstance();
    this.name = name;
    this.parent_darhop$_0 = parent;
    this.type_napq8p$_0 = VFSType$Folder_getInstance();
    this.label_g2tzpd$_0 = this.name;
    this.contents_zajm9z$_0 = HashMap_init();
    this.permissions_aq5cq7$_0 = new VFSPermissions();
    var $receiver = this.contents;
    var value = this.parent;
    $receiver.put_xwzc9p$('..', value);
    this.contents.put_xwzc9p$('.', this);
  }
  Object.defineProperty(VFSFolder.prototype, 'parent', {
    get: function () {
      return this.parent_darhop$_0;
    },
    set: function (parent) {
      this.parent_darhop$_0 = parent;
    }
  });
  Object.defineProperty(VFSFolder.prototype, 'type', {
    get: function () {
      return this.type_napq8p$_0;
    }
  });
  Object.defineProperty(VFSFolder.prototype, 'label', {
    get: function () {
      return this.label_g2tzpd$_0;
    },
    set: function (label) {
      this.label_g2tzpd$_0 = label;
    }
  });
  Object.defineProperty(VFSFolder.prototype, 'contents', {
    get: function () {
      return this.contents_zajm9z$_0;
    },
    set: function (contents) {
      this.contents_zajm9z$_0 = contents;
    }
  });
  Object.defineProperty(VFSFolder.prototype, 'permissions', {
    get: function () {
      return this.permissions_aq5cq7$_0;
    },
    set: function (permissions) {
      this.permissions_aq5cq7$_0 = permissions;
    }
  });
  VFSFolder.prototype.addFile_61zpoe$ = function (name) {
    if (VFSObject$Companion_getInstance().isValidName_61zpoe$(name) && !this.contents.containsKey_11rb$(name)) {
      var $receiver = this.contents;
      var value = new VFSFile(name, this);
      $receiver.put_xwzc9p$(name, value);
      return true;
    }
    return false;
  };
  VFSFolder.prototype.addFolder_61zpoe$ = function (name) {
    if (VFSObject$Companion_getInstance().isValidName_61zpoe$(name) && !this.contents.containsKey_11rb$(name)) {
      var $receiver = this.contents;
      var value = new VFSFolder(name, this);
      $receiver.put_xwzc9p$(name, value);
      return true;
    }
    return false;
  };
  VFSFolder.prototype.stringify = function () {
    var tmp$, tmp$_0;
    var me = new JsonContainer();
    me.label = this.label;
    me.permissions = this.permissions;
    me.type = this.type.toString();
    tmp$ = this.contents.keys.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      if (!listOf_0(['.', '..']).contains_11rb$(item)) {
        me.contents.add_11rb$((Kotlin.isType(tmp$_0 = this.contents.get_11rb$(item), VFSObject) ? tmp$_0 : throwCCE()).stringify());
      }
    }
    return me;
  };
  function VFSFolder$Companion() {
    VFSFolder$Companion_instance = this;
  }
  VFSFolder$Companion.prototype.inflate_pc8vqv$ = function (jsonContainer, parent) {
    var tmp$, tmp$_0, tmp$_1;
    var folder = new VFSFolder(jsonContainer.label, parent);
    tmp$ = jsonContainer.contents.length;
    for (var i = 0; i < tmp$; i++) {
      var value = jsonContainer.contents[i];
      var addchild = true;
      tmp$_0 = value.type;
      if (equals(tmp$_0, VFSType$Folder_getInstance().toString()))
        tmp$_1 = this.inflate_pc8vqv$(value, folder);
      else if (equals(tmp$_0, VFSType$Program_getInstance().toString())) {
        addchild = false;
        tmp$_1 = VFSProgram$Companion_getInstance().inflate_pc8vqv$(value, folder);
      }
       else if (equals(tmp$_0, VFSType$LinkedProgram_getInstance().toString())) {
        addchild = false;
        tmp$_1 = VFSLinkedProgram$Companion_getInstance().inflate_pc8vqv$(value, folder);
      }
       else if (equals(tmp$_0, VFSType$File_getInstance().toString()))
        tmp$_1 = VFSFile$Companion_getInstance().inflate_pc8vqv$(value, folder);
      else if (equals(tmp$_0, VFSType$Drive_getInstance().toString()))
        tmp$_1 = VFSDrive$Companion_getInstance().inflate_pc8vqv$(value, folder);
      else {
        tmp$_1 = new VFSDummy();
      }
      var obj = tmp$_1;
      if (addchild) {
        folder.addChild_hijjve$(obj);
      }
    }
    return folder;
  };
  VFSFolder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var VFSFolder$Companion_instance = null;
  function VFSFolder$Companion_getInstance() {
    if (VFSFolder$Companion_instance === null) {
      new VFSFolder$Companion();
    }
    return VFSFolder$Companion_instance;
  }
  VFSFolder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VFSFolder',
    interfaces: [VFSObject]
  };
  function VFSLinkedProgram(label, parent, prog) {
    VFSLinkedProgram$Companion_getInstance();
    if (prog === void 0)
      prog = new LinkedProgram();
    this.label_odt7gw$_0 = label;
    this.parent_xiar46$_0 = parent;
    this.type_ctrxvu$_0 = VFSType$LinkedProgram_getInstance();
    this.contents_ghy7my$_0 = HashMap_init();
    this.permissions_mf79xc$_0 = new VFSPermissions();
    var $receiver = this.contents;
    var key = VFSLinkedProgram$Companion_getInstance().innerProgram;
    var value = prog;
    $receiver.put_xwzc9p$(key, value);
  }
  Object.defineProperty(VFSLinkedProgram.prototype, 'label', {
    get: function () {
      return this.label_odt7gw$_0;
    },
    set: function (label) {
      this.label_odt7gw$_0 = label;
    }
  });
  Object.defineProperty(VFSLinkedProgram.prototype, 'parent', {
    get: function () {
      return this.parent_xiar46$_0;
    },
    set: function (parent) {
      this.parent_xiar46$_0 = parent;
    }
  });
  Object.defineProperty(VFSLinkedProgram.prototype, 'type', {
    get: function () {
      return this.type_ctrxvu$_0;
    }
  });
  Object.defineProperty(VFSLinkedProgram.prototype, 'contents', {
    get: function () {
      return this.contents_ghy7my$_0;
    },
    set: function (contents) {
      this.contents_ghy7my$_0 = contents;
    }
  });
  Object.defineProperty(VFSLinkedProgram.prototype, 'permissions', {
    get: function () {
      return this.permissions_mf79xc$_0;
    },
    set: function (permissions) {
      this.permissions_mf79xc$_0 = permissions;
    }
  });
  function VFSLinkedProgram$Companion() {
    VFSLinkedProgram$Companion_instance = this;
    this.innerProgram = 'innerprogram';
  }
  VFSLinkedProgram$Companion.prototype.inflate_pc8vqv$ = function (jsonContainer, parent) {
    var file = new VFSLinkedProgram(jsonContainer.label, parent);
    return file;
  };
  VFSLinkedProgram$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var VFSLinkedProgram$Companion_instance = null;
  function VFSLinkedProgram$Companion_getInstance() {
    if (VFSLinkedProgram$Companion_instance === null) {
      new VFSLinkedProgram$Companion();
    }
    return VFSLinkedProgram$Companion_instance;
  }
  VFSLinkedProgram.prototype.getLinkedProgram = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.contents.get_11rb$(VFSLinkedProgram$Companion_getInstance().innerProgram), LinkedProgram) ? tmp$ : throwCCE();
  };
  VFSLinkedProgram.prototype.setLinkedProgram_a67xwl$ = function (p) {
    var $receiver = this.contents;
    var key = VFSLinkedProgram$Companion_getInstance().innerProgram;
    $receiver.put_xwzc9p$(key, p);
  };
  VFSLinkedProgram.prototype.stringify = function () {
    var tmp$;
    var me = new JsonContainer();
    me.label = this.label;
    me.permissions = this.permissions;
    me.type = this.type.toString();
    me.innerobj = Kotlin.isType(tmp$ = this.contents.get_11rb$(VFSProgram$Companion_getInstance().innerProgram), Any) ? tmp$ : throwCCE();
    return me;
  };
  VFSLinkedProgram.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VFSLinkedProgram',
    interfaces: [VFSObject]
  };
  function VFSObject() {
    VFSObject$Companion_getInstance();
  }
  function VFSObject$Companion() {
    VFSObject$Companion_instance = this;
    this.separator = '/';
  }
  VFSObject$Companion.prototype.isValidName_61zpoe$ = function (name) {
    return !Regex_init('[' + this.separator + ':"><]').containsMatchIn_6bul2c$(name);
  };
  VFSObject$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var VFSObject$Companion_instance = null;
  function VFSObject$Companion_getInstance() {
    if (VFSObject$Companion_instance === null) {
      new VFSObject$Companion();
    }
    return VFSObject$Companion_instance;
  }
  VFSObject.prototype.getPath = function () {
    var path = '';
    var node = this;
    while (node != null && node.type !== VFSType$Drive_getInstance()) {
      path = VFSObject$Companion_getInstance().separator + node.label + path;
      node = node.parent;
    }
    return path;
  };
  VFSObject.prototype.addChild_hijjve$ = function (child) {
    if (this.contents.containsKey_11rb$(child.label) || !VFSObject$Companion_getInstance().isValidName_61zpoe$(child.label)) {
      return false;
    }
     else {
      this.contents.put_xwzc9p$(child.label, child);
      return true;
    }
  };
  VFSObject.prototype.removeChild_61zpoe$ = function (name) {
    if (!this.contents.containsKey_11rb$(name) || equals(name, '') || equals(name, '')) {
      return false;
    }
    this.contents.remove_11rb$(name);
    return true;
  };
  VFSObject.prototype.stringify = function () {
    var me = new JsonContainer();
    me.label = this.label;
    me.permissions = this.permissions;
    me.type = this.type.toString();
    return me;
  };
  VFSObject.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'VFSObject',
    interfaces: []
  };
  function VFSPermissions() {
    this.write = true;
    this.read = true;
    this.execute = true;
  }
  VFSPermissions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VFSPermissions',
    interfaces: []
  };
  function VFSProgram(label, parent, prog) {
    VFSProgram$Companion_getInstance();
    if (prog === void 0)
      prog = new Program(void 0, '');
    this.label_cqgjl5$_0 = label;
    this.parent_jbpbz3$_0 = parent;
    this.type_20j40f$_0 = VFSType$Program_getInstance();
    this.contents_8m4v2p$_0 = HashMap_init();
    this.permissions_bs7czd$_0 = new VFSPermissions();
    var $receiver = this.contents;
    var key = VFSProgram$Companion_getInstance().innerProgram;
    var value = prog;
    $receiver.put_xwzc9p$(key, value);
  }
  Object.defineProperty(VFSProgram.prototype, 'label', {
    get: function () {
      return this.label_cqgjl5$_0;
    },
    set: function (label) {
      this.label_cqgjl5$_0 = label;
    }
  });
  Object.defineProperty(VFSProgram.prototype, 'parent', {
    get: function () {
      return this.parent_jbpbz3$_0;
    },
    set: function (parent) {
      this.parent_jbpbz3$_0 = parent;
    }
  });
  Object.defineProperty(VFSProgram.prototype, 'type', {
    get: function () {
      return this.type_20j40f$_0;
    }
  });
  Object.defineProperty(VFSProgram.prototype, 'contents', {
    get: function () {
      return this.contents_8m4v2p$_0;
    },
    set: function (contents) {
      this.contents_8m4v2p$_0 = contents;
    }
  });
  Object.defineProperty(VFSProgram.prototype, 'permissions', {
    get: function () {
      return this.permissions_bs7czd$_0;
    },
    set: function (permissions) {
      this.permissions_bs7czd$_0 = permissions;
    }
  });
  function VFSProgram$Companion() {
    VFSProgram$Companion_instance = this;
    this.innerProgram = 'innerprogram';
  }
  VFSProgram$Companion.prototype.inflate_pc8vqv$ = function (jsonContainer, parent) {
    var file = new VFSProgram(jsonContainer.label, parent);
    return file;
  };
  VFSProgram$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var VFSProgram$Companion_instance = null;
  function VFSProgram$Companion_getInstance() {
    if (VFSProgram$Companion_instance === null) {
      new VFSProgram$Companion();
    }
    return VFSProgram$Companion_instance;
  }
  VFSProgram.prototype.getProgram = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.contents.get_11rb$(VFSProgram$Companion_getInstance().innerProgram), Program) ? tmp$ : throwCCE();
  };
  VFSProgram.prototype.setProgram_ryjwlq$ = function (p) {
    var $receiver = this.contents;
    var key = VFSProgram$Companion_getInstance().innerProgram;
    $receiver.put_xwzc9p$(key, p);
  };
  VFSProgram.prototype.stringify = function () {
    var tmp$;
    var me = new JsonContainer();
    me.label = this.label;
    me.permissions = this.permissions;
    me.type = this.type.toString();
    me.innerobj = Kotlin.isType(tmp$ = this.contents.get_11rb$(VFSProgram$Companion_getInstance().innerProgram), Any) ? tmp$ : throwCCE();
    return me;
  };
  VFSProgram.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VFSProgram',
    interfaces: [VFSObject]
  };
  function VFSType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function VFSType_initFields() {
    VFSType_initFields = function () {
    };
    VFSType$Drive_instance = new VFSType('Drive', 0);
    VFSType$Folder_instance = new VFSType('Folder', 1);
    VFSType$File_instance = new VFSType('File', 2);
    VFSType$Program_instance = new VFSType('Program', 3);
    VFSType$LinkedProgram_instance = new VFSType('LinkedProgram', 4);
    VFSType$Dummy_instance = new VFSType('Dummy', 5);
  }
  var VFSType$Drive_instance;
  function VFSType$Drive_getInstance() {
    VFSType_initFields();
    return VFSType$Drive_instance;
  }
  var VFSType$Folder_instance;
  function VFSType$Folder_getInstance() {
    VFSType_initFields();
    return VFSType$Folder_instance;
  }
  var VFSType$File_instance;
  function VFSType$File_getInstance() {
    VFSType_initFields();
    return VFSType$File_instance;
  }
  var VFSType$Program_instance;
  function VFSType$Program_getInstance() {
    VFSType_initFields();
    return VFSType$Program_instance;
  }
  var VFSType$LinkedProgram_instance;
  function VFSType$LinkedProgram_getInstance() {
    VFSType_initFields();
    return VFSType$LinkedProgram_instance;
  }
  var VFSType$Dummy_instance;
  function VFSType$Dummy_getInstance() {
    VFSType_initFields();
    return VFSType$Dummy_instance;
  }
  VFSType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VFSType',
    interfaces: [Enum]
  };
  function VFSType$values() {
    return [VFSType$Drive_getInstance(), VFSType$Folder_getInstance(), VFSType$File_getInstance(), VFSType$Program_getInstance(), VFSType$LinkedProgram_getInstance(), VFSType$Dummy_getInstance()];
  }
  VFSType.values = VFSType$values;
  function VFSType$valueOf(name) {
    switch (name) {
      case 'Drive':
        return VFSType$Drive_getInstance();
      case 'Folder':
        return VFSType$Folder_getInstance();
      case 'File':
        return VFSType$File_getInstance();
      case 'Program':
        return VFSType$Program_getInstance();
      case 'LinkedProgram':
        return VFSType$LinkedProgram_getInstance();
      case 'Dummy':
        return VFSType$Dummy_getInstance();
      default:throwISE('No enum constant venus.vfs.VFSType.' + name);
    }
  }
  VFSType.valueOf_61zpoe$ = VFSType$valueOf;
  function VirtualFileSystem(defaultDriveName, simSettings) {
    VirtualFileSystem$Companion_getInstance();
    if (simSettings === void 0)
      simSettings = new SimulatorSettings();
    this.defaultDriveName = defaultDriveName;
    this.simSettings = simSettings;
    this.sentinel = new VFSDrive(this.defaultDriveName, new VFSDummy());
    this.currentLocation = this.sentinel;
    this.sentinel.parent = this.sentinel;
  }
  function VirtualFileSystem$Companion() {
    VirtualFileSystem$Companion_instance = this;
    this.LSName = 'VFS_DATA';
  }
  VirtualFileSystem$Companion.prototype.getPath_61zpoe$ = function (path) {
    var tmp$;
    return Kotlin.isType(tmp$ = split(path, [VFSObject$Companion_getInstance().separator]), ArrayList) ? tmp$ : throwCCE();
  };
  VirtualFileSystem$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var VirtualFileSystem$Companion_instance = null;
  function VirtualFileSystem$Companion_getInstance() {
    if (VirtualFileSystem$Companion_instance === null) {
      new VirtualFileSystem$Companion();
    }
    return VirtualFileSystem$Companion_instance;
  }
  VirtualFileSystem.prototype.makeFileInDir_61zpoe$ = function (path) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var obj = this.getObjectFromPath_s9h4kc$(path);
    if (obj == null) {
      var nobj = Kotlin.isType(tmp$ = this.getObjectFromPath_s9h4kc$(path, true), VFSObject) ? tmp$ : throwCCE();
      if (nobj.type !== VFSType$File_getInstance()) {
        var name = nobj.label;
        var parent = nobj.parent;
        parent.removeChild_61zpoe$(name);
        var newfile = new VFSFile(name, parent);
        parent.addChild_hijjve$(newfile);
        tmp$_1 = newfile;
      }
       else {
        tmp$_1 = Kotlin.isType(tmp$_0 = nobj, VFSFile) ? tmp$_0 : throwCCE();
      }
      return tmp$_1;
    }
     else {
      if (obj.type === VFSType$File_getInstance()) {
        return Kotlin.isType(tmp$_2 = obj, VFSFile) ? tmp$_2 : throwCCE();
      }
      return null;
    }
  };
  VirtualFileSystem.prototype.reset = function () {
    this.currentLocation = this.sentinel;
  };
  VirtualFileSystem.prototype.mkdir = function (dirName) {
    var tmp$;
    var newdir = new VFSFolder(dirName, this.currentLocation);
    if (this.currentLocation.addChild_hijjve$(newdir)) {
      tmp$ = '';
    }
     else {
      tmp$ = 'Could not make directory: ' + dirName;
    }
    return tmp$;
  };
  VirtualFileSystem.prototype.cd = function (dir) {
    var tmp = this.chdir_kcpqh4$(dir, this.currentLocation);
    if (Kotlin.isType(tmp, VFSObject)) {
      if (!listOf_0([VFSType$Folder_getInstance(), VFSType$Drive_getInstance()]).contains_11rb$(tmp.type)) {
        return 'Can only go into folders and drives.';
      }
      this.currentLocation = tmp;
    }
     else {
      return tmp.toString();
    }
    return '';
  };
  VirtualFileSystem.prototype.chdir_kcpqh4$ = function (dir, curloc) {
    var tmp$, tmp$_0, tmp$_1;
    var splitpath = VirtualFileSystem$Companion_getInstance().getPath_61zpoe$(dir);
    if (startsWith(dir, '/') || equals(dir, '')) {
      if (splitpath.size > 0) {
        splitpath.removeAt_za3lpa$(0);
      }
      tmp$ = this.sentinel;
    }
     else {
      tmp$ = curloc;
    }
    var templocation = tmp$;
    tmp$_0 = splitpath.iterator();
    while (tmp$_0.hasNext()) {
      var dir_0 = tmp$_0.next();
      if (equals(dir_0, '')) {
        continue;
      }
      if (!templocation.contents.containsKey_11rb$(dir_0)) {
        return 'cd: ' + dir_0 + ': No such file or directory';
      }
      templocation = Kotlin.isType(tmp$_1 = templocation.contents.get_11rb$(dir_0), VFSObject) ? tmp$_1 : throwCCE();
      if (listOf_0([VFSType$File_getInstance(), VFSType$Program_getInstance()]).contains_11rb$(templocation.type)) {
        return 'cd: ' + dir_0 + ': Not a directory';
      }
    }
    return templocation;
  };
  VirtualFileSystem.prototype.touch = function (filename) {
    var tmp$;
    var newfile = new VFSFile(filename, this.currentLocation);
    if (this.currentLocation.addChild_hijjve$(newfile)) {
      tmp$ = '';
    }
     else {
      tmp$ = 'Could not make file: ' + filename;
    }
    return tmp$;
  };
  VirtualFileSystem.prototype.ls = function () {
    var tmp$, tmp$_0;
    var str = '';
    tmp$ = this.currentLocation.contents.keys.iterator();
    while (tmp$.hasNext()) {
      var s = tmp$.next();
      str = str + (s + (listOf_0([VFSType$Folder_getInstance(), VFSType$Drive_getInstance()]).contains_11rb$((Kotlin.isType(tmp$_0 = this.currentLocation.contents.get_11rb$(s), VFSObject) ? tmp$_0 : throwCCE()).type) ? VFSObject$Companion_getInstance().separator : '') + '\n');
    }
    return str;
  };
  VirtualFileSystem.prototype.cat = function (filedir) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var splitpath = VirtualFileSystem$Companion_getInstance().getPath_61zpoe$(filedir);
    if (startsWith(filedir, '/')) {
      splitpath.removeAt_za3lpa$(0);
      tmp$ = this.sentinel;
    }
     else {
      tmp$ = this.currentLocation;
    }
    var templocation = tmp$;
    tmp$_0 = splitpath.iterator();
    while (tmp$_0.hasNext()) {
      var obj = tmp$_0.next();
      if (equals(obj, '')) {
        continue;
      }
      if (!templocation.contents.containsKey_11rb$(obj)) {
        return 'cat: ' + filedir + ': No such file or directory';
      }
      templocation = Kotlin.isType(tmp$_1 = templocation.contents.get_11rb$(obj), VFSObject) ? tmp$_1 : throwCCE();
    }
    if (templocation.type !== VFSType$File_getInstance()) {
      return 'cat: ' + filedir + ': Is not a file!';
    }
    if (!templocation.contents.containsKey_11rb$(VFSFile$Companion_getInstance().innerTxt)) {
      return 'cat: ' + filedir + ': COULD NOT FIND FILE CONTENTS!';
    }
    return typeof (tmp$_2 = templocation.contents.get_11rb$(VFSFile$Companion_getInstance().innerTxt)) === 'string' ? tmp$_2 : throwCCE();
  };
  VirtualFileSystem.prototype.path = function () {
    return this.currentLocation.getPath() + VFSObject$Companion_getInstance().separator;
  };
  VirtualFileSystem.prototype.remove = function (path) {
    return this.rm_kcpqh4$(path, this.currentLocation);
  };
  VirtualFileSystem.prototype.rm_kcpqh4$ = function (path, curloc) {
    var templocation = this.getObjectFromPath_s9h4kc$(path);
    if (templocation === null) {
      return "rm: cannot remove '" + path + "': No such file or directory";
    }
    if (contains(curloc.getPath(), templocation.getPath())) {
      return "rm: cannot remove '" + path + "': Path is currently active";
    }
    var p = templocation.parent;
    return p.removeChild_61zpoe$(templocation.label) ? '' : 'rm: could not remove file';
  };
  VirtualFileSystem.prototype.write = function (path, msg) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var splitpath = VirtualFileSystem$Companion_getInstance().getPath_61zpoe$(path);
    if (splitpath.size > 0 && equals(splitpath.get_za3lpa$(0), this.sentinel.label)) {
      splitpath.removeAt_za3lpa$(0);
      tmp$ = this.sentinel;
    }
     else {
      tmp$ = this.currentLocation;
    }
    var templocation = tmp$;
    tmp$_0 = splitpath.iterator();
    while (tmp$_0.hasNext()) {
      var obj = tmp$_0.next();
      if (equals(obj, '')) {
        continue;
      }
      if (!templocation.contents.containsKey_11rb$(obj)) {
        return "write: cannot write to '" + path + "': No such file or directory";
      }
      templocation = Kotlin.isType(tmp$_1 = templocation.contents.get_11rb$(obj), VFSObject) ? tmp$_1 : throwCCE();
    }
    if (templocation.type !== VFSType$File_getInstance()) {
      return 'cat: ' + path + ': Is not a file!';
    }
    (Kotlin.isType(tmp$_2 = templocation, VFSFile) ? tmp$_2 : throwCCE()).setText(msg);
    return '';
  };
  VirtualFileSystem.prototype.addFile = function (path, data, loc) {
    if (loc === void 0)
      loc = this.currentLocation;
    var tmp$, tmp$_0, tmp$_1;
    var splitpath = VirtualFileSystem$Companion_getInstance().getPath_61zpoe$(path);
    if (splitpath.size === 0) {
      return 'There was no file passed in!';
    }
    var fname = splitpath.removeAt_za3lpa$(splitpath.size - 1 | 0);
    var curloc = loc;
    tmp$ = splitpath.iterator();
    while (tmp$.hasNext()) {
      var p = tmp$.next();
      if (curloc.contents.containsKey_11rb$(p)) {
        var next = Kotlin.isType(tmp$_0 = ensureNotNull(curloc.contents.get_11rb$(p)), VFSObject) ? tmp$_0 : throwCCE();
        if (!listOf_0([VFSType$Folder_getInstance(), VFSType$Drive_getInstance()]).contains_11rb$(next.type)) {
          return 'Could not create folder due to a non folder existing in the path.';
        }
        tmp$_1 = next;
      }
       else {
        var fold = new VFSFolder(p, curloc);
        curloc.addChild_hijjve$(fold);
        tmp$_1 = fold;
      }
      curloc = tmp$_1;
    }
    var f = new VFSFile(fname, curloc);
    f.setText(data);
    curloc.addChild_hijjve$(f);
    return '';
  };
  VirtualFileSystem.prototype.getParentFromObject_hijjve$ = function (obj) {
    return obj.parent;
  };
  VirtualFileSystem.prototype.getObjectFromPath_s9h4kc$ = function (path, make, location) {
    if (make === void 0)
      make = false;
    if (location === void 0)
      location = null;
    var tmp$, tmp$_0, tmp$_1;
    var splitpath = VirtualFileSystem$Companion_getInstance().getPath_61zpoe$(path);
    if (startsWith(path, '/')) {
      splitpath.removeAt_za3lpa$(0);
      tmp$ = this.sentinel;
    }
     else {
      tmp$ = location != null ? location : this.currentLocation;
    }
    var templocation = tmp$;
    tmp$_0 = splitpath.iterator();
    while (tmp$_0.hasNext()) {
      var obj = tmp$_0.next();
      if (equals(obj, '')) {
        continue;
      }
      if (!templocation.contents.containsKey_11rb$(obj)) {
        if (make) {
          templocation.addChild_hijjve$(new VFSFile(obj, templocation));
        }
         else {
          return null;
        }
      }
      templocation = Kotlin.isType(tmp$_1 = templocation.contents.get_11rb$(obj), VFSObject) ? tmp$_1 : throwCCE();
    }
    return templocation;
  };
  VirtualFileSystem.prototype.filesFromPrefix_61zpoe$ = function (prefix) {
    var tmp$, tmp$_0;
    var fnames = ArrayList_init();
    tmp$ = this.currentLocation.contents.keys.iterator();
    while (tmp$.hasNext()) {
      var key = tmp$.next();
      if (startsWith(key, prefix)) {
        var obj = Kotlin.isType(tmp$_0 = this.currentLocation.contents.get_11rb$(key), VFSObject) ? tmp$_0 : throwCCE();
        var k = key;
        if (listOf_0([VFSType$Folder_getInstance(), VFSType$Drive_getInstance()]).contains_11rb$(obj.type)) {
          k += '/';
        }
        fnames.add_11rb$(k);
      }
    }
    return fnames;
  };
  VirtualFileSystem.prototype.stringify = function () {
    return JSON.stringify(this.sentinel.stringify());
  };
  VirtualFileSystem.prototype.parse_61zpoe$ = function (vfsString) {
    var tmp$;
    var raw = JSON.parse(vfsString);
    var temp = VFSDrive$Companion_getInstance().inflate_pc8vqv$(raw, new VFSDummy());
    var newsent = Kotlin.isType(tmp$ = temp, VFSDrive) ? tmp$ : throwCCE();
    newsent.parent = newsent;
    this.sentinel = newsent;
    this.currentLocation = this.sentinel;
  };
  VirtualFileSystem.prototype.load = function () {
    var vfsJSON = window.localStorage.getItem(VirtualFileSystem$Companion_getInstance().LSName);
    if (!equals(vfsJSON, undefined)) {
      this.parse_61zpoe$(vfsJSON);
    }
  };
  VirtualFileSystem.prototype.save = function () {
    if (Driver_getInstance().useLS) {
      var vfsJSON = this.stringify();
      window.localStorage.setItem(VirtualFileSystem$Companion_getInstance().LSName, vfsJSON);
    }
  };
  VirtualFileSystem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VirtualFileSystem',
    interfaces: []
  };
  function Zip() {
    this.internal_zip = new JSZip();
  }
  Zip.prototype.addFile_bm4g0d$ = function (name, data) {
    this.addFileHelper_0(name, data, this.internal_zip);
  };
  Zip.prototype.addFileHelper_0 = function (name, data, int_zip) {
    int_zip.file(name, data, {binary: true});
  };
  Zip.prototype.save_61zpoe$ = function (name) {
    var z = this.internal_zip;
    z.generateAsync({type: 'blob'}).then(function (data) {
      saveAs(data, name);
    });
    return '';
  };
  Zip.prototype.addFolder_lkrkff$ = function (folder) {
    var newf = this.internal_zip.folder(folder.name);
    this.addFolderHelper_0(folder, newf);
  };
  Zip.prototype.addFolderHelper_0 = function (folder, int_zip) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = folder.contents.keys.iterator();
    while (tmp$.hasNext()) {
      var s = tmp$.next();
      if (!listOf_0(['.', '..']).contains_11rb$(s)) {
        var type = (Kotlin.isType(tmp$_0 = folder.contents.get_11rb$(s), VFSObject) ? tmp$_0 : throwCCE()).type;
        if (type === VFSType$File_getInstance()) {
          var file = Kotlin.isType(tmp$_1 = folder.contents.get_11rb$(s), VFSFile) ? tmp$_1 : throwCCE();
          this.addFileHelper_0(file.label, file.readText(), int_zip);
        }
         else if (type === VFSType$Folder_getInstance()) {
          var fold = Kotlin.isType(tmp$_2 = folder.contents.get_11rb$(s), VFSFolder) ? tmp$_2 : throwCCE();
          var newf = int_zip.folder(fold.name);
          this.addFolderHelper_0(fold, newf);
        }
         else {
          console.error('Currently, we only support zipping files and folders!');
        }
      }
    }
  };
  Zip.prototype.loadZip_24y0pm$ = function (zipfile, vfs, folder) {
    var content = zipfile.readText();
    var new_zip = new JSZip();
    window.VENUSLOADZIPCOUNTER = 0;
    new_zip.loadAsync(content).then(function (zip) {
      new_zip.forEach(function (relativePath, file) {
        if (!relativePath.endsWith('/')) {
          window.VENUSLOADZIPCOUNTER++;
          file.async('uint8array').then(function (data) {
            var result = '';
            for (var i = 0; i < data.length; i++) {
              result += String.fromCharCode(data[i]);
            }
            var out = vfs.addFile(relativePath, result, folder);
            if (out != '') {
              window.VENUSFNOUTPUT += out + '\n';
            }
            window.VENUSLOADZIPCOUNTER--;
          });
        }
      });
      function timeoutcheck() {
        if (window.VENUSLOADZIPCOUNTER == 0) {
          window.VENUSFNDONE = true;
        }
         else {
          setTimeout(timeoutcheck, 25);
        }
      }
      timeoutcheck();
    });
  };
  Zip.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Zip',
    interfaces: []
  };
  function Assembler() {
    Assembler_instance = this;
    this.defaultDefines = HashMap_init();
  }
  Assembler.prototype.assemble_6hosri$ = function (text, name, abspath) {
    if (name === void 0)
      name = 'main.S';
    if (abspath === void 0)
      abspath = '';
    new InitInstructions();
    var tmp$ = (new AssemblerPassOne(replace(text, '\r', ''), name, abspath)).run();
    var passOneProg = tmp$.component1()
    , talInstructions = tmp$.component2()
    , passOneErrors = tmp$.component3()
    , warnings = tmp$.component4();
    if (!passOneErrors.isEmpty()) {
      return new AssemblerOutput(passOneProg, passOneErrors, ArrayList_init());
    }
    var passTwoOutput = (new AssemblerPassTwo(passOneProg, talInstructions)).run();
    if ((passTwoOutput.prog.textSize + MemorySegments_getInstance().TEXT_BEGIN | 0) > MemorySegments_getInstance().STATIC_BEGIN) {
      try {
        MemorySegments_getInstance().setTextBegin_za3lpa$(MemorySegments_getInstance().STATIC_BEGIN - passOneProg.textSize | 0);
        Renderer_getInstance().updateText();
        var pone = (new AssemblerPassOne(text, name, abspath)).run();
        passOneProg = pone.prog;
        passOneErrors = pone.errors;
        talInstructions = pone.talInstructions;
        if (!passOneErrors.isEmpty()) {
          return new AssemblerOutput(passOneProg, passOneErrors, ArrayList_init());
        }
        passTwoOutput = (new AssemblerPassTwo(passOneProg, talInstructions)).run();
      }
       catch (e) {
        if (Kotlin.isType(e, SimulatorError)) {
          throw SimulatorError_init('Could not change the text size so could not fit the program because the static is too low and the text would be below zero!');
        }
         else
          throw e;
      }
    }
    if (!warnings.isEmpty()) {
      var arr = toMutableList(passTwoOutput.warnings);
      arr.addAll_brywnq$(warnings);
      passTwoOutput = new AssemblerOutput(passTwoOutput.prog, passTwoOutput.errors, arr);
    }
    return passTwoOutput;
  };
  Assembler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Assembler',
    interfaces: []
  };
  var Assembler_instance = null;
  function Assembler_getInstance() {
    if (Assembler_instance === null) {
      new Assembler();
    }
    return Assembler_instance;
  }
  function DebugInfo(lineNo, line, address, prog) {
    this.lineNo = lineNo;
    this.line = line;
    this.address = address;
    this.prog = prog;
  }
  DebugInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DebugInfo',
    interfaces: []
  };
  DebugInfo.prototype.component1 = function () {
    return this.lineNo;
  };
  DebugInfo.prototype.component2 = function () {
    return this.line;
  };
  DebugInfo.prototype.component3 = function () {
    return this.address;
  };
  DebugInfo.prototype.component4 = function () {
    return this.prog;
  };
  DebugInfo.prototype.copy_gj0g2o$ = function (lineNo, line, address, prog) {
    return new DebugInfo(lineNo === void 0 ? this.lineNo : lineNo, line === void 0 ? this.line : line, address === void 0 ? this.address : address, prog === void 0 ? this.prog : prog);
  };
  DebugInfo.prototype.toString = function () {
    return 'DebugInfo(lineNo=' + Kotlin.toString(this.lineNo) + (', line=' + Kotlin.toString(this.line)) + (', address=' + Kotlin.toString(this.address)) + (', prog=' + Kotlin.toString(this.prog)) + ')';
  };
  DebugInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.lineNo) | 0;
    result = result * 31 + Kotlin.hashCode(this.line) | 0;
    result = result * 31 + Kotlin.hashCode(this.address) | 0;
    result = result * 31 + Kotlin.hashCode(this.prog) | 0;
    return result;
  };
  DebugInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.lineNo, other.lineNo) && Kotlin.equals(this.line, other.line) && Kotlin.equals(this.address, other.address) && Kotlin.equals(this.prog, other.prog)))));
  };
  function DebugInstruction(debug, LineTokens) {
    this.debug = debug;
    this.LineTokens = LineTokens;
  }
  DebugInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DebugInstruction',
    interfaces: []
  };
  DebugInstruction.prototype.component1 = function () {
    return this.debug;
  };
  DebugInstruction.prototype.component2 = function () {
    return this.LineTokens;
  };
  DebugInstruction.prototype.copy_nb82v7$ = function (debug, LineTokens) {
    return new DebugInstruction(debug === void 0 ? this.debug : debug, LineTokens === void 0 ? this.LineTokens : LineTokens);
  };
  DebugInstruction.prototype.toString = function () {
    return 'DebugInstruction(debug=' + Kotlin.toString(this.debug) + (', LineTokens=' + Kotlin.toString(this.LineTokens)) + ')';
  };
  DebugInstruction.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.debug) | 0;
    result = result * 31 + Kotlin.hashCode(this.LineTokens) | 0;
    return result;
  };
  DebugInstruction.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.debug, other.debug) && Kotlin.equals(this.LineTokens, other.LineTokens)))));
  };
  function PassOneOutput(prog, talInstructions, errors, warnings) {
    this.prog = prog;
    this.talInstructions = talInstructions;
    this.errors = errors;
    this.warnings = warnings;
  }
  PassOneOutput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PassOneOutput',
    interfaces: []
  };
  PassOneOutput.prototype.component1 = function () {
    return this.prog;
  };
  PassOneOutput.prototype.component2 = function () {
    return this.talInstructions;
  };
  PassOneOutput.prototype.component3 = function () {
    return this.errors;
  };
  PassOneOutput.prototype.component4 = function () {
    return this.warnings;
  };
  PassOneOutput.prototype.copy_kub0k1$ = function (prog, talInstructions, errors, warnings) {
    return new PassOneOutput(prog === void 0 ? this.prog : prog, talInstructions === void 0 ? this.talInstructions : talInstructions, errors === void 0 ? this.errors : errors, warnings === void 0 ? this.warnings : warnings);
  };
  PassOneOutput.prototype.toString = function () {
    return 'PassOneOutput(prog=' + Kotlin.toString(this.prog) + (', talInstructions=' + Kotlin.toString(this.talInstructions)) + (', errors=' + Kotlin.toString(this.errors)) + (', warnings=' + Kotlin.toString(this.warnings)) + ')';
  };
  PassOneOutput.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.prog) | 0;
    result = result * 31 + Kotlin.hashCode(this.talInstructions) | 0;
    result = result * 31 + Kotlin.hashCode(this.errors) | 0;
    result = result * 31 + Kotlin.hashCode(this.warnings) | 0;
    return result;
  };
  PassOneOutput.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.prog, other.prog) && Kotlin.equals(this.talInstructions, other.talInstructions) && Kotlin.equals(this.errors, other.errors) && Kotlin.equals(this.warnings, other.warnings)))));
  };
  function AssemblerOutput(prog, errors, warnings) {
    this.prog = prog;
    this.errors = errors;
    this.warnings = warnings;
  }
  AssemblerOutput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AssemblerOutput',
    interfaces: []
  };
  AssemblerOutput.prototype.component1 = function () {
    return this.prog;
  };
  AssemblerOutput.prototype.component2 = function () {
    return this.errors;
  };
  AssemblerOutput.prototype.component3 = function () {
    return this.warnings;
  };
  AssemblerOutput.prototype.copy_tn52c6$ = function (prog, errors, warnings) {
    return new AssemblerOutput(prog === void 0 ? this.prog : prog, errors === void 0 ? this.errors : errors, warnings === void 0 ? this.warnings : warnings);
  };
  AssemblerOutput.prototype.toString = function () {
    return 'AssemblerOutput(prog=' + Kotlin.toString(this.prog) + (', errors=' + Kotlin.toString(this.errors)) + (', warnings=' + Kotlin.toString(this.warnings)) + ')';
  };
  AssemblerOutput.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.prog) | 0;
    result = result * 31 + Kotlin.hashCode(this.errors) | 0;
    result = result * 31 + Kotlin.hashCode(this.warnings) | 0;
    return result;
  };
  AssemblerOutput.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.prog, other.prog) && Kotlin.equals(this.errors, other.errors) && Kotlin.equals(this.warnings, other.warnings)))));
  };
  var p1warnings;
  function AssemblerPassOne(text, name, abspath) {
    if (name === void 0)
      name = 'anonymous';
    this.text_0 = text;
    this.prog_0 = new Program(name, abspath);
    this.currentTextOffset_0 = 0;
    this.currentDataOffset_0 = MemorySegments_getInstance().STATIC_BEGIN;
    this.allow_custom_memory_segments_0 = true;
    this.inTextSegment_0 = true;
    this.talInstructions_0 = ArrayList_init();
    this.currentLineNumber_0 = 0;
    this.errors_0 = ArrayList_init();
    this.warnings_0 = ArrayList_init();
    this.defines_0 = HashMap_init_0(Assembler_getInstance().defaultDefines);
  }
  AssemblerPassOne.prototype.run = function () {
    this.doPassOne_0();
    return new PassOneOutput(this.prog_0, this.talInstructions_0, this.errors_0, this.warnings_0);
  };
  AssemblerPassOne.prototype.doPassOne_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$ = lines(this.text_0).iterator();
    while (tmp$.hasNext()) {
      var line = tmp$.next();
      try {
        this.currentLineNumber_0 = this.currentLineNumber_0 + 1 | 0;
        var dbg = new DebugInfo(this.currentLineNumber_0, line, this.currentTextOffset_0, this.prog_0);
        var offset = this.getOffset();
        var pline = {v: line};
        var tmp$_4;
        tmp$_4 = this.defines_0.entries.iterator();
        while (tmp$_4.hasNext()) {
          var element = tmp$_4.next();
          var token = element.key;
          var value = element.value;
          var tmp$_5;
          var $receiver = pline.v;
          var splitline = toMutableList(Regex_init('\\s').split_905azu$($receiver, 0));
          var tokens = ArrayList_init();
          var diff = false;
          tmp$_5 = splitline.iterator();
          while (tmp$_5.hasNext()) {
            var v = tmp$_5.next();
            if (equals(v, token)) {
              tokens.add_11rb$(value);
              diff = true;
            }
             else {
              tokens.add_11rb$(v);
            }
          }
          if (diff) {
            pline.v = joinToString(tokens, ' ');
          }
        }
        this.preprocess_0(line, dbg);
        var tmp$_6 = Lexer_getInstance().lexLine_hhf06j$(pline.v, dbg);
        var labels = tmp$_6.component1()
        , args = tmp$_6.component2();
        tmp$_0 = labels.iterator();
        while (tmp$_0.hasNext()) {
          var label = tmp$_0.next();
          this.allow_custom_memory_segments_0 = false;
          var oldOffset = this.prog_0.addLabel_bm4lxs$(label, offset);
          if (oldOffset != null) {
            throw AssemblerError_init('label ' + label + ' defined twice', dbg);
          }
        }
        var tmp$_7 = args.isEmpty();
        if (!tmp$_7) {
          tmp$_7 = args.get_za3lpa$(0).length === 0;
        }
        if (tmp$_7)
          continue;
        if (this.isAssemblerDirective_0(args.get_za3lpa$(0))) {
          this.parseAssemblerDirective_0(args.get_za3lpa$(0), drop(args, 1), pline.v, dbg);
        }
         else {
          this.allow_custom_memory_segments_0 = false;
          var expandedInsts = this.replacePseudoInstructions_0(args, dbg);
          tmp$_1 = expandedInsts.iterator();
          while (tmp$_1.hasNext()) {
            var inst = tmp$_1.next();
            try {
              tmp$_2 = Instruction$Companion_getInstance().get_hhf06j$(getInstruction(inst), dbg).format.length;
            }
             catch (e) {
              if (Kotlin.isType(e, AssemblerError)) {
                tmp$_2 = 4;
              }
               else
                throw e;
            }
            var instsize = tmp$_2;
            this.talInstructions_0.add_11rb$(new DebugInstruction(dbg, inst));
            this.currentTextOffset_0 = this.currentTextOffset_0 + instsize | 0;
          }
        }
        tmp$_3 = p1warnings.iterator();
        while (tmp$_3.hasNext()) {
          var p1warning = tmp$_3.next();
          p1warning.line = this.currentLineNumber_0;
        }
        this.warnings_0.addAll_brywnq$(p1warnings);
        p1warnings.clear();
      }
       catch (e) {
        if (Kotlin.isType(e, AssemblerError)) {
          this.errors_0.add_11rb$(AssemblerError_init_0(this.currentLineNumber_0, e));
        }
         else
          throw e;
      }
    }
  };
  AssemblerPassOne.prototype.preprocess_0 = function (line, dbg) {
    var DIRECTIVE_DEFINE = 'define';
    var DIRECTIVE_UNDEF = 'undef';
    var tmp$;
    var pline = trim(Kotlin.isCharSequence(tmp$ = line) ? tmp$ : throwCCE()).toString();
    if (startsWith(pline, '#')) {
      var $receiver = removePrefix(pline, '#');
      var tmp$_0;
      pline = trim(Kotlin.isCharSequence(tmp$_0 = $receiver) ? tmp$_0 : throwCCE()).toString();
      if (startsWith(pline, DIRECTIVE_DEFINE)) {
        var $receiver_0 = removePrefix(pline, DIRECTIVE_DEFINE);
        var tmp$_1;
        pline = trim(Kotlin.isCharSequence(tmp$_1 = $receiver_0) ? tmp$_1 : throwCCE()).toString();
        var tokens = toMutableList(split(pline, [' ']));
        var $receiver_1 = this.defines_0;
        var key = tokens.removeAt_za3lpa$(0);
        var value = joinToString(tokens, ' ');
        $receiver_1.put_xwzc9p$(key, value);
      }
      if (startsWith(pline, DIRECTIVE_UNDEF)) {
        var $receiver_2 = removePrefix(pline, DIRECTIVE_UNDEF);
        var tmp$_2;
        pline = trim(Kotlin.isCharSequence(tmp$_2 = $receiver_2) ? tmp$_2 : throwCCE()).toString();
        var tokens_0 = split(pline, [' ']);
        checkArgsLength(tokens_0, 1, dbg);
        this.defines_0.remove_11rb$(tokens_0.get_za3lpa$(0));
      }
    }
  };
  AssemblerPassOne.prototype.getOffset = function () {
    return this.inTextSegment_0 ? this.currentTextOffset_0 : this.currentDataOffset_0;
  };
  AssemblerPassOne.prototype.isAssemblerDirective_0 = function (cmd) {
    return startsWith(cmd, '.');
  };
  AssemblerPassOne.prototype.replacePseudoInstructions_0 = function (tokens, dbg) {
    try {
      var cmd = getInstruction(tokens);
      var cleanedCMD = replace(cmd, '.', '');
      var pw = PseudoDispatcher$valueOf(cleanedCMD).pw;
      return pw.invoke_33jwtj$(tokens, this, dbg);
    }
     catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        var linetokens = this.parsePossibleMachineCode_0(tokens, dbg);
        return linetokens;
      }
       else
        throw t;
    }
  };
  AssemblerPassOne.prototype.parsePossibleMachineCode_0 = function (tokens, dbg) {
    var c = getInstruction(tokens);
    if (listOf_0(['beq', 'bge', 'bgeu', 'blt', 'bltu', 'bne']).contains_11rb$(c)) {
      try {
        var loc = this.getOffset() + userStringToInt(tokens.get_za3lpa$(3)) | 0;
        this.prog_0.addLabel_bm4lxs$(venusInternalLabels + loc.toString(), loc);
      }
       catch (e) {
        if (!Kotlin.isType(e, Throwable))
          throw e;
      }
    }
     else if (equals(c, 'jal')) {
      try {
        var loc_0 = this.getOffset() + userStringToInt(tokens.get_za3lpa$(2)) | 0;
        this.prog_0.addLabel_bm4lxs$(venusInternalLabels + loc_0.toString(), loc_0);
      }
       catch (e) {
        if (!Kotlin.isType(e, Throwable))
          throw e;
      }
    }
     else {
      try {
        var cmd = userStringToInt(c);
        try {
          var decoded = Instruction$Companion_getInstance().get_6cx2xq$(new MachineCode(cmd)).disasm.invoke_6cx2xq$(new MachineCode(cmd));
          var lex = toMutableList(Lexer_getInstance().lexLine_hhf06j$(decoded, dbg).second);
          if (equals(lex.get_za3lpa$(0), 'jal')) {
            var loc_1 = this.getOffset() + toInt(lex.get_za3lpa$(2)) | 0;
            this.prog_0.addLabel_bm4lxs$('L' + loc_1, loc_1);
            lex.set_wxm5ur$(2, 'L' + loc_1);
          }
          if (listOf_0(['beq', 'bge', 'bgeu', 'blt', 'bltu', 'bne']).contains_11rb$(lex.get_za3lpa$(0))) {
            var loc_2 = this.getOffset() + toInt(lex.get_za3lpa$(3)) | 0;
            this.prog_0.addLabel_bm4lxs$('L' + loc_2, loc_2);
            lex.set_wxm5ur$(3, 'L' + loc_2);
          }
          var t = listOf(lex);
          return t;
        }
         catch (e) {
          if (Kotlin.isType(e, SimulatorError)) {
            this.errors_0.add_11rb$(AssemblerError_init_0(this.currentLineNumber_0, e));
          }
           else
            throw e;
        }
      }
       catch (e) {
        if (Kotlin.isType(e, NumberFormatException)) {
          var tmp$ = startsWith(c, '0x') || startsWith(c, '0b');
          if (!tmp$) {
            tmp$ = Regex_init('\\d+').matches_6bul2c$(c);
          }
          if (tmp$) {
            this.errors_0.add_11rb$(AssemblerError_init_0(this.currentLineNumber_0, e));
          }
        }
         else
          throw e;
      }
    }
    return listOf(tokens);
  };
  AssemblerPassOne.prototype.parseAssemblerDirective_0 = function (directive, args, line, dbg) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    switch (directive) {
      case '.data':
        this.inTextSegment_0 = false;
        break;
      case '.text':
        this.inTextSegment_0 = true;
        break;
      case '.register_size':
        if (!this.allow_custom_memory_segments_0) {
          throw AssemblerError_init(trimMargin('You can only set the register size address BEFORE any labels or\n                        |instructions have been processed'), dbg);
        }

        try {
          checkArgsLength(args, 1, dbg);
        }
         catch (e) {
          if (Kotlin.isType(e, AssemblerError)) {
            throw AssemblerError_init(directive + ' takes in zero or one argument(s) to specify encoding!', dbg);
          }
           else
            throw e;
        }

        var instwidth = userStringToInt(args.get_za3lpa$(0));
        if (!listOf_0([16, 32, 64, 128]).contains_11rb$(instwidth)) {
          throw AssemblerError_init('Unknown instruction size!', dbg);
        }

        Renderer_getInstance().displayWarning_61zpoe$('Will set width to ' + instwidth + '!');
        break;
      case '.data_start':
        if (!this.allow_custom_memory_segments_0) {
          throw AssemblerError_init(trimMargin('You can only set the data start address BEFORE any labels or\n                        |instructions have been processed'), dbg);
        }

        checkArgsLength(args, 1, dbg);
        var location = userStringToInt(args.get_za3lpa$(0));
        MemorySegments_getInstance().STATIC_BEGIN = location;
        break;
      case '.byte':
        tmp$ = args.iterator();
        while (tmp$.hasNext()) {
          var arg = tmp$.next();
          var byte = userStringToInt(arg);
          if (!(-127 <= byte && byte <= 255)) {
            throw AssemblerError_init('invalid byte ' + byte + ' too big', dbg);
          }
          this.prog_0.addToData_s8j3t7$(toByte(byte));
          this.currentDataOffset_0 = this.currentDataOffset_0 + 1 | 0;
        }

        break;
      case '.string':
      case '.asciiz':
        checkArgsLength(args, 1, dbg);
        try {
          var str = args.get_za3lpa$(0);
          if (str.length < 2 || str.charCodeAt(0) !== str.charCodeAt(str.length - 1 | 0) || str.charCodeAt(0) !== 34) {
            throw IllegalArgumentException_init();
          }
          tmp$_0 = unescapeString(dropLast(drop_0(str, 1), 1));
        }
         catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            throw AssemblerError_init("couldn't parse " + args.get_za3lpa$(0) + ' as a string', dbg);
          }
           else
            throw e;
        }

        var ascii = tmp$_0;
        tmp$_1 = iterator(ascii);
        while (tmp$_1.hasNext()) {
          var c = unboxChar(tmp$_1.next());
          if (!(0 <= (c | 0) && (c | 0) <= 127)) {
            throw AssemblerError_init("unexpected non-ascii character: '" + String.fromCharCode(c) + "'", dbg);
          }
          this.prog_0.addToData_s8j3t7$(toByte(c | 0));
          this.currentDataOffset_0 = this.currentDataOffset_0 + 1 | 0;
        }

        this.prog_0.addToData_s8j3t7$(0);
        this.currentDataOffset_0 = this.currentDataOffset_0 + 1 | 0;
        break;
      case '.half':
        tmp$_2 = args.iterator();
        while (tmp$_2.hasNext()) {
          var arg_0 = tmp$_2.next();
          try {
            var word = userStringToInt(arg_0);
            this.prog_0.addToData_s8j3t7$(toByte(word));
            this.prog_0.addToData_s8j3t7$(toByte(word >> 8));
          }
           catch (e) {
            if (Kotlin.isType(e, NumberFormatException)) {
              this.prog_0.addDataRelocation_9yf72u$(this.prog_0.symbolPart_qxjnze$(arg_0, dbg), this.prog_0.labelOffsetPart_qxjnze$(arg_0, dbg), this.currentDataOffset_0 - MemorySegments_getInstance().STATIC_BEGIN | 0, dbg);
              this.prog_0.addToData_s8j3t7$(0);
              this.prog_0.addToData_s8j3t7$(0);
            }
             else
              throw e;
          }
          this.currentDataOffset_0 = this.currentDataOffset_0 + 2 | 0;
        }

        break;
      case '.word':
        tmp$_3 = args.iterator();
        while (tmp$_3.hasNext()) {
          var arg_1 = tmp$_3.next();
          try {
            var word_0 = userStringToInt(arg_1);
            this.prog_0.addToData_s8j3t7$(toByte(word_0));
            this.prog_0.addToData_s8j3t7$(toByte(word_0 >> 8));
            this.prog_0.addToData_s8j3t7$(toByte(word_0 >> 16));
            this.prog_0.addToData_s8j3t7$(toByte(word_0 >> 24));
          }
           catch (e) {
            if (Kotlin.isType(e, NumberFormatException)) {
              this.prog_0.addDataRelocation_9yf72u$(this.prog_0.symbolPart_qxjnze$(arg_1, dbg), this.prog_0.labelOffsetPart_qxjnze$(arg_1, dbg), this.currentDataOffset_0 - MemorySegments_getInstance().STATIC_BEGIN | 0, dbg);
              this.prog_0.addToData_s8j3t7$(0);
              this.prog_0.addToData_s8j3t7$(0);
              this.prog_0.addToData_s8j3t7$(0);
              this.prog_0.addToData_s8j3t7$(0);
            }
             else
              throw e;
          }
          this.currentDataOffset_0 = this.currentDataOffset_0 + 4 | 0;
        }

        break;
      case '.globl':
      case 'global':
        var action = getCallableRef('makeLabelGlobal', function ($receiver, label) {
          return $receiver.makeLabelGlobal_61zpoe$(label), Unit;
        }.bind(null, this.prog_0));
        var tmp$_6;
        tmp$_6 = args.iterator();
        while (tmp$_6.hasNext()) {
          var element = tmp$_6.next();
          action(element);
        }

        break;
      case '.import':
        checkArgsLength(args, 1, dbg);
        var filepath = args.get_za3lpa$(0);
        var relative = !startsWith(filepath, '<');
        var $receiver = filepath;
        if (Regex_init('".*"|\'.*\'|<.*>').matches_6bul2c$($receiver)) {
          filepath = slice(filepath, new IntRange(1, filepath.length - 2 | 0));
        }

        this.prog_0.addImport_ivxn3r$(filepath, relative);
        break;
      case '.space':
        checkArgsLength(args, 1, dbg);
        try {
          var reps = userStringToInt(args.get_za3lpa$(0));
          for (var c_0 = 1; c_0 <= reps; c_0++) {
            this.prog_0.addToData_s8j3t7$(0);
          }
          this.currentDataOffset_0 = this.currentDataOffset_0 + reps | 0;
        }
         catch (e) {
          if (Kotlin.isType(e, NumberFormatException)) {
            throw AssemblerError_init(args.get_za3lpa$(0) + ' not a valid argument', dbg);
          }
           else
            throw e;
        }

        break;
      case '.align':
        checkArgsLength(args, 1, dbg);
        var pow2 = userStringToInt(args.get_za3lpa$(0));
        if (pow2 < 0 || pow2 > 8) {
          throw AssemblerError_init('.align argument must be between 0 and 8, inclusive', dbg);
        }

        var mask = (1 << pow2) - 1 | 0;
        while ((this.currentDataOffset_0 & mask) !== 0) {
          this.prog_0.addToData_s8j3t7$(0);
          this.currentDataOffset_0 = this.currentDataOffset_0 + 1 | 0;
        }

        break;
      case '.equiv':
      case '.equ':
      case '.set':
        checkArgsLength(args, 2, dbg);
        var oldDefn = this.prog_0.addEqu_puj7f4$(args.get_za3lpa$(0), args.get_za3lpa$(1));
        if (equals(directive, '.equiv') && oldDefn != null) {
          throw AssemblerError_init('attempt to redefine ' + args.get_za3lpa$(0), dbg);
        }

        break;
      case '.float':
        tmp$_4 = args.iterator();
        while (tmp$_4.hasNext()) {
          var arg_2 = tmp$_4.next();
          try {
            var float = userStringToFloat(arg_2);
            var bits = toRawBits(float);
            this.prog_0.addToData_s8j3t7$(toByte(bits));
            this.prog_0.addToData_s8j3t7$(toByte(bits >> 8));
            this.prog_0.addToData_s8j3t7$(toByte(bits >> 16));
            this.prog_0.addToData_s8j3t7$(toByte(bits >> 24));
          }
           catch (e) {
            if (Kotlin.isType(e, NumberFormatException)) {
              this.prog_0.addDataRelocation_9yf72u$(arg_2, this.currentDataOffset_0 - MemorySegments_getInstance().STATIC_BEGIN | 0, void 0, dbg);
              this.prog_0.addToData_s8j3t7$(0);
              this.prog_0.addToData_s8j3t7$(0);
              this.prog_0.addToData_s8j3t7$(0);
              this.prog_0.addToData_s8j3t7$(0);
            }
             else
              throw e;
          }
          this.currentDataOffset_0 = this.currentDataOffset_0 + 4 | 0;
        }

        break;
      case '.double':
        tmp$_5 = args.iterator();
        while (tmp$_5.hasNext()) {
          var arg_3 = tmp$_5.next();
          try {
            var double = userStringToDouble(arg_3);
            var bits_0 = toRawBits_0(double);
            this.prog_0.addToData_s8j3t7$(toByte(bits_0.toInt()));
            this.prog_0.addToData_s8j3t7$(toByte(bits_0.shiftRight(8).toInt()));
            this.prog_0.addToData_s8j3t7$(toByte(bits_0.shiftRight(16).toInt()));
            this.prog_0.addToData_s8j3t7$(toByte(bits_0.shiftRight(24).toInt()));
            this.prog_0.addToData_s8j3t7$(toByte(bits_0.shiftRight(32).toInt()));
            this.prog_0.addToData_s8j3t7$(toByte(bits_0.shiftRight(40).toInt()));
            this.prog_0.addToData_s8j3t7$(toByte(bits_0.shiftRight(48).toInt()));
            this.prog_0.addToData_s8j3t7$(toByte(bits_0.shiftRight(56).toInt()));
          }
           catch (e) {
            if (Kotlin.isType(e, NumberFormatException)) {
              this.prog_0.addDataRelocation_9yf72u$(arg_3, this.currentDataOffset_0 - MemorySegments_getInstance().STATIC_BEGIN | 0, void 0, dbg);
              this.prog_0.addToData_s8j3t7$(0);
              this.prog_0.addToData_s8j3t7$(0);
              this.prog_0.addToData_s8j3t7$(0);
              this.prog_0.addToData_s8j3t7$(0);
              this.prog_0.addToData_s8j3t7$(0);
              this.prog_0.addToData_s8j3t7$(0);
              this.prog_0.addToData_s8j3t7$(0);
              this.prog_0.addToData_s8j3t7$(0);
            }
             else
              throw e;
          }
          this.currentDataOffset_0 = this.currentDataOffset_0 + 8 | 0;
        }

        break;
      default:throw AssemblerError_init('unknown assembler directive ' + directive, dbg);
    }
  };
  AssemblerPassOne.prototype.addRelocation_q0z4ff$ = function (relocator, offset, label, dbg) {
    return this.prog_0.addRelocation_pjaf6f$(relocator, this.prog_0.symbolPart_qxjnze$(label, dbg), this.prog_0.labelOffsetPart_qxjnze$(label, dbg), offset, dbg);
  };
  AssemblerPassOne.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AssemblerPassOne',
    interfaces: []
  };
  function AssemblerPassTwo(prog, talInstructions) {
    this.prog = prog;
    this.talInstructions = talInstructions;
    this.errors_0 = ArrayList_init();
    this.warnings_0 = ArrayList_init();
  }
  AssemblerPassTwo.prototype.run = function () {
    var tmp$, tmp$_0;
    this.resolveEquivs_0(this.prog);
    tmp$ = this.talInstructions.iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var dbg = tmp$_1.component1()
      , inst = tmp$_1.component2();
      try {
        this.addInstruction_0(inst, dbg);
        this.prog.addDebugInfo_wb9iis$(dbg);
        if (!equals(getImmWarning, '')) {
          var lineNumber = dbg.component1();
          this.warnings_0.add_11rb$(AssemblerWarning_init_0(lineNumber, AssemblerWarning_init(getImmWarning)));
          getImmWarning = '';
        }
      }
       catch (e) {
        if (Kotlin.isType(e, AssemblerError)) {
          var lineNumber_0 = dbg.component1();
          if (Kotlin.isType(e.errorType, InstructionNotFoundError)) {
            var cmd = getInstruction(inst);
            var cleanedCMD = replace(cmd, '.', '');
            try {
              tmp$_0 = PseudoDispatcher$valueOf(cleanedCMD).pw;
            }
             catch (_) {
              if (Kotlin.isType(_, Throwable)) {
                this.errors_0.add_11rb$(AssemblerError_init_0(lineNumber_0, e));
                continue;
              }
               else
                throw _;
            }
            var pw = tmp$_0;
            try {
              pw.invoke_33jwtj$(inst, new AssemblerPassOne('', void 0, ''), dbg);
              this.errors_0.add_11rb$(AssemblerError_init_0(lineNumber_0, e));
            }
             catch (pe) {
              if (Kotlin.isType(pe, Throwable)) {
                this.errors_0.add_11rb$(AssemblerError_init_0(lineNumber_0, pe));
              }
               else
                throw pe;
            }
          }
           else {
            this.errors_0.add_11rb$(AssemblerError_init_0(lineNumber_0, e));
          }
        }
         else
          throw e;
      }
    }
    return new AssemblerOutput(this.prog, this.errors_0, this.warnings_0);
  };
  AssemblerPassTwo.prototype.addInstruction_0 = function (tokens, dbg) {
    var tmp$ = tokens.isEmpty();
    if (!tmp$) {
      tmp$ = tokens.get_za3lpa$(0).length === 0;
    }
    if (tmp$)
      return;
    var cmd = getInstruction(tokens);
    var inst = Instruction$Companion_getInstance().get_hhf06j$(cmd, dbg);
    var mcode = inst.format.fill();
    inst.parser.invoke_phh6x1$(this.prog, mcode, drop(tokens, 1), dbg);
    this.prog.add_6cx2xq$(mcode);
  };
  AssemblerPassTwo.prototype.resolveEquivs_0 = function (prog) {
    var tmp$;
    var conflicts = intersect(prog.labels.keys, prog.equivs.keys);
    if (!conflicts.isEmpty()) {
      throw AssemblerError_init('conflicting definitions for ' + conflicts);
    }
    var processing = HashSet_init();
    tmp$ = prog.equivs.keys.iterator();
    while (tmp$.hasNext()) {
      var equiv = tmp$.next();
      if (!prog.labels.keys.contains_11rb$(equiv)) {
        var $receiver = prog.labels;
        var value = this.findDefn_0(equiv, prog, processing);
        $receiver.put_xwzc9p$(equiv, value);
      }
    }
  };
  AssemblerPassTwo.prototype.findDefn_0 = function (sym, prog, active) {
    if (active.contains_11rb$(sym)) {
      throw AssemblerError_init('circularity in definition of ' + sym);
    }
    var value = ensureNotNull(prog.equivs.get_11rb$(sym));
    if (isNumeral(value)) {
      return userStringToInt(value);
    }
     else if (prog.labels.keys.contains_11rb$(value)) {
      return ensureNotNull(prog.labels.get_11rb$(value));
    }
     else if (prog.equivs.keys.contains_11rb$(value)) {
      active.add_11rb$(sym);
      var result = this.findDefn_0(value, prog, active);
      active.remove_11rb$(sym);
      return result;
    }
     else {
      throw AssemblerError_init('undefined symbol: ' + value);
    }
  };
  AssemblerPassTwo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AssemblerPassTwo',
    interfaces: []
  };
  function getInstruction(tokens) {
    return tokens.get_za3lpa$(0).toLowerCase();
  }
  function AssemblerError() {
    AssemblerError$Companion_getInstance();
    Kotlin.captureStack(Throwable, this);
    this.name = 'AssemblerError';
    this.line = null;
    this.errorType = null;
  }
  function AssemblerError$Companion() {
    AssemblerError$Companion_instance = this;
  }
  AssemblerError$Companion.prototype.parse_msg_tzx6ug$ = function (msg, dbg) {
    if (msg === void 0)
      msg = null;
    if (dbg === void 0)
      dbg = null;
    if (msg == null) {
      return msg;
    }
    var s = msg;
    if (dbg == null) {
      return msg;
    }
    var dbg_0 = dbg;
    var tmp$ = dbg_0.prog.name + ':' + dbg_0.lineNo + ': ' + toString(msg) + '\n';
    var $receiver = dbg_0.line;
    var tmp$_0;
    return tmp$ + trim(Kotlin.isCharSequence(tmp$_0 = $receiver) ? tmp$_0 : throwCCE()).toString();
  };
  AssemblerError$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AssemblerError$Companion_instance = null;
  function AssemblerError$Companion_getInstance() {
    if (AssemblerError$Companion_instance === null) {
      new AssemblerError$Companion();
    }
    return AssemblerError$Companion_instance;
  }
  AssemblerError.prototype.toString = function () {
    return Throwable.prototype.toString.call(this);
  };
  Object.defineProperty(AssemblerError.prototype, 'message', {
    get: function () {
      return this.message_r7letw$_0;
    }
  });
  Object.defineProperty(AssemblerError.prototype, 'cause', {
    get: function () {
      return this.cause_mcvwjy$_0;
    }
  });
  AssemblerError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AssemblerError',
    interfaces: [Throwable]
  };
  function AssemblerError_init(msg, dbg, $this) {
    if (msg === void 0)
      msg = null;
    if (dbg === void 0)
      dbg = null;
    $this = $this || Object.create(AssemblerError.prototype);
    Throwable.call($this);
    $this.message_r7letw$_0 = AssemblerError$Companion_getInstance().parse_msg_tzx6ug$(msg, dbg);
    $this.cause_mcvwjy$_0 = null;
    AssemblerError.call($this);
    return $this;
  }
  function AssemblerError_init_0(errorLine, e, $this) {
    $this = $this || Object.create(AssemblerError.prototype);
    AssemblerError_init(e.message, void 0, $this);
    $this.line = errorLine;
    return $this;
  }
  function AssemblerError_init_1(msg, errorType, dbg, $this) {
    if (msg === void 0)
      msg = null;
    if (dbg === void 0)
      dbg = null;
    $this = $this || Object.create(AssemblerError.prototype);
    AssemblerError_init(msg, dbg, $this);
    $this.errorType = errorType;
    return $this;
  }
  function AssemblerWarning() {
    Kotlin.captureStack(Throwable, this);
    this.name = 'AssemblerWarning';
    this.line = null;
  }
  AssemblerWarning.prototype.toString = function () {
    if (this.line == null)
      return Throwable.prototype.toString.call(this);
    else
      return Throwable.prototype.toString.call(this) + ' on line ' + toString(this.line);
  };
  Object.defineProperty(AssemblerWarning.prototype, 'message', {
    get: function () {
      return this.message_jkl2f4$_0;
    }
  });
  Object.defineProperty(AssemblerWarning.prototype, 'cause', {
    get: function () {
      return this.cause_tascym$_0;
    }
  });
  AssemblerWarning.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AssemblerWarning',
    interfaces: [Throwable]
  };
  function AssemblerWarning_init(msg, $this) {
    if (msg === void 0)
      msg = null;
    $this = $this || Object.create(AssemblerWarning.prototype);
    Throwable.call($this);
    $this.message_jkl2f4$_0 = msg;
    $this.cause_tascym$_0 = null;
    AssemblerWarning.call($this);
    return $this;
  }
  function AssemblerWarning_init_0(errorLine, e, $this) {
    $this = $this || Object.create(AssemblerWarning.prototype);
    AssemblerWarning_init(e.message, $this);
    $this.line = errorLine;
    return $this;
  }
  function Lexer() {
    Lexer_instance = this;
    this.charPatn_0 = "'(?:\\\\.|[^\\\\'])'";
    this.strPatn_0 = '"(?:\\\\.|[^\\\\""])*?"';
    this.otherTokenPatn_0 = '[^:() \\t,#""\']+';
    this.tokenPatn_0 = '(\'(?:\\\\.|[^\\\\\'])\'|"(?:\\\\.|[^\\\\""])*?"|[^:() \\t,#""\']+)';
    this.labelPatn_0 = '([^:() \\t,#""\']+)\\s*:';
    this.baseRegPatn_0 = '\\(\\s*([^:() \\t,#""\']+)\\s*\\)';
    this.tokenRE_0 = Regex_init('(#.*)|([^:() \\t,#""\']+)\\s*:|(\'(?:\\\\.|[^\\\\\'])\'|"(?:\\\\.|[^\\\\""])*?"|[^:() \\t,#""\']+)|\\(\\s*([^:() \\t,#""\']+)\\s*\\)|([\'""])');
  }
  Lexer.prototype.lexLine_hhf06j$ = function (line, dbg) {
    if (dbg === void 0)
      dbg = null;
    var tmp$;
    var labels = ArrayList_init();
    var insnTokens = ArrayList_init();
    tmp$ = this.tokenRE_0.findAll_905azu$(line).iterator();
    while (tmp$.hasNext()) {
      var mat = tmp$.next();
      var groups = mat.groups;
      if (groups.get_za3lpa$(1) == null)
        if (groups.get_za3lpa$(2) != null && !insnTokens.isEmpty())
          throw AssemblerError_init('label ' + ensureNotNull(groups.get_za3lpa$(2)).value + ' in the middle of an instruction', dbg);
        else if (groups.get_za3lpa$(2) != null)
          labels.add_11rb$(ensureNotNull(groups.get_za3lpa$(2)).value);
        else if (groups.get_za3lpa$(3) != null)
          insnTokens.add_11rb$(ensureNotNull(groups.get_za3lpa$(3)).value);
        else if (groups.get_za3lpa$(4) != null)
          insnTokens.add_11rb$('(' + ensureNotNull(groups.get_za3lpa$(4)).value + ')');
        else
          throw AssemblerError_init('unclosed string', dbg);
    }
    return new Pair(labels, insnTokens);
  };
  Lexer.prototype.addNonemptyWord_0 = function (previous, next) {
    var word = next.toString();
    if (word.length > 0) {
      previous.add_11rb$(word);
    }
  };
  Lexer.prototype.lex_61zpoe$ = function (line) {
    var tmp$;
    var currentWord = new StringBuilder('');
    var previousWords = ArrayList_init();
    var escaped = false;
    var inCharacter = false;
    var inString = false;
    tmp$ = iterator(line);
    while (tmp$.hasNext()) {
      var ch = unboxChar(tmp$.next());
      var wasDelimiter = false;
      switch (ch) {
        case 39:
          inCharacter = (!(escaped ^ inCharacter) && !inString);
          break;
        case 34:
          inString = (!(escaped ^ inString) && !inCharacter);
          break;
        case 32:
          wasDelimiter = (!inString && !inCharacter);
          break;
      }
      escaped = (!escaped && ch === 92);
      if (wasDelimiter) {
        var l = currentWord.length;
        if (l > 2 && (listOf_0(["'", '"']).contains_11rb$(String.fromCharCode(currentWord.charCodeAt(0))) && currentWord.charCodeAt(l - 1 | 0) === currentWord.charCodeAt(0))) {
          var cs = currentWord.subSequence_vux9f0$(1, l - 1 | 0);
          currentWord = StringBuilder_init_0(cs);
        }
        this.addNonemptyWord_0(previousWords, currentWord);
        currentWord = new StringBuilder('');
      }
       else if (!escaped) {
        currentWord.append_s8itvh$(ch);
      }
    }
    var l_0 = currentWord.length;
    if (l_0 > 2 && (listOf_0(["'", '"']).contains_11rb$(String.fromCharCode(currentWord.charCodeAt(0))) && currentWord.charCodeAt(l_0 - 1 | 0) === currentWord.charCodeAt(0))) {
      var cs_0 = currentWord.subSequence_vux9f0$(1, l_0 - 1 | 0);
      currentWord = StringBuilder_init_0(cs_0);
    }
    this.addNonemptyWord_0(previousWords, currentWord);
    return previousWords;
  };
  Lexer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Lexer',
    interfaces: []
  };
  var Lexer_instance = null;
  function Lexer_getInstance() {
    if (Lexer_instance === null) {
      new Lexer();
    }
    return Lexer_instance;
  }
  function LintError(lineNumber, message, isError) {
    if (isError === void 0)
      isError = true;
    this.lineNumber = lineNumber;
    this.message = message;
    this.isError = isError;
  }
  LintError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LintError',
    interfaces: []
  };
  LintError.prototype.component1 = function () {
    return this.lineNumber;
  };
  LintError.prototype.component2 = function () {
    return this.message;
  };
  LintError.prototype.component3 = function () {
    return this.isError;
  };
  LintError.prototype.copy_cqw3wz$ = function (lineNumber, message, isError) {
    return new LintError(lineNumber === void 0 ? this.lineNumber : lineNumber, message === void 0 ? this.message : message, isError === void 0 ? this.isError : isError);
  };
  LintError.prototype.toString = function () {
    return 'LintError(lineNumber=' + Kotlin.toString(this.lineNumber) + (', message=' + Kotlin.toString(this.message)) + (', isError=' + Kotlin.toString(this.isError)) + ')';
  };
  LintError.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.lineNumber) | 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    result = result * 31 + Kotlin.hashCode(this.isError) | 0;
    return result;
  };
  LintError.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.lineNumber, other.lineNumber) && Kotlin.equals(this.message, other.message) && Kotlin.equals(this.isError, other.isError)))));
  };
  function Linter() {
    Linter_instance = this;
  }
  Linter.prototype.lint_61zpoe$ = function (text) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var tmp$_5 = Assembler_getInstance().assemble_6hosri$(text, void 0, '');
    var errors = tmp$_5.component2()
    , warnings = tmp$_5.component3();
    var linterErrors = ArrayList_init();
    tmp$ = errors.iterator();
    while (tmp$.hasNext()) {
      var error = tmp$.next();
      linterErrors.add_11rb$(new LintError((tmp$_0 = error.line) != null ? tmp$_0 : -1, (tmp$_1 = error.message) != null ? tmp$_1 : ''));
    }
    tmp$_2 = warnings.iterator();
    while (tmp$_2.hasNext()) {
      var warning = tmp$_2.next();
      linterErrors.add_11rb$(new LintError((tmp$_3 = warning.line) != null ? tmp$_3 : -1, (tmp$_4 = warning.message) != null ? tmp$_4 : '', false));
    }
    return copyToArray(linterErrors);
  };
  Linter.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Linter',
    interfaces: []
  };
  var Linter_instance = null;
  function Linter_getInstance() {
    if (Linter_instance === null) {
      new Linter();
    }
    return Linter_instance;
  }
  function PseudoDispatcher(name, ordinal, pw) {
    Enum.call(this);
    this.pw = pw;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PseudoDispatcher_initFields() {
    PseudoDispatcher_initFields = function () {
    };
    PseudoDispatcher$beqz_instance = new PseudoDispatcher('beqz', 0, BEQZ_getInstance());
    PseudoDispatcher$bgez_instance = new PseudoDispatcher('bgez', 1, BGEZ_getInstance());
    PseudoDispatcher$bgt_instance = new PseudoDispatcher('bgt', 2, BGT_getInstance());
    PseudoDispatcher$bgtu_instance = new PseudoDispatcher('bgtu', 3, BGTU_getInstance());
    PseudoDispatcher$bgtz_instance = new PseudoDispatcher('bgtz', 4, BGTZ_getInstance());
    PseudoDispatcher$ble_instance = new PseudoDispatcher('ble', 5, BLE_getInstance());
    PseudoDispatcher$bleu_instance = new PseudoDispatcher('bleu', 6, BLEU_getInstance());
    PseudoDispatcher$blez_instance = new PseudoDispatcher('blez', 7, BLEZ_getInstance());
    PseudoDispatcher$bltz_instance = new PseudoDispatcher('bltz', 8, BLTZ_getInstance());
    PseudoDispatcher$bnez_instance = new PseudoDispatcher('bnez', 9, BNEZ_getInstance());
    PseudoDispatcher$call_instance = new PseudoDispatcher('call', 10, CALL_getInstance());
    PseudoDispatcher$jal_instance = new PseudoDispatcher('jal', 11, JAL_getInstance());
    PseudoDispatcher$jalr_instance = new PseudoDispatcher('jalr', 12, JALR_getInstance());
    PseudoDispatcher$j_instance = new PseudoDispatcher('j', 13, J_getInstance());
    PseudoDispatcher$jr_instance = new PseudoDispatcher('jr', 14, JR_getInstance());
    PseudoDispatcher$la_instance = new PseudoDispatcher('la', 15, LA_getInstance());
    PseudoDispatcher$lb_instance = new PseudoDispatcher('lb', 16, Load_getInstance());
    PseudoDispatcher$lbu_instance = new PseudoDispatcher('lbu', 17, Load_getInstance());
    PseudoDispatcher$lh_instance = new PseudoDispatcher('lh', 18, Load_getInstance());
    PseudoDispatcher$lhu_instance = new PseudoDispatcher('lhu', 19, Load_getInstance());
    PseudoDispatcher$li_instance = new PseudoDispatcher('li', 20, LI_getInstance());
    PseudoDispatcher$lw_instance = new PseudoDispatcher('lw', 21, Load_getInstance());
    PseudoDispatcher$ld_instance = new PseudoDispatcher('ld', 22, Load_getInstance());
    PseudoDispatcher$mv_instance = new PseudoDispatcher('mv', 23, MV_getInstance());
    PseudoDispatcher$neg_instance = new PseudoDispatcher('neg', 24, NEG_getInstance());
    PseudoDispatcher$negw_instance = new PseudoDispatcher('negw', 25, NEGW_getInstance());
    PseudoDispatcher$nop_instance = new PseudoDispatcher('nop', 26, NOP_getInstance());
    PseudoDispatcher$not_instance = new PseudoDispatcher('not', 27, NOT_getInstance());
    PseudoDispatcher$ret_instance = new PseudoDispatcher('ret', 28, RET_getInstance());
    PseudoDispatcher$sb_instance = new PseudoDispatcher('sb', 29, Store_getInstance());
    PseudoDispatcher$sextw_instance = new PseudoDispatcher('sextw', 30, SEXTW_getInstance());
    PseudoDispatcher$seqz_instance = new PseudoDispatcher('seqz', 31, SEQZ_getInstance());
    PseudoDispatcher$sgtz_instance = new PseudoDispatcher('sgtz', 32, SGTZ_getInstance());
    PseudoDispatcher$sh_instance = new PseudoDispatcher('sh', 33, Store_getInstance());
    PseudoDispatcher$sltz_instance = new PseudoDispatcher('sltz', 34, SLTZ_getInstance());
    PseudoDispatcher$snez_instance = new PseudoDispatcher('snez', 35, SNEZ_getInstance());
    PseudoDispatcher$sw_instance = new PseudoDispatcher('sw', 36, Store_getInstance());
    PseudoDispatcher$sd_instance = new PseudoDispatcher('sd', 37, Store_getInstance());
    PseudoDispatcher$tail_instance = new PseudoDispatcher('tail', 38, TAIL_getInstance());
    PseudoDispatcher$seq_instance = new PseudoDispatcher('seq', 39, SEQ_getInstance());
    PseudoDispatcher$sge_instance = new PseudoDispatcher('sge', 40, SGE_getInstance());
    PseudoDispatcher$sgeu_instance = new PseudoDispatcher('sgeu', 41, SGE_getInstance());
    PseudoDispatcher$sgt_instance = new PseudoDispatcher('sgt', 42, SGT_getInstance());
    PseudoDispatcher$sgtu_instance = new PseudoDispatcher('sgtu', 43, SGT_getInstance());
    PseudoDispatcher$sle_instance = new PseudoDispatcher('sle', 44, SLE_getInstance());
    PseudoDispatcher$sleu_instance = new PseudoDispatcher('sleu', 45, SLE_getInstance());
    PseudoDispatcher$sne_instance = new PseudoDispatcher('sne', 46, SNE_getInstance());
    PseudoDispatcher$fmvs_instance = new PseudoDispatcher('fmvs', 47, FMVS_getInstance());
    PseudoDispatcher$fabss_instance = new PseudoDispatcher('fabss', 48, FABSS_getInstance());
    PseudoDispatcher$fnegs_instance = new PseudoDispatcher('fnegs', 49, FNEGS_getInstance());
    PseudoDispatcher$fmvd_instance = new PseudoDispatcher('fmvd', 50, FMVD_getInstance());
    PseudoDispatcher$fabsd_instance = new PseudoDispatcher('fabsd', 51, FABSD_getInstance());
    PseudoDispatcher$fnegd_instance = new PseudoDispatcher('fnegd', 52, FNEGD_getInstance());
    PseudoDispatcher$flw_instance = new PseudoDispatcher('flw', 53, Load_getInstance());
    PseudoDispatcher$fld_instance = new PseudoDispatcher('fld', 54, Load_getInstance());
    PseudoDispatcher$fsw_instance = new PseudoDispatcher('fsw', 55, Store_getInstance());
    PseudoDispatcher$fsd_instance = new PseudoDispatcher('fsd', 56, Store_getInstance());
  }
  var PseudoDispatcher$beqz_instance;
  function PseudoDispatcher$beqz_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$beqz_instance;
  }
  var PseudoDispatcher$bgez_instance;
  function PseudoDispatcher$bgez_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$bgez_instance;
  }
  var PseudoDispatcher$bgt_instance;
  function PseudoDispatcher$bgt_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$bgt_instance;
  }
  var PseudoDispatcher$bgtu_instance;
  function PseudoDispatcher$bgtu_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$bgtu_instance;
  }
  var PseudoDispatcher$bgtz_instance;
  function PseudoDispatcher$bgtz_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$bgtz_instance;
  }
  var PseudoDispatcher$ble_instance;
  function PseudoDispatcher$ble_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$ble_instance;
  }
  var PseudoDispatcher$bleu_instance;
  function PseudoDispatcher$bleu_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$bleu_instance;
  }
  var PseudoDispatcher$blez_instance;
  function PseudoDispatcher$blez_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$blez_instance;
  }
  var PseudoDispatcher$bltz_instance;
  function PseudoDispatcher$bltz_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$bltz_instance;
  }
  var PseudoDispatcher$bnez_instance;
  function PseudoDispatcher$bnez_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$bnez_instance;
  }
  var PseudoDispatcher$call_instance;
  function PseudoDispatcher$call_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$call_instance;
  }
  var PseudoDispatcher$jal_instance;
  function PseudoDispatcher$jal_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$jal_instance;
  }
  var PseudoDispatcher$jalr_instance;
  function PseudoDispatcher$jalr_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$jalr_instance;
  }
  var PseudoDispatcher$j_instance;
  function PseudoDispatcher$j_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$j_instance;
  }
  var PseudoDispatcher$jr_instance;
  function PseudoDispatcher$jr_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$jr_instance;
  }
  var PseudoDispatcher$la_instance;
  function PseudoDispatcher$la_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$la_instance;
  }
  var PseudoDispatcher$lb_instance;
  function PseudoDispatcher$lb_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$lb_instance;
  }
  var PseudoDispatcher$lbu_instance;
  function PseudoDispatcher$lbu_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$lbu_instance;
  }
  var PseudoDispatcher$lh_instance;
  function PseudoDispatcher$lh_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$lh_instance;
  }
  var PseudoDispatcher$lhu_instance;
  function PseudoDispatcher$lhu_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$lhu_instance;
  }
  var PseudoDispatcher$li_instance;
  function PseudoDispatcher$li_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$li_instance;
  }
  var PseudoDispatcher$lw_instance;
  function PseudoDispatcher$lw_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$lw_instance;
  }
  var PseudoDispatcher$ld_instance;
  function PseudoDispatcher$ld_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$ld_instance;
  }
  var PseudoDispatcher$mv_instance;
  function PseudoDispatcher$mv_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$mv_instance;
  }
  var PseudoDispatcher$neg_instance;
  function PseudoDispatcher$neg_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$neg_instance;
  }
  var PseudoDispatcher$negw_instance;
  function PseudoDispatcher$negw_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$negw_instance;
  }
  var PseudoDispatcher$nop_instance;
  function PseudoDispatcher$nop_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$nop_instance;
  }
  var PseudoDispatcher$not_instance;
  function PseudoDispatcher$not_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$not_instance;
  }
  var PseudoDispatcher$ret_instance;
  function PseudoDispatcher$ret_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$ret_instance;
  }
  var PseudoDispatcher$sb_instance;
  function PseudoDispatcher$sb_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$sb_instance;
  }
  var PseudoDispatcher$sextw_instance;
  function PseudoDispatcher$sextw_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$sextw_instance;
  }
  var PseudoDispatcher$seqz_instance;
  function PseudoDispatcher$seqz_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$seqz_instance;
  }
  var PseudoDispatcher$sgtz_instance;
  function PseudoDispatcher$sgtz_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$sgtz_instance;
  }
  var PseudoDispatcher$sh_instance;
  function PseudoDispatcher$sh_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$sh_instance;
  }
  var PseudoDispatcher$sltz_instance;
  function PseudoDispatcher$sltz_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$sltz_instance;
  }
  var PseudoDispatcher$snez_instance;
  function PseudoDispatcher$snez_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$snez_instance;
  }
  var PseudoDispatcher$sw_instance;
  function PseudoDispatcher$sw_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$sw_instance;
  }
  var PseudoDispatcher$sd_instance;
  function PseudoDispatcher$sd_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$sd_instance;
  }
  var PseudoDispatcher$tail_instance;
  function PseudoDispatcher$tail_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$tail_instance;
  }
  var PseudoDispatcher$seq_instance;
  function PseudoDispatcher$seq_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$seq_instance;
  }
  var PseudoDispatcher$sge_instance;
  function PseudoDispatcher$sge_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$sge_instance;
  }
  var PseudoDispatcher$sgeu_instance;
  function PseudoDispatcher$sgeu_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$sgeu_instance;
  }
  var PseudoDispatcher$sgt_instance;
  function PseudoDispatcher$sgt_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$sgt_instance;
  }
  var PseudoDispatcher$sgtu_instance;
  function PseudoDispatcher$sgtu_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$sgtu_instance;
  }
  var PseudoDispatcher$sle_instance;
  function PseudoDispatcher$sle_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$sle_instance;
  }
  var PseudoDispatcher$sleu_instance;
  function PseudoDispatcher$sleu_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$sleu_instance;
  }
  var PseudoDispatcher$sne_instance;
  function PseudoDispatcher$sne_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$sne_instance;
  }
  var PseudoDispatcher$fmvs_instance;
  function PseudoDispatcher$fmvs_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$fmvs_instance;
  }
  var PseudoDispatcher$fabss_instance;
  function PseudoDispatcher$fabss_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$fabss_instance;
  }
  var PseudoDispatcher$fnegs_instance;
  function PseudoDispatcher$fnegs_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$fnegs_instance;
  }
  var PseudoDispatcher$fmvd_instance;
  function PseudoDispatcher$fmvd_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$fmvd_instance;
  }
  var PseudoDispatcher$fabsd_instance;
  function PseudoDispatcher$fabsd_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$fabsd_instance;
  }
  var PseudoDispatcher$fnegd_instance;
  function PseudoDispatcher$fnegd_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$fnegd_instance;
  }
  var PseudoDispatcher$flw_instance;
  function PseudoDispatcher$flw_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$flw_instance;
  }
  var PseudoDispatcher$fld_instance;
  function PseudoDispatcher$fld_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$fld_instance;
  }
  var PseudoDispatcher$fsw_instance;
  function PseudoDispatcher$fsw_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$fsw_instance;
  }
  var PseudoDispatcher$fsd_instance;
  function PseudoDispatcher$fsd_getInstance() {
    PseudoDispatcher_initFields();
    return PseudoDispatcher$fsd_instance;
  }
  PseudoDispatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PseudoDispatcher',
    interfaces: [Enum]
  };
  function PseudoDispatcher$values() {
    return [PseudoDispatcher$beqz_getInstance(), PseudoDispatcher$bgez_getInstance(), PseudoDispatcher$bgt_getInstance(), PseudoDispatcher$bgtu_getInstance(), PseudoDispatcher$bgtz_getInstance(), PseudoDispatcher$ble_getInstance(), PseudoDispatcher$bleu_getInstance(), PseudoDispatcher$blez_getInstance(), PseudoDispatcher$bltz_getInstance(), PseudoDispatcher$bnez_getInstance(), PseudoDispatcher$call_getInstance(), PseudoDispatcher$jal_getInstance(), PseudoDispatcher$jalr_getInstance(), PseudoDispatcher$j_getInstance(), PseudoDispatcher$jr_getInstance(), PseudoDispatcher$la_getInstance(), PseudoDispatcher$lb_getInstance(), PseudoDispatcher$lbu_getInstance(), PseudoDispatcher$lh_getInstance(), PseudoDispatcher$lhu_getInstance(), PseudoDispatcher$li_getInstance(), PseudoDispatcher$lw_getInstance(), PseudoDispatcher$ld_getInstance(), PseudoDispatcher$mv_getInstance(), PseudoDispatcher$neg_getInstance(), PseudoDispatcher$negw_getInstance(), PseudoDispatcher$nop_getInstance(), PseudoDispatcher$not_getInstance(), PseudoDispatcher$ret_getInstance(), PseudoDispatcher$sb_getInstance(), PseudoDispatcher$sextw_getInstance(), PseudoDispatcher$seqz_getInstance(), PseudoDispatcher$sgtz_getInstance(), PseudoDispatcher$sh_getInstance(), PseudoDispatcher$sltz_getInstance(), PseudoDispatcher$snez_getInstance(), PseudoDispatcher$sw_getInstance(), PseudoDispatcher$sd_getInstance(), PseudoDispatcher$tail_getInstance(), PseudoDispatcher$seq_getInstance(), PseudoDispatcher$sge_getInstance(), PseudoDispatcher$sgeu_getInstance(), PseudoDispatcher$sgt_getInstance(), PseudoDispatcher$sgtu_getInstance(), PseudoDispatcher$sle_getInstance(), PseudoDispatcher$sleu_getInstance(), PseudoDispatcher$sne_getInstance(), PseudoDispatcher$fmvs_getInstance(), PseudoDispatcher$fabss_getInstance(), PseudoDispatcher$fnegs_getInstance(), PseudoDispatcher$fmvd_getInstance(), PseudoDispatcher$fabsd_getInstance(), PseudoDispatcher$fnegd_getInstance(), PseudoDispatcher$flw_getInstance(), PseudoDispatcher$fld_getInstance(), PseudoDispatcher$fsw_getInstance(), PseudoDispatcher$fsd_getInstance()];
  }
  PseudoDispatcher.values = PseudoDispatcher$values;
  function PseudoDispatcher$valueOf(name) {
    switch (name) {
      case 'beqz':
        return PseudoDispatcher$beqz_getInstance();
      case 'bgez':
        return PseudoDispatcher$bgez_getInstance();
      case 'bgt':
        return PseudoDispatcher$bgt_getInstance();
      case 'bgtu':
        return PseudoDispatcher$bgtu_getInstance();
      case 'bgtz':
        return PseudoDispatcher$bgtz_getInstance();
      case 'ble':
        return PseudoDispatcher$ble_getInstance();
      case 'bleu':
        return PseudoDispatcher$bleu_getInstance();
      case 'blez':
        return PseudoDispatcher$blez_getInstance();
      case 'bltz':
        return PseudoDispatcher$bltz_getInstance();
      case 'bnez':
        return PseudoDispatcher$bnez_getInstance();
      case 'call':
        return PseudoDispatcher$call_getInstance();
      case 'jal':
        return PseudoDispatcher$jal_getInstance();
      case 'jalr':
        return PseudoDispatcher$jalr_getInstance();
      case 'j':
        return PseudoDispatcher$j_getInstance();
      case 'jr':
        return PseudoDispatcher$jr_getInstance();
      case 'la':
        return PseudoDispatcher$la_getInstance();
      case 'lb':
        return PseudoDispatcher$lb_getInstance();
      case 'lbu':
        return PseudoDispatcher$lbu_getInstance();
      case 'lh':
        return PseudoDispatcher$lh_getInstance();
      case 'lhu':
        return PseudoDispatcher$lhu_getInstance();
      case 'li':
        return PseudoDispatcher$li_getInstance();
      case 'lw':
        return PseudoDispatcher$lw_getInstance();
      case 'ld':
        return PseudoDispatcher$ld_getInstance();
      case 'mv':
        return PseudoDispatcher$mv_getInstance();
      case 'neg':
        return PseudoDispatcher$neg_getInstance();
      case 'negw':
        return PseudoDispatcher$negw_getInstance();
      case 'nop':
        return PseudoDispatcher$nop_getInstance();
      case 'not':
        return PseudoDispatcher$not_getInstance();
      case 'ret':
        return PseudoDispatcher$ret_getInstance();
      case 'sb':
        return PseudoDispatcher$sb_getInstance();
      case 'sextw':
        return PseudoDispatcher$sextw_getInstance();
      case 'seqz':
        return PseudoDispatcher$seqz_getInstance();
      case 'sgtz':
        return PseudoDispatcher$sgtz_getInstance();
      case 'sh':
        return PseudoDispatcher$sh_getInstance();
      case 'sltz':
        return PseudoDispatcher$sltz_getInstance();
      case 'snez':
        return PseudoDispatcher$snez_getInstance();
      case 'sw':
        return PseudoDispatcher$sw_getInstance();
      case 'sd':
        return PseudoDispatcher$sd_getInstance();
      case 'tail':
        return PseudoDispatcher$tail_getInstance();
      case 'seq':
        return PseudoDispatcher$seq_getInstance();
      case 'sge':
        return PseudoDispatcher$sge_getInstance();
      case 'sgeu':
        return PseudoDispatcher$sgeu_getInstance();
      case 'sgt':
        return PseudoDispatcher$sgt_getInstance();
      case 'sgtu':
        return PseudoDispatcher$sgtu_getInstance();
      case 'sle':
        return PseudoDispatcher$sle_getInstance();
      case 'sleu':
        return PseudoDispatcher$sleu_getInstance();
      case 'sne':
        return PseudoDispatcher$sne_getInstance();
      case 'fmvs':
        return PseudoDispatcher$fmvs_getInstance();
      case 'fabss':
        return PseudoDispatcher$fabss_getInstance();
      case 'fnegs':
        return PseudoDispatcher$fnegs_getInstance();
      case 'fmvd':
        return PseudoDispatcher$fmvd_getInstance();
      case 'fabsd':
        return PseudoDispatcher$fabsd_getInstance();
      case 'fnegd':
        return PseudoDispatcher$fnegd_getInstance();
      case 'flw':
        return PseudoDispatcher$flw_getInstance();
      case 'fld':
        return PseudoDispatcher$fld_getInstance();
      case 'fsw':
        return PseudoDispatcher$fsw_getInstance();
      case 'fsd':
        return PseudoDispatcher$fsd_getInstance();
      default:throwISE('No enum constant venusbackend.assembler.PseudoDispatcher.' + name);
    }
  }
  PseudoDispatcher.valueOf_61zpoe$ = PseudoDispatcher$valueOf;
  function PseudoDispatcherError() {
    Kotlin.captureStack(Throwable, this);
    this.name = 'PseudoDispatcherError';
    this.line = null;
  }
  PseudoDispatcherError.prototype.toString = function () {
    if (this.line == null)
      return Throwable.prototype.toString.call(this);
    else
      return Throwable.prototype.toString.call(this) + ' on line ' + toString(this.line);
  };
  Object.defineProperty(PseudoDispatcherError.prototype, 'message', {
    get: function () {
      return this.message_2nct7h$_0;
    }
  });
  Object.defineProperty(PseudoDispatcherError.prototype, 'cause', {
    get: function () {
      return this.cause_vx9bzz$_0;
    }
  });
  PseudoDispatcherError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PseudoDispatcherError',
    interfaces: [Throwable]
  };
  function PseudoDispatcherError_init(msg, $this) {
    if (msg === void 0)
      msg = null;
    $this = $this || Object.create(PseudoDispatcherError.prototype);
    Throwable.call($this);
    $this.message_2nct7h$_0 = msg;
    $this.cause_vx9bzz$_0 = null;
    PseudoDispatcherError.call($this);
    return $this;
  }
  function PseudoDispatcherError_init_0(errorLine, e, $this) {
    $this = $this || Object.create(PseudoDispatcherError.prototype);
    PseudoDispatcherError_init(e.message, $this);
    $this.line = errorLine;
    return $this;
  }
  function BEQZ() {
    BEQZ_instance = this;
    PseudoWriter.call(this);
  }
  BEQZ.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 3, dbg);
    return listOf(listOf_0(['beq', args.get_za3lpa$(1), 'x0', args.get_za3lpa$(2)]));
  };
  BEQZ.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BEQZ',
    interfaces: [PseudoWriter]
  };
  var BEQZ_instance = null;
  function BEQZ_getInstance() {
    if (BEQZ_instance === null) {
      new BEQZ();
    }
    return BEQZ_instance;
  }
  function BGEZ() {
    BGEZ_instance = this;
    PseudoWriter.call(this);
  }
  BGEZ.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 3, dbg);
    return listOf(listOf_0(['bge', args.get_za3lpa$(1), 'x0', args.get_za3lpa$(2)]));
  };
  BGEZ.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGEZ',
    interfaces: [PseudoWriter]
  };
  var BGEZ_instance = null;
  function BGEZ_getInstance() {
    if (BGEZ_instance === null) {
      new BGEZ();
    }
    return BGEZ_instance;
  }
  function BGT() {
    BGT_instance = this;
    PseudoWriter.call(this);
  }
  BGT.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 4, dbg);
    return listOf(listOf_0(['blt', args.get_za3lpa$(2), args.get_za3lpa$(1), args.get_za3lpa$(3)]));
  };
  BGT.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGT',
    interfaces: [PseudoWriter]
  };
  var BGT_instance = null;
  function BGT_getInstance() {
    if (BGT_instance === null) {
      new BGT();
    }
    return BGT_instance;
  }
  function BGTU() {
    BGTU_instance = this;
    PseudoWriter.call(this);
  }
  BGTU.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 4, dbg);
    return listOf(listOf_0(['bltu', args.get_za3lpa$(2), args.get_za3lpa$(1), args.get_za3lpa$(3)]));
  };
  BGTU.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGTU',
    interfaces: [PseudoWriter]
  };
  var BGTU_instance = null;
  function BGTU_getInstance() {
    if (BGTU_instance === null) {
      new BGTU();
    }
    return BGTU_instance;
  }
  function BGTZ() {
    BGTZ_instance = this;
    PseudoWriter.call(this);
  }
  BGTZ.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 3, dbg);
    return listOf(listOf_0(['blt', 'x0', args.get_za3lpa$(1), args.get_za3lpa$(2)]));
  };
  BGTZ.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGTZ',
    interfaces: [PseudoWriter]
  };
  var BGTZ_instance = null;
  function BGTZ_getInstance() {
    if (BGTZ_instance === null) {
      new BGTZ();
    }
    return BGTZ_instance;
  }
  function BLE() {
    BLE_instance = this;
    PseudoWriter.call(this);
  }
  BLE.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 4, dbg);
    return listOf(listOf_0(['bge', args.get_za3lpa$(2), args.get_za3lpa$(1), args.get_za3lpa$(3)]));
  };
  BLE.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BLE',
    interfaces: [PseudoWriter]
  };
  var BLE_instance = null;
  function BLE_getInstance() {
    if (BLE_instance === null) {
      new BLE();
    }
    return BLE_instance;
  }
  function BLEU() {
    BLEU_instance = this;
    PseudoWriter.call(this);
  }
  BLEU.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 4, dbg);
    return listOf(listOf_0(['bgeu', args.get_za3lpa$(2), args.get_za3lpa$(1), args.get_za3lpa$(3)]));
  };
  BLEU.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BLEU',
    interfaces: [PseudoWriter]
  };
  var BLEU_instance = null;
  function BLEU_getInstance() {
    if (BLEU_instance === null) {
      new BLEU();
    }
    return BLEU_instance;
  }
  function BLEZ() {
    BLEZ_instance = this;
    PseudoWriter.call(this);
  }
  BLEZ.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 3, dbg);
    return listOf(listOf_0(['bge', 'x0', args.get_za3lpa$(1), args.get_za3lpa$(2)]));
  };
  BLEZ.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BLEZ',
    interfaces: [PseudoWriter]
  };
  var BLEZ_instance = null;
  function BLEZ_getInstance() {
    if (BLEZ_instance === null) {
      new BLEZ();
    }
    return BLEZ_instance;
  }
  function BLTZ() {
    BLTZ_instance = this;
    PseudoWriter.call(this);
  }
  BLTZ.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 3, dbg);
    return listOf(listOf_0(['blt', args.get_za3lpa$(1), 'x0', args.get_za3lpa$(2)]));
  };
  BLTZ.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BLTZ',
    interfaces: [PseudoWriter]
  };
  var BLTZ_instance = null;
  function BLTZ_getInstance() {
    if (BLTZ_instance === null) {
      new BLTZ();
    }
    return BLTZ_instance;
  }
  function BNEZ() {
    BNEZ_instance = this;
    PseudoWriter.call(this);
  }
  BNEZ.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 3, dbg);
    return listOf(listOf_0(['bne', args.get_za3lpa$(1), 'x0', args.get_za3lpa$(2)]));
  };
  BNEZ.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BNEZ',
    interfaces: [PseudoWriter]
  };
  var BNEZ_instance = null;
  function BNEZ_getInstance() {
    if (BNEZ_instance === null) {
      new BNEZ();
    }
    return BNEZ_instance;
  }
  function CALL() {
    CALL_instance = this;
    PseudoWriter.call(this);
  }
  CALL.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 2, dbg);
    var auipc = listOf_0(['auipc', 'x6', '0']);
    state.addRelocation_q0z4ff$(PCRelHiRelocator, state.getOffset(), args.get_za3lpa$(1), dbg);
    var jalr = listOf_0(['jalr', 'x1', 'x6', '0']);
    state.addRelocation_q0z4ff$(PCRelLoRelocator, state.getOffset() + 4 | 0, args.get_za3lpa$(1), dbg);
    return listOf_0([auipc, jalr]);
  };
  CALL.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CALL',
    interfaces: [PseudoWriter]
  };
  var CALL_instance = null;
  function CALL_getInstance() {
    if (CALL_instance === null) {
      new CALL();
    }
    return CALL_instance;
  }
  function FABSD() {
    FABSD_instance = this;
    PseudoWriter.call(this);
  }
  FABSD.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    if (args.get_za3lpa$(0) !== 'fabs.d') {
      throw AssemblerError_init('The format for this function is wrong!', dbg);
    }
    checkArgsLength(args, 3, dbg);
    return listOf(listOf_0(['fsgnjx.d', args.get_za3lpa$(1), args.get_za3lpa$(2), args.get_za3lpa$(2)]));
  };
  FABSD.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FABSD',
    interfaces: [PseudoWriter]
  };
  var FABSD_instance = null;
  function FABSD_getInstance() {
    if (FABSD_instance === null) {
      new FABSD();
    }
    return FABSD_instance;
  }
  function FABSS() {
    FABSS_instance = this;
    PseudoWriter.call(this);
  }
  FABSS.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    if (args.get_za3lpa$(0) !== 'fabs.s') {
      throw AssemblerError_init('The format for this function is wrong!', dbg);
    }
    checkArgsLength(args, 3, dbg);
    return listOf(listOf_0(['fsgnjx.s', args.get_za3lpa$(1), args.get_za3lpa$(2), args.get_za3lpa$(2)]));
  };
  FABSS.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FABSS',
    interfaces: [PseudoWriter]
  };
  var FABSS_instance = null;
  function FABSS_getInstance() {
    if (FABSS_instance === null) {
      new FABSS();
    }
    return FABSS_instance;
  }
  function FMVD() {
    FMVD_instance = this;
    PseudoWriter.call(this);
  }
  FMVD.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    if (args.get_za3lpa$(0) !== 'fmv.d') {
      throw AssemblerError_init('The format for this function is wrong!', dbg);
    }
    checkArgsLength(args, 3, dbg);
    return listOf(listOf_0(['fsgnj.d', args.get_za3lpa$(1), args.get_za3lpa$(2), args.get_za3lpa$(2)]));
  };
  FMVD.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FMVD',
    interfaces: [PseudoWriter]
  };
  var FMVD_instance = null;
  function FMVD_getInstance() {
    if (FMVD_instance === null) {
      new FMVD();
    }
    return FMVD_instance;
  }
  function FMVS() {
    FMVS_instance = this;
    PseudoWriter.call(this);
  }
  FMVS.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    if (args.get_za3lpa$(0) !== 'fmv.s') {
      throw AssemblerError_init('The format for this function is wrong!', dbg);
    }
    checkArgsLength(args, 3, dbg);
    return listOf(listOf_0(['fsgnj.s', args.get_za3lpa$(1), args.get_za3lpa$(2), args.get_za3lpa$(2)]));
  };
  FMVS.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FMVS',
    interfaces: [PseudoWriter]
  };
  var FMVS_instance = null;
  function FMVS_getInstance() {
    if (FMVS_instance === null) {
      new FMVS();
    }
    return FMVS_instance;
  }
  function FNEGD() {
    FNEGD_instance = this;
    PseudoWriter.call(this);
  }
  FNEGD.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    if (args.get_za3lpa$(0) !== 'fmv.d') {
      throw AssemblerError_init('The format for this function is wrong!', dbg);
    }
    checkArgsLength(args, 3, dbg);
    return listOf(listOf_0(['fsgnjn.d', args.get_za3lpa$(1), args.get_za3lpa$(2), args.get_za3lpa$(2)]));
  };
  FNEGD.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FNEGD',
    interfaces: [PseudoWriter]
  };
  var FNEGD_instance = null;
  function FNEGD_getInstance() {
    if (FNEGD_instance === null) {
      new FNEGD();
    }
    return FNEGD_instance;
  }
  function FNEGS() {
    FNEGS_instance = this;
    PseudoWriter.call(this);
  }
  FNEGS.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    if (args.get_za3lpa$(0) !== 'fneg.s') {
      throw AssemblerError_init('The format for this function is wrong!', dbg);
    }
    checkArgsLength(args, 3, dbg);
    return listOf(listOf_0(['fsgnjn.s', args.get_za3lpa$(1), args.get_za3lpa$(2), args.get_za3lpa$(2)]));
  };
  FNEGS.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FNEGS',
    interfaces: [PseudoWriter]
  };
  var FNEGS_instance = null;
  function FNEGS_getInstance() {
    if (FNEGS_instance === null) {
      new FNEGS();
    }
    return FNEGS_instance;
  }
  function J() {
    J_instance = this;
    PseudoWriter.call(this);
  }
  J.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 2, dbg);
    return listOf(listOf_0(['jal', 'x0', args.get_za3lpa$(1)]));
  };
  J.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'J',
    interfaces: [PseudoWriter]
  };
  var J_instance = null;
  function J_getInstance() {
    if (J_instance === null) {
      new J();
    }
    return J_instance;
  }
  function JAL() {
    JAL_instance = this;
    PseudoWriter.call(this);
  }
  JAL.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 2, dbg);
    return listOf(listOf_0(['jal', 'x1', args.get_za3lpa$(1)]));
  };
  JAL.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JAL',
    interfaces: [PseudoWriter]
  };
  var JAL_instance = null;
  function JAL_getInstance() {
    if (JAL_instance === null) {
      new JAL();
    }
    return JAL_instance;
  }
  function JALR() {
    JALR_instance = this;
    PseudoWriter.call(this);
  }
  JALR.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 2, dbg);
    return listOf(listOf_0(['jalr', 'x1', args.get_za3lpa$(1), '0']));
  };
  JALR.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JALR',
    interfaces: [PseudoWriter]
  };
  var JALR_instance = null;
  function JALR_getInstance() {
    if (JALR_instance === null) {
      new JALR();
    }
    return JALR_instance;
  }
  function JR() {
    JR_instance = this;
    PseudoWriter.call(this);
  }
  JR.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 2, dbg);
    return listOf(listOf_0(['jalr', 'x0', args.get_za3lpa$(1), '0']));
  };
  JR.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JR',
    interfaces: [PseudoWriter]
  };
  var JR_instance = null;
  function JR_getInstance() {
    if (JR_instance === null) {
      new JR();
    }
    return JR_instance;
  }
  function LA() {
    LA_instance = this;
    PseudoWriter.call(this);
  }
  LA.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 3, dbg);
    var auipc = listOf_0(['auipc', args.get_za3lpa$(1), '0']);
    state.addRelocation_q0z4ff$(PCRelHiRelocator, state.getOffset(), args.get_za3lpa$(2), dbg);
    var addi = listOf_0(['addi', args.get_za3lpa$(1), args.get_za3lpa$(1), '0']);
    state.addRelocation_q0z4ff$(PCRelLoRelocator, state.getOffset() + 4 | 0, args.get_za3lpa$(2), dbg);
    return listOf_0([auipc, addi]);
  };
  LA.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LA',
    interfaces: [PseudoWriter]
  };
  var LA_instance = null;
  function LA_getInstance() {
    if (LA_instance === null) {
      new LA();
    }
    return LA_instance;
  }
  function LI() {
    LI_instance = this;
    PseudoWriter.call(this);
  }
  LI.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    var tmp$;
    checkArgsLength(args, 3, dbg);
    if (!isNumeral(args.get_za3lpa$(2))) {
      return listOf(listOf_0(['addi', args.get_za3lpa$(1), 'x0', args.get_za3lpa$(2)]));
    }
    try {
      tmp$ = userStringToInt(args.get_za3lpa$(2));
    }
     catch (e) {
      if (Kotlin.isType(e, NumberFormatException)) {
        throw AssemblerError_init('immediate to li too large or NaN', dbg);
      }
       else
        throw e;
    }
    var imm = tmp$;
    if (-2048 <= imm && imm <= 2047) {
      return listOf(listOf_0(['addi', args.get_za3lpa$(1), 'x0', args.get_za3lpa$(2)]));
    }
     else {
      var imm_hi = imm + 2048 >>> 12;
      var imm_lo = imm - (imm_hi << 12) | 0;
      var lui = listOf_0(['lui', args.get_za3lpa$(1), imm_hi.toString()]);
      var addi = listOf_0(['addi', args.get_za3lpa$(1), args.get_za3lpa$(1), imm_lo.toString()]);
      return listOf_0([lui, addi]);
    }
  };
  LI.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LI',
    interfaces: [PseudoWriter]
  };
  var LI_instance = null;
  function LI_getInstance() {
    if (LI_instance === null) {
      new LI();
    }
    return LI_instance;
  }
  function Load() {
    Load_instance = this;
    PseudoWriter.call(this);
  }
  Load.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    if (args.size === 4) {
      if (startsWith_0(args.get_za3lpa$(3), 40)) {
        var tmp$ = args.get_za3lpa$(0);
        var tmp$_0 = args.get_za3lpa$(1);
        var tmp$_1 = args.get_za3lpa$(2);
        var $receiver = args.get_za3lpa$(3);
        var endIndex = args.get_za3lpa$(3).length - 1 | 0;
        return listOf(listOf_0([tmp$, tmp$_0, tmp$_1, $receiver.substring(1, endIndex)]));
      }
       else {
        return listOf(args);
      }
    }
    checkArgsLength(args, 3, dbg);
    try {
      regNameToNumber(args.get_za3lpa$(2), void 0, dbg);
      p1warnings.add_11rb$(AssemblerWarning_init('You are using the load pseudoinstruction which takes in rd, symbol and the symbol matches a register name.'));
    }
     catch (e) {
      if (!Kotlin.isType(e, AssemblerError))
        throw e;
    }
    var auipc = listOf_0(['auipc', args.get_za3lpa$(1), '0']);
    state.addRelocation_q0z4ff$(PCRelHiRelocator, state.getOffset(), args.get_za3lpa$(2), dbg);
    var load = listOf_0([args.get_za3lpa$(0), args.get_za3lpa$(1), '0', args.get_za3lpa$(1)]);
    state.addRelocation_q0z4ff$(PCRelLoRelocator, state.getOffset() + 4 | 0, args.get_za3lpa$(2), dbg);
    return listOf_0([auipc, load]);
  };
  Load.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Load',
    interfaces: [PseudoWriter]
  };
  var Load_instance = null;
  function Load_getInstance() {
    if (Load_instance === null) {
      new Load();
    }
    return Load_instance;
  }
  function MV() {
    MV_instance = this;
    PseudoWriter.call(this);
  }
  MV.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 3, dbg);
    return listOf(listOf_0(['addi', args.get_za3lpa$(1), args.get_za3lpa$(2), '0']));
  };
  MV.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MV',
    interfaces: [PseudoWriter]
  };
  var MV_instance = null;
  function MV_getInstance() {
    if (MV_instance === null) {
      new MV();
    }
    return MV_instance;
  }
  function NEG() {
    NEG_instance = this;
    PseudoWriter.call(this);
  }
  NEG.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 3, dbg);
    return listOf(listOf_0(['sub', args.get_za3lpa$(1), 'x0', args.get_za3lpa$(2)]));
  };
  NEG.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NEG',
    interfaces: [PseudoWriter]
  };
  var NEG_instance = null;
  function NEG_getInstance() {
    if (NEG_instance === null) {
      new NEG();
    }
    return NEG_instance;
  }
  function NEGW() {
    NEGW_instance = this;
    PseudoWriter.call(this);
  }
  NEGW.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 3, dbg);
    return listOf(listOf_0(['subw', args.get_za3lpa$(1), 'x0', args.get_za3lpa$(2)]));
  };
  NEGW.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NEGW',
    interfaces: [PseudoWriter]
  };
  var NEGW_instance = null;
  function NEGW_getInstance() {
    if (NEGW_instance === null) {
      new NEGW();
    }
    return NEGW_instance;
  }
  function NOP() {
    NOP_instance = this;
    PseudoWriter.call(this);
  }
  NOP.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 1, dbg);
    return listOf(listOf_0(['addi', 'x0', 'x0', '0']));
  };
  NOP.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NOP',
    interfaces: [PseudoWriter]
  };
  var NOP_instance = null;
  function NOP_getInstance() {
    if (NOP_instance === null) {
      new NOP();
    }
    return NOP_instance;
  }
  function NOT() {
    NOT_instance = this;
    PseudoWriter.call(this);
  }
  NOT.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 3, dbg);
    return listOf(listOf_0(['xori', args.get_za3lpa$(1), args.get_za3lpa$(2), '-1']));
  };
  NOT.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NOT',
    interfaces: [PseudoWriter]
  };
  var NOT_instance = null;
  function NOT_getInstance() {
    if (NOT_instance === null) {
      new NOT();
    }
    return NOT_instance;
  }
  function RET() {
    RET_instance = this;
    PseudoWriter.call(this);
  }
  RET.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 1, dbg);
    return listOf(listOf_0(['jalr', 'x0', 'x1', '0']));
  };
  RET.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RET',
    interfaces: [PseudoWriter]
  };
  var RET_instance = null;
  function RET_getInstance() {
    if (RET_instance === null) {
      new RET();
    }
    return RET_instance;
  }
  function SEQ() {
    SEQ_instance = this;
    PseudoWriter.call(this);
  }
  SEQ.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 4, dbg);
    checkStrictMode();
    var subtract = listOf_0(['sub', args.get_za3lpa$(1), args.get_za3lpa$(2), args.get_za3lpa$(3)]);
    var checkZero = listOf_0(['sltiu', args.get_za3lpa$(1), args.get_za3lpa$(1), '1']);
    return listOf_0([subtract, checkZero]);
  };
  SEQ.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SEQ',
    interfaces: [PseudoWriter]
  };
  var SEQ_instance = null;
  function SEQ_getInstance() {
    if (SEQ_instance === null) {
      new SEQ();
    }
    return SEQ_instance;
  }
  function SEQZ() {
    SEQZ_instance = this;
    PseudoWriter.call(this);
  }
  SEQZ.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 3, dbg);
    return listOf(listOf_0(['sltiu', args.get_za3lpa$(1), args.get_za3lpa$(2), '1']));
  };
  SEQZ.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SEQZ',
    interfaces: [PseudoWriter]
  };
  var SEQZ_instance = null;
  function SEQZ_getInstance() {
    if (SEQZ_instance === null) {
      new SEQZ();
    }
    return SEQZ_instance;
  }
  function SEXTW() {
    SEXTW_instance = this;
    PseudoWriter.call(this);
  }
  SEXTW.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    if (args.get_za3lpa$(0) !== 'sext.w') {
      throw AssemblerError_init('The format for this function is wrong!', dbg);
    }
    checkArgsLength(args, 3, dbg);
    return listOf(listOf_0(['addiw', args.get_za3lpa$(1), args.get_za3lpa$(2), '0']));
  };
  SEXTW.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SEXTW',
    interfaces: [PseudoWriter]
  };
  var SEXTW_instance = null;
  function SEXTW_getInstance() {
    if (SEXTW_instance === null) {
      new SEXTW();
    }
    return SEXTW_instance;
  }
  function SGE() {
    SGE_instance = this;
    PseudoWriter.call(this);
  }
  SGE.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 4, dbg);
    checkStrictMode();
    var unsigned = endsWith(args.get_za3lpa$(0), 'u') ? 'u' : '';
    var set = listOf_0(['slt' + unsigned, args.get_za3lpa$(1), args.get_za3lpa$(2), args.get_za3lpa$(3)]);
    var invert = listOf_0(['xori', args.get_za3lpa$(1), args.get_za3lpa$(1), '1']);
    return listOf_0([set, invert]);
  };
  SGE.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SGE',
    interfaces: [PseudoWriter]
  };
  var SGE_instance = null;
  function SGE_getInstance() {
    if (SGE_instance === null) {
      new SGE();
    }
    return SGE_instance;
  }
  function SGT() {
    SGT_instance = this;
    PseudoWriter.call(this);
  }
  SGT.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 4, dbg);
    checkStrictMode();
    var unsigned = endsWith(args.get_za3lpa$(0), 'u') ? 'u' : '';
    return listOf(listOf_0(['slt' + unsigned, args.get_za3lpa$(1), args.get_za3lpa$(3), args.get_za3lpa$(2)]));
  };
  SGT.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SGT',
    interfaces: [PseudoWriter]
  };
  var SGT_instance = null;
  function SGT_getInstance() {
    if (SGT_instance === null) {
      new SGT();
    }
    return SGT_instance;
  }
  function SGTZ() {
    SGTZ_instance = this;
    PseudoWriter.call(this);
  }
  SGTZ.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 3, dbg);
    return listOf(listOf_0(['slt', args.get_za3lpa$(1), 'x0', args.get_za3lpa$(2)]));
  };
  SGTZ.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SGTZ',
    interfaces: [PseudoWriter]
  };
  var SGTZ_instance = null;
  function SGTZ_getInstance() {
    if (SGTZ_instance === null) {
      new SGTZ();
    }
    return SGTZ_instance;
  }
  function SLE() {
    SLE_instance = this;
    PseudoWriter.call(this);
  }
  SLE.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 4, dbg);
    checkStrictMode();
    var unsigned = endsWith(args.get_za3lpa$(0), 'u') ? 'u' : '';
    var set = listOf_0(['slt' + unsigned, args.get_za3lpa$(1), args.get_za3lpa$(3), args.get_za3lpa$(2)]);
    var invert = listOf_0(['xori', args.get_za3lpa$(1), args.get_za3lpa$(1), '1']);
    return listOf_0([set, invert]);
  };
  SLE.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SLE',
    interfaces: [PseudoWriter]
  };
  var SLE_instance = null;
  function SLE_getInstance() {
    if (SLE_instance === null) {
      new SLE();
    }
    return SLE_instance;
  }
  function SLTZ() {
    SLTZ_instance = this;
    PseudoWriter.call(this);
  }
  SLTZ.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 3, dbg);
    return listOf(listOf_0(['slt', args.get_za3lpa$(1), args.get_za3lpa$(2), 'x0']));
  };
  SLTZ.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SLTZ',
    interfaces: [PseudoWriter]
  };
  var SLTZ_instance = null;
  function SLTZ_getInstance() {
    if (SLTZ_instance === null) {
      new SLTZ();
    }
    return SLTZ_instance;
  }
  function SNE() {
    SNE_instance = this;
    PseudoWriter.call(this);
  }
  SNE.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 4, dbg);
    checkStrictMode();
    var subtract = listOf_0(['sub', args.get_za3lpa$(1), args.get_za3lpa$(2), args.get_za3lpa$(3)]);
    var checkNonZero = listOf_0(['sltu', args.get_za3lpa$(1), 'x0', args.get_za3lpa$(1)]);
    return listOf_0([subtract, checkNonZero]);
  };
  SNE.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SNE',
    interfaces: [PseudoWriter]
  };
  var SNE_instance = null;
  function SNE_getInstance() {
    if (SNE_instance === null) {
      new SNE();
    }
    return SNE_instance;
  }
  function SNEZ() {
    SNEZ_instance = this;
    PseudoWriter.call(this);
  }
  SNEZ.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 3, dbg);
    return listOf(listOf_0(['sltu', args.get_za3lpa$(1), 'x0', args.get_za3lpa$(2)]));
  };
  SNEZ.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SNEZ',
    interfaces: [PseudoWriter]
  };
  var SNEZ_instance = null;
  function SNEZ_getInstance() {
    if (SNEZ_instance === null) {
      new SNEZ();
    }
    return SNEZ_instance;
  }
  function Store() {
    Store_instance = this;
    PseudoWriter.call(this);
  }
  Store.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 4, dbg);
    var hasParens = startsWith_0(args.get_za3lpa$(3), 40);
    var label = args.get_za3lpa$(2);
    var tmp$;
    if (hasParens) {
      var $receiver = args.get_za3lpa$(3);
      var endIndex = args.get_za3lpa$(3).length - 1 | 0;
      tmp$ = $receiver.substring(1, endIndex);
    }
     else
      tmp$ = args.get_za3lpa$(3);
    var arg3 = tmp$;
    try {
      userStringToInt(label);
      return listOf(listOf_0([args.get_za3lpa$(0), args.get_za3lpa$(1), label, arg3]));
    }
     catch (e) {
      if (Kotlin.isType(e, NumberFormatException)) {
        if (hasParens) {
          state.addRelocation_q0z4ff$(ImmAbsStoreRelocator, state.getOffset(), label, dbg);
          return listOf(listOf_0([args.get_za3lpa$(0), args.get_za3lpa$(1), '0', arg3]));
        }
      }
       else
        throw e;
    }
    var auipc = listOf_0(['auipc', arg3, '0']);
    state.addRelocation_q0z4ff$(PCRelHiRelocator, state.getOffset(), label, dbg);
    var store = listOf_0([args.get_za3lpa$(0), args.get_za3lpa$(1), '0', arg3]);
    state.addRelocation_q0z4ff$(PCRelLoStoreRelocator, state.getOffset() + 4 | 0, label, dbg);
    return listOf_0([auipc, store]);
  };
  Store.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Store',
    interfaces: [PseudoWriter]
  };
  var Store_instance = null;
  function Store_getInstance() {
    if (Store_instance === null) {
      new Store();
    }
    return Store_instance;
  }
  function TAIL() {
    TAIL_instance = this;
    PseudoWriter.call(this);
  }
  TAIL.prototype.invoke_33jwtj$ = function (args, state, dbg) {
    checkArgsLength(args, 2, dbg);
    var auipc = listOf_0(['auipc', 'x6', '0']);
    state.addRelocation_q0z4ff$(PCRelHiRelocator, state.getOffset(), args.get_za3lpa$(1), dbg);
    var jalr = listOf_0(['jalr', 'x0', 'x6', '0']);
    state.addRelocation_q0z4ff$(PCRelLoRelocator, state.getOffset() + 4 | 0, args.get_za3lpa$(1), dbg);
    return listOf_0([auipc, jalr]);
  };
  TAIL.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TAIL',
    interfaces: [PseudoWriter]
  };
  var TAIL_instance = null;
  function TAIL_getInstance() {
    if (TAIL_instance === null) {
      new TAIL();
    }
    return TAIL_instance;
  }
  function checkArgsLength(args, required, dbg) {
    if (args.size !== required)
      throw AssemblerError_init('wrong # of arguments', dbg);
  }
  function checkStrictMode() {
    if (Settings_getInstance().strict)
      throw AssemblerError_init("can't use this instruction in strict mode");
  }
  function PseudoWriter() {
  }
  PseudoWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PseudoWriter',
    interfaces: []
  };
  function Action() {
  }
  Action.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Action',
    interfaces: []
  };
  function FlagAction() {
  }
  FlagAction.prototype.invoke_drwoxr$ = function (arguments_0) {
    this.invoke();
  };
  FlagAction.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FlagAction',
    interfaces: [Action]
  };
  function ArgumentAction() {
  }
  ArgumentAction.prototype.invoke_drwoxr$ = function (arguments_0) {
    if (arguments_0.hasNext())
      this.invoke_61zpoe$(arguments_0.next());
    else
      throw new MissingArgumentException();
  };
  ArgumentAction.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ArgumentAction',
    interfaces: [Action]
  };
  function CommandAction() {
  }
  CommandAction.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CommandAction',
    interfaces: [Action]
  };
  function ArgumentValue() {
  }
  ArgumentValue.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ArgumentValue',
    interfaces: []
  };
  function CommandLineBuilder() {
  }
  CommandLineBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CommandLineBuilder',
    interfaces: []
  };
  function CommandLineException(message) {
    RuntimeException_init(message, this);
    this.name = 'CommandLineException';
  }
  CommandLineException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandLineException',
    interfaces: [RuntimeException]
  };
  function StopParsingException() {
    RuntimeException_init_0(this);
    this.name = 'StopParsingException';
  }
  StopParsingException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StopParsingException',
    interfaces: [RuntimeException]
  };
  function HelpPrintedException() {
    StopParsingException.call(this);
    this.name = 'HelpPrintedException';
  }
  HelpPrintedException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HelpPrintedException',
    interfaces: [StopParsingException]
  };
  function MissingArgumentException() {
    RuntimeException_init_0(this);
    this.name = 'MissingArgumentException';
  }
  MissingArgumentException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MissingArgumentException',
    interfaces: [RuntimeException]
  };
  function stopParsing() {
    throw new StopParsingException();
  }
  function CommandLineInterface(commandName, usage, description, epilogue, addHelp, defaultHelpPrinter, printHelpByDefault, argumentsAfterDoubleDashArePositional, shortTagPrefix, longTagPrefixes, longTagValueDelimiter) {
    if (usage === void 0)
      usage = null;
    if (description === void 0)
      description = null;
    if (epilogue === void 0)
      epilogue = null;
    if (addHelp === void 0)
      addHelp = true;
    if (defaultHelpPrinter === void 0)
      defaultHelpPrinter = new SimpleHelpPrinter(24);
    if (printHelpByDefault === void 0)
      printHelpByDefault = true;
    if (argumentsAfterDoubleDashArePositional === void 0)
      argumentsAfterDoubleDashArePositional = true;
    if (shortTagPrefix === void 0)
      shortTagPrefix = null;
    if (longTagPrefixes === void 0)
      longTagPrefixes = emptyList();
    if (longTagValueDelimiter === void 0)
      longTagValueDelimiter = null;
    this.commandName = commandName;
    this.usage_72srbs$_0 = usage;
    this.description_8iivf7$_0 = description;
    this.epilogue_iur1sb$_0 = epilogue;
    this.defaultHelpPrinter = defaultHelpPrinter;
    this.printHelpByDefault = printHelpByDefault;
    this.argumentsAfterDoubleDashArePositional = argumentsAfterDoubleDashArePositional;
    this.shortTagPrefix = shortTagPrefix;
    this.longTagPrefixes = longTagPrefixes;
    this.longTagValueDelimiter = longTagValueDelimiter;
    this.usageBuilder_zbc169$_0 = this.usage_72srbs$_0 == null ? new StringBuilder('Usage: ' + this.commandName + ' ') : null;
    this.helpEntries_ox4mrq$_0 = ArrayList_init();
    this.positionalArguments_16wtjb$_0 = ArrayList_init();
    this.flagActions_3rshzs$_0 = HashMap_init();
    if (addHelp && this.defaultHelpPrinter != null) {
      help_0(this, listOf_0(['-h', '--help']), 'Prints help', this.defaultHelpPrinter, true);
    }
  }
  Object.defineProperty(CommandLineInterface.prototype, 'actualUsage_w58uwa$_0', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.usageBuilder_zbc169$_0) != null ? tmp$.toString() : null) != null ? tmp$_0 : ensureNotNull(this.usage_72srbs$_0);
    }
  });
  CommandLineInterface.prototype.getPositionalArgumentsIterator = function () {
    return this.positionalArguments_16wtjb$_0.listIterator();
  };
  CommandLineInterface.prototype.printHelp_24thu3$ = function (helpPrinter) {
    if (helpPrinter === void 0)
      helpPrinter = this.defaultHelpPrinter;
    if (helpPrinter == null)
      return;
    var tmp$, tmp$_0, tmp$_1;
    helpPrinter.begin();
    helpPrinter.printText_61zpoe$(this.actualUsage_w58uwa$_0);
    helpPrinter.printSeparator();
    if ((tmp$ = this.description_8iivf7$_0) != null) {
      helpPrinter.printText_61zpoe$(tmp$);
      helpPrinter.printSeparator();
    }
    tmp$_0 = this.helpEntries_ox4mrq$_0.iterator();
    while (tmp$_0.hasNext()) {
      var entry = tmp$_0.next();
      entry.printHelp_w0chqk$(helpPrinter);
    }
    if ((tmp$_1 = this.epilogue_iur1sb$_0) != null) {
      helpPrinter.printSeparator();
      helpPrinter.printText_61zpoe$(tmp$_1);
    }
    helpPrinter.end();
  };
  CommandLineInterface.prototype.addUsageEntry_61zpoe$ = function (entry) {
    var tmp$;
    if ((tmp$ = this.usageBuilder_zbc169$_0) != null) {
      tmp$.append_gw00v9$(entry).append_gw00v9$(' ');
    }
  };
  CommandLineInterface.prototype.addHelpEntry_vgv7xw$ = function (helpEntry) {
    this.helpEntries_ox4mrq$_0.add_11rb$(helpEntry);
  };
  CommandLineInterface.prototype.addPositionalArgument_oczzt6$ = function (positionalArgument) {
    this.positionalArguments_16wtjb$_0.add_11rb$(positionalArgument);
  };
  CommandLineInterface.prototype.checkNewFlag_kwv19z$_0 = function (flag) {
    var $receiver = this.flagActions_3rshzs$_0;
    var tmp$;
    if ((Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(flag)) {
      throw IllegalStateException_init(('Flag is already set: ' + flag).toString());
    }
  };
  CommandLineInterface.prototype.setFlagAction_prlex9$ = function (flag, action) {
    this.checkNewFlag_kwv19z$_0(flag);
    this.flagActions_3rshzs$_0.put_xwzc9p$(flag, action);
  };
  CommandLineInterface.prototype.getFlagAction_61zpoe$ = function (flag) {
    return this.flagActions_3rshzs$_0.get_11rb$(flag);
  };
  CommandLineInterface.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandLineInterface',
    interfaces: [CommandLineBuilder]
  };
  function CommandLineParser(cli) {
    this.cli_0 = cli;
    this.positionalsIterator_2x598i$_0 = this.positionalsIterator_2x598i$_0;
    this.currentPositional_0 = null;
    this.currentPositionalCount_0 = 0;
  }
  CommandLineParser.prototype.parse_nib1c5$ = function (args) {
    this.parse_mhpeer$(asList_0(args));
  };
  CommandLineParser.prototype.parse_mhpeer$ = function (args) {
    this.parseTokenized_drwoxr$(this.tokenizeArgs_0(args).listIterator());
  };
  CommandLineParser.prototype.parseTokenized_drwoxr$ = function (argsIterator) {
    var tmp$;
    if (!argsIterator.hasNext() && this.cli_0.printHelpByDefault) {
      this.cli_0.printHelp_24thu3$();
      throw new HelpPrintedException();
    }
    try {
      this.doParse_0(argsIterator);
    }
     catch (e) {
      if (Kotlin.isType(e, StopParsingException)) {
        throw e;
      }
       else if (Kotlin.isType(e, Throwable)) {
        if ((tmp$ = e.message) != null) {
          var tmp$_0;
          (tmp$_0 = this.cli_0.defaultHelpPrinter) != null && (tmp$_0.printText_61zpoe$(tmp$), Unit);
        }
        this.cli_0.printHelp_24thu3$();
        throw e;
      }
       else
        throw e;
    }
  };
  Object.defineProperty(CommandLineParser.prototype, 'positionalsIterator_0', {
    get: function () {
      if (this.positionalsIterator_2x598i$_0 == null)
        return throwUPAE('positionalsIterator');
      return this.positionalsIterator_2x598i$_0;
    },
    set: function (positionalsIterator) {
      this.positionalsIterator_2x598i$_0 = positionalsIterator;
    }
  });
  CommandLineParser.prototype.doParse_0 = function (argsIterator) {
    var tmp$;
    this.positionalsIterator_0 = this.cli_0.getPositionalArgumentsIterator();
    this.currentPositional_0 = nextOrNull(this.positionalsIterator_0);
    this.currentPositionalCount_0 = 0;
    while (argsIterator.hasNext()) {
      var arg = argsIterator.next();
      if (this.cli_0.argumentsAfterDoubleDashArePositional && equals(arg, '--')) {
        while (argsIterator.hasNext()) {
          this.handlePositionalArgument_0(argsIterator.next());
        }
        return;
      }
      var action = this.cli_0.getFlagAction_61zpoe$(arg);
      if (action == null) {
        this.handlePositionalArgument_0(arg);
      }
       else {
        try {
          action.invoke_drwoxr$(argsIterator);
        }
         catch (e) {
          if (Kotlin.isType(e, MissingArgumentException)) {
            throw new CommandLineException('No argument for flag ' + arg);
          }
           else
            throw e;
        }
      }
    }
    if ((tmp$ = this.currentPositional_0) != null) {
      this.checkEnoughPositionals_0(tmp$, this.currentPositionalCount_0);
    }
    while (this.positionalsIterator_0.hasNext()) {
      this.checkEnoughPositionals_0(this.positionalsIterator_0.next(), 0);
    }
  };
  CommandLineParser.prototype.handlePositionalArgument_0 = function (arg) {
    var cp = this.currentPositional_0;
    if (cp != null) {
      cp.action.invoke_61zpoe$(arg);
      this.currentPositionalCount_0 = this.currentPositionalCount_0 + 1 | 0;
      if (this.currentPositionalCount_0 >= cp.maxArgs) {
        this.currentPositional_0 = nextOrNull(this.positionalsIterator_0);
        this.currentPositionalCount_0 = 0;
      }
    }
     else {
      throw new CommandLineException("Unexpected positional argument: '" + arg + "'");
    }
  };
  CommandLineParser.prototype.checkEnoughPositionals_0 = function (positionalArgument, actualCount) {
    if (actualCount < positionalArgument.minArgs) {
      throw new CommandLineException('Not enough positional arguments for ' + positionalArgument.name + ': ' + (actualCount.toString() + ', expected at least ' + positionalArgument.minArgs));
    }
  };
  CommandLineParser.prototype.tokenizeArgs_0 = function (args) {
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = args.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = this.tokenizeArg_0(element);
      addAll(destination, list);
    }
    return destination;
  };
  CommandLineParser.prototype.tokenizeArg_0 = function (arg) {
    if (this.cli_0.getFlagAction_61zpoe$(arg) != null)
      return listOf(arg);
    var tmp$ = this.cli_0.longTagValueDelimiter != null;
    if (tmp$) {
      var $receiver = this.cli_0.longTagPrefixes;
      var any$result;
      any$break: do {
        var tmp$_0;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (startsWith(arg, element)) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      tmp$ = any$result;
    }
    if (tmp$) {
      var k = indexOf(arg, this.cli_0.longTagValueDelimiter);
      if (k >= 0) {
        var longTag = arg.substring(0, k);
        var startIndex = k + 1 | 0;
        var longValue = arg.substring(startIndex);
        return listOf_0([longTag, longValue]);
      }
    }
    if (this.isShortTagPrefixed_0(arg)) {
      return this.tokenizeShortTags_0(arg);
    }
    return listOf(arg);
  };
  CommandLineParser.prototype.tokenizeShortTags_0 = function (arg) {
    var tmp$, tmp$_0;
    var result = ArrayList_init();
    tmp$ = arg.length;
    for (var i = 1; i < tmp$; i++) {
      var fullTag = toString(this.cli_0.shortTagPrefix) + String.fromCharCode(arg.charCodeAt(i));
      tmp$_0 = this.cli_0.getFlagAction_61zpoe$(fullTag);
      if (tmp$_0 == null) {
        return listOf(arg);
      }
      var action = tmp$_0;
      if (Kotlin.isType(action, FlagAction))
        result.add_11rb$(fullTag);
      else if (Kotlin.isType(action, ArgumentAction)) {
        result.add_11rb$(fullTag);
        if (i < get_lastIndex(arg)) {
          var startIndex = i + 1 | 0;
          result.add_11rb$(arg.substring(startIndex));
        }
        return result;
      }
       else {
        throw IllegalStateException_init(('Unexpected short tag action: ' + fullTag + ' => ' + action).toString());
      }
    }
    return result;
  };
  CommandLineParser.prototype.isShortTagPrefixed_0 = function (arg) {
    var tmp$ = this.cli_0.shortTagPrefix != null && startsWith(arg, this.cli_0.shortTagPrefix);
    if (tmp$) {
      var $receiver = this.cli_0.longTagPrefixes;
      var none$result;
      none$break: do {
        var tmp$_0;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          none$result = true;
          break none$break;
        }
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (startsWith(arg, element)) {
            none$result = false;
            break none$break;
          }
        }
        none$result = true;
      }
       while (false);
      tmp$ = none$result;
    }
    return tmp$;
  };
  CommandLineParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandLineParser',
    interfaces: []
  };
  function add$ObjectLiteral(closure$listener) {
    this.closure$listener = closure$listener;
  }
  add$ObjectLiteral.prototype.onEvent_11rb$ = function (value) {
    this.closure$listener(value);
  };
  add$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Listener]
  };
  function Event() {
  }
  Event.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Event',
    interfaces: []
  };
  function Listener() {
  }
  Listener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Listener',
    interfaces: []
  };
  var add = defineInlineFunction('venus.venusbackend.cli.add_569ies$', wrapFunction(function () {
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var Listener = _.venusbackend.cli.Listener;
    function add$ObjectLiteral(closure$listener) {
      this.closure$listener = closure$listener;
    }
    add$ObjectLiteral.prototype.onEvent_11rb$ = function (value) {
      this.closure$listener(value);
    };
    add$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [Listener]
    };
    return function ($receiver, listener) {
      $receiver.addListener_eebyu9$(new add$ObjectLiteral(listener));
    };
  }));
  function EventTrigger() {
  }
  EventTrigger.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EventTrigger',
    interfaces: []
  };
  function SimpleEvent() {
    this.listener_ectw1n$_0 = null;
  }
  SimpleEvent.prototype.addListener_eebyu9$ = function (listener) {
    if (this.listener_ectw1n$_0 == null) {
      this.listener_ectw1n$_0 = listener;
    }
     else {
      throw IllegalStateException_init('SimpleEvent supports single listener only');
    }
  };
  SimpleEvent.prototype.trigger_11rb$ = function (value) {
    var tmp$;
    (tmp$ = this.listener_ectw1n$_0) != null ? (tmp$.onEvent_11rb$(value), Unit) : null;
  };
  SimpleEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleEvent',
    interfaces: [EventTrigger, Event]
  };
  function onArgument$lambda$lambda(this$) {
    return function (it) {
      this$.trigger_11rb$(it);
      return Unit;
    };
  }
  function onArgument($receiver, name, help, minArgs, maxArgs) {
    if (minArgs === void 0)
      minArgs = 0;
    if (maxArgs === void 0)
      maxArgs = 1;
    var $receiver_0 = new SimpleEvent();
    positionalAction($receiver, name, help, minArgs, maxArgs, onArgument$lambda$lambda($receiver_0));
    return $receiver_0;
  }
  function onRemainingArguments($receiver, name, help) {
    return onArgument($receiver, name, help, 0, 2147483647);
  }
  function onFlag($receiver, flag, help) {
    return onFlag_0($receiver, listOf(flag), help);
  }
  function onFlag$lambda$lambda(this$) {
    return function () {
      this$.trigger_11rb$(null);
      return Unit;
    };
  }
  function onFlag_0($receiver, flags, help) {
    var $receiver_0 = new SimpleEvent();
    flagAction($receiver, flags, help, onFlag$lambda$lambda($receiver_0));
    return $receiver_0;
  }
  function onFlagValue($receiver, flag, valueSyntax, help) {
    return onFlagValue_0($receiver, listOf(flag), valueSyntax, help);
  }
  function onFlagValue$lambda$lambda(this$) {
    return function (it) {
      this$.trigger_11rb$(it);
      return Unit;
    };
  }
  function onFlagValue_0($receiver, flags, valueSyntax, help) {
    var $receiver_0 = new SimpleEvent();
    flagValueAction($receiver, flags, valueSyntax, help, onFlagValue$lambda$lambda($receiver_0));
    return $receiver_0;
  }
  function MappedEvent(transformation) {
    SimpleEvent.call(this);
    this.transformation_0 = transformation;
  }
  MappedEvent.prototype.onEvent_11rb$ = function (value) {
    this.trigger_11rb$(this.transformation_0(value));
  };
  MappedEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MappedEvent',
    interfaces: [Listener, SimpleEvent]
  };
  function map($receiver, transformation) {
    var $receiver_0 = new MappedEvent(transformation);
    $receiver.addListener_eebyu9$($receiver_0);
    return $receiver_0;
  }
  function onEach($receiver, action) {
    $receiver.addListener_eebyu9$(new add$ObjectLiteral(action));
    return $receiver;
  }
  function once$lambda$lambda(closure$action) {
    return function (it) {
      closure$action(it);
      stopParsing();
      return Unit;
    };
  }
  function once($receiver, action) {
    $receiver.addListener_eebyu9$(new add$ObjectLiteral(once$lambda$lambda(action)));
    return $receiver;
  }
  function ArgumentStorage(value) {
    this.value_0 = value;
  }
  ArgumentStorage.prototype.getValue_oaftn8$ = function (thisRef, prop) {
    return this.value_0;
  };
  ArgumentStorage.prototype.setValue_11rb$ = function (newValue) {
    this.value_0 = newValue;
  };
  ArgumentStorage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArgumentStorage',
    interfaces: [ArgumentValue]
  };
  function store$lambda$lambda(this$) {
    return function (it) {
      this$.setValue_11rb$(it);
      return Unit;
    };
  }
  function store($receiver, initialValue) {
    var $receiver_0 = new ArgumentStorage(initialValue);
    $receiver.addListener_eebyu9$(new add$ObjectLiteral(store$lambda$lambda($receiver_0)));
    return $receiver_0;
  }
  function store_0($receiver) {
    return store($receiver, null);
  }
  function storeConst$lambda$lambda(closure$storeValue, this$) {
    return function (it) {
      this$.setValue_11rb$(closure$storeValue);
      return Unit;
    };
  }
  function storeConst($receiver, initialValue, storeValue) {
    var $receiver_0 = new ArgumentStorage(initialValue);
    $receiver.addListener_eebyu9$(new add$ObjectLiteral(storeConst$lambda$lambda(storeValue, $receiver_0)));
    return $receiver_0;
  }
  function storeTrue($receiver) {
    return storeConst($receiver, false, true);
  }
  function addTo$lambda$lambda(closure$list) {
    return function (it) {
      closure$list.add_11rb$(it);
      return Unit;
    };
  }
  function addTo($receiver, list) {
    var $receiver_0 = new ArgumentStorage(list);
    $receiver.addListener_eebyu9$(new add$ObjectLiteral(addTo$lambda$lambda(list)));
    return $receiver_0;
  }
  function addToList($receiver) {
    return addTo($receiver, ArrayList_init());
  }
  function FlagActionBase(flags, help) {
    this.flags = flags;
    this.help_3akrmr$_0 = help;
    if (this.flags.isEmpty()) {
      throw IllegalStateException_init('At least one flag required'.toString());
    }
    this.syntax_25gd8f$_0 = joinToString(this.flags, ', ');
  }
  FlagActionBase.prototype.printHelp_w0chqk$ = function (helpPrinter) {
    helpPrinter.printEntry_puj7f4$(this.syntax_25gd8f$_0, this.help_3akrmr$_0);
  };
  FlagActionBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlagActionBase',
    interfaces: [HelpEntry, FlagAction]
  };
  function FlagArgumentBase(flags, help, initialValue) {
    FlagActionBase.call(this, flags, help);
    this.value = initialValue;
  }
  FlagArgumentBase.prototype.getValue_oaftn8$ = function (thisRef, prop) {
    return this.value;
  };
  FlagArgumentBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlagArgumentBase',
    interfaces: [ArgumentValue, FlagActionBase]
  };
  function registerAction($receiver, action) {
    var tmp$;
    $receiver.addUsageEntry_61zpoe$('[' + first(action.flags) + ']');
    $receiver.addHelpEntry_vgv7xw$(action);
    tmp$ = action.flags.iterator();
    while (tmp$.hasNext()) {
      var flag = tmp$.next();
      $receiver.setFlagAction_prlex9$(flag, action);
    }
    return action;
  }
  function registerArgument($receiver, argument) {
    return registerAction($receiver, argument);
  }
  function flagAction$ObjectLiteral(closure$action, flags, help) {
    this.closure$action = closure$action;
    FlagActionBase.call(this, flags, help);
  }
  flagAction$ObjectLiteral.prototype.invoke = function () {
    this.closure$action();
  };
  flagAction$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [FlagActionBase]
  };
  function flagAction($receiver, flags, help, action) {
    registerAction($receiver, new flagAction$ObjectLiteral(action, flags, help));
  }
  function flagAction_0($receiver, flag, help, action) {
    flagAction($receiver, listOf(flag), help, action);
  }
  function flagArgument($receiver, flag, help) {
    return flagArgument_1($receiver, flag, help, false, true);
  }
  function flagArgument$ObjectLiteral(closure$flagValue, flags, help, initialValue) {
    this.closure$flagValue = closure$flagValue;
    FlagArgumentBase.call(this, flags, help, initialValue);
  }
  flagArgument$ObjectLiteral.prototype.invoke = function () {
    this.value = this.closure$flagValue;
  };
  flagArgument$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [FlagArgumentBase]
  };
  function flagArgument_0($receiver, flags, help, initialValue, flagValue) {
    return registerArgument($receiver, new flagArgument$ObjectLiteral(flagValue, flags, help, initialValue));
  }
  function flagArgument_1($receiver, flag, help, initialValue, flagValue) {
    return flagArgument_0($receiver, listOf(flag), help, initialValue, flagValue);
  }
  function foldFlagArguments$ObjectLiteral(closure$fn, flags, help, initialValue) {
    this.closure$fn = closure$fn;
    FlagArgumentBase.call(this, flags, help, initialValue);
  }
  foldFlagArguments$ObjectLiteral.prototype.invoke = function () {
    this.value = this.closure$fn(this.value);
  };
  foldFlagArguments$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [FlagArgumentBase]
  };
  function foldFlagArguments($receiver, flags, help, initialValue, fn) {
    return registerArgument($receiver, new foldFlagArguments$ObjectLiteral(fn, flags, help, initialValue));
  }
  function foldFlagArguments_0($receiver, flag, help, initialValue, fn) {
    return foldFlagArguments($receiver, listOf(flag), help, initialValue, fn);
  }
  function help$ObjectLiteral(this$help, closure$helpPrinter, closure$exitAfterHelp, flags, help) {
    this.this$help = this$help;
    this.closure$helpPrinter = closure$helpPrinter;
    this.closure$exitAfterHelp = closure$exitAfterHelp;
    FlagActionBase.call(this, flags, help);
  }
  help$ObjectLiteral.prototype.invoke = function () {
    this.this$help.printHelp_24thu3$(this.closure$helpPrinter);
    if (this.closure$exitAfterHelp) {
      throw new HelpPrintedException();
    }
  };
  help$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [FlagActionBase]
  };
  function help_0($receiver, flags, help, helpPrinter, exitAfterHelp) {
    if (exitAfterHelp === void 0)
      exitAfterHelp = true;
    registerAction($receiver, new help$ObjectLiteral($receiver, helpPrinter, exitAfterHelp, flags, help));
  }
  function help_1($receiver, helpPrinter, exitAfterHelp) {
    if (helpPrinter === void 0)
      helpPrinter = new SimpleHelpPrinter(24);
    if (exitAfterHelp === void 0)
      exitAfterHelp = true;
    help_0($receiver, listOf_0(['-h', '--help']), 'Prints help page', helpPrinter, exitAfterHelp);
  }
  function FlagValueActionBase(flags_0, valueSyntax_0, help_0) {
    this.flags = flags_0;
    this.valueSyntax = valueSyntax_0;
    this.help_n2nng2$_0 = help_0;
    this.syntax_tuntbk$_0 = joinToString(this.flags, ', ') + ' ' + this.valueSyntax;
  }
  FlagValueActionBase.prototype.printHelp_w0chqk$ = function (helpPrinter) {
    helpPrinter.printEntry_puj7f4$(this.syntax_tuntbk$_0, this.help_n2nng2$_0);
  };
  FlagValueActionBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlagValueActionBase',
    interfaces: [HelpEntry, ArgumentAction]
  };
  function FlagValueArgumentBase(flags_0, valueSyntax_0, help_0, initialValue_0) {
    FlagValueActionBase.call(this, flags_0, valueSyntax_0, help_0);
    this.value = initialValue_0;
  }
  FlagValueArgumentBase.prototype.getValue_oaftn8$ = function (thisRef, prop) {
    return this.value;
  };
  FlagValueArgumentBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlagValueArgumentBase',
    interfaces: [ArgumentValue, FlagValueActionBase]
  };
  function registerAction_0($receiver, action) {
    var tmp$;
    $receiver.addUsageEntry_61zpoe$('[' + first(action.flags) + ' ' + action.valueSyntax + ']');
    $receiver.addHelpEntry_vgv7xw$(action);
    tmp$ = action.flags.iterator();
    while (tmp$.hasNext()) {
      var flag = tmp$.next();
      $receiver.setFlagAction_prlex9$(flag, action);
    }
    return action;
  }
  function registerArgument_0($receiver, argument) {
    registerAction_0($receiver, argument);
    return argument;
  }
  function flagValueAction$ObjectLiteral(closure$action, flags_0, valueSyntax_0, help_0) {
    this.closure$action = closure$action;
    FlagValueActionBase.call(this, flags_0, valueSyntax_0, help_0);
  }
  flagValueAction$ObjectLiteral.prototype.invoke_61zpoe$ = function (argument) {
    this.closure$action(argument);
  };
  flagValueAction$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [FlagValueActionBase]
  };
  function flagValueAction($receiver, flags, valueSyntax, help, action) {
    registerAction_0($receiver, new flagValueAction$ObjectLiteral(action, flags, valueSyntax, help));
  }
  function flagValueAction_0($receiver, flag, valueSyntax, help, action) {
    flagValueAction($receiver, listOf(flag), valueSyntax, help, action);
  }
  function flagValueArgument$ObjectLiteral(closure$mapping, flags_0, valueSyntax_0, help_0, initialValue_0) {
    this.closure$mapping = closure$mapping;
    FlagValueArgumentBase.call(this, flags_0, valueSyntax_0, help_0, initialValue_0);
  }
  flagValueArgument$ObjectLiteral.prototype.invoke_61zpoe$ = function (argument) {
    this.value = this.closure$mapping(argument);
  };
  flagValueArgument$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [FlagValueArgumentBase]
  };
  function flagValueArgument($receiver, flags, valueSyntax, help, initialValue, mapping) {
    return registerArgument_0($receiver, new flagValueArgument$ObjectLiteral(mapping, flags, valueSyntax, help, initialValue));
  }
  function flagValueArgument_0($receiver, flag, valueSyntax, help, initialValue, mapping) {
    return flagValueArgument($receiver, listOf(flag), valueSyntax, help, initialValue, mapping);
  }
  function flagValueArgument$lambda(it) {
    return it;
  }
  function flagValueArgument_1($receiver, flags, valueSyntax, help) {
    return flagValueArgument($receiver, flags, valueSyntax, help, null, flagValueArgument$lambda);
  }
  function flagValueArgument_2($receiver, flag, valueSyntax, help) {
    return flagValueArgument_1($receiver, listOf(flag), valueSyntax, help);
  }
  function flagValueArgument$lambda_0(it) {
    return it;
  }
  function flagValueArgument_3($receiver, flags, valueSyntax, help, initialValue) {
    return flagValueArgument($receiver, flags, valueSyntax, help, initialValue, flagValueArgument$lambda_0);
  }
  function flagValueArgument_4($receiver, flag, valueSyntax, help, initialValue) {
    return flagValueArgument_3($receiver, listOf(flag), valueSyntax, help, initialValue);
  }
  function HelpEntriesGroup(parent, description) {
    this.parent = parent;
    this.description_0 = description;
    this.helpEntries_0 = ArrayList_init();
  }
  HelpEntriesGroup.prototype.addUsageEntry_61zpoe$ = function (entry) {
    this.parent.addUsageEntry_61zpoe$(entry);
  };
  HelpEntriesGroup.prototype.addHelpEntry_vgv7xw$ = function (helpEntry) {
    this.helpEntries_0.add_11rb$(helpEntry);
  };
  HelpEntriesGroup.prototype.addPositionalArgument_oczzt6$ = function (positionalArgument) {
    this.parent.addPositionalArgument_oczzt6$(positionalArgument);
  };
  HelpEntriesGroup.prototype.setFlagAction_prlex9$ = function (flag, action) {
    this.parent.setFlagAction_prlex9$(flag, action);
  };
  HelpEntriesGroup.prototype.printHelp_w0chqk$ = function (helpPrinter) {
    var tmp$;
    helpPrinter.printText_61zpoe$(this.description_0);
    tmp$ = this.helpEntries_0.iterator();
    while (tmp$.hasNext()) {
      var helpEntry = tmp$.next();
      helpEntry.printHelp_w0chqk$(helpPrinter);
    }
    helpPrinter.printSeparator();
  };
  HelpEntriesGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HelpEntriesGroup',
    interfaces: [HelpEntry, CommandLineBuilder]
  };
  function helpEntriesGroup($receiver, description) {
    var $receiver_0 = new HelpEntriesGroup($receiver, description);
    $receiver.addHelpEntry_vgv7xw$($receiver_0);
    return $receiver_0;
  }
  function help$ObjectLiteral_0(this$help, closure$helpPrinter, closure$exitAfterHelp, flags, help) {
    this.this$help = this$help;
    this.closure$helpPrinter = closure$helpPrinter;
    this.closure$exitAfterHelp = closure$exitAfterHelp;
    FlagActionBase.call(this, flags, help);
  }
  help$ObjectLiteral_0.prototype.invoke = function () {
    this.this$help.parent.printHelp_24thu3$(this.closure$helpPrinter);
    if (this.closure$exitAfterHelp) {
      throw new HelpPrintedException();
    }
  };
  help$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [FlagActionBase]
  };
  function help_2($receiver, flags, help, helpPrinter, exitAfterHelp) {
    if (exitAfterHelp === void 0)
      exitAfterHelp = true;
    return registerAction($receiver, new help$ObjectLiteral_0($receiver, helpPrinter, exitAfterHelp, flags, help));
  }
  function help_3($receiver, flags, help, exitAfterHelp) {
    if (exitAfterHelp === void 0)
      exitAfterHelp = true;
    return help_2($receiver, flags, help, ensureNotNull($receiver.parent.defaultHelpPrinter), exitAfterHelp);
  }
  function help_4($receiver, exitAfterHelp) {
    if (exitAfterHelp === void 0)
      exitAfterHelp = true;
    return help_2($receiver, listOf_0(['-h', '--help']), 'Prints help page', ensureNotNull($receiver.parent.defaultHelpPrinter), exitAfterHelp);
  }
  function HelpPrinter() {
  }
  HelpPrinter.prototype.begin = function () {
  };
  HelpPrinter.prototype.end = function () {
  };
  HelpPrinter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HelpPrinter',
    interfaces: []
  };
  function printSectionOrNothing($receiver, text) {
    if (text == null)
      return;
    $receiver.printText_61zpoe$(text);
    $receiver.printSeparator();
  }
  function printSection($receiver, text) {
    $receiver.printText_61zpoe$(text);
    $receiver.printSeparator();
  }
  function HelpEntry() {
  }
  HelpEntry.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HelpEntry',
    interfaces: []
  };
  function SimpleHelpPrinter(syntaxWidth) {
    this.syntaxWidth_0 = syntaxWidth;
  }
  SimpleHelpPrinter.prototype.printText_61zpoe$ = function (text) {
    println(text);
  };
  SimpleHelpPrinter.prototype.printSeparator = function () {
    println_0();
  };
  SimpleHelpPrinter.prototype.printEntry_puj7f4$ = function (helpEntry, description) {
    if (helpEntry.length <= this.syntaxWidth_0) {
      println('  ' + padEnd(helpEntry, this.syntaxWidth_0) + '  ' + description);
    }
     else {
      println('  ' + helpEntry);
      println('  ' + padEnd('', this.syntaxWidth_0) + '  ' + description);
    }
  };
  SimpleHelpPrinter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleHelpPrinter',
    interfaces: [HelpPrinter]
  };
  function helpSeparator$ObjectLiteral() {
  }
  helpSeparator$ObjectLiteral.prototype.printHelp_w0chqk$ = function (helpPrinter) {
    helpPrinter.printSeparator();
  };
  helpSeparator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [HelpEntry]
  };
  function helpSeparator($receiver) {
    $receiver.addHelpEntry_vgv7xw$(new helpSeparator$ObjectLiteral());
  }
  function parseArgs($receiver, args) {
    (new CommandLineParser($receiver)).parse_nib1c5$(args);
  }
  function parse($receiver, args) {
    (new CommandLineParser($receiver)).parse_nib1c5$(args);
  }
  function parse_0($receiver, args) {
    (new CommandLineParser($receiver)).parse_mhpeer$(args);
  }
  function PositionalArgument() {
  }
  PositionalArgument.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PositionalArgument',
    interfaces: []
  };
  function PositionalActionBase(name_0, help_0, minArgs_0, maxArgs_0) {
    this.name_cwsds1$_0 = name_0;
    this.help_ctk5or$_0 = help_0;
    this.minArgs_ahbqop$_0 = minArgs_0;
    this.maxArgs_v6a96h$_0 = maxArgs_0;
  }
  Object.defineProperty(PositionalActionBase.prototype, 'name', {
    get: function () {
      return this.name_cwsds1$_0;
    }
  });
  Object.defineProperty(PositionalActionBase.prototype, 'minArgs', {
    get: function () {
      return this.minArgs_ahbqop$_0;
    }
  });
  Object.defineProperty(PositionalActionBase.prototype, 'maxArgs', {
    get: function () {
      return this.maxArgs_v6a96h$_0;
    }
  });
  Object.defineProperty(PositionalActionBase.prototype, 'action', {
    get: function () {
      return this;
    }
  });
  PositionalActionBase.prototype.printHelp_w0chqk$ = function (helpPrinter) {
    helpPrinter.printEntry_puj7f4$(this.name, this.help_ctk5or$_0);
  };
  PositionalActionBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PositionalActionBase',
    interfaces: [HelpEntry, ArgumentAction, PositionalArgument]
  };
  function PositionalArgumentBase(name_0, help_0, initialValue_0, minArgs_0, maxArgs_0) {
    PositionalActionBase.call(this, name_0, help_0, minArgs_0, maxArgs_0);
    this.value = initialValue_0;
  }
  PositionalArgumentBase.prototype.getValue_oaftn8$ = function (thisRef, prop) {
    return this.value;
  };
  PositionalArgumentBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PositionalArgumentBase',
    interfaces: [ArgumentValue, PositionalActionBase]
  };
  function SinglePositionalArgumentBase(name, help, initialValue, minArgs) {
    if (minArgs === void 0)
      minArgs = 0;
    PositionalArgumentBase.call(this, name, help, initialValue, minArgs, 1);
  }
  SinglePositionalArgumentBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SinglePositionalArgumentBase',
    interfaces: [PositionalArgumentBase]
  };
  function ListPositionalArgumentBase(name_0, help_0, destination_0, minArgs_0, maxArgs_0) {
    if (minArgs_0 === void 0)
      minArgs_0 = 0;
    if (maxArgs_0 === void 0)
      maxArgs_0 = 2147483647;
    PositionalActionBase.call(this, name_0, help_0, minArgs_0, maxArgs_0);
    this.value = destination_0;
  }
  ListPositionalArgumentBase.prototype.getValue_oaftn8$ = function (thisRef, prop) {
    return this.value;
  };
  ListPositionalArgumentBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListPositionalArgumentBase',
    interfaces: [ArgumentValue, PositionalActionBase]
  };
  function registerAction_1($receiver, action) {
    $receiver.addUsageEntry_61zpoe$(action.name);
    $receiver.addHelpEntry_vgv7xw$(action);
    $receiver.addPositionalArgument_oczzt6$(action);
    return action;
  }
  function registerArgument_1($receiver, positionalArgument) {
    return registerAction_1($receiver, positionalArgument);
  }
  function positionalAction$ObjectLiteral(closure$action, name_0, help_0, minArgs_0, maxArgs_0) {
    this.closure$action = closure$action;
    PositionalActionBase.call(this, name_0, help_0, minArgs_0, maxArgs_0);
  }
  positionalAction$ObjectLiteral.prototype.invoke_61zpoe$ = function (argument) {
    this.closure$action(argument);
  };
  positionalAction$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [PositionalActionBase]
  };
  function positionalAction($receiver, name, help, minArgs, maxArgs, action) {
    if (minArgs === void 0)
      minArgs = 0;
    if (maxArgs === void 0)
      maxArgs = 1;
    registerAction_1($receiver, new positionalAction$ObjectLiteral(action, name, help, minArgs, maxArgs));
  }
  function positionalArgument$lambda(it) {
    return it;
  }
  function positionalArgument($receiver, name, help, minArgs) {
    if (minArgs === void 0)
      minArgs = 0;
    return positionalArgument_1($receiver, name, help, minArgs, positionalArgument$lambda);
  }
  function positionalArgument$lambda_0(it) {
    return it;
  }
  function positionalArgument_0($receiver, name, help, initialValue, minArgs) {
    if (minArgs === void 0)
      minArgs = 0;
    return positionalArgument_2($receiver, name, help, initialValue, minArgs, positionalArgument$lambda_0);
  }
  function positionalArgument$ObjectLiteral(closure$mapping, name, help, initialValue, minArgs) {
    this.closure$mapping = closure$mapping;
    SinglePositionalArgumentBase.call(this, name, help, initialValue, minArgs);
  }
  positionalArgument$ObjectLiteral.prototype.invoke_61zpoe$ = function (argument) {
    this.value = this.closure$mapping(argument);
  };
  positionalArgument$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [SinglePositionalArgumentBase]
  };
  function positionalArgument_1($receiver, name, help, minArgs, mapping) {
    if (minArgs === void 0)
      minArgs = 0;
    return registerArgument_1($receiver, new positionalArgument$ObjectLiteral(mapping, name, help, null, minArgs));
  }
  function positionalArgument$ObjectLiteral_0(closure$mapping, name, help, initialValue, minArgs) {
    this.closure$mapping = closure$mapping;
    SinglePositionalArgumentBase.call(this, name, help, initialValue, minArgs);
  }
  positionalArgument$ObjectLiteral_0.prototype.invoke_61zpoe$ = function (argument) {
    this.value = this.closure$mapping(argument);
  };
  positionalArgument$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [SinglePositionalArgumentBase]
  };
  function positionalArgument_2($receiver, name, help, initialValue, minArgs, mapping) {
    if (minArgs === void 0)
      minArgs = 0;
    return registerArgument_1($receiver, new positionalArgument$ObjectLiteral_0(mapping, name, help, initialValue, minArgs));
  }
  function positionalArgumentsList$lambda(it) {
    return it;
  }
  function positionalArgumentsList($receiver, name, help, destination, minArgs, maxArgs) {
    if (destination === void 0)
      destination = ArrayList_init();
    if (minArgs === void 0)
      minArgs = 0;
    if (maxArgs === void 0)
      maxArgs = 2147483647;
    return positionalArgumentsList_0($receiver, name, help, destination, minArgs, maxArgs, positionalArgumentsList$lambda);
  }
  function positionalArgumentsList$ObjectLiteral(closure$mapping, name_0, help_0, destination_0, minArgs_0, maxArgs_0) {
    this.closure$mapping = closure$mapping;
    ListPositionalArgumentBase.call(this, name_0, help_0, destination_0, minArgs_0, maxArgs_0);
  }
  positionalArgumentsList$ObjectLiteral.prototype.invoke_61zpoe$ = function (argument) {
    this.value.add_11rb$(this.closure$mapping(argument));
  };
  positionalArgumentsList$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ListPositionalArgumentBase]
  };
  function positionalArgumentsList_0($receiver, name, help, destination, minArgs, maxArgs, mapping) {
    if (destination === void 0)
      destination = ArrayList_init();
    if (minArgs === void 0)
      minArgs = 0;
    if (maxArgs === void 0)
      maxArgs = 2147483647;
    return registerAction_1($receiver, new positionalArgumentsList$ObjectLiteral(mapping, name, help, destination, minArgs, maxArgs));
  }
  function foldPositionalArguments$ObjectLiteral(closure$fn, name_0, help_0, initialValue_0, minArgs_0, maxArgs_0) {
    this.closure$fn = closure$fn;
    PositionalArgumentBase.call(this, name_0, help_0, initialValue_0, minArgs_0, maxArgs_0);
  }
  foldPositionalArguments$ObjectLiteral.prototype.invoke_61zpoe$ = function (argument) {
    this.value = this.closure$fn(this.value, argument);
  };
  foldPositionalArguments$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [PositionalArgumentBase]
  };
  function foldPositionalArguments($receiver, name, help, initialValue, minArgs, maxArgs, fn) {
    if (minArgs === void 0)
      minArgs = 0;
    if (maxArgs === void 0)
      maxArgs = 2147483647;
    return registerArgument_1($receiver, new foldPositionalArguments$ObjectLiteral(fn, name, help, initialValue, minArgs, maxArgs));
  }
  function add$ObjectLiteral_0(closure$listener) {
    this.closure$listener = closure$listener;
  }
  add$ObjectLiteral_0.prototype.onEvent_11rb$ = function (value) {
    this.closure$listener(value);
  };
  add$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Listener]
  };
  function SharedOptionBuilder(storage) {
    this.storage_0 = storage;
  }
  function SharedOptionBuilder$storeShared$lambda(this$SharedOptionBuilder) {
    return function (it) {
      this$SharedOptionBuilder.storage_0.setValue_11rb$(it);
      return Unit;
    };
  }
  SharedOptionBuilder.prototype.storeShared_uvks4$ = function ($receiver) {
    $receiver.addListener_eebyu9$(new add$ObjectLiteral_0(SharedOptionBuilder$storeShared$lambda(this)));
  };
  function SharedOptionBuilder$storeShared$lambda_0(this$SharedOptionBuilder, closure$value) {
    return function (it) {
      this$SharedOptionBuilder.storage_0.setValue_11rb$(closure$value);
      return Unit;
    };
  }
  SharedOptionBuilder.prototype.storeShared_ks9w3$ = function ($receiver, value) {
    $receiver.addListener_eebyu9$(new add$ObjectLiteral_0(SharedOptionBuilder$storeShared$lambda_0(this, value)));
  };
  SharedOptionBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SharedOptionBuilder',
    interfaces: []
  };
  var sharedOption = defineInlineFunction('venus.venusbackend.cli.sharedOption_ltf6c5$', wrapFunction(function () {
    var ArgumentStorage_init = _.venusbackend.cli.ArgumentStorage;
    var SharedOptionBuilder_init = _.venusbackend.cli.SharedOptionBuilder;
    return function (initialValue, build) {
      var storage = new ArgumentStorage_init(initialValue);
      var builder = new SharedOptionBuilder_init(storage);
      build(builder);
      return storage;
    };
  }));
  function Subcommand(cli, help, action) {
    this.cli = cli;
    this.help = help;
    this.action = action;
    this.name = this.cli.commandName;
  }
  Subcommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Subcommand',
    interfaces: []
  };
  function subcommands$ObjectLiteral(closure$subcommand) {
    this.closure$subcommand = closure$subcommand;
  }
  subcommands$ObjectLiteral.prototype.invoke_drwoxr$ = function (arguments_0) {
    (new CommandLineParser(this.closure$subcommand.cli)).parseTokenized_drwoxr$(arguments_0);
    this.closure$subcommand.action();
  };
  subcommands$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [CommandAction]
  };
  function subcommands$ObjectLiteral_0(closure$helpCaption, closure$subcommands) {
    this.closure$helpCaption = closure$helpCaption;
    this.closure$subcommands = closure$subcommands;
  }
  subcommands$ObjectLiteral_0.prototype.printHelp_w0chqk$ = function (helpPrinter) {
    var tmp$, tmp$_0;
    helpPrinter.printText_61zpoe$(this.closure$helpCaption);
    tmp$ = this.closure$subcommands;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var subcommand = tmp$[tmp$_0];
      helpPrinter.printEntry_puj7f4$(subcommand.name + ' ...', subcommand.help);
    }
    helpPrinter.printSeparator();
  };
  subcommands$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [HelpEntry]
  };
  function subcommands($receiver, usage, helpCaption, subcommands) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== subcommands.length; ++tmp$) {
      var subcommand = subcommands[tmp$];
      $receiver.setFlagAction_prlex9$(subcommand.name, new subcommands$ObjectLiteral(subcommand));
    }
    $receiver.addUsageEntry_61zpoe$(usage);
    $receiver.addHelpEntry_vgv7xw$(new subcommands$ObjectLiteral_0(helpCaption, subcommands));
  }
  function subcommand(cli, help, action) {
    return new Subcommand(cli, help, action);
  }
  function nextOrNull($receiver) {
    return $receiver.hasNext() ? $receiver.next() : null;
  }
  function ImportProgramData(progImport, importingProgram, importingProgramAbsPath) {
    this.progImport = progImport;
    this.importingProgram = importingProgram;
    this.importingProgramAbsPath = importingProgramAbsPath;
  }
  ImportProgramData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImportProgramData',
    interfaces: []
  };
  ImportProgramData.prototype.component1 = function () {
    return this.progImport;
  };
  ImportProgramData.prototype.component2 = function () {
    return this.importingProgram;
  };
  ImportProgramData.prototype.component3 = function () {
    return this.importingProgramAbsPath;
  };
  ImportProgramData.prototype.copy_j6fvs4$ = function (progImport, importingProgram, importingProgramAbsPath) {
    return new ImportProgramData(progImport === void 0 ? this.progImport : progImport, importingProgram === void 0 ? this.importingProgram : importingProgram, importingProgramAbsPath === void 0 ? this.importingProgramAbsPath : importingProgramAbsPath);
  };
  ImportProgramData.prototype.toString = function () {
    return 'ImportProgramData(progImport=' + Kotlin.toString(this.progImport) + (', importingProgram=' + Kotlin.toString(this.importingProgram)) + (', importingProgramAbsPath=' + Kotlin.toString(this.importingProgramAbsPath)) + ')';
  };
  ImportProgramData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.progImport) | 0;
    result = result * 31 + Kotlin.hashCode(this.importingProgram) | 0;
    result = result * 31 + Kotlin.hashCode(this.importingProgramAbsPath) | 0;
    return result;
  };
  ImportProgramData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.progImport, other.progImport) && Kotlin.equals(this.importingProgram, other.importingProgram) && Kotlin.equals(this.importingProgramAbsPath, other.importingProgramAbsPath)))));
  };
  function ProgramDebugInfo(programName, dbg) {
    this.programName = programName;
    this.dbg = dbg;
  }
  ProgramDebugInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProgramDebugInfo',
    interfaces: []
  };
  ProgramDebugInfo.prototype.component1 = function () {
    return this.programName;
  };
  ProgramDebugInfo.prototype.component2 = function () {
    return this.dbg;
  };
  ProgramDebugInfo.prototype.copy_qxjnze$ = function (programName, dbg) {
    return new ProgramDebugInfo(programName === void 0 ? this.programName : programName, dbg === void 0 ? this.dbg : dbg);
  };
  ProgramDebugInfo.prototype.toString = function () {
    return 'ProgramDebugInfo(programName=' + Kotlin.toString(this.programName) + (', dbg=' + Kotlin.toString(this.dbg)) + ')';
  };
  ProgramDebugInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.programName) | 0;
    result = result * 31 + Kotlin.hashCode(this.dbg) | 0;
    return result;
  };
  ProgramDebugInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.programName, other.programName) && Kotlin.equals(this.dbg, other.dbg)))));
  };
  function LinkedProgram() {
    this.prog = new Program(void 0, '');
    this.dbg = ArrayList_init();
    this.startPC = null;
  }
  LinkedProgram.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkedProgram',
    interfaces: []
  };
  function RelocationInfo(relocator, offset, label, labelOffset, dbg) {
    this.relocator = relocator;
    this.offset = offset;
    this.label = label;
    this.labelOffset = labelOffset;
    this.dbg = dbg;
  }
  RelocationInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RelocationInfo',
    interfaces: []
  };
  RelocationInfo.prototype.component1 = function () {
    return this.relocator;
  };
  RelocationInfo.prototype.component2 = function () {
    return this.offset;
  };
  RelocationInfo.prototype.component3 = function () {
    return this.label;
  };
  RelocationInfo.prototype.component4 = function () {
    return this.labelOffset;
  };
  RelocationInfo.prototype.component5 = function () {
    return this.dbg;
  };
  RelocationInfo.prototype.copy_hmzo8j$ = function (relocator, offset, label, labelOffset, dbg) {
    return new RelocationInfo(relocator === void 0 ? this.relocator : relocator, offset === void 0 ? this.offset : offset, label === void 0 ? this.label : label, labelOffset === void 0 ? this.labelOffset : labelOffset, dbg === void 0 ? this.dbg : dbg);
  };
  RelocationInfo.prototype.toString = function () {
    return 'RelocationInfo(relocator=' + Kotlin.toString(this.relocator) + (', offset=' + Kotlin.toString(this.offset)) + (', label=' + Kotlin.toString(this.label)) + (', labelOffset=' + Kotlin.toString(this.labelOffset)) + (', dbg=' + Kotlin.toString(this.dbg)) + ')';
  };
  RelocationInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.relocator) | 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    result = result * 31 + Kotlin.hashCode(this.label) | 0;
    result = result * 31 + Kotlin.hashCode(this.labelOffset) | 0;
    result = result * 31 + Kotlin.hashCode(this.dbg) | 0;
    return result;
  };
  RelocationInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.relocator, other.relocator) && Kotlin.equals(this.offset, other.offset) && Kotlin.equals(this.label, other.label) && Kotlin.equals(this.labelOffset, other.labelOffset) && Kotlin.equals(this.dbg, other.dbg)))));
  };
  function DataRelocationInfo(offset, label, labelOffset, dbg) {
    this.offset = offset;
    this.label = label;
    this.labelOffset = labelOffset;
    this.dbg = dbg;
  }
  DataRelocationInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataRelocationInfo',
    interfaces: []
  };
  DataRelocationInfo.prototype.component1 = function () {
    return this.offset;
  };
  DataRelocationInfo.prototype.component2 = function () {
    return this.label;
  };
  DataRelocationInfo.prototype.component3 = function () {
    return this.labelOffset;
  };
  DataRelocationInfo.prototype.component4 = function () {
    return this.dbg;
  };
  DataRelocationInfo.prototype.copy_224g4y$ = function (offset, label, labelOffset, dbg) {
    return new DataRelocationInfo(offset === void 0 ? this.offset : offset, label === void 0 ? this.label : label, labelOffset === void 0 ? this.labelOffset : labelOffset, dbg === void 0 ? this.dbg : dbg);
  };
  DataRelocationInfo.prototype.toString = function () {
    return 'DataRelocationInfo(offset=' + Kotlin.toString(this.offset) + (', label=' + Kotlin.toString(this.label)) + (', labelOffset=' + Kotlin.toString(this.labelOffset)) + (', dbg=' + Kotlin.toString(this.dbg)) + ')';
  };
  DataRelocationInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    result = result * 31 + Kotlin.hashCode(this.label) | 0;
    result = result * 31 + Kotlin.hashCode(this.labelOffset) | 0;
    result = result * 31 + Kotlin.hashCode(this.dbg) | 0;
    return result;
  };
  DataRelocationInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.offset, other.offset) && Kotlin.equals(this.label, other.label) && Kotlin.equals(this.labelOffset, other.labelOffset) && Kotlin.equals(this.dbg, other.dbg)))));
  };
  function Linker() {
    Linker_instance = this;
  }
  Linker.prototype.link_lpgfe$ = function (progsAndLibs) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    var linkedProgram = new LinkedProgram();
    var globalTable = HashMap_init();
    var toRelocate = ArrayList_init();
    var toRelocateData = ArrayList_init();
    var textTotalOffset = 0;
    var dataTotalOffset = 0;
    var progs = progsAndLibs.AllProgs;
    if (progs.size > 0) {
      linkedProgram.prog.name = progs.get_za3lpa$(0).name;
    }
    tmp$ = progs.iterator();
    while (tmp$.hasNext()) {
      var prog = tmp$.next();
      tmp$_0 = prog.labels.entries.iterator();
      while (tmp$_0.hasNext()) {
        var tmp$_8 = tmp$_0.next();
        var label = tmp$_8.key;
        var offset = tmp$_8.value;
        if (offset >= MemorySegments_getInstance().STATIC_BEGIN) {
          tmp$_1 = dataTotalOffset;
        }
         else {
          tmp$_1 = textTotalOffset;
        }
        var start = tmp$_1;
        var location = start + offset | 0;
        if (prog.isGlobalLabel_61zpoe$(label)) {
          var previousValue = globalTable.put_xwzc9p$(label, location);
          if (previousValue != null) {
            throw AssemblerError_init('label ' + label + ' defined global in two different files');
          }
          if (equals(label, 'main')) {
            linkedProgram.prog.makeLabelGlobal_61zpoe$('main');
            linkedProgram.startPC = location + MemorySegments_getInstance().TEXT_BEGIN | 0;
          }
        }
      }
      var $receiver = prog.insts;
      var action = getCallableRef('add', function ($receiver, mcode) {
        return $receiver.add_6cx2xq$(mcode), Unit;
      }.bind(null, linkedProgram.prog));
      var tmp$_9;
      tmp$_9 = $receiver.iterator();
      while (tmp$_9.hasNext()) {
        var element = tmp$_9.next();
        action(element);
      }
      var tmp$_10;
      tmp$_10 = prog.debugInfo.iterator();
      while (tmp$_10.hasNext()) {
        var element_0 = tmp$_10.next();
        linkedProgram.dbg.add_11rb$(new ProgramDebugInfo(prog.name, element_0));
      }
      var $receiver_0 = prog.dataSegment;
      var action_0 = getCallableRef('addToData', function ($receiver, byte) {
        return $receiver.addToData_s8j3t7$(byte), Unit;
      }.bind(null, linkedProgram.prog));
      var tmp$_11;
      tmp$_11 = $receiver_0.iterator();
      while (tmp$_11.hasNext()) {
        var element_1 = tmp$_11.next();
        action_0(element_1);
      }
      tmp$_2 = prog.relocationTable.iterator();
      while (tmp$_2.hasNext()) {
        var tmp$_12 = tmp$_2.next();
        var relocator = tmp$_12.component1()
        , offset_0 = tmp$_12.component2()
        , label_0 = tmp$_12.component3()
        , labelOffset = tmp$_12.component4()
        , dbg = tmp$_12.component5();
        var location_0 = textTotalOffset + offset_0 | 0;
        var mcode = linkedProgram.prog.insts.get_za3lpa$(location_0 / 4 | 0);
        if (equals(label_0, '')) {
          relocator.invoke_dc9fqr$(mcode, location_0, labelOffset, void 0, dbg);
        }
         else {
          var toAddress = prog.labels.get_11rb$(label_0);
          if (toAddress != null) {
            relocator.invoke_dc9fqr$(mcode, location_0, toAddress + labelOffset + textTotalOffset | 0, void 0, dbg);
          }
           else {
            toRelocate.add_11rb$(new RelocationInfo(relocator, location_0, label_0, labelOffset, dbg));
          }
        }
      }
      tmp$_3 = prog.dataRelocationTable.iterator();
      while (tmp$_3.hasNext()) {
        var tmp$_13 = tmp$_3.next();
        var offset_1 = tmp$_13.component1()
        , label_1 = tmp$_13.component2()
        , labelOffset_0 = tmp$_13.component3()
        , dbg_0 = tmp$_13.component4();
        var toAddress0 = prog.labels.get_11rb$(label_1);
        var location_1 = dataTotalOffset + offset_1 | 0;
        if (toAddress0 != null) {
          var toAddress_0 = toAddress0 + labelOffset_0 | 0;
          linkedProgram.prog.overwriteData_6t1wet$(location_1, toByte(toAddress_0));
          linkedProgram.prog.overwriteData_6t1wet$(location_1 + 1 | 0, toByte(toAddress_0 >> 8));
          linkedProgram.prog.overwriteData_6t1wet$(location_1 + 2 | 0, toByte(toAddress_0 >> 16));
          linkedProgram.prog.overwriteData_6t1wet$(location_1 + 3 | 0, toByte(toAddress_0 >> 24));
        }
         else {
          toRelocateData.add_11rb$(new DataRelocationInfo(location_1, label_1, labelOffset_0, dbg_0));
        }
      }
      textTotalOffset = textTotalOffset + prog.textSize | 0;
      dataTotalOffset = dataTotalOffset + prog.dataSize | 0;
      var tmp$_14;
      tmp$_14 = dataTotalOffset;
      var tmp$_15, tmp$_16;
      if (!equals(prog, last(progs))) {
        tmp$_15 = prog.textSize;
        for (var i = 0; i < tmp$_15; i++) {
          linkedProgram.prog.addToData_s8j3t7$(0);
        }
        tmp$_16 = prog.dataSize + prog.textSize | 0;
      }
       else {
        tmp$_16 = prog.dataSize;
      }
      dataTotalOffset = tmp$_14 + tmp$_16 | 0;
    }
    tmp$_4 = toRelocate.iterator();
    while (tmp$_4.hasNext()) {
      var tmp$_17 = tmp$_4.next();
      var relocator_0 = tmp$_17.component1()
      , offset_2 = tmp$_17.component2()
      , label_2 = tmp$_17.component3()
      , labelOffset_1 = tmp$_17.component4()
      , dbg_1 = tmp$_17.component5();
      tmp$_5 = globalTable.get_11rb$(label_2);
      if (tmp$_5 == null) {
        throw AssemblerError_init('label ' + label_2 + ' used but not defined', dbg_1);
      }
      var toAddress_1 = tmp$_5;
      var mcode_0 = linkedProgram.prog.insts.get_za3lpa$(offset_2 / 4 | 0);
      relocator_0.invoke_dc9fqr$(mcode_0, offset_2, toAddress_1, void 0, dbg_1);
    }
    tmp$_6 = toRelocateData.iterator();
    while (tmp$_6.hasNext()) {
      var tmp$_18 = tmp$_6.next();
      var location_2 = tmp$_18.component1()
      , label_3 = tmp$_18.component2()
      , labelOffset_2 = tmp$_18.component3()
      , dbg_2 = tmp$_18.component4();
      tmp$_7 = globalTable.get_11rb$(label_3);
      if (tmp$_7 == null) {
        throw AssemblerError_init('label ' + label_3 + ' used but not defined', dbg_2);
      }
      var toAddress_2 = tmp$_7;
      linkedProgram.prog.overwriteData_6t1wet$(location_2, toByte(toAddress_2));
      linkedProgram.prog.overwriteData_6t1wet$(location_2 + 1 | 0, toByte(toAddress_2 >> 8));
      linkedProgram.prog.overwriteData_6t1wet$(location_2 + 2 | 0, toByte(toAddress_2 >> 16));
      linkedProgram.prog.overwriteData_6t1wet$(location_2 + 3 | 0, toByte(toAddress_2 >> 24));
    }
    return linkedProgram;
  };
  Linker.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Linker',
    interfaces: []
  };
  var Linker_instance = null;
  function Linker_getInstance() {
    if (Linker_instance === null) {
      new Linker();
    }
    return Linker_instance;
  }
  function ProgramAndLibraries(progs, vfs) {
    this.progs = progs;
    this.AllProgs = ArrayList_init();
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
    var seenPrograms = HashMap_init();
    var needToImportPrograms = HashMap_init();
    tmp$ = this.progs.iterator();
    while (tmp$.hasNext()) {
      var prog = tmp$.next();
      var imp = new Import(prog.name, false);
      var value = new ImportProgramData(imp, new Import(prog.absPath, false), prog.absPath);
      seenPrograms.put_xwzc9p$(imp, value);
      this.addProgramImports_k0jkvp$(prog, new Import(prog.absPath, false), prog.absPath, seenPrograms, needToImportPrograms);
      this.AllProgs.add_11rb$(prog);
    }
    var keysToRemove = HashSet_init();
    tmp$_0 = seenPrograms.values.iterator();
    while (tmp$_0.hasNext()) {
      var sprog = tmp$_0.next();
      if (needToImportPrograms.containsKey_11rb$(sprog.progImport)) {
        keysToRemove.add_11rb$(sprog.progImport);
      }
    }
    tmp$_1 = keysToRemove.iterator();
    while (tmp$_1.hasNext()) {
      var ktr = tmp$_1.next();
      needToImportPrograms.remove_11rb$(ktr);
    }
    while (!needToImportPrograms.isEmpty()) {
      var progImport = elementAt(needToImportPrograms.keys, 0);
      var progname = progImport.path;
      var progData = ensureNotNull(needToImportPrograms.get_11rb$(progImport));
      needToImportPrograms.remove_11rb$(progImport);
      if (progImport.relative) {
        tmp$_2 = vfs.getObjectFromPath_s9h4kc$(progData.importingProgramAbsPath, void 0, vfs.sentinel);
        if (tmp$_2 == null) {
          throw AssemblerError_init('Could not find the library: ' + progname + ' from the relative path from the file. Parent file not found! This library was imported by ' + progData.importingProgram + '.');
        }
        var parentNode = tmp$_2;
        var loc = vfs.getParentFromObject_hijjve$(parentNode);
        tmp$_3 = vfs.getObjectFromPath_s9h4kc$(progname, void 0, loc);
        if (tmp$_3 == null) {
          throw AssemblerError_init('Could not find the library: ' + progname + ' from the relative path from the file. This library was imported by ' + progData.importingProgram + '.');
        }
        tmp$_5 = tmp$_3;
      }
       else {
        tmp$_4 = vfs.getObjectFromPath_s9h4kc$(progname);
        if (tmp$_4 == null) {
          throw AssemblerError_init('Could not find the library: ' + progname + ' from the absolute path (CWD). This library was imported by ' + progData.importingProgram + '.');
        }
        tmp$_5 = tmp$_4;
      }
      var obj = tmp$_5;
      switch (obj.type.name) {
        case 'File':
          var progText = (Kotlin.isType(tmp$_6 = obj, VFSFile) ? tmp$_6 : throwCCE()).readText();
          var tmp$_10 = Assembler_getInstance().assemble_6hosri$(progText, progname, obj.getPath());
          var prog_0 = tmp$_10.component1()
          , errors = tmp$_10.component2()
          , warnings = tmp$_10.component3();
          if (!errors.isEmpty()) {
            var msgs = 'Could not load the library: ' + progname + ' (Note: The library file was found but it could not be assembled) This library was imported by ' + progData.importingProgram + '. Here are a list of errors which may help:' + '\n' + '\n';
            tmp$_7 = errors.iterator();
            while (tmp$_7.hasNext()) {
              var error = tmp$_7.next();
              msgs += toString(error.message) + '\n' + '\n';
            }
            throw AssemblerError_init(msgs);
          }

          tmp$_9 = prog_0;
          break;
        case 'Program':
          tmp$_9 = (Kotlin.isType(tmp$_8 = obj, VFSProgram) ? tmp$_8 : throwCCE()).getProgram();
          break;
        default:throw AssemblerError_init('The path for ' + progname + ' is not a file or program! This library was imported by ' + progData.importingProgram + '.');
      }
      var prog_1 = tmp$_9;
      this.AllProgs.add_11rb$(prog_1);
      seenPrograms.put_xwzc9p$(progImport, progData);
      this.addProgramImports_k0jkvp$(prog_1, progImport, obj.getPath(), seenPrograms, needToImportPrograms);
    }
  }
  ProgramAndLibraries.prototype.addProgramImports_k0jkvp$ = function (prog, progImport, progImportAbsPath, SeenPrograms, needToImportPrograms) {
    var tmp$;
    tmp$ = prog.imports.iterator();
    while (tmp$.hasNext()) {
      var import_0 = tmp$.next();
      var tmp$_0;
      if (!(Kotlin.isType(tmp$_0 = SeenPrograms, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(import_0)) {
        var value = new ImportProgramData(import_0, progImport, progImportAbsPath);
        needToImportPrograms.put_xwzc9p$(import_0, value);
      }
    }
  };
  ProgramAndLibraries.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProgramAndLibraries',
    interfaces: []
  };
  function DoubleQuadWord(int0, int1, int2, int3, int4, int5, int6, int7) {
    DoubleQuadWord$Companion_getInstance();
    if (int0 === void 0)
      int0 = 0;
    if (int1 === void 0)
      int1 = 0;
    if (int2 === void 0)
      int2 = 0;
    if (int3 === void 0)
      int3 = 0;
    if (int4 === void 0)
      int4 = 0;
    if (int5 === void 0)
      int5 = 0;
    if (int6 === void 0)
      int6 = 0;
    if (int7 === void 0)
      int7 = 0;
    Number_0.call(this);
    this.int0 = int0;
    this.int1 = int1;
    this.int2 = int2;
    this.int3 = int3;
    this.int4 = int4;
    this.int5 = int5;
    this.int6 = int6;
    this.int7 = int7;
  }
  function DoubleQuadWord$Companion() {
    DoubleQuadWord$Companion_instance = this;
    this.SIZE_BYTES = 32;
    this.SIZE_BITS = 256;
    this.MIN_VALUE = new DoubleQuadWord(-2147483648, -2147483648, -2147483648, -2147483648);
    this.MAX_VALUE = new DoubleQuadWord(2147483647, 2147483647, 2147483647, 2147483647);
  }
  DoubleQuadWord$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DoubleQuadWord$Companion_instance = null;
  function DoubleQuadWord$Companion_getInstance() {
    if (DoubleQuadWord$Companion_instance === null) {
      new DoubleQuadWord$Companion();
    }
    return DoubleQuadWord$Companion_instance;
  }
  DoubleQuadWord.prototype.compareTo_11rb$ = function (other) {
    var int3comp = Kotlin.primitiveCompareTo(this.int3, other.int3);
    if (int3comp === 0) {
      var int2comp = Kotlin.primitiveCompareTo(this.int2, other.int2);
      if (int2comp === 0) {
        var int1comp = Kotlin.primitiveCompareTo(this.int1, other.int1);
        if (int1comp === 0) {
          return Kotlin.primitiveCompareTo(this.int0, other.int0);
        }
        return int1comp;
      }
      return int2comp;
    }
    return int3comp;
  };
  DoubleQuadWord.prototype.compareTo_s8j3t7$ = function (other) {
    return Kotlin.primitiveCompareTo(this.toByte(), other);
  };
  DoubleQuadWord.prototype.compareTo_mq22fl$ = function (other) {
    return Kotlin.primitiveCompareTo(this.toShort(), other);
  };
  DoubleQuadWord.prototype.compareTo_za3lpa$ = function (other) {
    return Kotlin.primitiveCompareTo(this.toInt(), other);
  };
  DoubleQuadWord.prototype.compareTo_s8cxhz$ = function (other) {
    return this.toLong().compareTo_11rb$(other);
  };
  DoubleQuadWord.prototype.compareTo_mx4ult$ = function (other) {
    return Kotlin.compareTo(this.toFloat(), other);
  };
  DoubleQuadWord.prototype.compareTo_14dthe$ = function (other) {
    return Kotlin.compareTo(this.toDouble(), other);
  };
  DoubleQuadWord.prototype.plus_s8j3t7$ = function (other) {
    return this.plus_t8kpdv$(toDoubleQuadWord_0(other));
  };
  DoubleQuadWord.prototype.plus_mq22fl$ = function (other) {
    return this.plus_t8kpdv$(toDoubleQuadWord_1(other));
  };
  DoubleQuadWord.prototype.plus_za3lpa$ = function (other) {
    return this.plus_t8kpdv$(toDoubleQuadWord_2(other));
  };
  DoubleQuadWord.prototype.plus_s8cxhz$ = function (other) {
    return this.plus_t8kpdv$(toDoubleQuadWord_3(other));
  };
  DoubleQuadWord.prototype.plus_mx4ult$ = function (other) {
    return this.toFloat() + other;
  };
  DoubleQuadWord.prototype.plus_14dthe$ = function (other) {
    return this.toDouble() + other;
  };
  DoubleQuadWord.prototype.plus_t8kpdv$ = function (other) {
    var long0 = Kotlin.Long.fromInt(this.int0).add(Kotlin.Long.fromInt(other.int0));
    var long1 = Kotlin.Long.fromInt(this.int1).add(Kotlin.Long.fromInt(other.int1)).add(long0.shiftRightUnsigned(32));
    var long2 = Kotlin.Long.fromInt(this.int2).add(Kotlin.Long.fromInt(other.int2)).add(long1.shiftRightUnsigned(32));
    var long3 = Kotlin.Long.fromInt(this.int3).add(Kotlin.Long.fromInt(other.int3)).add(long2.shiftRightUnsigned(32));
    return new DoubleQuadWord(long0.toInt(), long1.toInt(), long2.toInt(), long3.toInt());
  };
  DoubleQuadWord.prototype.minus_s8j3t7$ = function (other) {
    return this.minus_t8kpdv$(toDoubleQuadWord_0(other));
  };
  DoubleQuadWord.prototype.minus_mq22fl$ = function (other) {
    return this.minus_t8kpdv$(toDoubleQuadWord_1(other));
  };
  DoubleQuadWord.prototype.minus_za3lpa$ = function (other) {
    return this.minus_t8kpdv$(toDoubleQuadWord_2(other));
  };
  DoubleQuadWord.prototype.minus_s8cxhz$ = function (other) {
    return this.minus_t8kpdv$(toDoubleQuadWord_3(other));
  };
  DoubleQuadWord.prototype.minus_mx4ult$ = function (other) {
    return this.toFloat() - other;
  };
  DoubleQuadWord.prototype.minus_14dthe$ = function (other) {
    return this.toDouble() - other;
  };
  DoubleQuadWord.prototype.minus_t8kpdv$ = function (other) {
    throw new NotImplementedError();
  };
  DoubleQuadWord.prototype.times_s8j3t7$ = function (other) {
    return this.times_t8kpdv$(toDoubleQuadWord_0(other));
  };
  DoubleQuadWord.prototype.times_mq22fl$ = function (other) {
    return this.times_t8kpdv$(toDoubleQuadWord_1(other));
  };
  DoubleQuadWord.prototype.times_za3lpa$ = function (other) {
    return this.times_t8kpdv$(toDoubleQuadWord_2(other));
  };
  DoubleQuadWord.prototype.times_s8cxhz$ = function (other) {
    return this.times_t8kpdv$(toDoubleQuadWord_3(other));
  };
  DoubleQuadWord.prototype.times_mx4ult$ = function (other) {
    return this.toFloat() * other;
  };
  DoubleQuadWord.prototype.times_14dthe$ = function (other) {
    return this.toDouble() * other;
  };
  DoubleQuadWord.prototype.times_t8kpdv$ = function (other) {
    throw new NotImplementedError();
  };
  DoubleQuadWord.prototype.div_s8j3t7$ = function (other) {
    return this.div_t8kpdv$(toDoubleQuadWord_0(other));
  };
  DoubleQuadWord.prototype.div_mq22fl$ = function (other) {
    return this.div_t8kpdv$(toDoubleQuadWord_1(other));
  };
  DoubleQuadWord.prototype.div_za3lpa$ = function (other) {
    return this.div_t8kpdv$(toDoubleQuadWord_2(other));
  };
  DoubleQuadWord.prototype.div_s8cxhz$ = function (other) {
    return this.div_t8kpdv$(toDoubleQuadWord_3(other));
  };
  DoubleQuadWord.prototype.div_mx4ult$ = function (other) {
    return this.toFloat() / other;
  };
  DoubleQuadWord.prototype.div_14dthe$ = function (other) {
    return this.toDouble() / other;
  };
  DoubleQuadWord.prototype.div_t8kpdv$ = function (other) {
    throw new NotImplementedError();
  };
  DoubleQuadWord.prototype.rem_s8j3t7$ = function (other) {
    return this.rem_t8kpdv$(toDoubleQuadWord_0(other));
  };
  DoubleQuadWord.prototype.rem_mq22fl$ = function (other) {
    return this.rem_t8kpdv$(toDoubleQuadWord_1(other));
  };
  DoubleQuadWord.prototype.rem_za3lpa$ = function (other) {
    return this.rem_t8kpdv$(toDoubleQuadWord_2(other));
  };
  DoubleQuadWord.prototype.rem_s8cxhz$ = function (other) {
    return this.rem_t8kpdv$(toDoubleQuadWord_3(other));
  };
  DoubleQuadWord.prototype.rem_mx4ult$ = function (other) {
    return this.toFloat() % other;
  };
  DoubleQuadWord.prototype.rem_14dthe$ = function (other) {
    return this.toDouble() % other;
  };
  DoubleQuadWord.prototype.rem_t8kpdv$ = function (other) {
    throw new NotImplementedError();
  };
  DoubleQuadWord.prototype.inc = function () {
    return this.plus_za3lpa$(1);
  };
  DoubleQuadWord.prototype.dec = function () {
    return this.minus_za3lpa$(1);
  };
  DoubleQuadWord.prototype.unaryPlus = function () {
    return this;
  };
  DoubleQuadWord.prototype.unaryMinus = function () {
    return toDoubleQuadWord_2(0).minus_t8kpdv$(this);
  };
  DoubleQuadWord.prototype.shl_za3lpa$ = function (bitCount) {
    var qw = this.copy();
    if (bitCount >= 64) {
      return new DoubleQuadWord(0, 0, 0, 0);
    }
    if ((bitCount & 1) === 1) {
      var msb0 = qw.int0 >> 31;
      var msb1 = qw.int1 >> 31;
      var msb2 = qw.int2 >> 31;
      qw.int0 = qw.int0 << 1;
      qw.int1 = qw.int1 << 1 & msb0;
      qw.int2 = qw.int2 << 1 & msb1;
      qw.int3 = qw.int2 << 1 & msb2;
    }
    if (bitCount % 2 === 0) {
      var msb0_0 = qw.int0 >> 30;
      var msb1_0 = qw.int1 >> 30;
      var msb2_0 = qw.int2 >> 30;
      qw.int0 = qw.int0 << 2;
      qw.int1 = qw.int1 << 2 & msb0_0;
      qw.int2 = qw.int2 << 2 & msb1_0;
      qw.int3 = qw.int2 << 2 & msb2_0;
    }
    if (bitCount % 4 === 0) {
      var msb0_1 = qw.int0 >> 28;
      var msb1_1 = qw.int1 >> 28;
      var msb2_1 = qw.int2 >> 28;
      qw.int0 = qw.int0 << 4;
      qw.int1 = qw.int1 << 4 & msb0_1;
      qw.int2 = qw.int2 << 4 & msb1_1;
      qw.int3 = qw.int2 << 4 & msb2_1;
    }
    if (bitCount % 8 === 0) {
      var msb0_2 = qw.int0 >> 24;
      var msb1_2 = qw.int1 >> 24;
      var msb2_2 = qw.int2 >> 24;
      qw.int0 = qw.int0 << 8;
      qw.int1 = qw.int1 << 8 & msb0_2;
      qw.int2 = qw.int2 << 8 & msb1_2;
      qw.int3 = qw.int2 << 8 & msb2_2;
    }
    if (bitCount % 16 === 0) {
      var msb0_3 = qw.int0 >> 16;
      var msb1_3 = qw.int1 >> 16;
      var msb2_3 = qw.int2 >> 16;
      qw.int0 = qw.int0 << 16;
      qw.int1 = qw.int1 << 16 & msb0_3;
      qw.int2 = qw.int2 << 16 & msb1_3;
      qw.int3 = qw.int2 << 16 & msb2_3;
    }
    if (bitCount % 32 === 0) {
      qw.int3 = qw.int2;
      qw.int2 = qw.int1;
      qw.int1 = qw.int0;
      qw.int0 = 0;
    }
    return qw;
  };
  DoubleQuadWord.prototype.shr_za3lpa$ = function (bitCount) {
    var tmp$;
    var qw = this.copy();
    if (bitCount >= 64) {
      if (get_sign(this.int3) === -1) {
        tmp$ = new DoubleQuadWord(-2147483648, -2147483648, -2147483648, -2147483648, -2147483648, -2147483648, -2147483648, -2147483648);
      }
       else {
        tmp$ = new DoubleQuadWord();
      }
      return tmp$;
    }
    if ((bitCount & 1) === 1) {
      var lsb1 = (qw.int1 & 1) << 31;
      var lsb2 = (qw.int2 & 1) << 31;
      var lsb3 = (qw.int3 & 1) << 31;
      qw.int0 = qw.int0 >> 1 & lsb1;
      qw.int1 = qw.int1 >> 1 & lsb2;
      qw.int2 = qw.int2 >> 1 & lsb3;
      qw.int3 = qw.int2 >> 1;
    }
    if (bitCount % 2 === 0) {
      var lsb1_0 = (qw.int1 & 3) << 30;
      var lsb2_0 = (qw.int2 & 3) << 30;
      var lsb3_0 = (qw.int3 & 3) << 30;
      qw.int0 = qw.int0 >> 2 & lsb1_0;
      qw.int1 = qw.int1 >> 2 & lsb2_0;
      qw.int2 = qw.int2 >> 2 & lsb3_0;
      qw.int3 = qw.int2 >> 2;
    }
    if (bitCount % 4 === 0) {
      var lsb1_1 = (qw.int1 & 15) << 28;
      var lsb2_1 = (qw.int2 & 15) << 28;
      var lsb3_1 = (qw.int3 & 15) << 28;
      qw.int0 = qw.int0 >> 4 & lsb1_1;
      qw.int1 = qw.int1 >> 4 & lsb2_1;
      qw.int2 = qw.int2 >> 4 & lsb3_1;
      qw.int3 = qw.int2 >> 4;
    }
    if (bitCount % 8 === 0) {
      var lsb1_2 = (qw.int1 & 255) >> 24;
      var lsb2_2 = (qw.int2 & 255) >> 24;
      var lsb3_2 = (qw.int3 & 255) >> 24;
      qw.int0 = qw.int0 >> 8 & lsb1_2;
      qw.int1 = qw.int1 >> 8 & lsb2_2;
      qw.int2 = qw.int2 >> 8 & lsb3_2;
      qw.int3 = qw.int2 >> 8;
    }
    if (bitCount % 16 === 0) {
      var lsb1_3 = (qw.int1 & 65535) >> 16;
      var lsb2_3 = (qw.int2 & 65535) >> 16;
      var lsb3_3 = (qw.int3 & 65535) >> 16;
      qw.int0 = qw.int0 >> 16 & lsb1_3;
      qw.int1 = qw.int1 >> 16 & lsb2_3;
      qw.int2 = qw.int2 >> 16 & lsb3_3;
      qw.int3 = qw.int2 >> 16;
    }
    if (bitCount % 32 === 0) {
      qw.int0 = qw.int1;
      qw.int1 = qw.int2;
      qw.int2 = qw.int3;
      qw.int3 = 0;
    }
    return qw;
  };
  DoubleQuadWord.prototype.ushr_za3lpa$ = function (bitCount) {
    var qw = this.copy();
    if (bitCount >= 64) {
      return new DoubleQuadWord(0, 0, 0, 0);
    }
    if ((bitCount & 1) === 1) {
      var lsb1 = (qw.int1 & 1) << 31;
      var lsb2 = (qw.int2 & 1) << 31;
      var lsb3 = (qw.int3 & 1) << 31;
      qw.int0 = qw.int0 >>> 1 & lsb1;
      qw.int1 = qw.int1 >>> 1 & lsb2;
      qw.int2 = qw.int2 >>> 1 & lsb3;
      qw.int3 = qw.int2 >>> 1;
    }
    if (bitCount % 2 === 0) {
      var lsb1_0 = (qw.int1 & 3) << 30;
      var lsb2_0 = (qw.int2 & 3) << 30;
      var lsb3_0 = (qw.int3 & 3) << 30;
      qw.int0 = qw.int0 >>> 2 & lsb1_0;
      qw.int1 = qw.int1 >>> 2 & lsb2_0;
      qw.int2 = qw.int2 >>> 2 & lsb3_0;
      qw.int3 = qw.int2 >>> 2;
    }
    if (bitCount % 4 === 0) {
      var lsb1_1 = (qw.int1 & 15) << 28;
      var lsb2_1 = (qw.int2 & 15) << 28;
      var lsb3_1 = (qw.int3 & 15) << 28;
      qw.int0 = qw.int0 >>> 4 & lsb1_1;
      qw.int1 = qw.int1 >>> 4 & lsb2_1;
      qw.int2 = qw.int2 >>> 4 & lsb3_1;
      qw.int3 = qw.int2 >>> 4;
    }
    if (bitCount % 8 === 0) {
      var lsb1_2 = (qw.int1 & 255) >> 24;
      var lsb2_2 = (qw.int2 & 255) >> 24;
      var lsb3_2 = (qw.int3 & 255) >> 24;
      qw.int0 = qw.int0 >>> 8 & lsb1_2;
      qw.int1 = qw.int1 >>> 8 & lsb2_2;
      qw.int2 = qw.int2 >>> 8 & lsb3_2;
      qw.int3 = qw.int2 >>> 8;
    }
    if (bitCount % 16 === 0) {
      var lsb1_3 = (qw.int1 & 65535) >> 16;
      var lsb2_3 = (qw.int2 & 65535) >> 16;
      var lsb3_3 = (qw.int3 & 65535) >> 16;
      qw.int0 = qw.int0 >>> 16 & lsb1_3;
      qw.int1 = qw.int1 >>> 16 & lsb2_3;
      qw.int2 = qw.int2 >>> 16 & lsb3_3;
      qw.int3 = qw.int2 >>> 16;
    }
    if (bitCount % 32 === 0) {
      qw.int0 = qw.int1;
      qw.int1 = qw.int2;
      qw.int2 = qw.int3;
      qw.int3 = 2147483647;
    }
    return qw;
  };
  DoubleQuadWord.prototype.and_t8kpdv$ = function (other) {
    var int0 = this.int0 & other.int0;
    var int1 = this.int1 & other.int1;
    var int2 = this.int2 & other.int2;
    var int3 = this.int3 & other.int3;
    return new DoubleQuadWord(int0, int1, int2, int3);
  };
  DoubleQuadWord.prototype.or_t8kpdv$ = function (other) {
    var int0 = this.int0 | other.int0;
    var int1 = this.int1 | other.int1;
    var int2 = this.int2 | other.int2;
    var int3 = this.int3 | other.int3;
    return new DoubleQuadWord(int0, int1, int2, int3);
  };
  DoubleQuadWord.prototype.xor_t8kpdv$ = function (other) {
    var int0 = this.int0 ^ other.int0;
    var int1 = this.int1 ^ other.int1;
    var int2 = this.int2 ^ other.int2;
    var int3 = this.int3 ^ other.int3;
    return new DoubleQuadWord(int0, int1, int2, int3);
  };
  DoubleQuadWord.prototype.inv = function () {
    var int0 = ~this.int0;
    var int1 = ~this.int1;
    var int2 = ~this.int2;
    var int3 = ~this.int3;
    return new DoubleQuadWord(int0, int1, int2, int3);
  };
  DoubleQuadWord.prototype.toChar = function () {
    return toChar(this.int0);
  };
  DoubleQuadWord.prototype.toDouble = function () {
    return this.toLong().toNumber();
  };
  DoubleQuadWord.prototype.toFloat = function () {
    return this.int0;
  };
  DoubleQuadWord.prototype.toInt = function () {
    return this.int0;
  };
  DoubleQuadWord.prototype.toLong = function () {
    return Kotlin.Long.fromInt(this.int1).shiftLeft(32).or(Kotlin.Long.fromInt(this.int0));
  };
  DoubleQuadWord.prototype.toShort = function () {
    return toShort(this.int0);
  };
  DoubleQuadWord.prototype.toByte = function () {
    return toByte(this.int0);
  };
  DoubleQuadWord.prototype.low = function () {
    return this.toLong();
  };
  DoubleQuadWord.prototype.high = function () {
    return Kotlin.Long.fromInt(this.int3).shiftLeft(32).or(Kotlin.Long.fromInt(this.int2));
  };
  DoubleQuadWord.prototype.copy = function () {
    return new DoubleQuadWord(this.int0, this.int1, this.int2, this.int3);
  };
  DoubleQuadWord.prototype.toString = function () {
    throw new NotImplementedError();
  };
  DoubleQuadWord.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoubleQuadWord',
    interfaces: [Comparable, Number_0]
  };
  function toDoubleQuadWord($receiver) {
    if (Kotlin.isType($receiver, DoubleQuadWord)) {
      return $receiver;
    }
    if (Kotlin.isType($receiver, QuadWord)) {
      return toDoubleQuadWord(toQuadWord($receiver));
    }
    if (typeof $receiver === 'number') {
      return toDoubleQuadWord_2(numberToInt($receiver));
    }
    if (Kotlin.isType($receiver, Kotlin.Long)) {
      return toDoubleQuadWord_3(numberToLong($receiver));
    }
    if (typeof $receiver === 'number') {
      return toDoubleQuadWord_0(numberToByte($receiver));
    }
    if (typeof $receiver === 'number') {
      return toDoubleQuadWord_1(numberToShort($receiver));
    }
    throw new ClassCastException('Unknown number type!');
  }
  function toDoubleQuadWord_0($receiver) {
    var tmp$;
    var num = $receiver;
    if (get_sign(num) === -1) {
      tmp$ = new DoubleQuadWord(num, -2147483648, -2147483648, -2147483648);
    }
     else {
      tmp$ = new DoubleQuadWord(num);
    }
    return tmp$;
  }
  function toDoubleQuadWord_1($receiver) {
    var tmp$;
    var num = $receiver;
    if (get_sign(num) === -1) {
      tmp$ = new DoubleQuadWord(num, -2147483648, -2147483648, -2147483648);
    }
     else {
      tmp$ = new DoubleQuadWord(num);
    }
    return tmp$;
  }
  function toDoubleQuadWord_2($receiver) {
    var tmp$;
    var num = $receiver;
    if (get_sign(num) === -1) {
      tmp$ = new DoubleQuadWord(num, -2147483648, -2147483648, -2147483648);
    }
     else {
      tmp$ = new DoubleQuadWord(num);
    }
    return tmp$;
  }
  function toDoubleQuadWord_3($receiver) {
    var tmp$;
    var num = $receiver;
    if (get_sign_0(num) === -1) {
      tmp$ = new DoubleQuadWord(num.toInt(), num.shiftRight(32).toInt(), -2147483648, -2147483648);
    }
     else {
      tmp$ = new DoubleQuadWord(num.toInt(), num.shiftRight(32).toInt());
    }
    return tmp$;
  }
  function toUDoubleQuadWord($receiver) {
    return new DoubleQuadWord($receiver);
  }
  function toUDoubleQuadWord_0($receiver) {
    return new DoubleQuadWord($receiver);
  }
  function toUDoubleQuadWord_1($receiver) {
    return new DoubleQuadWord($receiver);
  }
  function toUDoubleQuadWord_2($receiver) {
    return new DoubleQuadWord($receiver.toInt(), $receiver.shiftRight(32).toInt());
  }
  function minus($receiver, other) {
    return toDoubleQuadWord_2($receiver).minus_t8kpdv$(other);
  }
  function QuadWord(int0, int1, int2, int3) {
    QuadWord$Companion_getInstance();
    if (int0 === void 0)
      int0 = 0;
    if (int1 === void 0)
      int1 = 0;
    if (int2 === void 0)
      int2 = 0;
    if (int3 === void 0)
      int3 = 0;
    Number_0.call(this);
    this.int0 = int0;
    this.int1 = int1;
    this.int2 = int2;
    this.int3 = int3;
  }
  function QuadWord$Companion() {
    QuadWord$Companion_instance = this;
    this.SIZE_BYTES = 16;
    this.SIZE_BITS = 128;
    this.MIN_VALUE = new QuadWord(-2147483648, -2147483648, -2147483648, -2147483648);
    this.MAX_VALUE = new QuadWord(2147483647, 2147483647, 2147483647, 2147483647);
  }
  QuadWord$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var QuadWord$Companion_instance = null;
  function QuadWord$Companion_getInstance() {
    if (QuadWord$Companion_instance === null) {
      new QuadWord$Companion();
    }
    return QuadWord$Companion_instance;
  }
  QuadWord.prototype.compareTo_11rb$ = function (other) {
    var int3comp = Kotlin.primitiveCompareTo(this.int3, other.int3);
    if (int3comp === 0) {
      var int2comp = Kotlin.primitiveCompareTo(this.int2, other.int2);
      if (int2comp === 0) {
        var int1comp = Kotlin.primitiveCompareTo(this.int1, other.int1);
        if (int1comp === 0) {
          return Kotlin.primitiveCompareTo(this.int0, other.int0);
        }
        return int1comp;
      }
      return int2comp;
    }
    return int3comp;
  };
  QuadWord.prototype.compareTo_s8j3t7$ = function (other) {
    return Kotlin.primitiveCompareTo(this.toByte(), other);
  };
  QuadWord.prototype.compareTo_mq22fl$ = function (other) {
    return Kotlin.primitiveCompareTo(this.toShort(), other);
  };
  QuadWord.prototype.compareTo_za3lpa$ = function (other) {
    return Kotlin.primitiveCompareTo(this.toInt(), other);
  };
  QuadWord.prototype.compareTo_s8cxhz$ = function (other) {
    return this.toLong().compareTo_11rb$(other);
  };
  QuadWord.prototype.compareTo_mx4ult$ = function (other) {
    return Kotlin.compareTo(this.toFloat(), other);
  };
  QuadWord.prototype.compareTo_14dthe$ = function (other) {
    return Kotlin.compareTo(this.toDouble(), other);
  };
  QuadWord.prototype.plus_s8j3t7$ = function (other) {
    return this.plus_k7dsfo$(toQuadWord_0(other));
  };
  QuadWord.prototype.plus_mq22fl$ = function (other) {
    return this.plus_k7dsfo$(toQuadWord_1(other));
  };
  QuadWord.prototype.plus_za3lpa$ = function (other) {
    return this.plus_k7dsfo$(toQuadWord_2(other));
  };
  QuadWord.prototype.plus_s8cxhz$ = function (other) {
    return this.plus_k7dsfo$(toQuadWord_3(other));
  };
  QuadWord.prototype.plus_mx4ult$ = function (other) {
    return this.toFloat() + other;
  };
  QuadWord.prototype.plus_14dthe$ = function (other) {
    return this.toDouble() + other;
  };
  QuadWord.prototype.plus_k7dsfo$ = function (other) {
    var long0 = Kotlin.Long.fromInt(this.int0).add(Kotlin.Long.fromInt(other.int0));
    var long1 = Kotlin.Long.fromInt(this.int1).add(Kotlin.Long.fromInt(other.int1)).add(long0.shiftRightUnsigned(32));
    var long2 = Kotlin.Long.fromInt(this.int2).add(Kotlin.Long.fromInt(other.int2)).add(long1.shiftRightUnsigned(32));
    var long3 = Kotlin.Long.fromInt(this.int3).add(Kotlin.Long.fromInt(other.int3)).add(long2.shiftRightUnsigned(32));
    return new QuadWord(long0.toInt(), long1.toInt(), long2.toInt(), long3.toInt());
  };
  QuadWord.prototype.minus_s8j3t7$ = function (other) {
    return this.minus_k7dsfo$(toQuadWord_0(other));
  };
  QuadWord.prototype.minus_mq22fl$ = function (other) {
    return this.minus_k7dsfo$(toQuadWord_1(other));
  };
  QuadWord.prototype.minus_za3lpa$ = function (other) {
    return this.minus_k7dsfo$(toQuadWord_2(other));
  };
  QuadWord.prototype.minus_s8cxhz$ = function (other) {
    return this.minus_k7dsfo$(toQuadWord_3(other));
  };
  QuadWord.prototype.minus_mx4ult$ = function (other) {
    return this.toFloat() - other;
  };
  QuadWord.prototype.minus_14dthe$ = function (other) {
    return this.toDouble() - other;
  };
  QuadWord.prototype.minus_k7dsfo$ = function (other) {
    throw new NotImplementedError();
  };
  QuadWord.prototype.times_s8j3t7$ = function (other) {
    return this.times_k7dsfo$(toQuadWord_0(other));
  };
  QuadWord.prototype.times_mq22fl$ = function (other) {
    return this.times_k7dsfo$(toQuadWord_1(other));
  };
  QuadWord.prototype.times_za3lpa$ = function (other) {
    return this.times_k7dsfo$(toQuadWord_2(other));
  };
  QuadWord.prototype.times_s8cxhz$ = function (other) {
    return this.times_k7dsfo$(toQuadWord_3(other));
  };
  QuadWord.prototype.times_mx4ult$ = function (other) {
    return this.toFloat() * other;
  };
  QuadWord.prototype.times_14dthe$ = function (other) {
    return this.toDouble() * other;
  };
  QuadWord.prototype.times_k7dsfo$ = function (other) {
    throw new NotImplementedError();
  };
  QuadWord.prototype.div_s8j3t7$ = function (other) {
    return this.div_k7dsfo$(toQuadWord_0(other));
  };
  QuadWord.prototype.div_mq22fl$ = function (other) {
    return this.div_k7dsfo$(toQuadWord_1(other));
  };
  QuadWord.prototype.div_za3lpa$ = function (other) {
    return this.div_k7dsfo$(toQuadWord_2(other));
  };
  QuadWord.prototype.div_s8cxhz$ = function (other) {
    return this.div_k7dsfo$(toQuadWord_3(other));
  };
  QuadWord.prototype.div_mx4ult$ = function (other) {
    return this.toFloat() / other;
  };
  QuadWord.prototype.div_14dthe$ = function (other) {
    return this.toDouble() / other;
  };
  QuadWord.prototype.div_k7dsfo$ = function (other) {
    throw new NotImplementedError();
  };
  QuadWord.prototype.rem_s8j3t7$ = function (other) {
    return this.rem_k7dsfo$(toQuadWord_0(other));
  };
  QuadWord.prototype.rem_mq22fl$ = function (other) {
    return this.rem_k7dsfo$(toQuadWord_1(other));
  };
  QuadWord.prototype.rem_za3lpa$ = function (other) {
    return this.rem_k7dsfo$(toQuadWord_2(other));
  };
  QuadWord.prototype.rem_s8cxhz$ = function (other) {
    return this.rem_k7dsfo$(toQuadWord_3(other));
  };
  QuadWord.prototype.rem_mx4ult$ = function (other) {
    return this.toFloat() % other;
  };
  QuadWord.prototype.rem_14dthe$ = function (other) {
    return this.toDouble() % other;
  };
  QuadWord.prototype.rem_k7dsfo$ = function (other) {
    throw new NotImplementedError();
  };
  QuadWord.prototype.inc = function () {
    return this.plus_za3lpa$(1);
  };
  QuadWord.prototype.dec = function () {
    return this.minus_za3lpa$(1);
  };
  QuadWord.prototype.unaryPlus = function () {
    return this;
  };
  QuadWord.prototype.unaryMinus = function () {
    return toQuadWord_2(0).minus_k7dsfo$(this);
  };
  QuadWord.prototype.shl_za3lpa$ = function (bitCount) {
    var qw = this.copy();
    if (bitCount >= 64) {
      return new QuadWord(0, 0, 0, 0);
    }
    if ((bitCount & 1) === 1) {
      var msb0 = qw.int0 >> 31;
      var msb1 = qw.int1 >> 31;
      var msb2 = qw.int2 >> 31;
      qw.int0 = qw.int0 << 1;
      qw.int1 = qw.int1 << 1 & msb0;
      qw.int2 = qw.int2 << 1 & msb1;
      qw.int3 = qw.int2 << 1 & msb2;
    }
    if (bitCount % 2 === 0) {
      var msb0_0 = qw.int0 >> 30;
      var msb1_0 = qw.int1 >> 30;
      var msb2_0 = qw.int2 >> 30;
      qw.int0 = qw.int0 << 2;
      qw.int1 = qw.int1 << 2 & msb0_0;
      qw.int2 = qw.int2 << 2 & msb1_0;
      qw.int3 = qw.int2 << 2 & msb2_0;
    }
    if (bitCount % 4 === 0) {
      var msb0_1 = qw.int0 >> 28;
      var msb1_1 = qw.int1 >> 28;
      var msb2_1 = qw.int2 >> 28;
      qw.int0 = qw.int0 << 4;
      qw.int1 = qw.int1 << 4 & msb0_1;
      qw.int2 = qw.int2 << 4 & msb1_1;
      qw.int3 = qw.int2 << 4 & msb2_1;
    }
    if (bitCount % 8 === 0) {
      var msb0_2 = qw.int0 >> 24;
      var msb1_2 = qw.int1 >> 24;
      var msb2_2 = qw.int2 >> 24;
      qw.int0 = qw.int0 << 8;
      qw.int1 = qw.int1 << 8 & msb0_2;
      qw.int2 = qw.int2 << 8 & msb1_2;
      qw.int3 = qw.int2 << 8 & msb2_2;
    }
    if (bitCount % 16 === 0) {
      var msb0_3 = qw.int0 >> 16;
      var msb1_3 = qw.int1 >> 16;
      var msb2_3 = qw.int2 >> 16;
      qw.int0 = qw.int0 << 16;
      qw.int1 = qw.int1 << 16 & msb0_3;
      qw.int2 = qw.int2 << 16 & msb1_3;
      qw.int3 = qw.int2 << 16 & msb2_3;
    }
    if (bitCount % 32 === 0) {
      qw.int3 = qw.int2;
      qw.int2 = qw.int1;
      qw.int1 = qw.int0;
      qw.int0 = 0;
    }
    return qw;
  };
  QuadWord.prototype.shr_za3lpa$ = function (bitCount) {
    var tmp$;
    var qw = this.copy();
    if (bitCount >= 64) {
      if (get_sign(this.int3) === -1) {
        tmp$ = new QuadWord(-2147483648, -2147483648, -2147483648, -2147483648);
      }
       else {
        tmp$ = new QuadWord(0, 0, 0, 0);
      }
      return tmp$;
    }
    if ((bitCount & 1) === 1) {
      var lsb1 = (qw.int1 & 1) << 31;
      var lsb2 = (qw.int2 & 1) << 31;
      var lsb3 = (qw.int3 & 1) << 31;
      qw.int0 = qw.int0 >> 1 & lsb1;
      qw.int1 = qw.int1 >> 1 & lsb2;
      qw.int2 = qw.int2 >> 1 & lsb3;
      qw.int3 = qw.int2 >> 1;
    }
    if (bitCount % 2 === 0) {
      var lsb1_0 = (qw.int1 & 3) << 30;
      var lsb2_0 = (qw.int2 & 3) << 30;
      var lsb3_0 = (qw.int3 & 3) << 30;
      qw.int0 = qw.int0 >> 2 & lsb1_0;
      qw.int1 = qw.int1 >> 2 & lsb2_0;
      qw.int2 = qw.int2 >> 2 & lsb3_0;
      qw.int3 = qw.int2 >> 2;
    }
    if (bitCount % 4 === 0) {
      var lsb1_1 = (qw.int1 & 15) << 28;
      var lsb2_1 = (qw.int2 & 15) << 28;
      var lsb3_1 = (qw.int3 & 15) << 28;
      qw.int0 = qw.int0 >> 4 & lsb1_1;
      qw.int1 = qw.int1 >> 4 & lsb2_1;
      qw.int2 = qw.int2 >> 4 & lsb3_1;
      qw.int3 = qw.int2 >> 4;
    }
    if (bitCount % 8 === 0) {
      var lsb1_2 = (qw.int1 & 255) >> 24;
      var lsb2_2 = (qw.int2 & 255) >> 24;
      var lsb3_2 = (qw.int3 & 255) >> 24;
      qw.int0 = qw.int0 >> 8 & lsb1_2;
      qw.int1 = qw.int1 >> 8 & lsb2_2;
      qw.int2 = qw.int2 >> 8 & lsb3_2;
      qw.int3 = qw.int2 >> 8;
    }
    if (bitCount % 16 === 0) {
      var lsb1_3 = (qw.int1 & 65535) >> 16;
      var lsb2_3 = (qw.int2 & 65535) >> 16;
      var lsb3_3 = (qw.int3 & 65535) >> 16;
      qw.int0 = qw.int0 >> 16 & lsb1_3;
      qw.int1 = qw.int1 >> 16 & lsb2_3;
      qw.int2 = qw.int2 >> 16 & lsb3_3;
      qw.int3 = qw.int2 >> 16;
    }
    if (bitCount % 32 === 0) {
      qw.int0 = qw.int1;
      qw.int1 = qw.int2;
      qw.int2 = qw.int3;
      qw.int3 = 0;
    }
    return qw;
  };
  QuadWord.prototype.ushr_za3lpa$ = function (bitCount) {
    var qw = this.copy();
    if (bitCount >= 64) {
      return new QuadWord(0, 0, 0, 0);
    }
    if ((bitCount & 1) === 1) {
      var lsb1 = (qw.int1 & 1) << 31;
      var lsb2 = (qw.int2 & 1) << 31;
      var lsb3 = (qw.int3 & 1) << 31;
      qw.int0 = qw.int0 >>> 1 & lsb1;
      qw.int1 = qw.int1 >>> 1 & lsb2;
      qw.int2 = qw.int2 >>> 1 & lsb3;
      qw.int3 = qw.int2 >>> 1;
    }
    if (bitCount % 2 === 0) {
      var lsb1_0 = (qw.int1 & 3) << 30;
      var lsb2_0 = (qw.int2 & 3) << 30;
      var lsb3_0 = (qw.int3 & 3) << 30;
      qw.int0 = qw.int0 >>> 2 & lsb1_0;
      qw.int1 = qw.int1 >>> 2 & lsb2_0;
      qw.int2 = qw.int2 >>> 2 & lsb3_0;
      qw.int3 = qw.int2 >>> 2;
    }
    if (bitCount % 4 === 0) {
      var lsb1_1 = (qw.int1 & 15) << 28;
      var lsb2_1 = (qw.int2 & 15) << 28;
      var lsb3_1 = (qw.int3 & 15) << 28;
      qw.int0 = qw.int0 >>> 4 & lsb1_1;
      qw.int1 = qw.int1 >>> 4 & lsb2_1;
      qw.int2 = qw.int2 >>> 4 & lsb3_1;
      qw.int3 = qw.int2 >>> 4;
    }
    if (bitCount % 8 === 0) {
      var lsb1_2 = (qw.int1 & 255) >> 24;
      var lsb2_2 = (qw.int2 & 255) >> 24;
      var lsb3_2 = (qw.int3 & 255) >> 24;
      qw.int0 = qw.int0 >>> 8 & lsb1_2;
      qw.int1 = qw.int1 >>> 8 & lsb2_2;
      qw.int2 = qw.int2 >>> 8 & lsb3_2;
      qw.int3 = qw.int2 >>> 8;
    }
    if (bitCount % 16 === 0) {
      var lsb1_3 = (qw.int1 & 65535) >> 16;
      var lsb2_3 = (qw.int2 & 65535) >> 16;
      var lsb3_3 = (qw.int3 & 65535) >> 16;
      qw.int0 = qw.int0 >>> 16 & lsb1_3;
      qw.int1 = qw.int1 >>> 16 & lsb2_3;
      qw.int2 = qw.int2 >>> 16 & lsb3_3;
      qw.int3 = qw.int2 >>> 16;
    }
    if (bitCount % 32 === 0) {
      qw.int0 = qw.int1;
      qw.int1 = qw.int2;
      qw.int2 = qw.int3;
      qw.int3 = 2147483647;
    }
    return qw;
  };
  QuadWord.prototype.and_k7dsfo$ = function (other) {
    var int0 = this.int0 & other.int0;
    var int1 = this.int1 & other.int1;
    var int2 = this.int2 & other.int2;
    var int3 = this.int3 & other.int3;
    return new QuadWord(int0, int1, int2, int3);
  };
  QuadWord.prototype.or_k7dsfo$ = function (other) {
    var int0 = this.int0 | other.int0;
    var int1 = this.int1 | other.int1;
    var int2 = this.int2 | other.int2;
    var int3 = this.int3 | other.int3;
    return new QuadWord(int0, int1, int2, int3);
  };
  QuadWord.prototype.xor_k7dsfo$ = function (other) {
    var int0 = this.int0 ^ other.int0;
    var int1 = this.int1 ^ other.int1;
    var int2 = this.int2 ^ other.int2;
    var int3 = this.int3 ^ other.int3;
    return new QuadWord(int0, int1, int2, int3);
  };
  QuadWord.prototype.inv = function () {
    var int0 = ~this.int0;
    var int1 = ~this.int1;
    var int2 = ~this.int2;
    var int3 = ~this.int3;
    return new QuadWord(int0, int1, int2, int3);
  };
  QuadWord.prototype.toChar = function () {
    return toChar(this.int0);
  };
  QuadWord.prototype.toDouble = function () {
    return this.toLong().toNumber();
  };
  QuadWord.prototype.toFloat = function () {
    return this.int0;
  };
  QuadWord.prototype.toInt = function () {
    return this.int0;
  };
  QuadWord.prototype.toLong = function () {
    return Kotlin.Long.fromInt(this.int1).shiftLeft(32).or(Kotlin.Long.fromInt(this.int0));
  };
  QuadWord.prototype.toShort = function () {
    return toShort(this.int0);
  };
  QuadWord.prototype.toByte = function () {
    return toByte(this.int0);
  };
  QuadWord.prototype.low = function () {
    return this.toLong();
  };
  QuadWord.prototype.high = function () {
    return Kotlin.Long.fromInt(this.int3).shiftLeft(32).or(Kotlin.Long.fromInt(this.int2));
  };
  QuadWord.prototype.copy = function () {
    return new QuadWord(this.int0, this.int1, this.int2, this.int3);
  };
  QuadWord.prototype.toString = function () {
    throw new NotImplementedError();
  };
  QuadWord.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QuadWord',
    interfaces: [Comparable, Number_0]
  };
  function toQuadWord($receiver) {
    if (Kotlin.isType($receiver, QuadWord)) {
      return $receiver;
    }
    if (typeof $receiver === 'number') {
      return toQuadWord_2(numberToInt($receiver));
    }
    if (Kotlin.isType($receiver, Kotlin.Long)) {
      return toQuadWord_3(numberToLong($receiver));
    }
    if (typeof $receiver === 'number') {
      return toQuadWord_0(numberToByte($receiver));
    }
    if (typeof $receiver === 'number') {
      return toQuadWord_1(numberToShort($receiver));
    }
    throw new ClassCastException('Unknown number type!');
  }
  function toQuadWord_0($receiver) {
    var tmp$;
    var num = $receiver;
    if (get_sign(num) === -1) {
      tmp$ = new QuadWord(num, -2147483648, -2147483648, -2147483648);
    }
     else {
      tmp$ = new QuadWord(num);
    }
    return tmp$;
  }
  function toQuadWord_1($receiver) {
    var tmp$;
    var num = $receiver;
    if (get_sign(num) === -1) {
      tmp$ = new QuadWord(num, -2147483648, -2147483648, -2147483648);
    }
     else {
      tmp$ = new QuadWord(num);
    }
    return tmp$;
  }
  function toQuadWord_2($receiver) {
    var tmp$;
    var num = $receiver;
    if (get_sign(num) === -1) {
      tmp$ = new QuadWord(num, -2147483648, -2147483648, -2147483648);
    }
     else {
      tmp$ = new QuadWord(num);
    }
    return tmp$;
  }
  function toQuadWord_3($receiver) {
    var tmp$;
    var num = $receiver;
    if (get_sign_0(num) === -1) {
      tmp$ = new QuadWord(num.toInt(), num.shiftRight(32).toInt(), -2147483648, -2147483648);
    }
     else {
      tmp$ = new QuadWord(num.toInt(), num.shiftRight(32).toInt());
    }
    return tmp$;
  }
  function toUQuadWord($receiver) {
    return new QuadWord($receiver);
  }
  function toUQuadWord_0($receiver) {
    return new QuadWord($receiver);
  }
  function toUQuadWord_1($receiver) {
    return new QuadWord($receiver);
  }
  function toUQuadWord_2($receiver) {
    return new QuadWord($receiver.toInt(), $receiver.shiftRight(32).toInt());
  }
  function minus_0($receiver, other) {
    return toQuadWord_2($receiver).minus_k7dsfo$(other);
  }
  function plus($receiver, other) {
    var tmp$, tmp$_0;
    if (Kotlin.isType($receiver, QuadWord) | Kotlin.isType(other, QuadWord)) {
      tmp$_0 = toQuadWord($receiver).plus_k7dsfo$(toQuadWord(other));
    }
     else if (Kotlin.isType($receiver, Kotlin.Long) | Kotlin.isType(other, Kotlin.Long)) {
      tmp$_0 = numberToLong($receiver).add(numberToLong(other));
    }
     else if (typeof $receiver === 'number' | typeof other === 'number') {
      tmp$_0 = numberToInt($receiver) + numberToInt(other) | 0;
    }
     else if (typeof $receiver === 'number' | typeof other === 'number') {
      tmp$_0 = Kotlin.isNumber(tmp$ = numberToShort($receiver) + numberToShort(other)) ? tmp$ : throwCCE();
    }
     else {
      tmp$_0 = toQuadWord($receiver).plus_k7dsfo$(toQuadWord(other));
    }
    return tmp$_0;
  }
  function minus_1($receiver, other) {
    var tmp$, tmp$_0;
    if (Kotlin.isType($receiver, QuadWord) | Kotlin.isType(other, QuadWord)) {
      tmp$_0 = toQuadWord($receiver).minus_k7dsfo$(toQuadWord(other));
    }
     else if (Kotlin.isType($receiver, Kotlin.Long) | Kotlin.isType(other, Kotlin.Long)) {
      tmp$_0 = numberToLong($receiver).subtract(numberToLong(other));
    }
     else if (typeof $receiver === 'number' | typeof other === 'number') {
      tmp$_0 = numberToInt($receiver) - numberToInt(other) | 0;
    }
     else if (typeof $receiver === 'number' | typeof other === 'number') {
      tmp$_0 = Kotlin.isNumber(tmp$ = numberToShort($receiver) - numberToShort(other)) ? tmp$ : throwCCE();
    }
     else {
      tmp$_0 = toQuadWord($receiver).minus_k7dsfo$(toQuadWord(other));
    }
    return tmp$_0;
  }
  function times($receiver, other) {
    var tmp$, tmp$_0;
    if (Kotlin.isType($receiver, QuadWord) | Kotlin.isType(other, QuadWord)) {
      tmp$_0 = toQuadWord($receiver).times_k7dsfo$(toQuadWord(other));
    }
     else if (Kotlin.isType($receiver, Kotlin.Long) | Kotlin.isType(other, Kotlin.Long)) {
      tmp$_0 = numberToLong($receiver).multiply(numberToLong(other));
    }
     else if (typeof $receiver === 'number' | typeof other === 'number') {
      tmp$_0 = Kotlin.imul(numberToInt($receiver), numberToInt(other));
    }
     else if (typeof $receiver === 'number' | typeof other === 'number') {
      tmp$_0 = Kotlin.isNumber(tmp$ = numberToShort($receiver) * numberToShort(other) | 0) ? tmp$ : throwCCE();
    }
     else {
      tmp$_0 = toQuadWord($receiver).times_k7dsfo$(toQuadWord(other));
    }
    return tmp$_0;
  }
  function div($receiver, other) {
    var tmp$, tmp$_0;
    if (Kotlin.isType($receiver, QuadWord) | Kotlin.isType(other, QuadWord)) {
      tmp$_0 = toQuadWord($receiver).div_k7dsfo$(toQuadWord(other));
    }
     else if (Kotlin.isType($receiver, Kotlin.Long) | Kotlin.isType(other, Kotlin.Long)) {
      tmp$_0 = numberToLong($receiver).div(numberToLong(other));
    }
     else if (typeof $receiver === 'number' | typeof other === 'number') {
      tmp$_0 = numberToInt($receiver) / numberToInt(other) | 0;
    }
     else if (typeof $receiver === 'number' | typeof other === 'number') {
      tmp$_0 = Kotlin.isNumber(tmp$ = numberToShort($receiver) / numberToShort(other) | 0) ? tmp$ : throwCCE();
    }
     else {
      tmp$_0 = toQuadWord($receiver).div_k7dsfo$(toQuadWord(other));
    }
    return tmp$_0;
  }
  function inc($receiver) {
    var tmp$, tmp$_0;
    if (Kotlin.isType($receiver, QuadWord)) {
      tmp$_0 = toQuadWord($receiver).inc();
    }
     else if (Kotlin.isType($receiver, Kotlin.Long)) {
      tmp$_0 = numberToLong($receiver).inc();
    }
     else if (typeof $receiver === 'number') {
      tmp$_0 = numberToInt($receiver) + 1 | 0;
    }
     else if (typeof $receiver === 'number') {
      tmp$_0 = Kotlin.isNumber(tmp$ = toShort(numberToShort($receiver) + 1)) ? tmp$ : throwCCE();
    }
     else {
      tmp$_0 = toQuadWord($receiver).inc();
    }
    return tmp$_0;
  }
  function compareTo($receiver, other) {
    var tmp$;
    if (Kotlin.isType($receiver, QuadWord)) {
      tmp$ = toQuadWord($receiver).compareTo_11rb$(toQuadWord(other));
    }
     else if (Kotlin.isType($receiver, Kotlin.Long)) {
      tmp$ = numberToLong($receiver).compareTo_11rb$(numberToLong(other));
    }
     else if (typeof $receiver === 'number') {
      tmp$ = Kotlin.primitiveCompareTo(numberToInt($receiver), numberToInt(other));
    }
     else if (typeof $receiver === 'number') {
      tmp$ = Kotlin.primitiveCompareTo(numberToShort($receiver), numberToShort(other));
    }
     else {
      tmp$ = toQuadWord($receiver).compareTo_11rb$(toQuadWord(other));
    }
    return tmp$;
  }
  function shr($receiver, other) {
    var tmp$, tmp$_0;
    if (Kotlin.isType($receiver, QuadWord)) {
      tmp$_0 = toQuadWord($receiver).shr_za3lpa$(numberToInt(other));
    }
     else if (Kotlin.isType($receiver, Kotlin.Long)) {
      tmp$_0 = numberToLong($receiver).shiftRight(numberToInt(other));
    }
     else if (typeof $receiver === 'number') {
      tmp$_0 = numberToInt($receiver) >> numberToInt(other);
    }
     else if (typeof $receiver === 'number') {
      tmp$_0 = Kotlin.isNumber(tmp$ = toShort(numberToInt($receiver) >> numberToInt(other))) ? tmp$ : throwCCE();
    }
     else {
      tmp$_0 = toQuadWord($receiver).shr_za3lpa$(numberToInt(other));
    }
    return tmp$_0;
  }
  function ushr($receiver, other) {
    var tmp$, tmp$_0;
    if (Kotlin.isType($receiver, QuadWord)) {
      tmp$_0 = toQuadWord($receiver).ushr_za3lpa$(numberToInt(other));
    }
     else if (Kotlin.isType($receiver, Kotlin.Long)) {
      tmp$_0 = numberToLong($receiver).shiftRightUnsigned(numberToInt(other));
    }
     else if (typeof $receiver === 'number') {
      tmp$_0 = numberToInt($receiver) >>> numberToInt(other);
    }
     else if (typeof $receiver === 'number') {
      tmp$_0 = Kotlin.isNumber(tmp$ = toShort(numberToInt($receiver) >>> numberToInt(other))) ? tmp$ : throwCCE();
    }
     else {
      tmp$_0 = toQuadWord($receiver).ushr_za3lpa$(numberToInt(other));
    }
    return tmp$_0;
  }
  function shl($receiver, other) {
    var tmp$, tmp$_0;
    if (Kotlin.isType($receiver, QuadWord)) {
      tmp$_0 = toQuadWord($receiver).shl_za3lpa$(numberToInt(other));
    }
     else if (Kotlin.isType($receiver, Kotlin.Long)) {
      tmp$_0 = numberToLong($receiver).shiftLeft(numberToInt(other));
    }
     else if (typeof $receiver === 'number') {
      tmp$_0 = numberToInt($receiver) << numberToInt(other);
    }
     else if (typeof $receiver === 'number') {
      tmp$_0 = Kotlin.isNumber(tmp$ = toShort(numberToInt($receiver) << numberToInt(other))) ? tmp$ : throwCCE();
    }
     else {
      tmp$_0 = toQuadWord($receiver).shl_za3lpa$(numberToInt(other));
    }
    return tmp$_0;
  }
  function rem($receiver, other) {
    var tmp$, tmp$_0;
    if (Kotlin.isType($receiver, QuadWord) | Kotlin.isType(other, QuadWord)) {
      tmp$_0 = toQuadWord($receiver).rem_k7dsfo$(toQuadWord(other));
    }
     else if (Kotlin.isType($receiver, Kotlin.Long) | Kotlin.isType(other, Kotlin.Long)) {
      tmp$_0 = numberToLong($receiver).modulo(numberToLong(other));
    }
     else if (typeof $receiver === 'number' | typeof other === 'number') {
      tmp$_0 = numberToInt($receiver) % numberToInt(other);
    }
     else if (typeof $receiver === 'number' | typeof other === 'number') {
      tmp$_0 = Kotlin.isNumber(tmp$ = numberToShort($receiver) % numberToShort(other)) ? tmp$ : throwCCE();
    }
     else {
      tmp$_0 = toQuadWord($receiver).rem_k7dsfo$(toQuadWord(other));
    }
    return tmp$_0;
  }
  function and($receiver, other) {
    var tmp$, tmp$_0;
    if (Kotlin.isType($receiver, QuadWord) | Kotlin.isType(other, QuadWord)) {
      tmp$_0 = toQuadWord($receiver).and_k7dsfo$(toQuadWord(other));
    }
     else if (Kotlin.isType($receiver, Kotlin.Long) | Kotlin.isType(other, Kotlin.Long)) {
      tmp$_0 = numberToLong($receiver).and(numberToLong(other));
    }
     else if (typeof $receiver === 'number' | typeof other === 'number') {
      tmp$_0 = numberToInt($receiver) & numberToInt(other);
    }
     else if (typeof $receiver === 'number' | typeof other === 'number') {
      tmp$_0 = Kotlin.isNumber(tmp$ = and(numberToShort($receiver), numberToShort(other))) ? tmp$ : throwCCE();
    }
     else {
      tmp$_0 = toQuadWord($receiver).and_k7dsfo$(toQuadWord(other));
    }
    return tmp$_0;
  }
  function or($receiver, other) {
    var tmp$, tmp$_0;
    if (Kotlin.isType($receiver, QuadWord) | Kotlin.isType(other, QuadWord)) {
      tmp$_0 = toQuadWord($receiver).or_k7dsfo$(toQuadWord(other));
    }
     else if (Kotlin.isType($receiver, Kotlin.Long) | Kotlin.isType(other, Kotlin.Long)) {
      tmp$_0 = numberToLong($receiver).or(numberToLong(other));
    }
     else if (typeof $receiver === 'number' | typeof other === 'number') {
      tmp$_0 = numberToInt($receiver) | numberToInt(other);
    }
     else if (typeof $receiver === 'number' | typeof other === 'number') {
      tmp$_0 = Kotlin.isNumber(tmp$ = toShort(numberToInt($receiver) | numberToInt(other))) ? tmp$ : throwCCE();
    }
     else {
      tmp$_0 = toQuadWord($receiver).or_k7dsfo$(toQuadWord(other));
    }
    return tmp$_0;
  }
  function Address(a, s) {
    this.size = s;
    this.address = a;
  }
  Address.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Address',
    interfaces: []
  };
  function InitInstructions() {
    InitInstructions$Companion_getInstance();
    if (!InitInstructions$Companion_getInstance().inited) {
      addi;
      addiw;
      andi;
      csrrc;
      csrrci;
      csrrw;
      csrrwi;
      ebreak;
      ecall;
      fence;
      fencei;
      jalr;
      lb;
      lbu;
      ld;
      lh;
      lhu;
      lw;
      ori;
      slli;
      slliw;
      slti;
      sltiu;
      srai;
      sraiw;
      srli;
      srliw;
      xori;
      add_0;
      addw;
      and_0;
      or_0;
      sll;
      sllw;
      slt;
      sltu;
      sra;
      sraw;
      srl;
      srlw;
      sub;
      subw;
      xor;
      sb;
      sd;
      sh;
      sw;
      beq;
      bge;
      bgeu;
      blt;
      bltu;
      bne;
      auipc;
      lui;
      jal;
      amoaddw;
      amoandw;
      amomaxw;
      amomaxuw;
      amominw;
      amominuw;
      amoorw;
      amoswapw;
      amoxorw;
      lrw;
      scw;
      div_0;
      divu;
      mul;
      mulh;
      mulhsu;
      mulhu;
      rem_0;
      remu;
      fld;
      faddd;
      fclassd;
      fcvtdw;
      fcvtdwu;
      fcvtwd;
      fcvtwud;
      feqd;
      fled;
      fltd;
      fmaddd;
      fmaxd;
      fmind;
      fmsubd;
      fmuld;
      fmvdx;
      fmvxd;
      fnmaddd;
      fnmsubd;
      fsgnjd;
      fsgnjnd;
      fsgnjxd;
      fsqrtd;
      fsubd;
      fsd;
      flw;
      fadds;
      fclasss;
      fcvtsw;
      fcvtswu;
      fcvtws;
      fcvtwus;
      fdivs;
      feqs;
      fles;
      flts;
      fmadds;
      fmaxs;
      fmins;
      fmsubs;
      fmuls;
      fmvsx;
      fmvxs;
      fnmadds;
      fnmsubs;
      fsgnjs;
      fsgnjns;
      fsgnjxs;
      fsqrts;
      fsubs;
      fsw;
      fcvtds;
      fcvtsd;
      caddw;
      cand;
      cor;
      csub;
      csubw;
      cxor;
      cadd;
      cebreak;
      cmv;
      InitInstructions$Companion_getInstance().inited = true;
    }
  }
  function InitInstructions$Companion() {
    InitInstructions$Companion_instance = this;
    this.inited = false;
  }
  InitInstructions$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var InitInstructions$Companion_instance = null;
  function InitInstructions$Companion_getInstance() {
    if (InitInstructions$Companion_instance === null) {
      new InitInstructions$Companion();
    }
    return InitInstructions$Companion_instance;
  }
  InitInstructions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InitInstructions',
    interfaces: []
  };
  function InstructionField(name, ordinal, lo, hi) {
    Enum.call(this);
    this.lo = lo;
    this.hi = hi;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function InstructionField_initFields() {
    InstructionField_initFields = function () {
    };
    InstructionField$ENTIRE_instance = new InstructionField('ENTIRE', 0, 0, 32);
    InstructionField$HALF_instance = new InstructionField('HALF', 1, 0, 16);
    InstructionField$OPCODE_instance = new InstructionField('OPCODE', 2, 0, 7);
    InstructionField$OP2_instance = new InstructionField('OP2', 3, 0, 2);
    InstructionField$RD_instance = new InstructionField('RD', 4, 7, 12);
    InstructionField$RS2P_instance = new InstructionField('RS2P', 5, 2, 5);
    InstructionField$CRS2_instance = new InstructionField('CRS2', 6, 2, 7);
    InstructionField$FUNCT3_instance = new InstructionField('FUNCT3', 7, 12, 15);
    InstructionField$CFUNCT3_instance = new InstructionField('CFUNCT3', 8, 13, 16);
    InstructionField$FUNCT2_instance = new InstructionField('FUNCT2', 9, 25, 27);
    InstructionField$CFUNCT2_instance = new InstructionField('CFUNCT2', 10, 5, 7);
    InstructionField$FUNCT_instance = new InstructionField('FUNCT', 11, 5, 7);
    InstructionField$FUNCT6_instance = new InstructionField('FUNCT6', 12, 10, 16);
    InstructionField$FUNCT4_instance = new InstructionField('FUNCT4', 13, 12, 16);
    InstructionField$WIDTH_instance = new InstructionField('WIDTH', 14, 12, 15);
    InstructionField$RS1P_instance = new InstructionField('RS1P', 15, 7, 10);
    InstructionField$RDP_instance = new InstructionField('RDP', 16, 7, 10);
    InstructionField$RS1_instance = new InstructionField('RS1', 17, 15, 20);
    InstructionField$RS2_instance = new InstructionField('RS2', 18, 20, 25);
    InstructionField$RS3_instance = new InstructionField('RS3', 19, 27, 32);
    InstructionField$FUNCT7_instance = new InstructionField('FUNCT7', 20, 25, 32);
    InstructionField$FUNCT5_instance = new InstructionField('FUNCT5', 21, 27, 32);
    InstructionField$RL_instance = new InstructionField('RL', 22, 25, 26);
    InstructionField$AQ_instance = new InstructionField('AQ', 23, 26, 27);
    InstructionField$IMM_b2_b6_instance = new InstructionField('IMM_b2_b6', 24, 2, 7);
    InstructionField$IMM_b12_instance = new InstructionField('IMM_b12', 25, 12, 13);
    InstructionField$IMM_11_0_instance = new InstructionField('IMM_11_0', 26, 20, 32);
    InstructionField$IMM_4_0_instance = new InstructionField('IMM_4_0', 27, 7, 12);
    InstructionField$IMM_11_5_instance = new InstructionField('IMM_11_5', 28, 25, 32);
    InstructionField$IMM_11_B_instance = new InstructionField('IMM_11_B', 29, 7, 8);
    InstructionField$IMM_4_1_instance = new InstructionField('IMM_4_1', 30, 8, 12);
    InstructionField$IMM_10_5_instance = new InstructionField('IMM_10_5', 31, 25, 31);
    InstructionField$IMM_12_instance = new InstructionField('IMM_12', 32, 31, 32);
    InstructionField$IMM_12_2_instance = new InstructionField('IMM_12_2', 33, 2, 13);
    InstructionField$IMM_31_12_instance = new InstructionField('IMM_31_12', 34, 12, 32);
    InstructionField$IMM_19_12_instance = new InstructionField('IMM_19_12', 35, 12, 20);
    InstructionField$IMM_11_J_instance = new InstructionField('IMM_11_J', 36, 20, 21);
    InstructionField$IMM_10_1_instance = new InstructionField('IMM_10_1', 37, 21, 31);
    InstructionField$IMM_20_instance = new InstructionField('IMM_20', 38, 31, 32);
    InstructionField$SHAMT_instance = new InstructionField('SHAMT', 39, 20, 25);
  }
  var InstructionField$ENTIRE_instance;
  function InstructionField$ENTIRE_getInstance() {
    InstructionField_initFields();
    return InstructionField$ENTIRE_instance;
  }
  var InstructionField$HALF_instance;
  function InstructionField$HALF_getInstance() {
    InstructionField_initFields();
    return InstructionField$HALF_instance;
  }
  var InstructionField$OPCODE_instance;
  function InstructionField$OPCODE_getInstance() {
    InstructionField_initFields();
    return InstructionField$OPCODE_instance;
  }
  var InstructionField$OP2_instance;
  function InstructionField$OP2_getInstance() {
    InstructionField_initFields();
    return InstructionField$OP2_instance;
  }
  var InstructionField$RD_instance;
  function InstructionField$RD_getInstance() {
    InstructionField_initFields();
    return InstructionField$RD_instance;
  }
  var InstructionField$RS2P_instance;
  function InstructionField$RS2P_getInstance() {
    InstructionField_initFields();
    return InstructionField$RS2P_instance;
  }
  var InstructionField$CRS2_instance;
  function InstructionField$CRS2_getInstance() {
    InstructionField_initFields();
    return InstructionField$CRS2_instance;
  }
  var InstructionField$FUNCT3_instance;
  function InstructionField$FUNCT3_getInstance() {
    InstructionField_initFields();
    return InstructionField$FUNCT3_instance;
  }
  var InstructionField$CFUNCT3_instance;
  function InstructionField$CFUNCT3_getInstance() {
    InstructionField_initFields();
    return InstructionField$CFUNCT3_instance;
  }
  var InstructionField$FUNCT2_instance;
  function InstructionField$FUNCT2_getInstance() {
    InstructionField_initFields();
    return InstructionField$FUNCT2_instance;
  }
  var InstructionField$CFUNCT2_instance;
  function InstructionField$CFUNCT2_getInstance() {
    InstructionField_initFields();
    return InstructionField$CFUNCT2_instance;
  }
  var InstructionField$FUNCT_instance;
  function InstructionField$FUNCT_getInstance() {
    InstructionField_initFields();
    return InstructionField$FUNCT_instance;
  }
  var InstructionField$FUNCT6_instance;
  function InstructionField$FUNCT6_getInstance() {
    InstructionField_initFields();
    return InstructionField$FUNCT6_instance;
  }
  var InstructionField$FUNCT4_instance;
  function InstructionField$FUNCT4_getInstance() {
    InstructionField_initFields();
    return InstructionField$FUNCT4_instance;
  }
  var InstructionField$WIDTH_instance;
  function InstructionField$WIDTH_getInstance() {
    InstructionField_initFields();
    return InstructionField$WIDTH_instance;
  }
  var InstructionField$RS1P_instance;
  function InstructionField$RS1P_getInstance() {
    InstructionField_initFields();
    return InstructionField$RS1P_instance;
  }
  var InstructionField$RDP_instance;
  function InstructionField$RDP_getInstance() {
    InstructionField_initFields();
    return InstructionField$RDP_instance;
  }
  var InstructionField$RS1_instance;
  function InstructionField$RS1_getInstance() {
    InstructionField_initFields();
    return InstructionField$RS1_instance;
  }
  var InstructionField$RS2_instance;
  function InstructionField$RS2_getInstance() {
    InstructionField_initFields();
    return InstructionField$RS2_instance;
  }
  var InstructionField$RS3_instance;
  function InstructionField$RS3_getInstance() {
    InstructionField_initFields();
    return InstructionField$RS3_instance;
  }
  var InstructionField$FUNCT7_instance;
  function InstructionField$FUNCT7_getInstance() {
    InstructionField_initFields();
    return InstructionField$FUNCT7_instance;
  }
  var InstructionField$FUNCT5_instance;
  function InstructionField$FUNCT5_getInstance() {
    InstructionField_initFields();
    return InstructionField$FUNCT5_instance;
  }
  var InstructionField$RL_instance;
  function InstructionField$RL_getInstance() {
    InstructionField_initFields();
    return InstructionField$RL_instance;
  }
  var InstructionField$AQ_instance;
  function InstructionField$AQ_getInstance() {
    InstructionField_initFields();
    return InstructionField$AQ_instance;
  }
  var InstructionField$IMM_b2_b6_instance;
  function InstructionField$IMM_b2_b6_getInstance() {
    InstructionField_initFields();
    return InstructionField$IMM_b2_b6_instance;
  }
  var InstructionField$IMM_b12_instance;
  function InstructionField$IMM_b12_getInstance() {
    InstructionField_initFields();
    return InstructionField$IMM_b12_instance;
  }
  var InstructionField$IMM_11_0_instance;
  function InstructionField$IMM_11_0_getInstance() {
    InstructionField_initFields();
    return InstructionField$IMM_11_0_instance;
  }
  var InstructionField$IMM_4_0_instance;
  function InstructionField$IMM_4_0_getInstance() {
    InstructionField_initFields();
    return InstructionField$IMM_4_0_instance;
  }
  var InstructionField$IMM_11_5_instance;
  function InstructionField$IMM_11_5_getInstance() {
    InstructionField_initFields();
    return InstructionField$IMM_11_5_instance;
  }
  var InstructionField$IMM_11_B_instance;
  function InstructionField$IMM_11_B_getInstance() {
    InstructionField_initFields();
    return InstructionField$IMM_11_B_instance;
  }
  var InstructionField$IMM_4_1_instance;
  function InstructionField$IMM_4_1_getInstance() {
    InstructionField_initFields();
    return InstructionField$IMM_4_1_instance;
  }
  var InstructionField$IMM_10_5_instance;
  function InstructionField$IMM_10_5_getInstance() {
    InstructionField_initFields();
    return InstructionField$IMM_10_5_instance;
  }
  var InstructionField$IMM_12_instance;
  function InstructionField$IMM_12_getInstance() {
    InstructionField_initFields();
    return InstructionField$IMM_12_instance;
  }
  var InstructionField$IMM_12_2_instance;
  function InstructionField$IMM_12_2_getInstance() {
    InstructionField_initFields();
    return InstructionField$IMM_12_2_instance;
  }
  var InstructionField$IMM_31_12_instance;
  function InstructionField$IMM_31_12_getInstance() {
    InstructionField_initFields();
    return InstructionField$IMM_31_12_instance;
  }
  var InstructionField$IMM_19_12_instance;
  function InstructionField$IMM_19_12_getInstance() {
    InstructionField_initFields();
    return InstructionField$IMM_19_12_instance;
  }
  var InstructionField$IMM_11_J_instance;
  function InstructionField$IMM_11_J_getInstance() {
    InstructionField_initFields();
    return InstructionField$IMM_11_J_instance;
  }
  var InstructionField$IMM_10_1_instance;
  function InstructionField$IMM_10_1_getInstance() {
    InstructionField_initFields();
    return InstructionField$IMM_10_1_instance;
  }
  var InstructionField$IMM_20_instance;
  function InstructionField$IMM_20_getInstance() {
    InstructionField_initFields();
    return InstructionField$IMM_20_instance;
  }
  var InstructionField$SHAMT_instance;
  function InstructionField$SHAMT_getInstance() {
    InstructionField_initFields();
    return InstructionField$SHAMT_instance;
  }
  InstructionField.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstructionField',
    interfaces: [Enum]
  };
  function InstructionField$values() {
    return [InstructionField$ENTIRE_getInstance(), InstructionField$HALF_getInstance(), InstructionField$OPCODE_getInstance(), InstructionField$OP2_getInstance(), InstructionField$RD_getInstance(), InstructionField$RS2P_getInstance(), InstructionField$CRS2_getInstance(), InstructionField$FUNCT3_getInstance(), InstructionField$CFUNCT3_getInstance(), InstructionField$FUNCT2_getInstance(), InstructionField$CFUNCT2_getInstance(), InstructionField$FUNCT_getInstance(), InstructionField$FUNCT6_getInstance(), InstructionField$FUNCT4_getInstance(), InstructionField$WIDTH_getInstance(), InstructionField$RS1P_getInstance(), InstructionField$RDP_getInstance(), InstructionField$RS1_getInstance(), InstructionField$RS2_getInstance(), InstructionField$RS3_getInstance(), InstructionField$FUNCT7_getInstance(), InstructionField$FUNCT5_getInstance(), InstructionField$RL_getInstance(), InstructionField$AQ_getInstance(), InstructionField$IMM_b2_b6_getInstance(), InstructionField$IMM_b12_getInstance(), InstructionField$IMM_11_0_getInstance(), InstructionField$IMM_4_0_getInstance(), InstructionField$IMM_11_5_getInstance(), InstructionField$IMM_11_B_getInstance(), InstructionField$IMM_4_1_getInstance(), InstructionField$IMM_10_5_getInstance(), InstructionField$IMM_12_getInstance(), InstructionField$IMM_12_2_getInstance(), InstructionField$IMM_31_12_getInstance(), InstructionField$IMM_19_12_getInstance(), InstructionField$IMM_11_J_getInstance(), InstructionField$IMM_10_1_getInstance(), InstructionField$IMM_20_getInstance(), InstructionField$SHAMT_getInstance()];
  }
  InstructionField.values = InstructionField$values;
  function InstructionField$valueOf(name) {
    switch (name) {
      case 'ENTIRE':
        return InstructionField$ENTIRE_getInstance();
      case 'HALF':
        return InstructionField$HALF_getInstance();
      case 'OPCODE':
        return InstructionField$OPCODE_getInstance();
      case 'OP2':
        return InstructionField$OP2_getInstance();
      case 'RD':
        return InstructionField$RD_getInstance();
      case 'RS2P':
        return InstructionField$RS2P_getInstance();
      case 'CRS2':
        return InstructionField$CRS2_getInstance();
      case 'FUNCT3':
        return InstructionField$FUNCT3_getInstance();
      case 'CFUNCT3':
        return InstructionField$CFUNCT3_getInstance();
      case 'FUNCT2':
        return InstructionField$FUNCT2_getInstance();
      case 'CFUNCT2':
        return InstructionField$CFUNCT2_getInstance();
      case 'FUNCT':
        return InstructionField$FUNCT_getInstance();
      case 'FUNCT6':
        return InstructionField$FUNCT6_getInstance();
      case 'FUNCT4':
        return InstructionField$FUNCT4_getInstance();
      case 'WIDTH':
        return InstructionField$WIDTH_getInstance();
      case 'RS1P':
        return InstructionField$RS1P_getInstance();
      case 'RDP':
        return InstructionField$RDP_getInstance();
      case 'RS1':
        return InstructionField$RS1_getInstance();
      case 'RS2':
        return InstructionField$RS2_getInstance();
      case 'RS3':
        return InstructionField$RS3_getInstance();
      case 'FUNCT7':
        return InstructionField$FUNCT7_getInstance();
      case 'FUNCT5':
        return InstructionField$FUNCT5_getInstance();
      case 'RL':
        return InstructionField$RL_getInstance();
      case 'AQ':
        return InstructionField$AQ_getInstance();
      case 'IMM_b2_b6':
        return InstructionField$IMM_b2_b6_getInstance();
      case 'IMM_b12':
        return InstructionField$IMM_b12_getInstance();
      case 'IMM_11_0':
        return InstructionField$IMM_11_0_getInstance();
      case 'IMM_4_0':
        return InstructionField$IMM_4_0_getInstance();
      case 'IMM_11_5':
        return InstructionField$IMM_11_5_getInstance();
      case 'IMM_11_B':
        return InstructionField$IMM_11_B_getInstance();
      case 'IMM_4_1':
        return InstructionField$IMM_4_1_getInstance();
      case 'IMM_10_5':
        return InstructionField$IMM_10_5_getInstance();
      case 'IMM_12':
        return InstructionField$IMM_12_getInstance();
      case 'IMM_12_2':
        return InstructionField$IMM_12_2_getInstance();
      case 'IMM_31_12':
        return InstructionField$IMM_31_12_getInstance();
      case 'IMM_19_12':
        return InstructionField$IMM_19_12_getInstance();
      case 'IMM_11_J':
        return InstructionField$IMM_11_J_getInstance();
      case 'IMM_10_1':
        return InstructionField$IMM_10_1_getInstance();
      case 'IMM_20':
        return InstructionField$IMM_20_getInstance();
      case 'SHAMT':
        return InstructionField$SHAMT_getInstance();
      default:throwISE('No enum constant venusbackend.riscv.InstructionField.' + name);
    }
  }
  InstructionField.valueOf_61zpoe$ = InstructionField$valueOf;
  function BTypeDisassembler() {
    BTypeDisassembler_instance = this;
  }
  BTypeDisassembler.prototype.invoke_6cx2xq$ = function (mcode) {
    var name = Instruction$Companion_getInstance().get_6cx2xq$(mcode).name;
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rs2 = mcode.get_cv51c2$(InstructionField$RS2_getInstance());
    var imm = constructBranchImmediate(mcode);
    return name + ' x' + rs1 + ' x' + rs2 + ' ' + imm;
  };
  BTypeDisassembler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BTypeDisassembler',
    interfaces: [InstructionDisassembler]
  };
  var BTypeDisassembler_instance = null;
  function BTypeDisassembler_getInstance() {
    if (BTypeDisassembler_instance === null) {
      new BTypeDisassembler();
    }
    return BTypeDisassembler_instance;
  }
  function ITypeDisassembler() {
    ITypeDisassembler_instance = this;
  }
  ITypeDisassembler.prototype.invoke_6cx2xq$ = function (mcode) {
    var name = Instruction$Companion_getInstance().get_6cx2xq$(mcode).name;
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var imm = signExtend(mcode.get_cv51c2$(InstructionField$IMM_11_0_getInstance()), 12);
    return name + ' x' + rd + ' x' + rs1 + ' ' + imm;
  };
  ITypeDisassembler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ITypeDisassembler',
    interfaces: [InstructionDisassembler]
  };
  var ITypeDisassembler_instance = null;
  function ITypeDisassembler_getInstance() {
    if (ITypeDisassembler_instance === null) {
      new ITypeDisassembler();
    }
    return ITypeDisassembler_instance;
  }
  function LoadDisassembler() {
    LoadDisassembler_instance = this;
  }
  LoadDisassembler.prototype.invoke_6cx2xq$ = function (mcode) {
    var name = Instruction$Companion_getInstance().get_6cx2xq$(mcode).name;
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var imm = signExtend(mcode.get_cv51c2$(InstructionField$IMM_11_0_getInstance()), 12);
    return name + ' x' + rd + ' ' + imm + '(x' + rs1 + ')';
  };
  LoadDisassembler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LoadDisassembler',
    interfaces: [InstructionDisassembler]
  };
  var LoadDisassembler_instance = null;
  function LoadDisassembler_getInstance() {
    if (LoadDisassembler_instance === null) {
      new LoadDisassembler();
    }
    return LoadDisassembler_instance;
  }
  function RTypeDisassembler() {
    RTypeDisassembler_instance = this;
  }
  RTypeDisassembler.prototype.invoke_6cx2xq$ = function (mcode) {
    var name = Instruction$Companion_getInstance().get_6cx2xq$(mcode).name;
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rs2 = mcode.get_cv51c2$(InstructionField$RS2_getInstance());
    return name + ' x' + rd + ' x' + rs1 + ' x' + rs2;
  };
  RTypeDisassembler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RTypeDisassembler',
    interfaces: [InstructionDisassembler]
  };
  var RTypeDisassembler_instance = null;
  function RTypeDisassembler_getInstance() {
    if (RTypeDisassembler_instance === null) {
      new RTypeDisassembler();
    }
    return RTypeDisassembler_instance;
  }
  function ShiftImmediateDisassembler() {
    ShiftImmediateDisassembler_instance = this;
  }
  ShiftImmediateDisassembler.prototype.invoke_6cx2xq$ = function (mcode) {
    var name = Instruction$Companion_getInstance().get_6cx2xq$(mcode).name;
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var shamt = mcode.get_cv51c2$(InstructionField$SHAMT_getInstance());
    return name + ' x' + rd + ' x' + rs1 + ' ' + shamt;
  };
  ShiftImmediateDisassembler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ShiftImmediateDisassembler',
    interfaces: [InstructionDisassembler]
  };
  var ShiftImmediateDisassembler_instance = null;
  function ShiftImmediateDisassembler_getInstance() {
    if (ShiftImmediateDisassembler_instance === null) {
      new ShiftImmediateDisassembler();
    }
    return ShiftImmediateDisassembler_instance;
  }
  function STypeDisassembler() {
    STypeDisassembler_instance = this;
  }
  STypeDisassembler.prototype.invoke_6cx2xq$ = function (mcode) {
    var name = Instruction$Companion_getInstance().get_6cx2xq$(mcode).name;
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rs2 = mcode.get_cv51c2$(InstructionField$RS2_getInstance());
    var imm = constructStoreImmediate(mcode);
    return name + ' x' + rs2 + ' ' + imm + '(x' + rs1 + ')';
  };
  STypeDisassembler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'STypeDisassembler',
    interfaces: [InstructionDisassembler]
  };
  var STypeDisassembler_instance = null;
  function STypeDisassembler_getInstance() {
    if (STypeDisassembler_instance === null) {
      new STypeDisassembler();
    }
    return STypeDisassembler_instance;
  }
  function UTypeDisassembler() {
    UTypeDisassembler_instance = this;
  }
  UTypeDisassembler.prototype.invoke_6cx2xq$ = function (mcode) {
    var name = Instruction$Companion_getInstance().get_6cx2xq$(mcode).name;
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var imm = mcode.get_cv51c2$(InstructionField$IMM_31_12_getInstance());
    return name + ' x' + rd + ' ' + imm;
  };
  UTypeDisassembler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UTypeDisassembler',
    interfaces: [InstructionDisassembler]
  };
  var UTypeDisassembler_instance = null;
  function UTypeDisassembler_getInstance() {
    if (UTypeDisassembler_instance === null) {
      new UTypeDisassembler();
    }
    return UTypeDisassembler_instance;
  }
  function AMORTypeDisassembler() {
    AMORTypeDisassembler_instance = this;
  }
  AMORTypeDisassembler.prototype.invoke_6cx2xq$ = function (mcode) {
    var name = Instruction$Companion_getInstance().get_6cx2xq$(mcode).name;
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rs2 = mcode.get_cv51c2$(InstructionField$RS2_getInstance());
    return name + ' x' + rd + ' x' + rs2 + ' (x' + rs1 + ')';
  };
  AMORTypeDisassembler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AMORTypeDisassembler',
    interfaces: [InstructionDisassembler]
  };
  var AMORTypeDisassembler_instance = null;
  function AMORTypeDisassembler_getInstance() {
    if (AMORTypeDisassembler_instance === null) {
      new AMORTypeDisassembler();
    }
    return AMORTypeDisassembler_instance;
  }
  function CATypeDisassembler() {
    CATypeDisassembler_instance = this;
  }
  CATypeDisassembler.prototype.invoke_6cx2xq$ = function (mcode) {
    var name = Instruction$Companion_getInstance().get_6cx2xq$(mcode).name;
    var rd = mcode.get_cv51c2$(InstructionField$RDP_getInstance()) + 8 | 0;
    var rs2 = mcode.get_cv51c2$(InstructionField$RS2P_getInstance()) + 8 | 0;
    return name + ' x' + rd + ' x' + rs2;
  };
  CATypeDisassembler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CATypeDisassembler',
    interfaces: [InstructionDisassembler]
  };
  var CATypeDisassembler_instance = null;
  function CATypeDisassembler_getInstance() {
    if (CATypeDisassembler_instance === null) {
      new CATypeDisassembler();
    }
    return CATypeDisassembler_instance;
  }
  function CRTypeDisassembler() {
    CRTypeDisassembler_instance = this;
  }
  CRTypeDisassembler.prototype.invoke_6cx2xq$ = function (mcode) {
    var name = Instruction$Companion_getInstance().get_6cx2xq$(mcode).name;
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var rs2 = mcode.get_cv51c2$(InstructionField$CRS2_getInstance());
    return name + ' x' + rd + ' x' + rs2;
  };
  CRTypeDisassembler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CRTypeDisassembler',
    interfaces: [InstructionDisassembler]
  };
  var CRTypeDisassembler_instance = null;
  function CRTypeDisassembler_getInstance() {
    if (CRTypeDisassembler_instance === null) {
      new CRTypeDisassembler();
    }
    return CRTypeDisassembler_instance;
  }
  function FFRRTypeDisassembler() {
    FFRRTypeDisassembler_instance = this;
  }
  FFRRTypeDisassembler.prototype.invoke_6cx2xq$ = function (mcode) {
    var name = Instruction$Companion_getInstance().get_6cx2xq$(mcode).name;
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rs2 = mcode.get_cv51c2$(InstructionField$RS2_getInstance());
    return name + ' x' + rd + ' f' + rs1 + ' f' + rs2;
  };
  FFRRTypeDisassembler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FFRRTypeDisassembler',
    interfaces: [InstructionDisassembler]
  };
  var FFRRTypeDisassembler_instance = null;
  function FFRRTypeDisassembler_getInstance() {
    if (FFRRTypeDisassembler_instance === null) {
      new FFRRTypeDisassembler();
    }
    return FFRRTypeDisassembler_instance;
  }
  function FITypeDisassembler() {
    FITypeDisassembler_instance = this;
  }
  FITypeDisassembler.prototype.invoke_6cx2xq$ = function (mcode) {
    var name = Instruction$Companion_getInstance().get_6cx2xq$(mcode).name;
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var imm = signExtend(mcode.get_cv51c2$(InstructionField$IMM_11_0_getInstance()), 12);
    return name + ' f' + rd + ' ' + imm + '(x' + rs1 + ')';
  };
  FITypeDisassembler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FITypeDisassembler',
    interfaces: [InstructionDisassembler]
  };
  var FITypeDisassembler_instance = null;
  function FITypeDisassembler_getInstance() {
    if (FITypeDisassembler_instance === null) {
      new FITypeDisassembler();
    }
    return FITypeDisassembler_instance;
  }
  function FR4TypeDisassembler() {
    FR4TypeDisassembler_instance = this;
  }
  FR4TypeDisassembler.prototype.invoke_6cx2xq$ = function (mcode) {
    var name = Instruction$Companion_getInstance().get_6cx2xq$(mcode).name;
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rs2 = mcode.get_cv51c2$(InstructionField$RS2_getInstance());
    var rs3 = mcode.get_cv51c2$(InstructionField$RS3_getInstance());
    return name + ' f' + rd + ' f' + rs1 + ' f' + rs2 + ' f' + rs3;
  };
  FR4TypeDisassembler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FR4TypeDisassembler',
    interfaces: [InstructionDisassembler]
  };
  var FR4TypeDisassembler_instance = null;
  function FR4TypeDisassembler_getInstance() {
    if (FR4TypeDisassembler_instance === null) {
      new FR4TypeDisassembler();
    }
    return FR4TypeDisassembler_instance;
  }
  function FRRTypeDisassembler() {
    FRRTypeDisassembler_instance = this;
  }
  FRRTypeDisassembler.prototype.invoke_6cx2xq$ = function (mcode) {
    var name = Instruction$Companion_getInstance().get_6cx2xq$(mcode).name;
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    return name + ' x' + rd + ' f' + rs1;
  };
  FRRTypeDisassembler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FRRTypeDisassembler',
    interfaces: [InstructionDisassembler]
  };
  var FRRTypeDisassembler_instance = null;
  function FRRTypeDisassembler_getInstance() {
    if (FRRTypeDisassembler_instance === null) {
      new FRRTypeDisassembler();
    }
    return FRRTypeDisassembler_instance;
  }
  function FRTypeDisassembler() {
    FRTypeDisassembler_instance = this;
  }
  FRTypeDisassembler.prototype.invoke_6cx2xq$ = function (mcode) {
    var name = Instruction$Companion_getInstance().get_6cx2xq$(mcode).name;
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rs2 = mcode.get_cv51c2$(InstructionField$RS2_getInstance());
    return name + ' f' + rd + ' f' + rs1 + ' f' + rs2;
  };
  FRTypeDisassembler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FRTypeDisassembler',
    interfaces: [InstructionDisassembler]
  };
  var FRTypeDisassembler_instance = null;
  function FRTypeDisassembler_getInstance() {
    if (FRTypeDisassembler_instance === null) {
      new FRTypeDisassembler();
    }
    return FRTypeDisassembler_instance;
  }
  function FSTypeDisassembler() {
    FSTypeDisassembler_instance = this;
  }
  FSTypeDisassembler.prototype.invoke_6cx2xq$ = function (mcode) {
    var name = Instruction$Companion_getInstance().get_6cx2xq$(mcode).name;
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rs2 = mcode.get_cv51c2$(InstructionField$RS2_getInstance());
    var imm = constructStoreImmediate(mcode);
    return name + ' f' + rs2 + ' ' + imm + '(x' + rs1 + ')';
  };
  FSTypeDisassembler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FSTypeDisassembler',
    interfaces: [InstructionDisassembler]
  };
  var FSTypeDisassembler_instance = null;
  function FSTypeDisassembler_getInstance() {
    if (FSTypeDisassembler_instance === null) {
      new FSTypeDisassembler();
    }
    return FSTypeDisassembler_instance;
  }
  function RFRTypeDisassembler() {
    RFRTypeDisassembler_instance = this;
  }
  RFRTypeDisassembler.prototype.invoke_6cx2xq$ = function (mcode) {
    var name = Instruction$Companion_getInstance().get_6cx2xq$(mcode).name;
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    return name + ' f' + rd + ' x' + rs1;
  };
  RFRTypeDisassembler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RFRTypeDisassembler',
    interfaces: [InstructionDisassembler]
  };
  var RFRTypeDisassembler_instance = null;
  function RFRTypeDisassembler_getInstance() {
    if (RFRTypeDisassembler_instance === null) {
      new RFRTypeDisassembler();
    }
    return RFRTypeDisassembler_instance;
  }
  function InstructionDisassembler() {
  }
  InstructionDisassembler.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InstructionDisassembler',
    interfaces: []
  };
  function RawDisassembler(disasm) {
    this.disasm_0 = disasm;
  }
  RawDisassembler.prototype.invoke_6cx2xq$ = function (mcode) {
    return this.disasm_0(mcode);
  };
  RawDisassembler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RawDisassembler',
    interfaces: [InstructionDisassembler]
  };
  function BTypeFormat(opcode, funct3) {
    OpcodeFunct3Format.call(this, opcode, funct3);
  }
  BTypeFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BTypeFormat',
    interfaces: [OpcodeFunct3Format]
  };
  function ITypeFormat(opcode, funct3) {
    OpcodeFunct3Format.call(this, opcode, funct3);
  }
  ITypeFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ITypeFormat',
    interfaces: [OpcodeFunct3Format]
  };
  function RTypeFormat(opcode, funct3, funct7) {
    InstructionFormat.call(this, 4, listOf_0([new FieldEqual(InstructionField$OPCODE_getInstance(), opcode), new FieldEqual(InstructionField$FUNCT3_getInstance(), funct3), new FieldEqual(InstructionField$FUNCT7_getInstance(), funct7)]));
  }
  RTypeFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RTypeFormat',
    interfaces: [InstructionFormat]
  };
  function STypeFormat(opcode, funct3) {
    OpcodeFunct3Format.call(this, opcode, funct3);
  }
  STypeFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'STypeFormat',
    interfaces: [OpcodeFunct3Format]
  };
  function UTypeFormat(opcode) {
    OpcodeFormat.call(this, opcode);
  }
  UTypeFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UTypeFormat',
    interfaces: [OpcodeFormat]
  };
  function AMORTypeFormat(opcode, funct3, funct5, aq, rl) {
    InstructionFormat.call(this, 4, listOf_0([new FieldEqual(InstructionField$OPCODE_getInstance(), opcode), new FieldEqual(InstructionField$FUNCT3_getInstance(), funct3), new FieldEqual(InstructionField$FUNCT5_getInstance(), funct5), new FieldEqual(InstructionField$AQ_getInstance(), aq), new FieldEqual(InstructionField$RL_getInstance(), rl)]));
  }
  AMORTypeFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AMORTypeFormat',
    interfaces: [InstructionFormat]
  };
  function CATypeFormat(opcode2, funct2, funct6) {
    InstructionFormat.call(this, 2, listOf_0([new FieldEqual(InstructionField$OP2_getInstance(), opcode2), new FieldEqual(InstructionField$CFUNCT2_getInstance(), funct2), new FieldEqual(InstructionField$FUNCT6_getInstance(), funct6)]));
  }
  CATypeFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CATypeFormat',
    interfaces: [InstructionFormat]
  };
  function CRTypeFormat(opcode2, funct4, regComp) {
    InstructionFormat.call(this, 2, flatten([[new FieldEqual(InstructionField$OP2_getInstance(), opcode2), new FieldEqual(InstructionField$FUNCT4_getInstance(), funct4)], regComp]));
  }
  CRTypeFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CRTypeFormat',
    interfaces: [InstructionFormat]
  };
  function FRTypeFormat(opcode, funct7) {
    InstructionFormat.call(this, 4, listOf_0([new FieldEqual(InstructionField$OPCODE_getInstance(), opcode), new FieldEqual(InstructionField$FUNCT7_getInstance(), funct7)]));
  }
  FRTypeFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FRTypeFormat',
    interfaces: [InstructionFormat]
  };
  function FSRS2TypeFormat(opcode, funct7, rs2) {
    InstructionFormat.call(this, 4, listOf_0([new FieldEqual(InstructionField$OPCODE_getInstance(), opcode), new FieldEqual(InstructionField$RS2_getInstance(), rs2), new FieldEqual(InstructionField$FUNCT7_getInstance(), funct7)]));
  }
  FSRS2TypeFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FSRS2TypeFormat',
    interfaces: [InstructionFormat]
  };
  function R4TypeFormat(opcode, funct2) {
    InstructionFormat.call(this, 4, listOf_0([new FieldEqual(InstructionField$OPCODE_getInstance(), opcode), new FieldEqual(InstructionField$FUNCT2_getInstance(), funct2)]));
  }
  R4TypeFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'R4TypeFormat',
    interfaces: [InstructionFormat]
  };
  function FieldEqual(ifield, required, not, oifields) {
    if (not === void 0)
      not = false;
    if (oifields === void 0) {
      oifields = emptyList();
    }
    this.ifield = ifield;
    this.required = required;
    this.not = not;
    this.oifields = oifields;
  }
  FieldEqual.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FieldEqual',
    interfaces: []
  };
  FieldEqual.prototype.component1 = function () {
    return this.ifield;
  };
  FieldEqual.prototype.component2 = function () {
    return this.required;
  };
  FieldEqual.prototype.component3 = function () {
    return this.not;
  };
  FieldEqual.prototype.component4 = function () {
    return this.oifields;
  };
  FieldEqual.prototype.copy_qt5ruq$ = function (ifield, required, not, oifields) {
    return new FieldEqual(ifield === void 0 ? this.ifield : ifield, required === void 0 ? this.required : required, not === void 0 ? this.not : not, oifields === void 0 ? this.oifields : oifields);
  };
  FieldEqual.prototype.toString = function () {
    return 'FieldEqual(ifield=' + Kotlin.toString(this.ifield) + (', required=' + Kotlin.toString(this.required)) + (', not=' + Kotlin.toString(this.not)) + (', oifields=' + Kotlin.toString(this.oifields)) + ')';
  };
  FieldEqual.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ifield) | 0;
    result = result * 31 + Kotlin.hashCode(this.required) | 0;
    result = result * 31 + Kotlin.hashCode(this.not) | 0;
    result = result * 31 + Kotlin.hashCode(this.oifields) | 0;
    return result;
  };
  FieldEqual.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.ifield, other.ifield) && Kotlin.equals(this.required, other.required) && Kotlin.equals(this.not, other.not) && Kotlin.equals(this.oifields, other.oifields)))));
  };
  function InstructionFormat(length, ifields) {
    this.length = length;
    this.ifields = ifields;
  }
  InstructionFormat.prototype.matches_6cx2xq$ = function (mcode) {
    var $receiver = this.ifields;
    var all$result;
    all$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var predicate$result;
        var ifield = element.component1()
        , required = element.component2()
        , bool = element.component3()
        , oifields = element.component4();
        var tmp$_0, tmp$_1;
        if (bool) {
          var res = mcode.get_cv51c2$(ifield) !== required;
          tmp$_0 = oifields.iterator();
          while (tmp$_0.hasNext()) {
            var ifild = tmp$_0.next();
            res = res & mcode.get_cv51c2$(ifield) !== required;
          }
          predicate$result = res;
        }
         else {
          var res_0 = mcode.get_cv51c2$(ifield) === required;
          tmp$_1 = oifields.iterator();
          while (tmp$_1.hasNext()) {
            var ifild_0 = tmp$_1.next();
            res_0 = res_0 & mcode.get_cv51c2$(ifield) === required;
          }
          predicate$result = res_0;
        }
        if (!predicate$result) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  };
  InstructionFormat.prototype.fill = function () {
    var tmp$;
    var mcode = new MachineCode(0);
    mcode.length = this.length;
    tmp$ = this.ifields.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var ifield = tmp$_0.component1()
      , required = tmp$_0.component2();
      mcode.set_d3qz0$(ifield, required);
    }
    return mcode;
  };
  InstructionFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstructionFormat',
    interfaces: []
  };
  function OpcodeCFunct3Format(opcode, cfunct3, regComp) {
    InstructionFormat.call(this, 2, flatten([[new FieldEqual(InstructionField$OPCODE_getInstance(), opcode), new FieldEqual(InstructionField$CFUNCT3_getInstance(), cfunct3)], regComp]));
  }
  OpcodeCFunct3Format.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OpcodeCFunct3Format',
    interfaces: [InstructionFormat]
  };
  function OpcodeFormat(opcode) {
    InstructionFormat.call(this, 4, listOf(new FieldEqual(InstructionField$OPCODE_getInstance(), opcode)));
  }
  OpcodeFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OpcodeFormat',
    interfaces: [InstructionFormat]
  };
  function OpcodeFunct3Format(opcode, funct3) {
    InstructionFormat.call(this, 4, listOf_0([new FieldEqual(InstructionField$OPCODE_getInstance(), opcode), new FieldEqual(InstructionField$FUNCT3_getInstance(), funct3)]));
  }
  OpcodeFunct3Format.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OpcodeFunct3Format',
    interfaces: [InstructionFormat]
  };
  function BTypeImplementation32(cond) {
    this.cond_0 = cond;
  }
  BTypeImplementation32.prototype.invoke_j2zg41$ = function (mcode, sim) {
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rs2 = mcode.get_cv51c2$(InstructionField$RS2_getInstance());
    var imm = constructBranchImmediate(mcode);
    var vrs1 = numberToInt(sim.getReg_za3lpa$(rs1));
    var vrs2 = numberToInt(sim.getReg_za3lpa$(rs2));
    if (this.cond_0(vrs1, vrs2)) {
      sim.branched = true;
      sim.incrementPC_3p81yu$(imm);
    }
     else {
      sim.incrementPC_3p81yu$(mcode.length);
    }
  };
  BTypeImplementation32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BTypeImplementation32',
    interfaces: [InstructionImplementation]
  };
  function constructBranchImmediate(mcode) {
    var imm_11 = mcode.get_cv51c2$(InstructionField$IMM_11_B_getInstance());
    var imm_4_1 = mcode.get_cv51c2$(InstructionField$IMM_4_1_getInstance());
    var imm_10_5 = mcode.get_cv51c2$(InstructionField$IMM_10_5_getInstance());
    var imm_12 = mcode.get_cv51c2$(InstructionField$IMM_12_getInstance());
    var imm = 0;
    imm = setBitslice(imm, imm_11, 11, 12);
    imm = setBitslice(imm, imm_4_1, 1, 5);
    imm = setBitslice(imm, imm_10_5, 5, 11);
    imm = setBitslice(imm, imm_12, 12, 13);
    return signExtend(imm, 13);
  }
  function ITypeImplementation32(eval_0) {
    this.eval_0 = eval_0;
  }
  ITypeImplementation32.prototype.invoke_j2zg41$ = function (mcode, sim) {
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var imm = signExtend(mcode.get_cv51c2$(InstructionField$IMM_11_0_getInstance()), 12);
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var vrs1 = numberToInt(sim.getReg_za3lpa$(rs1));
    sim.setReg_135bro$(rd, this.eval_0(vrs1, imm));
    sim.incrementPC_3p81yu$(mcode.length);
  };
  ITypeImplementation32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ITypeImplementation32',
    interfaces: [InstructionImplementation]
  };
  function LoadImplementation32(load, postLoad) {
    this.load_0 = load;
    this.postLoad_0 = postLoad;
  }
  LoadImplementation32.prototype.invoke_j2zg41$ = function (mcode, sim) {
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var vrs1 = numberToInt(sim.getReg_za3lpa$(rs1));
    var imm = signExtend(mcode.get_cv51c2$(InstructionField$IMM_11_0_getInstance()), 12);
    sim.setReg_135bro$(rd, this.postLoad_0(this.load_0(sim, vrs1 + imm | 0)));
    sim.incrementPC_3p81yu$(mcode.length);
  };
  LoadImplementation32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoadImplementation32',
    interfaces: [InstructionImplementation]
  };
  function RTypeImplementation32(eval_0) {
    this.eval_0 = eval_0;
  }
  RTypeImplementation32.prototype.invoke_j2zg41$ = function (mcode, sim) {
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rs2 = mcode.get_cv51c2$(InstructionField$RS2_getInstance());
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var vrs1 = numberToInt(sim.getReg_za3lpa$(rs1));
    var vrs2 = numberToInt(sim.getReg_za3lpa$(rs2));
    sim.setReg_135bro$(rd, this.eval_0(vrs1, vrs2));
    sim.incrementPC_3p81yu$(mcode.length);
  };
  RTypeImplementation32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RTypeImplementation32',
    interfaces: [InstructionImplementation]
  };
  function ShiftImmediateImplementation32(eval_0) {
    this.eval_0 = eval_0;
  }
  ShiftImmediateImplementation32.prototype.invoke_j2zg41$ = function (mcode, sim) {
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var shamt = mcode.get_cv51c2$(InstructionField$SHAMT_getInstance());
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var vrs1 = numberToInt(sim.getReg_za3lpa$(rs1));
    sim.setReg_135bro$(rd, this.eval_0(vrs1, shamt));
    sim.incrementPC_3p81yu$(mcode.length);
  };
  ShiftImmediateImplementation32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShiftImmediateImplementation32',
    interfaces: [InstructionImplementation]
  };
  function STypeImplementation32(store) {
    this.store_0 = store;
  }
  STypeImplementation32.prototype.invoke_j2zg41$ = function (mcode, sim) {
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rs2 = mcode.get_cv51c2$(InstructionField$RS2_getInstance());
    var imm = constructStoreImmediate(mcode);
    var vrs1 = numberToInt(sim.getReg_za3lpa$(rs1));
    var vrs2 = numberToInt(sim.getReg_za3lpa$(rs2));
    this.store_0(sim, vrs1 + imm | 0, vrs2);
    sim.incrementPC_3p81yu$(mcode.length);
  };
  STypeImplementation32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'STypeImplementation32',
    interfaces: [InstructionImplementation]
  };
  function constructStoreImmediate(mcode) {
    var imm_11_5 = mcode.get_cv51c2$(InstructionField$IMM_11_5_getInstance());
    var imm_4_0 = mcode.get_cv51c2$(InstructionField$IMM_4_0_getInstance());
    var imm = 0;
    imm = setBitslice(imm, imm_11_5, 5, 12);
    imm = setBitslice(imm, imm_4_0, 0, 5);
    return signExtend(imm, 12);
  }
  function BTypeImplementation64(cond) {
    this.cond_0 = cond;
  }
  BTypeImplementation64.prototype.invoke_j2zg41$ = function (mcode, sim) {
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rs2 = mcode.get_cv51c2$(InstructionField$RS2_getInstance());
    var imm = constructBranchImmediate64(mcode);
    var vrs1 = numberToLong(sim.getReg_za3lpa$(rs1));
    var vrs2 = numberToLong(sim.getReg_za3lpa$(rs2));
    if (this.cond_0(vrs1, vrs2)) {
      sim.branched = true;
      sim.incrementPC_3p81yu$(imm);
    }
     else {
      sim.incrementPC_3p81yu$(mcode.length);
    }
  };
  BTypeImplementation64.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BTypeImplementation64',
    interfaces: [InstructionImplementation]
  };
  function constructBranchImmediate64(mcode) {
    var imm_11 = mcode.get_cv51c2$(InstructionField$IMM_11_B_getInstance());
    var imm_4_1 = mcode.get_cv51c2$(InstructionField$IMM_4_1_getInstance());
    var imm_10_5 = mcode.get_cv51c2$(InstructionField$IMM_10_5_getInstance());
    var imm_12 = mcode.get_cv51c2$(InstructionField$IMM_12_getInstance());
    var imm = 0;
    imm = setBitslice(imm, imm_11, 11, 12);
    imm = setBitslice(imm, imm_4_1, 1, 5);
    imm = setBitslice(imm, imm_10_5, 5, 11);
    imm = setBitslice(imm, imm_12, 12, 13);
    return Kotlin.Long.fromInt(signExtend(imm, 13));
  }
  function ITypeImplementation64(eval_0) {
    this.eval_0 = eval_0;
  }
  ITypeImplementation64.prototype.invoke_j2zg41$ = function (mcode, sim) {
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var imm = Kotlin.Long.fromInt(signExtend(mcode.get_cv51c2$(InstructionField$IMM_11_0_getInstance()), 12));
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var vrs1 = numberToLong(sim.getReg_za3lpa$(rs1));
    sim.setReg_135bro$(rd, this.eval_0(vrs1, imm));
    sim.incrementPC_3p81yu$(mcode.length);
  };
  ITypeImplementation64.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ITypeImplementation64',
    interfaces: [InstructionImplementation]
  };
  function LoadImplementation64(load, postLoad) {
    this.load_0 = load;
    this.postLoad_0 = postLoad;
  }
  LoadImplementation64.prototype.invoke_j2zg41$ = function (mcode, sim) {
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var vrs1 = numberToLong(sim.getReg_za3lpa$(rs1));
    var imm = Kotlin.Long.fromInt(signExtend(mcode.get_cv51c2$(InstructionField$IMM_11_0_getInstance()), 12));
    sim.setReg_135bro$(rd, this.postLoad_0(this.load_0(sim, vrs1.add(imm))));
    sim.incrementPC_3p81yu$(mcode.length);
  };
  LoadImplementation64.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoadImplementation64',
    interfaces: [InstructionImplementation]
  };
  function RTypeImplementation64(eval_0) {
    this.eval_0 = eval_0;
  }
  RTypeImplementation64.prototype.invoke_j2zg41$ = function (mcode, sim) {
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rs2 = mcode.get_cv51c2$(InstructionField$RS2_getInstance());
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var vrs1 = numberToLong(sim.getReg_za3lpa$(rs1));
    var vrs2 = numberToLong(sim.getReg_za3lpa$(rs2));
    sim.setReg_135bro$(rd, this.eval_0(vrs1, vrs2));
    sim.incrementPC_3p81yu$(mcode.length);
  };
  RTypeImplementation64.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RTypeImplementation64',
    interfaces: [InstructionImplementation]
  };
  function ShiftImmediateImplementation64(eval_0) {
    this.eval_0 = eval_0;
  }
  ShiftImmediateImplementation64.prototype.invoke_j2zg41$ = function (mcode, sim) {
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var shamt = Kotlin.Long.fromInt(mcode.get_cv51c2$(InstructionField$SHAMT_getInstance()));
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var vrs1 = numberToLong(sim.getReg_za3lpa$(rs1));
    sim.setReg_135bro$(rd, this.eval_0(vrs1, shamt));
    sim.incrementPC_3p81yu$(mcode.length);
  };
  ShiftImmediateImplementation64.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShiftImmediateImplementation64',
    interfaces: [InstructionImplementation]
  };
  function STypeImplementation64(store) {
    this.store_0 = store;
  }
  STypeImplementation64.prototype.invoke_j2zg41$ = function (mcode, sim) {
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rs2 = mcode.get_cv51c2$(InstructionField$RS2_getInstance());
    var imm = constructStoreImmediate64(mcode);
    var vrs1 = numberToLong(sim.getReg_za3lpa$(rs1));
    var vrs2 = numberToLong(sim.getReg_za3lpa$(rs2));
    this.store_0(sim, vrs1.add(imm), vrs2);
    sim.incrementPC_3p81yu$(mcode.length);
  };
  STypeImplementation64.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'STypeImplementation64',
    interfaces: [InstructionImplementation]
  };
  function constructStoreImmediate64(mcode) {
    var imm_11_5 = mcode.get_cv51c2$(InstructionField$IMM_11_5_getInstance());
    var imm_4_0 = mcode.get_cv51c2$(InstructionField$IMM_4_0_getInstance());
    var imm = 0;
    imm = setBitslice(imm, imm_11_5, 5, 12);
    imm = setBitslice(imm, imm_4_0, 0, 5);
    return Kotlin.Long.fromInt(signExtend(imm, 12));
  }
  function AMORTypeImplementation32(eval_0) {
    this.eval_0 = eval_0;
  }
  AMORTypeImplementation32.prototype.invoke_j2zg41$ = function (mcode, sim) {
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rs2 = mcode.get_cv51c2$(InstructionField$RS2_getInstance());
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var vrs1 = numberToInt(sim.getReg_za3lpa$(rs1));
    var vrs2 = numberToInt(sim.getReg_za3lpa$(rs2));
    var data = sim.loadWordwCache_3p81yu$(vrs1);
    sim.setReg_135bro$(rd, data);
    sim.storeWordwCache_z8e4lc$(vrs1, this.eval_0(data, vrs2));
    sim.incrementPC_3p81yu$(mcode.length);
  };
  AMORTypeImplementation32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AMORTypeImplementation32',
    interfaces: [InstructionImplementation]
  };
  function CATypeImplementation32(eval_0) {
    this.eval_0 = eval_0;
  }
  CATypeImplementation32.prototype.invoke_j2zg41$ = function (mcode, sim) {
    var rs2 = mcode.get_cv51c2$(InstructionField$RS2P_getInstance()) + 8 | 0;
    var rd = mcode.get_cv51c2$(InstructionField$RDP_getInstance()) + 8 | 0;
    var vrs1 = numberToInt(sim.getReg_za3lpa$(rd));
    var vrs2 = numberToInt(sim.getReg_za3lpa$(rs2));
    sim.setReg_135bro$(rd, this.eval_0(vrs1, vrs2));
    sim.incrementPC_3p81yu$(mcode.length);
  };
  CATypeImplementation32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CATypeImplementation32',
    interfaces: [InstructionImplementation]
  };
  function CRTypeImplementation32(eval_0) {
    this.eval_0 = eval_0;
  }
  CRTypeImplementation32.prototype.invoke_j2zg41$ = function (mcode, sim) {
    var rs2 = mcode.get_cv51c2$(InstructionField$CRS2_getInstance());
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var vrs1 = numberToInt(sim.getReg_za3lpa$(rd));
    var vrs2 = numberToInt(sim.getReg_za3lpa$(rs2));
    sim.setReg_135bro$(rd, this.eval_0(vrs1, vrs2));
    sim.incrementPC_3p81yu$(mcode.length);
  };
  CRTypeImplementation32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CRTypeImplementation32',
    interfaces: [InstructionImplementation]
  };
  function FFRRTypeImplementation32(eval_0) {
    this.eval_0 = eval_0;
  }
  FFRRTypeImplementation32.prototype.invoke_j2zg41$ = function (mcode, sim) {
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rs2 = mcode.get_cv51c2$(InstructionField$RS2_getInstance());
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var vrs1 = sim.getFReg_za3lpa$(rs1);
    var vrs2 = sim.getFReg_za3lpa$(rs2);
    sim.setReg_135bro$(rd, this.eval_0(vrs1, vrs2));
    sim.incrementPC_3p81yu$(mcode.length);
  };
  FFRRTypeImplementation32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FFRRTypeImplementation32',
    interfaces: [InstructionImplementation]
  };
  function FITypeImplementation32(eval_0) {
    this.eval_0 = eval_0;
  }
  FITypeImplementation32.prototype.invoke_j2zg41$ = function (mcode, sim) {
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var vrs1 = numberToInt(sim.getReg_za3lpa$(rs1));
    var imm = signExtend(mcode.get_cv51c2$(InstructionField$IMM_11_0_getInstance()), 12);
    sim.setFReg_i6jhoq$(rd, this.eval_0(vrs1 + imm | 0, sim));
    sim.incrementPC_3p81yu$(mcode.length);
  };
  FITypeImplementation32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FITypeImplementation32',
    interfaces: [InstructionImplementation]
  };
  function FR4TypeImplementation32(eval_0) {
    this.eval_0 = eval_0;
  }
  FR4TypeImplementation32.prototype.invoke_j2zg41$ = function (mcode, sim) {
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rs2 = mcode.get_cv51c2$(InstructionField$RS2_getInstance());
    var rs3 = mcode.get_cv51c2$(InstructionField$RS3_getInstance());
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var vrs1 = sim.getFReg_za3lpa$(rs1);
    var vrs2 = sim.getFReg_za3lpa$(rs2);
    var vrs3 = sim.getFReg_za3lpa$(rs3);
    sim.setFReg_i6jhoq$(rd, this.eval_0(vrs1, vrs2, vrs3));
    sim.incrementPC_3p81yu$(mcode.length);
  };
  FR4TypeImplementation32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FR4TypeImplementation32',
    interfaces: [InstructionImplementation]
  };
  function FRTypeImplementation32(eval_0) {
    this.eval_0 = eval_0;
  }
  FRTypeImplementation32.prototype.invoke_j2zg41$ = function (mcode, sim) {
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rs2 = mcode.get_cv51c2$(InstructionField$RS2_getInstance());
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var vrs1 = sim.getFReg_za3lpa$(rs1);
    var vrs2 = sim.getFReg_za3lpa$(rs2);
    sim.setFReg_i6jhoq$(rd, this.eval_0(vrs1, vrs2));
    sim.incrementPC_3p81yu$(mcode.length);
  };
  FRTypeImplementation32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FRTypeImplementation32',
    interfaces: [InstructionImplementation]
  };
  function FSTypeImplementation32(store) {
    this.store_0 = store;
  }
  FSTypeImplementation32.prototype.invoke_j2zg41$ = function (mcode, sim) {
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rs2 = mcode.get_cv51c2$(InstructionField$RS2_getInstance());
    var imm = constructStoreImmediate_0(mcode);
    var vrs1 = numberToInt(sim.getReg_za3lpa$(rs1));
    var vrs2 = sim.getFReg_za3lpa$(rs2);
    this.store_0(sim, vrs1 + imm | 0, vrs2);
    sim.incrementPC_3p81yu$(mcode.length);
  };
  FSTypeImplementation32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FSTypeImplementation32',
    interfaces: [InstructionImplementation]
  };
  function constructStoreImmediate_0(mcode) {
    var imm_11_5 = mcode.get_cv51c2$(InstructionField$IMM_11_5_getInstance());
    var imm_4_0 = mcode.get_cv51c2$(InstructionField$IMM_4_0_getInstance());
    var imm = 0;
    imm = setBitslice(imm, imm_11_5, 5, 12);
    imm = setBitslice(imm, imm_4_0, 0, 5);
    return signExtend(imm, 12);
  }
  function RtFTypeImplementation32(eval_0) {
    this.eval_0 = eval_0;
  }
  RtFTypeImplementation32.prototype.invoke_j2zg41$ = function (mcode, sim) {
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var vrs1 = numberToInt(sim.getReg_za3lpa$(rs1));
    sim.setFReg_i6jhoq$(rd, this.eval_0(vrs1));
    sim.incrementPC_3p81yu$(mcode.length);
  };
  RtFTypeImplementation32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RtFTypeImplementation32',
    interfaces: [InstructionImplementation]
  };
  function InstructionImplementation() {
  }
  InstructionImplementation.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InstructionImplementation',
    interfaces: []
  };
  function NoImplementation() {
    NoImplementation_instance = this;
  }
  NoImplementation.prototype.invoke_j2zg41$ = function (mcode, sim) {
    throw new NotImplementedError('no implementation available');
  };
  NoImplementation.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NoImplementation',
    interfaces: [InstructionImplementation]
  };
  var NoImplementation_instance = null;
  function NoImplementation_getInstance() {
    if (NoImplementation_instance === null) {
      new NoImplementation();
    }
    return NoImplementation_instance;
  }
  function RawImplementation(eval_0) {
    this.eval_0 = eval_0;
  }
  RawImplementation.prototype.invoke_j2zg41$ = function (mcode, sim) {
    this.eval_0(mcode, sim);
  };
  RawImplementation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RawImplementation',
    interfaces: [InstructionImplementation]
  };
  function signExtend(v, sz) {
    return v << 32 - sz >> 32 - sz;
  }
  function setBitslice(x, y, start, end) {
    var mask = L1.shiftLeft(end).subtract(L1.shiftLeft(start)).inv().toInt();
    return mask & x | y << start;
  }
  function BTypeParser() {
    BTypeParser_instance = this;
    this.B_TYPE_MIN = -2048;
    this.B_TYPE_MAX = 2047;
  }
  BTypeParser.prototype.invoke_phh6x1$ = function (prog, mcode, args, dbg) {
    var tmp$;
    checkArgsLength_0(args.size, 3, dbg);
    mcode.set_d3qz0$(InstructionField$RS1_getInstance(), regNameToNumber(args.get_za3lpa$(0), void 0, dbg));
    mcode.set_d3qz0$(InstructionField$RS2_getInstance(), regNameToNumber(args.get_za3lpa$(1), void 0, dbg));
    var label = args.get_za3lpa$(2);
    var imm = null;
    try {
      tmp$ = prog.getLabelOffset_kexlgo$(label, prog.textSize, dbg);
      if (tmp$ == null) {
        throw AssemblerError_init('could not find label ' + label, dbg);
      }
      imm = tmp$;
    }
     catch (e) {
      if (Kotlin.isType(e, AssemblerError)) {
        try {
          imm = prog.getLabelOffset_kexlgo$(venusInternalLabels + toString(userStringToInt(label) + prog.textSize | 0), prog.textSize, dbg);
          getImmWarning += 'Interpreting the label as an offset!; ';
        }
         catch (e2) {
          if (Kotlin.isType(e2, Throwable)) {
            throw e;
          }
           else
            throw e2;
        }
      }
       else
        throw e;
    }
    var $receiver = new IntRange(-2048, 2047);
    var element = imm;
    if (!(element != null && $receiver.contains_mef7kx$(element))) {
      getImmWarning = replace(getImmWarning, 'Interpreting the label as an offset!; ', '');
      throw AssemblerError_init('branch to ' + label + ' too far', dbg);
    }
    mcode.set_d3qz0$(InstructionField$IMM_11_B_getInstance(), ensureNotNull(imm) >> 11);
    mcode.set_d3qz0$(InstructionField$IMM_4_1_getInstance(), imm >> 1);
    mcode.set_d3qz0$(InstructionField$IMM_12_getInstance(), imm >> 12);
    mcode.set_d3qz0$(InstructionField$IMM_10_5_getInstance(), imm >> 5);
  };
  BTypeParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BTypeParser',
    interfaces: [InstructionParser]
  };
  var BTypeParser_instance = null;
  function BTypeParser_getInstance() {
    if (BTypeParser_instance === null) {
      new BTypeParser();
    }
    return BTypeParser_instance;
  }
  function CSRTypeParser() {
    CSRTypeParser_instance = this;
    this.I_TYPE_MIN = -2048;
    this.I_TYPE_MAX = 2047;
  }
  CSRTypeParser.prototype.invoke_phh6x1$ = function (prog, mcode, args, dbg) {
    checkArgsLength_0(args.size, 3, dbg);
    mcode.set_d3qz0$(InstructionField$RD_getInstance(), regNameToNumber(args.get_za3lpa$(0), void 0, dbg));
    mcode.set_d3qz0$(InstructionField$RS1_getInstance(), regNameToNumber(args.get_za3lpa$(2), void 0, dbg));
    mcode.set_d3qz0$(InstructionField$IMM_11_0_getInstance(), getImmediate(args.get_za3lpa$(1), -2048, 2047, dbg));
  };
  CSRTypeParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CSRTypeParser',
    interfaces: [InstructionParser]
  };
  var CSRTypeParser_instance = null;
  function CSRTypeParser_getInstance() {
    if (CSRTypeParser_instance === null) {
      new CSRTypeParser();
    }
    return CSRTypeParser_instance;
  }
  function ITypeParser() {
    ITypeParser_instance = this;
    this.I_TYPE_MIN = -2048;
    this.I_TYPE_MAX = 2047;
  }
  ITypeParser.prototype.invoke_phh6x1$ = function (prog, mcode, args, dbg) {
    checkArgsLength_0(args.size, 3, dbg);
    var $receiver = dbg.line;
    var real_line = firstOrNull(Regex_init('#').split_905azu$($receiver, 0));
    var tmp$ = real_line != null;
    if (tmp$) {
      tmp$ = Regex_init('[(]').containsMatchIn_6bul2c$(real_line);
    }
    if (tmp$) {
      throw AssemblerError_init('I-Type Instructions should not be in Displaced Notation!', dbg);
    }
    mcode.set_d3qz0$(InstructionField$RD_getInstance(), regNameToNumber(args.get_za3lpa$(0), void 0, dbg));
    mcode.set_d3qz0$(InstructionField$RS1_getInstance(), regNameToNumber(args.get_za3lpa$(1), void 0, dbg));
    if (isNumeral(args.get_za3lpa$(2))) {
      mcode.set_d3qz0$(InstructionField$IMM_11_0_getInstance(), prog.getImmediate_druo6x$(args.get_za3lpa$(2), -2048, 2047, dbg));
    }
     else {
      prog.addRelocation_pjaf6f$(ImmAbsRelocator, prog.symbolPart_qxjnze$(args.get_za3lpa$(2), dbg), prog.labelOffsetPart_qxjnze$(args.get_za3lpa$(2), dbg), void 0, dbg);
    }
  };
  ITypeParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ITypeParser',
    interfaces: [InstructionParser]
  };
  var ITypeParser_instance = null;
  function ITypeParser_getInstance() {
    if (ITypeParser_instance === null) {
      new ITypeParser();
    }
    return ITypeParser_instance;
  }
  function LoadParser() {
    LoadParser_instance = this;
    this.I_TYPE_MIN = -2048;
    this.I_TYPE_MAX = 2047;
  }
  LoadParser.prototype.invoke_phh6x1$ = function (prog, mcode, args, dbg) {
    checkArgsLength_0(args.size, 3, dbg);
    mcode.set_d3qz0$(InstructionField$RD_getInstance(), regNameToNumber(args.get_za3lpa$(0), void 0, dbg));
    mcode.set_d3qz0$(InstructionField$RS1_getInstance(), regNameToNumber(args.get_za3lpa$(2), void 0, dbg));
    mcode.set_d3qz0$(InstructionField$IMM_11_0_getInstance(), prog.getImmediate_druo6x$(args.get_za3lpa$(1), -2048, 2047, dbg));
  };
  LoadParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LoadParser',
    interfaces: [InstructionParser]
  };
  var LoadParser_instance = null;
  function LoadParser_getInstance() {
    if (LoadParser_instance === null) {
      new LoadParser();
    }
    return LoadParser_instance;
  }
  function RTypeParser() {
    RTypeParser_instance = this;
  }
  RTypeParser.prototype.invoke_phh6x1$ = function (prog, mcode, args, dbg) {
    checkArgsLength_0(args.size, 3, dbg);
    mcode.set_d3qz0$(InstructionField$RD_getInstance(), regNameToNumber(args.get_za3lpa$(0), void 0, dbg));
    mcode.set_d3qz0$(InstructionField$RS1_getInstance(), regNameToNumber(args.get_za3lpa$(1), void 0, dbg));
    mcode.set_d3qz0$(InstructionField$RS2_getInstance(), regNameToNumber(args.get_za3lpa$(2), void 0, dbg));
  };
  RTypeParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RTypeParser',
    interfaces: [InstructionParser]
  };
  var RTypeParser_instance = null;
  function RTypeParser_getInstance() {
    if (RTypeParser_instance === null) {
      new RTypeParser();
    }
    return RTypeParser_instance;
  }
  function ShiftImmediateParser() {
    ShiftImmediateParser_instance = this;
    this.SHIFT_MIN = 0;
    this.SHIFT_MAX = 31;
  }
  ShiftImmediateParser.prototype.invoke_phh6x1$ = function (prog, mcode, args, dbg) {
    checkArgsLength_0(args.size, 3, dbg);
    mcode.set_d3qz0$(InstructionField$RD_getInstance(), regNameToNumber(args.get_za3lpa$(0), void 0, dbg));
    mcode.set_d3qz0$(InstructionField$RS1_getInstance(), regNameToNumber(args.get_za3lpa$(1), void 0, dbg));
    mcode.set_d3qz0$(InstructionField$SHAMT_getInstance(), prog.getImmediate_druo6x$(args.get_za3lpa$(2), 0, 31, dbg));
  };
  ShiftImmediateParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ShiftImmediateParser',
    interfaces: [InstructionParser]
  };
  var ShiftImmediateParser_instance = null;
  function ShiftImmediateParser_getInstance() {
    if (ShiftImmediateParser_instance === null) {
      new ShiftImmediateParser();
    }
    return ShiftImmediateParser_instance;
  }
  function STypeParser() {
    STypeParser_instance = this;
    this.S_TYPE_MIN = -2048;
    this.S_TYPE_MAX = 2047;
  }
  STypeParser.prototype.invoke_phh6x1$ = function (prog, mcode, args, dbg) {
    checkArgsLength_0(args.size, 3, dbg);
    var imm = prog.getImmediate_druo6x$(args.get_za3lpa$(1), -2048, 2047, dbg);
    mcode.set_d3qz0$(InstructionField$RS1_getInstance(), regNameToNumber(args.get_za3lpa$(2), void 0, dbg));
    mcode.set_d3qz0$(InstructionField$RS2_getInstance(), regNameToNumber(args.get_za3lpa$(0), void 0, dbg));
    mcode.set_d3qz0$(InstructionField$IMM_4_0_getInstance(), imm);
    mcode.set_d3qz0$(InstructionField$IMM_11_5_getInstance(), imm >> 5);
  };
  STypeParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'STypeParser',
    interfaces: [InstructionParser]
  };
  var STypeParser_instance = null;
  function STypeParser_getInstance() {
    if (STypeParser_instance === null) {
      new STypeParser();
    }
    return STypeParser_instance;
  }
  function UTypeParser() {
    UTypeParser_instance = this;
    this.U_TYPE_MIN = 0;
    this.U_TYPE_MAX = 1048575;
  }
  UTypeParser.prototype.invoke_phh6x1$ = function (prog, mcode, args, dbg) {
    checkArgsLength_0(args.size, 2, dbg);
    mcode.set_d3qz0$(InstructionField$RD_getInstance(), regNameToNumber(args.get_za3lpa$(0), void 0, dbg));
    mcode.set_d3qz0$(InstructionField$IMM_31_12_getInstance(), prog.getImmediate_druo6x$(args.get_za3lpa$(1), 0, 1048575, dbg));
  };
  UTypeParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UTypeParser',
    interfaces: [InstructionParser]
  };
  var UTypeParser_instance = null;
  function UTypeParser_getInstance() {
    if (UTypeParser_instance === null) {
      new UTypeParser();
    }
    return UTypeParser_instance;
  }
  function DoNothingParser() {
    DoNothingParser_instance = this;
    this.B_TYPE_MIN = -2048;
    this.B_TYPE_MAX = 2047;
  }
  DoNothingParser.prototype.invoke_phh6x1$ = function (prog, mcode, args, dbg) {
    checkArgsLength_0(args.size, 0, dbg);
  };
  DoNothingParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DoNothingParser',
    interfaces: [InstructionParser]
  };
  var DoNothingParser_instance = null;
  function DoNothingParser_getInstance() {
    if (DoNothingParser_instance === null) {
      new DoNothingParser();
    }
    return DoNothingParser_instance;
  }
  function AMORTypeParser() {
    AMORTypeParser_instance = this;
  }
  AMORTypeParser.prototype.invoke_phh6x1$ = function (prog, mcode, args, dbg) {
    checkArgsLength_0(args.size, 3, dbg);
    mcode.set_d3qz0$(InstructionField$RD_getInstance(), regNameToNumber(args.get_za3lpa$(0), void 0, dbg));
    mcode.set_d3qz0$(InstructionField$RS1_getInstance(), regNameToNumber(args.get_za3lpa$(2), void 0, dbg));
    mcode.set_d3qz0$(InstructionField$RS2_getInstance(), regNameToNumber(args.get_za3lpa$(1), void 0, dbg));
  };
  AMORTypeParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AMORTypeParser',
    interfaces: [InstructionParser]
  };
  var AMORTypeParser_instance = null;
  function AMORTypeParser_getInstance() {
    if (AMORTypeParser_instance === null) {
      new AMORTypeParser();
    }
    return AMORTypeParser_instance;
  }
  function CATypeParser() {
    CATypeParser_instance = this;
  }
  CATypeParser.prototype.invoke_phh6x1$ = function (prog, mcode, args, dbg) {
    checkArgsLength_0(args.size, 2, dbg);
    var rdp = regNameToNumber(args.get_za3lpa$(0), void 0, dbg);
    var rs2p = regNameToNumber(args.get_za3lpa$(1), void 0, dbg);
    if (!(8 <= rdp && rdp <= 15) || !(8 <= rs2p && rs2p <= 15)) {
      throw AssemblerError_init('CA instructions only takes registers x8 to x15!', dbg);
    }
    mcode.set_d3qz0$(InstructionField$RDP_getInstance(), rdp);
    mcode.set_d3qz0$(InstructionField$RS2P_getInstance(), rs2p);
  };
  CATypeParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CATypeParser',
    interfaces: [InstructionParser]
  };
  var CATypeParser_instance = null;
  function CATypeParser_getInstance() {
    if (CATypeParser_instance === null) {
      new CATypeParser();
    }
    return CATypeParser_instance;
  }
  function CRTypeParser() {
    CRTypeParser_instance = this;
  }
  CRTypeParser.prototype.invoke_phh6x1$ = function (prog, mcode, args, dbg) {
    checkArgsLength_0(args.size, 2, dbg);
    var crd = regNameToNumber(args.get_za3lpa$(0), void 0, dbg);
    var crs2 = regNameToNumber(args.get_za3lpa$(1), void 0, dbg);
    mcode.set_d3qz0$(InstructionField$RD_getInstance(), crd);
    mcode.set_d3qz0$(InstructionField$CRS2_getInstance(), crs2);
  };
  CRTypeParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CRTypeParser',
    interfaces: [InstructionParser]
  };
  var CRTypeParser_instance = null;
  function CRTypeParser_getInstance() {
    if (CRTypeParser_instance === null) {
      new CRTypeParser();
    }
    return CRTypeParser_instance;
  }
  function FFRRTypeParser() {
    FFRRTypeParser_instance = this;
  }
  FFRRTypeParser.prototype.invoke_phh6x1$ = function (prog, mcode, args, dbg) {
    checkArgsLength_0(args.size, 3, dbg);
    mcode.set_d3qz0$(InstructionField$RD_getInstance(), regNameToNumber(args.get_za3lpa$(0), void 0, dbg));
    mcode.set_d3qz0$(InstructionField$RS1_getInstance(), regNameToNumber(args.get_za3lpa$(1), false, dbg));
    mcode.set_d3qz0$(InstructionField$RS2_getInstance(), regNameToNumber(args.get_za3lpa$(2), false, dbg));
  };
  FFRRTypeParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FFRRTypeParser',
    interfaces: [InstructionParser]
  };
  var FFRRTypeParser_instance = null;
  function FFRRTypeParser_getInstance() {
    if (FFRRTypeParser_instance === null) {
      new FFRRTypeParser();
    }
    return FFRRTypeParser_instance;
  }
  function FITypeParser() {
    FITypeParser_instance = this;
    this.I_TYPE_MIN = -2048;
    this.I_TYPE_MAX = 2047;
  }
  FITypeParser.prototype.invoke_phh6x1$ = function (prog, mcode, args, dbg) {
    checkArgsLength_0(args.size, 3, dbg);
    mcode.set_d3qz0$(InstructionField$RD_getInstance(), regNameToNumber(args.get_za3lpa$(0), false, dbg));
    mcode.set_d3qz0$(InstructionField$RS1_getInstance(), regNameToNumber(args.get_za3lpa$(2), void 0, dbg));
    mcode.set_d3qz0$(InstructionField$IMM_11_0_getInstance(), getImmediate(args.get_za3lpa$(1), -2048, 2047, dbg));
  };
  FITypeParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FITypeParser',
    interfaces: [InstructionParser]
  };
  var FITypeParser_instance = null;
  function FITypeParser_getInstance() {
    if (FITypeParser_instance === null) {
      new FITypeParser();
    }
    return FITypeParser_instance;
  }
  function FR4TypeParser() {
    FR4TypeParser_instance = this;
  }
  FR4TypeParser.prototype.invoke_phh6x1$ = function (prog, mcode, args, dbg) {
    checkArgsLength_0(args.size, 4, dbg);
    mcode.set_d3qz0$(InstructionField$RD_getInstance(), regNameToNumber(args.get_za3lpa$(0), false, dbg));
    mcode.set_d3qz0$(InstructionField$RS1_getInstance(), regNameToNumber(args.get_za3lpa$(1), false, dbg));
    mcode.set_d3qz0$(InstructionField$RS2_getInstance(), regNameToNumber(args.get_za3lpa$(2), false, dbg));
    mcode.set_d3qz0$(InstructionField$RS3_getInstance(), regNameToNumber(args.get_za3lpa$(3), false, dbg));
  };
  FR4TypeParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FR4TypeParser',
    interfaces: [InstructionParser]
  };
  var FR4TypeParser_instance = null;
  function FR4TypeParser_getInstance() {
    if (FR4TypeParser_instance === null) {
      new FR4TypeParser();
    }
    return FR4TypeParser_instance;
  }
  function FRRTypeParser() {
    FRRTypeParser_instance = this;
  }
  FRRTypeParser.prototype.invoke_phh6x1$ = function (prog, mcode, args, dbg) {
    checkArgsLength_0(args.size, 2, dbg);
    mcode.set_d3qz0$(InstructionField$RD_getInstance(), regNameToNumber(args.get_za3lpa$(0), void 0, dbg));
    mcode.set_d3qz0$(InstructionField$RS1_getInstance(), regNameToNumber(args.get_za3lpa$(1), false, dbg));
    mcode.set_d3qz0$(InstructionField$RS2_getInstance(), 0);
  };
  FRRTypeParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FRRTypeParser',
    interfaces: [InstructionParser]
  };
  var FRRTypeParser_instance = null;
  function FRRTypeParser_getInstance() {
    if (FRRTypeParser_instance === null) {
      new FRRTypeParser();
    }
    return FRRTypeParser_instance;
  }
  function FRTypeParser() {
    FRTypeParser_instance = this;
  }
  FRTypeParser.prototype.invoke_phh6x1$ = function (prog, mcode, args, dbg) {
    checkArgsLength_0(args.size, 3, dbg);
    mcode.set_d3qz0$(InstructionField$RD_getInstance(), regNameToNumber(args.get_za3lpa$(0), false, dbg));
    mcode.set_d3qz0$(InstructionField$RS1_getInstance(), regNameToNumber(args.get_za3lpa$(1), false, dbg));
    mcode.set_d3qz0$(InstructionField$RS2_getInstance(), regNameToNumber(args.get_za3lpa$(2), false, dbg));
  };
  FRTypeParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FRTypeParser',
    interfaces: [InstructionParser]
  };
  var FRTypeParser_instance = null;
  function FRTypeParser_getInstance() {
    if (FRTypeParser_instance === null) {
      new FRTypeParser();
    }
    return FRTypeParser_instance;
  }
  function FSTypeParser() {
    FSTypeParser_instance = this;
    this.S_TYPE_MIN = -2048;
    this.S_TYPE_MAX = 2047;
  }
  FSTypeParser.prototype.invoke_phh6x1$ = function (prog, mcode, args, dbg) {
    checkArgsLength_0(args.size, 3, dbg);
    var imm = getImmediate(args.get_za3lpa$(1), -2048, 2047, dbg);
    mcode.set_d3qz0$(InstructionField$RS1_getInstance(), regNameToNumber(args.get_za3lpa$(2), void 0, dbg));
    mcode.set_d3qz0$(InstructionField$RS2_getInstance(), regNameToNumber(args.get_za3lpa$(0), false, dbg));
    mcode.set_d3qz0$(InstructionField$IMM_4_0_getInstance(), imm);
    mcode.set_d3qz0$(InstructionField$IMM_11_5_getInstance(), imm >> 5);
  };
  FSTypeParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FSTypeParser',
    interfaces: [InstructionParser]
  };
  var FSTypeParser_instance = null;
  function FSTypeParser_getInstance() {
    if (FSTypeParser_instance === null) {
      new FSTypeParser();
    }
    return FSTypeParser_instance;
  }
  function RFRTypeParser() {
    RFRTypeParser_instance = this;
  }
  RFRTypeParser.prototype.invoke_phh6x1$ = function (prog, mcode, args, dbg) {
    checkArgsLength_0(args.size, 2, dbg);
    mcode.set_d3qz0$(InstructionField$RD_getInstance(), regNameToNumber(args.get_za3lpa$(0), false, dbg));
    mcode.set_d3qz0$(InstructionField$RS1_getInstance(), regNameToNumber(args.get_za3lpa$(1), void 0, dbg));
  };
  RFRTypeParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RFRTypeParser',
    interfaces: [InstructionParser]
  };
  var RFRTypeParser_instance = null;
  function RFRTypeParser_getInstance() {
    if (RFRTypeParser_instance === null) {
      new RFRTypeParser();
    }
    return RFRTypeParser_instance;
  }
  function InstructionParser() {
  }
  InstructionParser.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InstructionParser',
    interfaces: []
  };
  function ParserError(message) {
    Exception_init(message, this);
    this.name = 'ParserError';
  }
  ParserError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParserError',
    interfaces: [Exception]
  };
  function RawParser(eval_0) {
    this.eval_0 = eval_0;
  }
  RawParser.prototype.invoke_phh6x1$ = function (prog, mcode, args, dbg) {
    this.eval_0(prog, mcode, args, dbg);
  };
  RawParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RawParser',
    interfaces: [InstructionParser]
  };
  function checkArgsLength_0(argsSize, required, dbg) {
    if (argsSize !== required)
      throw AssemblerError_init('got ' + argsSize + ' arguments but expected ' + required, dbg);
  }
  function regNameToNumber(reg, integer, dbg) {
    if (integer === void 0)
      integer = true;
    if (startsWith(reg, 'x')) {
      var ret = toInt(drop_0(reg, 1));
      if (0 <= ret && ret <= 31) {
        if (!integer)
          throw AssemblerError_init('Register ' + reg + ' is not a floating point register', dbg);
        return ret;
      }
      throw AssemblerError_init('register ' + reg + ' not recognized', dbg);
    }
    if (Regex_init('f\\d{1,2}').matches_6bul2c$(reg)) {
      var ret_0 = toInt(drop_0(reg, 1));
      if (0 <= ret_0 && ret_0 <= 31) {
        if (integer)
          throw AssemblerError_init('Register ' + reg + ' is not an integer register', dbg);
        return ret_0;
      }
      throw AssemblerError_init('register ' + reg + ' not recognized', dbg);
    }
    try {
      if (integer) {
        return checkInteger(reg, dbg);
      }
       else {
        return checkFloating(reg, dbg);
      }
    }
     catch (e) {
      if (Kotlin.isType(e, AssemblerError)) {
        if (integer) {
          checkFloating(reg, dbg);
          throw AssemblerError_init('Register ' + reg + ' is not an integer register', dbg);
        }
         else {
          checkInteger(reg, dbg);
          throw AssemblerError_init('Register ' + reg + ' is not a floating point register', dbg);
        }
      }
       else
        throw e;
    }
  }
  function checkInteger(reg, dbg) {
    var tmp$;
    switch (reg) {
      case 'zero':
        tmp$ = 0;
        break;
      case 'ra':
        tmp$ = 1;
        break;
      case 'sp':
        tmp$ = 2;
        break;
      case 'gp':
        tmp$ = 3;
        break;
      case 'tp':
        tmp$ = 4;
        break;
      case 't0':
        tmp$ = 5;
        break;
      case 't1':
        tmp$ = 6;
        break;
      case 't2':
        tmp$ = 7;
        break;
      case 's0':
      case 'fp':
        tmp$ = 8;
        break;
      case 's1':
        tmp$ = 9;
        break;
      case 'a0':
        tmp$ = 10;
        break;
      case 'a1':
        tmp$ = 11;
        break;
      case 'a2':
        tmp$ = 12;
        break;
      case 'a3':
        tmp$ = 13;
        break;
      case 'a4':
        tmp$ = 14;
        break;
      case 'a5':
        tmp$ = 15;
        break;
      case 'a6':
        tmp$ = 16;
        break;
      case 'a7':
        tmp$ = 17;
        break;
      case 's2':
        tmp$ = 18;
        break;
      case 's3':
        tmp$ = 19;
        break;
      case 's4':
        tmp$ = 20;
        break;
      case 's5':
        tmp$ = 21;
        break;
      case 's6':
        tmp$ = 22;
        break;
      case 's7':
        tmp$ = 23;
        break;
      case 's8':
        tmp$ = 24;
        break;
      case 's9':
        tmp$ = 25;
        break;
      case 's10':
        tmp$ = 26;
        break;
      case 's11':
        tmp$ = 27;
        break;
      case 't3':
        tmp$ = 28;
        break;
      case 't4':
        tmp$ = 29;
        break;
      case 't5':
        tmp$ = 30;
        break;
      case 't6':
        tmp$ = 31;
        break;
      default:throw AssemblerError_init('register ' + reg + ' not recognized', dbg);
    }
    return tmp$;
  }
  function checkFloating(reg, dbg) {
    var tmp$;
    switch (reg) {
      case 'ft0':
        tmp$ = 0;
        break;
      case 'ft1':
        tmp$ = 1;
        break;
      case 'ft2':
        tmp$ = 2;
        break;
      case 'ft3':
        tmp$ = 3;
        break;
      case 'ft4':
        tmp$ = 4;
        break;
      case 'ft5':
        tmp$ = 5;
        break;
      case 'ft6':
        tmp$ = 6;
        break;
      case 'ft7':
        tmp$ = 7;
        break;
      case 'fs0':
        tmp$ = 8;
        break;
      case 'fs1':
        tmp$ = 9;
        break;
      case 'fa0':
        tmp$ = 10;
        break;
      case 'fa1':
        tmp$ = 11;
        break;
      case 'fa2':
        tmp$ = 12;
        break;
      case 'fa3':
        tmp$ = 13;
        break;
      case 'fa4':
        tmp$ = 14;
        break;
      case 'fa5':
        tmp$ = 15;
        break;
      case 'fa6':
        tmp$ = 16;
        break;
      case 'fa7':
        tmp$ = 17;
        break;
      case 'fs2':
        tmp$ = 18;
        break;
      case 'fs3':
        tmp$ = 19;
        break;
      case 'fs4':
        tmp$ = 20;
        break;
      case 'fs5':
        tmp$ = 21;
        break;
      case 'fs6':
        tmp$ = 22;
        break;
      case 'fs7':
        tmp$ = 23;
        break;
      case 'fs8':
        tmp$ = 24;
        break;
      case 'fs9':
        tmp$ = 25;
        break;
      case 'fs10':
        tmp$ = 26;
        break;
      case 'fs11':
        tmp$ = 27;
        break;
      case 'ft8':
        tmp$ = 28;
        break;
      case 'ft9':
        tmp$ = 29;
        break;
      case 'ft10':
        tmp$ = 30;
        break;
      case 'ft11':
        tmp$ = 31;
        break;
      default:throw AssemblerError_init('register ' + reg + ' not recognized', dbg);
    }
    return tmp$;
  }
  function ImmAbsRelocator32() {
    ImmAbsRelocator32_instance = this;
  }
  ImmAbsRelocator32.prototype.invoke_kiq2h6$ = function (mcode, pc, target, dbg) {
    if (-2048 <= target && target <= 2047) {
      mcode.set_d3qz0$(InstructionField$IMM_11_0_getInstance(), target);
    }
     else {
      throw AssemblerError_init('immediate value out of range: ' + target, dbg);
    }
  };
  ImmAbsRelocator32.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ImmAbsRelocator32',
    interfaces: [Relocator32]
  };
  var ImmAbsRelocator32_instance = null;
  function ImmAbsRelocator32_getInstance() {
    if (ImmAbsRelocator32_instance === null) {
      new ImmAbsRelocator32();
    }
    return ImmAbsRelocator32_instance;
  }
  var ImmAbsRelocator;
  function ImmAbsStoreRelocator32() {
    ImmAbsStoreRelocator32_instance = this;
  }
  ImmAbsStoreRelocator32.prototype.invoke_kiq2h6$ = function (mcode, pc, target, dbg) {
    if (-2048 <= target && target <= 2047) {
      mcode.set_d3qz0$(InstructionField$IMM_4_0_getInstance(), target);
      mcode.set_d3qz0$(InstructionField$IMM_11_5_getInstance(), target >> 5);
    }
     else {
      throw AssemblerError_init('immediate value out of range: ' + target, dbg);
    }
  };
  ImmAbsStoreRelocator32.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ImmAbsStoreRelocator32',
    interfaces: [Relocator32]
  };
  var ImmAbsStoreRelocator32_instance = null;
  function ImmAbsStoreRelocator32_getInstance() {
    if (ImmAbsStoreRelocator32_instance === null) {
      new ImmAbsStoreRelocator32();
    }
    return ImmAbsStoreRelocator32_instance;
  }
  var ImmAbsStoreRelocator;
  function JALRelocator32() {
    JALRelocator32_instance = this;
  }
  JALRelocator32.prototype.invoke_kiq2h6$ = function (mcode, pc, target, dbg) {
    var imm = target - pc | 0;
    mcode.set_d3qz0$(InstructionField$IMM_20_getInstance(), imm >> 20);
    mcode.set_d3qz0$(InstructionField$IMM_10_1_getInstance(), imm >> 1);
    mcode.set_d3qz0$(InstructionField$IMM_19_12_getInstance(), imm >> 12);
    mcode.set_d3qz0$(InstructionField$IMM_11_J_getInstance(), imm >> 11);
  };
  JALRelocator32.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JALRelocator32',
    interfaces: [Relocator32]
  };
  var JALRelocator32_instance = null;
  function JALRelocator32_getInstance() {
    if (JALRelocator32_instance === null) {
      new JALRelocator32();
    }
    return JALRelocator32_instance;
  }
  var JALRelocator;
  function NoRelocator64() {
    NoRelocator64_instance = this;
  }
  NoRelocator64.prototype.invoke_c7hm8$ = function (mcode, pc, target, dbg) {
    throw new NotImplementedError('no relocator64 for ' + mcode);
  };
  NoRelocator64.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NoRelocator64',
    interfaces: [Relocator64]
  };
  var NoRelocator64_instance = null;
  function NoRelocator64_getInstance() {
    if (NoRelocator64_instance === null) {
      new NoRelocator64();
    }
    return NoRelocator64_instance;
  }
  function PCRelHiRelocator32() {
    PCRelHiRelocator32_instance = this;
  }
  PCRelHiRelocator32.prototype.invoke_kiq2h6$ = function (mcode, pc, target, dbg) {
    mcode.set_d3qz0$(InstructionField$IMM_31_12_getInstance(), target - pc + 2048 >> 12);
  };
  PCRelHiRelocator32.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PCRelHiRelocator32',
    interfaces: [Relocator32]
  };
  var PCRelHiRelocator32_instance = null;
  function PCRelHiRelocator32_getInstance() {
    if (PCRelHiRelocator32_instance === null) {
      new PCRelHiRelocator32();
    }
    return PCRelHiRelocator32_instance;
  }
  var PCRelHiRelocator;
  function PCRelLoRelocator32() {
    PCRelLoRelocator32_instance = this;
  }
  PCRelLoRelocator32.prototype.invoke_kiq2h6$ = function (mcode, pc, target, dbg) {
    mcode.set_d3qz0$(InstructionField$IMM_11_0_getInstance(), target - (pc - 4) | 0);
  };
  PCRelLoRelocator32.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PCRelLoRelocator32',
    interfaces: [Relocator32]
  };
  var PCRelLoRelocator32_instance = null;
  function PCRelLoRelocator32_getInstance() {
    if (PCRelLoRelocator32_instance === null) {
      new PCRelLoRelocator32();
    }
    return PCRelLoRelocator32_instance;
  }
  var PCRelLoRelocator;
  function PCRelLoStoreRelocator32() {
    PCRelLoStoreRelocator32_instance = this;
  }
  PCRelLoStoreRelocator32.prototype.invoke_kiq2h6$ = function (mcode, pc, target, dbg) {
    var offset = target - (pc - 4) | 0;
    mcode.set_d3qz0$(InstructionField$IMM_4_0_getInstance(), offset);
    mcode.set_d3qz0$(InstructionField$IMM_11_5_getInstance(), offset >> 5);
  };
  PCRelLoStoreRelocator32.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PCRelLoStoreRelocator32',
    interfaces: [Relocator32]
  };
  var PCRelLoStoreRelocator32_instance = null;
  function PCRelLoStoreRelocator32_getInstance() {
    if (PCRelLoStoreRelocator32_instance === null) {
      new PCRelLoStoreRelocator32();
    }
    return PCRelLoStoreRelocator32_instance;
  }
  var PCRelLoStoreRelocator;
  function Relocator32() {
  }
  Relocator32.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Relocator32',
    interfaces: []
  };
  function Relocator64() {
  }
  Relocator64.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Relocator64',
    interfaces: []
  };
  function Relocator(relocator32, relocator64) {
    this.relocator32_0 = relocator32;
    this.relocator64_0 = relocator64;
  }
  Relocator.prototype.invoke_dc9fqr$ = function (mcode, pc, target, is64, dbg) {
    if (is64 === void 0)
      is64 = false;
    if (is64)
      this.relocator64_0.invoke_c7hm8$(mcode, numberToLong(pc), numberToLong(target), dbg);
    else
      this.relocator32_0.invoke_kiq2h6$(mcode, numberToInt(pc), numberToInt(target), dbg);
  };
  Relocator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Relocator',
    interfaces: []
  };
  function BTypeInstruction(name, opcode, funct3, cond16, cond32, cond64, cond128) {
    if (cond16 === void 0)
      cond16 = BTypeInstruction_init$lambda;
    if (cond64 === void 0)
      cond64 = BTypeInstruction_init$lambda_0;
    if (cond128 === void 0)
      cond128 = BTypeInstruction_init$lambda_1;
    Instruction.call(this, name, new BTypeFormat(opcode, funct3), BTypeParser_getInstance(), NoImplementation_getInstance(), new BTypeImplementation32(cond32), new BTypeImplementation64(cond64), NoImplementation_getInstance(), BTypeDisassembler_getInstance());
  }
  function BTypeInstruction_init$lambda(f, f_0) {
    throw new NotImplementedError('no rv64');
  }
  function BTypeInstruction_init$lambda_0(f, f_0) {
    throw new NotImplementedError('no rv64');
  }
  function BTypeInstruction_init$lambda_1(f, f_0) {
    throw new NotImplementedError('no rv128');
  }
  BTypeInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BTypeInstruction',
    interfaces: [Instruction]
  };
  function ITypeInstruction(name, opcode, funct3, eval16, eval32, eval64, eval128) {
    if (eval16 === void 0)
      eval16 = ITypeInstruction_init$lambda;
    if (eval64 === void 0)
      eval64 = ITypeInstruction_init$lambda_0;
    if (eval128 === void 0)
      eval128 = ITypeInstruction_init$lambda_1;
    Instruction.call(this, name, new ITypeFormat(opcode, funct3), ITypeParser_getInstance(), NoImplementation_getInstance(), new ITypeImplementation32(eval32), new ITypeImplementation64(eval64), NoImplementation_getInstance(), ITypeDisassembler_getInstance());
  }
  function ITypeInstruction_init$lambda(f, f_0) {
    throw new NotImplementedError('no rv16');
  }
  function ITypeInstruction_init$lambda_0(f, f_0) {
    throw new NotImplementedError('no rv64');
  }
  function ITypeInstruction_init$lambda_1(f, f_0) {
    throw new NotImplementedError('no rv128');
  }
  ITypeInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ITypeInstruction',
    interfaces: [Instruction]
  };
  function LoadTypeInstruction(name, opcode, funct3, load16, postLoad16, load32, postLoad32, load64, postLoad64, load128, postLoad128) {
    if (load16 === void 0)
      load16 = LoadTypeInstruction_init$lambda;
    if (postLoad16 === void 0)
      postLoad16 = LoadTypeInstruction_init$lambda_0;
    if (postLoad32 === void 0)
      postLoad32 = LoadTypeInstruction_init$lambda_1;
    if (load64 === void 0)
      load64 = LoadTypeInstruction_init$lambda_2;
    if (postLoad64 === void 0)
      postLoad64 = LoadTypeInstruction_init$lambda_3;
    if (load128 === void 0)
      load128 = LoadTypeInstruction_init$lambda_4;
    if (postLoad128 === void 0)
      postLoad128 = LoadTypeInstruction_init$lambda_5;
    Instruction.call(this, name, new ITypeFormat(opcode, funct3), LoadParser_getInstance(), NoImplementation_getInstance(), new LoadImplementation32(load32, postLoad32), new LoadImplementation64(load64, postLoad64), NoImplementation_getInstance(), LoadDisassembler_getInstance());
  }
  function LoadTypeInstruction_init$lambda(f, f_0) {
    throw new NotImplementedError('no rv16');
  }
  function LoadTypeInstruction_init$lambda_0(it) {
    return it;
  }
  function LoadTypeInstruction_init$lambda_1(it) {
    return it;
  }
  function LoadTypeInstruction_init$lambda_2(f, f_0) {
    throw new NotImplementedError('no rv64');
  }
  function LoadTypeInstruction_init$lambda_3(it) {
    return it;
  }
  function LoadTypeInstruction_init$lambda_4(f, f_0) {
    throw new NotImplementedError('no rv128');
  }
  function LoadTypeInstruction_init$lambda_5(it) {
    return it;
  }
  LoadTypeInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoadTypeInstruction',
    interfaces: [Instruction]
  };
  function RTypeInstruction(name, opcode, funct3, funct7, eval16, eval32, eval64, eval128) {
    if (funct7 === void 0)
      funct7 = 0;
    if (eval16 === void 0)
      eval16 = RTypeInstruction_init$lambda;
    if (eval64 === void 0)
      eval64 = RTypeInstruction_init$lambda_0;
    if (eval128 === void 0)
      eval128 = RTypeInstruction_init$lambda_1;
    Instruction.call(this, name, new RTypeFormat(opcode, funct3, funct7), RTypeParser_getInstance(), NoImplementation_getInstance(), new RTypeImplementation32(eval32), new RTypeImplementation64(eval64), NoImplementation_getInstance(), RTypeDisassembler_getInstance());
  }
  function RTypeInstruction_init$lambda(f, f_0) {
    throw new NotImplementedError('no rv16');
  }
  function RTypeInstruction_init$lambda_0(f, f_0) {
    throw new NotImplementedError('no rv64');
  }
  function RTypeInstruction_init$lambda_1(f, f_0) {
    throw new NotImplementedError('no rv128');
  }
  RTypeInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RTypeInstruction',
    interfaces: [Instruction]
  };
  function ShiftImmediateInstruction(name, funct3, funct7, eval16, eval32, eval64, eval128) {
    if (eval16 === void 0)
      eval16 = ShiftImmediateInstruction_init$lambda;
    if (eval64 === void 0)
      eval64 = ShiftImmediateInstruction_init$lambda_0;
    if (eval128 === void 0)
      eval128 = ShiftImmediateInstruction_init$lambda_1;
    Instruction.call(this, name, new RTypeFormat(19, funct3, funct7), ShiftImmediateParser_getInstance(), NoImplementation_getInstance(), new ShiftImmediateImplementation32(eval32), new ShiftImmediateImplementation64(eval64), NoImplementation_getInstance(), ShiftImmediateDisassembler_getInstance());
  }
  function ShiftImmediateInstruction_init$lambda(f, f_0) {
    throw new NotImplementedError('no rv16');
  }
  function ShiftImmediateInstruction_init$lambda_0(f, f_0) {
    throw new NotImplementedError('no rv64');
  }
  function ShiftImmediateInstruction_init$lambda_1(f, f_0) {
    throw new NotImplementedError('no rv128');
  }
  ShiftImmediateInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShiftImmediateInstruction',
    interfaces: [Instruction]
  };
  function ShiftWImmediateInstruction(name, funct3, funct7, opcode, eval16, eval32, eval64, eval128) {
    if (eval16 === void 0)
      eval16 = ShiftWImmediateInstruction_init$lambda;
    if (eval64 === void 0)
      eval64 = ShiftWImmediateInstruction_init$lambda_0;
    if (eval128 === void 0)
      eval128 = ShiftWImmediateInstruction_init$lambda_1;
    Instruction.call(this, name, new RTypeFormat(opcode, funct3, funct7), ShiftImmediateParser_getInstance(), NoImplementation_getInstance(), new ShiftImmediateImplementation32(eval32), new ShiftImmediateImplementation64(eval64), NoImplementation_getInstance(), ShiftImmediateDisassembler_getInstance());
  }
  function ShiftWImmediateInstruction_init$lambda(f, f_0) {
    throw new NotImplementedError('no rv16');
  }
  function ShiftWImmediateInstruction_init$lambda_0(f, f_0) {
    throw new NotImplementedError('no rv64');
  }
  function ShiftWImmediateInstruction_init$lambda_1(f, f_0) {
    throw new NotImplementedError('no rv128');
  }
  ShiftWImmediateInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShiftWImmediateInstruction',
    interfaces: [Instruction]
  };
  function STypeInstruction(name, opcode, funct3, store16, store32, store64, store128) {
    if (store16 === void 0)
      store16 = STypeInstruction_init$lambda;
    if (store64 === void 0)
      store64 = STypeInstruction_init$lambda_0;
    if (store128 === void 0)
      store128 = STypeInstruction_init$lambda_1;
    Instruction.call(this, name, new STypeFormat(opcode, funct3), STypeParser_getInstance(), NoImplementation_getInstance(), new STypeImplementation32(store32), new STypeImplementation64(store64), NoImplementation_getInstance(), STypeDisassembler_getInstance());
  }
  function STypeInstruction_init$lambda(f, f_0, f_1) {
    throw new NotImplementedError('no rv16');
  }
  function STypeInstruction_init$lambda_0(f, f_0, f_1) {
    throw new NotImplementedError('no rv64');
  }
  function STypeInstruction_init$lambda_1(f, f_0, f_1) {
    throw new NotImplementedError('no rv128');
  }
  STypeInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'STypeInstruction',
    interfaces: [Instruction]
  };
  function UTypeInstruction(name, opcode, impl16, impl32, impl64, impl128) {
    if (impl16 === void 0)
      impl16 = UTypeInstruction_init$lambda;
    if (impl64 === void 0)
      impl64 = UTypeInstruction_init$lambda_0;
    if (impl128 === void 0)
      impl128 = UTypeInstruction_init$lambda_1;
    Instruction.call(this, name, new UTypeFormat(opcode), UTypeParser_getInstance(), new RawImplementation(impl16), new RawImplementation(impl32), new RawImplementation(impl64), new RawImplementation(impl128), UTypeDisassembler_getInstance());
  }
  function UTypeInstruction_init$lambda(f, f_0) {
    throw new NotImplementedError('no rv16');
  }
  function UTypeInstruction_init$lambda_0(f, f_0) {
    throw new NotImplementedError('no rv64');
  }
  function UTypeInstruction_init$lambda_1(f, f_0) {
    throw new NotImplementedError('no rv128');
  }
  UTypeInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UTypeInstruction',
    interfaces: [Instruction]
  };
  function AMORTypeInstruction(name, opcode, funct3, aq, rl, funct5, eval16, eval32, eval64, eval128) {
    if (eval16 === void 0)
      eval16 = AMORTypeInstruction_init$lambda;
    if (eval64 === void 0)
      eval64 = AMORTypeInstruction_init$lambda_0;
    if (eval128 === void 0)
      eval128 = AMORTypeInstruction_init$lambda_1;
    Instruction.call(this, name, new AMORTypeFormat(opcode, funct3, funct5, aq, rl), AMORTypeParser_getInstance(), NoImplementation_getInstance(), new AMORTypeImplementation32(eval32), NoImplementation_getInstance(), NoImplementation_getInstance(), AMORTypeDisassembler_getInstance());
  }
  function AMORTypeInstruction_init$lambda(f, f_0) {
    throw new NotImplementedError('no rv16');
  }
  function AMORTypeInstruction_init$lambda_0(f, f_0) {
    throw new NotImplementedError('no rv64');
  }
  function AMORTypeInstruction_init$lambda_1(f, f_0) {
    throw new NotImplementedError('no rv128');
  }
  AMORTypeInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AMORTypeInstruction',
    interfaces: [Instruction]
  };
  function CATypeInstruction(name, opcode2, funct2, funct6, regComp, eval16, eval32, eval64, eval128) {
    if (regComp === void 0)
      regComp = [];
    if (eval16 === void 0)
      eval16 = CATypeInstruction_init$lambda;
    if (eval64 === void 0)
      eval64 = CATypeInstruction_init$lambda_0;
    if (eval128 === void 0)
      eval128 = CATypeInstruction_init$lambda_1;
    Instruction.call(this, name, new CATypeFormat(opcode2, funct2, funct6), CATypeParser_getInstance(), NoImplementation_getInstance(), new CATypeImplementation32(eval32), NoImplementation_getInstance(), NoImplementation_getInstance(), CATypeDisassembler_getInstance());
  }
  function CATypeInstruction_init$lambda(f, f_0) {
    throw new NotImplementedError('no rv16');
  }
  function CATypeInstruction_init$lambda_0(f, f_0) {
    throw new NotImplementedError('no rv64');
  }
  function CATypeInstruction_init$lambda_1(f, f_0) {
    throw new NotImplementedError('no rv128');
  }
  CATypeInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CATypeInstruction',
    interfaces: [Instruction]
  };
  function CRTypeInstruction(name, opcode2, funct4, regComp, eval16, eval32, eval64, eval128) {
    if (regComp === void 0)
      regComp = [];
    if (eval16 === void 0)
      eval16 = CRTypeInstruction_init$lambda;
    if (eval64 === void 0)
      eval64 = CRTypeInstruction_init$lambda_0;
    if (eval128 === void 0)
      eval128 = CRTypeInstruction_init$lambda_1;
    Instruction.call(this, name, new CRTypeFormat(opcode2, funct4, regComp), CRTypeParser_getInstance(), NoImplementation_getInstance(), new CRTypeImplementation32(eval32), NoImplementation_getInstance(), NoImplementation_getInstance(), CRTypeDisassembler_getInstance());
  }
  function CRTypeInstruction_init$lambda(f, f_0) {
    throw new NotImplementedError('no rv16');
  }
  function CRTypeInstruction_init$lambda_0(f, f_0) {
    throw new NotImplementedError('no rv64');
  }
  function CRTypeInstruction_init$lambda_1(f, f_0) {
    throw new NotImplementedError('no rv128');
  }
  CRTypeInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CRTypeInstruction',
    interfaces: [Instruction]
  };
  function F3RTypeInstruction(name, opcode, funct7, funct3, eval32) {
    Instruction.call(this, name, new RTypeFormat(opcode, funct3, funct7), FRTypeParser_getInstance(), NoImplementation_getInstance(), new FRTypeImplementation32(eval32), NoImplementation_getInstance(), NoImplementation_getInstance(), FRTypeDisassembler_getInstance());
  }
  F3RTypeInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'F3RTypeInstruction',
    interfaces: [Instruction]
  };
  function FclassRTypeInstruction(name, opcode, funct3, funct7, eval32) {
    Instruction.call(this, name, new RTypeFormat(opcode, funct3, funct7), FRRTypeParser_getInstance(), NoImplementation_getInstance(), new FFRRTypeImplementation32(eval32), NoImplementation_getInstance(), NoImplementation_getInstance(), FRRTypeDisassembler_getInstance());
  }
  FclassRTypeInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FclassRTypeInstruction',
    interfaces: [Instruction]
  };
  function FFRRTypeInstruction(name, opcode, funct3, funct7, eval32) {
    Instruction.call(this, name, new RTypeFormat(opcode, funct3, funct7), FFRRTypeParser_getInstance(), NoImplementation_getInstance(), new FFRRTypeImplementation32(eval32), NoImplementation_getInstance(), NoImplementation_getInstance(), FFRRTypeDisassembler_getInstance());
  }
  FFRRTypeInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FFRRTypeInstruction',
    interfaces: [Instruction]
  };
  function FITypeInstruction(name, opcode, funct3, eval32) {
    Instruction.call(this, name, new ITypeFormat(opcode, funct3), FITypeParser_getInstance(), NoImplementation_getInstance(), new FITypeImplementation32(eval32), NoImplementation_getInstance(), NoImplementation_getInstance(), FITypeDisassembler_getInstance());
  }
  FITypeInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FITypeInstruction',
    interfaces: [Instruction]
  };
  function FR4TypeInstruction(name, opcode, funct2, eval32) {
    Instruction.call(this, name, new R4TypeFormat(opcode, funct2), FR4TypeParser_getInstance(), NoImplementation_getInstance(), new FR4TypeImplementation32(eval32), NoImplementation_getInstance(), NoImplementation_getInstance(), FR4TypeDisassembler_getInstance());
  }
  FR4TypeInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FR4TypeInstruction',
    interfaces: [Instruction]
  };
  function FRRTypeInstruction(name, opcode, funct7, rs2, eval32) {
    Instruction.call(this, name, new FSRS2TypeFormat(opcode, funct7, rs2), FRRTypeParser_getInstance(), NoImplementation_getInstance(), new FRTypeImplementation32(eval32), NoImplementation_getInstance(), NoImplementation_getInstance(), FRRTypeDisassembler_getInstance());
  }
  FRRTypeInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FRRTypeInstruction',
    interfaces: [Instruction]
  };
  function FRTypeInstruction(name, opcode, funct7, eval32) {
    Instruction.call(this, name, new FRTypeFormat(opcode, funct7), FRTypeParser_getInstance(), NoImplementation_getInstance(), new FRTypeImplementation32(eval32), NoImplementation_getInstance(), NoImplementation_getInstance(), FRTypeDisassembler_getInstance());
  }
  FRTypeInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FRTypeInstruction',
    interfaces: [Instruction]
  };
  function FSTypeInstruction(name, opcode, funct3, store32) {
    Instruction.call(this, name, new STypeFormat(opcode, funct3), FSTypeParser_getInstance(), NoImplementation_getInstance(), new FSTypeImplementation32(store32), NoImplementation_getInstance(), NoImplementation_getInstance(), FSTypeDisassembler_getInstance());
  }
  FSTypeInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FSTypeInstruction',
    interfaces: [Instruction]
  };
  function FtRTypeInstruction(name, opcode, funct3, funct7, rs2, eval32) {
    Instruction.call(this, name, new FSRS2TypeFormat(opcode, funct7, rs2), FRRTypeParser_getInstance(), NoImplementation_getInstance(), new FFRRTypeImplementation32(eval32), NoImplementation_getInstance(), NoImplementation_getInstance(), FRRTypeDisassembler_getInstance());
  }
  FtRTypeInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FtRTypeInstruction',
    interfaces: [Instruction]
  };
  function RtFTypeInstruction(name, opcode, funct3, funct7, rs2, eval32) {
    Instruction.call(this, name, new FSRS2TypeFormat(opcode, funct7, rs2), RFRTypeParser_getInstance(), NoImplementation_getInstance(), new RtFTypeImplementation32(eval32), NoImplementation_getInstance(), NoImplementation_getInstance(), RFRTypeDisassembler_getInstance());
  }
  RtFTypeInstruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RtFTypeInstruction',
    interfaces: [Instruction]
  };
  function Instruction(name, format, parser, impl16, impl32, impl64, impl128, disasm) {
    Instruction$Companion_getInstance();
    this.name = name;
    this.format = format;
    this.parser = parser;
    this.impl16 = impl16;
    this.impl32 = impl32;
    this.impl64 = impl64;
    this.impl128 = impl128;
    this.disasm = disasm;
    Instruction$Companion_getInstance().allInstructions_0.add_11rb$(this);
  }
  function Instruction$Companion() {
    Instruction$Companion_instance = this;
    this.allInstructions_0 = ArrayList_init();
  }
  Instruction$Companion.prototype.get_6cx2xq$ = function (mcode) {
    var tmp$;
    var $receiver = this.allInstructions_0;
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (element.format.length === mcode.length)
        destination.add_11rb$(element);
    }
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_1;
      tmp$_1 = destination.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        if (element_0.format.matches_6cx2xq$(mcode)) {
          firstOrNull$result = element_0;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    tmp$ = firstOrNull$result;
    if (tmp$ == null) {
      throw SimulatorError_init('instruction not found for 0x' + mcode.toString_za3lpa$(16), InstructionNotFoundError_init());
    }
    return tmp$;
  };
  Instruction$Companion.prototype.get_hhf06j$ = function (name, dbg) {
    var tmp$;
    var $receiver = this.allInstructions_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (equals(element.name, name)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    tmp$ = firstOrNull$result;
    if (tmp$ == null) {
      throw AssemblerError_init_1('instruction with name ' + name + ' not found', InstructionNotFoundError_init(), dbg);
    }
    return tmp$;
  };
  Instruction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Instruction$Companion_instance = null;
  function Instruction$Companion_getInstance() {
    if (Instruction$Companion_instance === null) {
      new Instruction$Companion();
    }
    return Instruction$Companion_instance;
  }
  Instruction.prototype.toString = function () {
    return this.name;
  };
  Instruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Instruction',
    interfaces: []
  };
  var getImmWarning;
  function getImmediate(str, min, max, dbg) {
    var tmp$, tmp$_0;
    try {
      tmp$_0 = userStringToInt(str);
    }
     catch (e) {
      if (Kotlin.isType(e, NumberFormatException)) {
        if (str.length > 4)
          tmp$ = ' (might be too large)';
        else
          tmp$ = '';
        var hint = tmp$;
        throw AssemblerError_init('invalid number, got ' + str + hint, dbg);
      }
       else
        throw e;
    }
    var imm = tmp$_0;
    if (!(min <= imm && imm <= max)) {
      var imm_range = max - min + 1 | 0;
      if (min < 0 && imm > 0 && imm < imm_range) {
        var tmp$_1 = imm;
        var x = Math_0.log2(imm_range);
        var topbit = tmp$_1 & 1 << numberToInt(Math_0.ceil(x)) - 1;
        var mask = ~topbit;
        imm = imm & mask;
        imm = imm - topbit | 0;
        getImmWarning = 'The value that was given was larger than the max allowed value (' + max + ') but within a valid unsigned range (0 to ' + (imm_range - 1 | 0) + ") so it will be interpreted just as two's complement bits (" + imm + ').';
      }
       else {
        var largeimm = min < 0 && imm > 0 ? ' or between 0 and ' + imm_range + " to fill the bits using two's complement" : '';
        throw AssemblerError_init('immediate ' + str + ' (= ' + imm + ') out of range (should be between ' + min + ' and ' + max + largeimm + ')', dbg);
      }
    }
    return imm;
  }
  function compareUnsignedShort(v1, v2) {
    return toShort(Kotlin.primitiveCompareTo(toShort(v1 ^ -32768), toShort(v2 ^ -32768)));
  }
  function compareUnsigned(v1, v2) {
    return Kotlin.primitiveCompareTo(v1 ^ -2147483648, v2 ^ -2147483648);
  }
  function compareUnsignedLong(v1, v2) {
    return v1.xor(Long$Companion$MIN_VALUE).compareTo_11rb$(v2.xor(Long$Companion$MIN_VALUE));
  }
  function compareUnsignedQuadWord(v1, v2) {
    return v1.xor_k7dsfo$(QuadWord$Companion_getInstance().MIN_VALUE).compareTo_11rb$(v2.xor_k7dsfo$(QuadWord$Companion_getInstance().MIN_VALUE));
  }
  function Decimal(f, d, isF) {
    if (f === void 0)
      f = 0.0;
    if (d === void 0)
      d = 0.0;
    if (isF === void 0)
      isF = true;
    this.float = f;
    this.double = d;
    this.isFloat = isF;
  }
  Decimal.prototype.isDouble = function () {
    return !this.isFloat;
  };
  Decimal.prototype.set_mx4ult$ = function (float) {
    this.float = float;
    this.isFloat = true;
  };
  Decimal.prototype.set_14dthe$ = function (double) {
    this.double = double;
    this.isFloat = false;
  };
  Decimal.prototype.get = function () {
    if (this.isFloat) {
      return this.float;
    }
     else {
      return this.double;
    }
  };
  Decimal.prototype.getCurrentFloat = function () {
    if (this.isFloat) {
      return this.float;
    }
     else {
      var s = toString_1(toRawBits_0(this.double), 16);
      s += repeat('0', 16 - s.length | 0);
      var bits = toInt_0(substring(s, until(8, 16)), 16);
      return Kotlin.floatFromBits(bits);
    }
  };
  Decimal.prototype.getCurrentDouble = function () {
    if (this.isFloat) {
      var s = toString_0(toRawBits(this.float), 16);
      s += repeat('0', 8 - s.length | 0);
      s = repeat('0', 8) + s;
      var bits = toLong(s, 16);
      return Kotlin.doubleFromBits(bits);
    }
     else {
      return this.double;
    }
  };
  Decimal.prototype.toHex = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var s;
    if (this.isFloat) {
      var isNeg = false;
      if (this.float < 0) {
        isNeg = true;
        tmp$ = this.float * -1;
      }
       else {
        tmp$ = this.float;
      }
      var f = tmp$;
      var b = toRawBits(f);
      s = toString_0(b, 16);
      s = removePrefix(s, '-');
      s = repeat('0', 8 - s.length | 0) + s;
      if (isNeg) {
        switch (s.charCodeAt(0)) {
          case 48:
            tmp$_0 = 56;
            break;
          case 49:
            tmp$_0 = 57;
            break;
          case 50:
            tmp$_0 = 97;
            break;
          case 51:
            tmp$_0 = 98;
            break;
          case 52:
            tmp$_0 = 99;
            break;
          case 53:
            tmp$_0 = 100;
            break;
          case 54:
            tmp$_0 = 101;
            break;
          case 55:
            tmp$_0 = 102;
            break;
          default:tmp$_0 = s.charCodeAt(0);
            break;
        }
        var new_0 = tmp$_0;
        var $receiver = s;
        var range = new IntRange(0, 0);
        var tmp$_3;
        var other = removeRange(Kotlin.isCharSequence(tmp$_3 = $receiver) ? tmp$_3 : throwCCE(), range).toString();
        s = String.fromCharCode(new_0) + other;
      }
      s = '0x' + s;
    }
     else {
      var isNeg_0 = false;
      if (this.double < 0) {
        isNeg_0 = true;
        tmp$_1 = this.double * -1;
      }
       else {
        tmp$_1 = this.double;
      }
      var d = tmp$_1;
      var b_0 = toRawBits_0(d);
      s = toString_1(b_0, 16);
      s = removePrefix(s, '-');
      s = repeat('0', 16 - s.length | 0) + s;
      if (isNeg_0) {
        switch (s.charCodeAt(0)) {
          case 48:
            tmp$_2 = 56;
            break;
          case 49:
            tmp$_2 = 57;
            break;
          case 50:
            tmp$_2 = 97;
            break;
          case 51:
            tmp$_2 = 98;
            break;
          case 52:
            tmp$_2 = 99;
            break;
          case 53:
            tmp$_2 = 100;
            break;
          case 54:
            tmp$_2 = 101;
            break;
          case 55:
            tmp$_2 = 102;
            break;
          default:tmp$_2 = s.charCodeAt(0);
            break;
        }
        var new_1 = tmp$_2;
        var $receiver_0 = s;
        var range_0 = new IntRange(0, 0);
        var tmp$_4;
        var other_0 = removeRange(Kotlin.isCharSequence(tmp$_4 = $receiver_0) ? tmp$_4 : throwCCE(), range_0).toString();
        s = String.fromCharCode(new_1) + other_0;
      }
      s = '0x' + s;
    }
    return s;
  };
  Decimal.prototype.toDecimal = function () {
    var s = '';
    if (this.isFloat) {
      if (toRawBits(this.float) === -2147483648) {
        s = '-';
      }
      s += this.float.toString();
    }
     else {
      if (equals(toString_1(toRawBits_0(this.double), 16), '8000000000000000')) {
        s = '-';
      }
      s += this.double.toString();
    }
    return s;
  };
  Decimal.prototype.toUnsigned = function () {
    var s;
    if (this.isFloat) {
      var x = this.float;
      s = Math_0.abs(x).toString();
    }
     else {
      var x_0 = this.double;
      s = Math_0.abs(x_0).toString();
    }
    return s;
  };
  Decimal.prototype.toAscii = function () {
    return this.toHex();
  };
  Decimal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Decimal',
    interfaces: []
  };
  function fld$lambda(addr, sim) {
    var tmp$ = void 0;
    var bits = Kotlin.Long.fromInt(sim.loadWordwCache_3p81yu$(addr)).or(Kotlin.Long.fromInt(sim.loadWordwCache_3p81yu$(addr + 4 | 0)).shiftLeft(32));
    return new Decimal(tmp$, Kotlin.doubleFromBits(bits), false);
  }
  var fld;
  function faddd$lambda(a, b) {
    return new Decimal(void 0, a.getCurrentDouble() + b.getCurrentDouble(), false);
  }
  var faddd;
  function fclassd$lambda(a, b) {
    var bits = 0;
    if (a.getCurrentDouble() === kotlin_js_internal_DoubleCompanionObject.NEGATIVE_INFINITY)
      bits = bits | 1;
    if (a.getCurrentDouble() < 0 && a.getCurrentDouble() >= -1.17549435E-38)
      bits = bits | 2;
    if (a.getCurrentDouble() < 0 && a.getCurrentDouble() < -1.17549435E-38)
      bits = bits | 4;
    if (equals(toRawBits_0(a.getCurrentDouble()), L0))
      bits = bits | 8;
    if (equals(toRawBits_0(a.getCurrentDouble()), L576460752303423488))
      bits = bits | 16;
    if (a.getCurrentDouble() > 0 && a.getCurrentDouble() >= 1.17549435E-38)
      bits = bits | 32;
    if (a.getCurrentDouble() > 0 && a.getCurrentDouble() < 1.17549435E-38)
      bits = bits | 64;
    if (a.getCurrentDouble() === kotlin_js_internal_DoubleCompanionObject.POSITIVE_INFINITY)
      bits = bits | 128;
    if (equals(kotlin_js_internal_DoubleCompanionObject.NaN, a.getCurrentDouble()))
      bits = bits | 256;
    if (equals(kotlin_js_internal_DoubleCompanionObject.NaN, a.getCurrentDouble()))
      bits = bits | 512;
    return bits;
  }
  var fclassd;
  function fcvtdw$lambda(a) {
    return new Decimal(void 0, a, false);
  }
  var fcvtdw;
  function fcvtdwu$lambda(a) {
    return new Decimal(void 0, abs(a), false);
  }
  var fcvtdwu;
  function fcvtwd$lambda(a, b) {
    return numberToInt(round(a.getCurrentDouble()));
  }
  var fcvtwd;
  function fcvtwud$lambda(a, b) {
    var x = round(a.getCurrentDouble());
    return numberToInt(Math_0.abs(x));
  }
  var fcvtwud;
  function feqd$lambda(a, b) {
    return a.getCurrentDouble() === b.getCurrentDouble() ? 1 : 0;
  }
  var feqd;
  function fled$lambda(a, b) {
    return a.getCurrentDouble() <= b.getCurrentDouble() ? 1 : 0;
  }
  var fled;
  function fltd$lambda(a, b) {
    return a.getCurrentDouble() < b.getCurrentDouble() ? 1 : 0;
  }
  var fltd;
  function fmaddd$lambda(a, b, c) {
    return new Decimal(void 0, a.getCurrentDouble() * b.getCurrentDouble() + c.getCurrentDouble(), false);
  }
  var fmaddd;
  function fmaxd$lambda(a, b) {
    var tmp$ = void 0;
    var a_0 = a.getCurrentDouble();
    var b_0 = b.getCurrentDouble();
    return new Decimal(tmp$, Math_0.max(a_0, b_0), false);
  }
  var fmaxd;
  function fmind$lambda(a, b) {
    var tmp$ = void 0;
    var a_0 = a.getCurrentDouble();
    var b_0 = b.getCurrentDouble();
    return new Decimal(tmp$, Math_0.min(a_0, b_0), false);
  }
  var fmind;
  function fmsubd$lambda(a, b, c) {
    return new Decimal(void 0, a.getCurrentDouble() * b.getCurrentDouble() - c.getCurrentDouble(), false);
  }
  var fmsubd;
  function fmuld$lambda(a, b) {
    return new Decimal(void 0, a.getCurrentDouble() * b.getCurrentDouble(), false);
  }
  var fmuld;
  function fmvdx$lambda(a) {
    throw InstructionNotSupportedError_init('fmv.d.x is only for 64 bit systems!');
  }
  var fmvdx;
  function fmvxd$lambda(a, b) {
    throw InstructionNotSupportedError_init('fmv.x.d is only for 64 bit systems!');
  }
  var fmvxd;
  function fnmaddd$lambda(a, b, c) {
    return new Decimal(void 0, -(a.getCurrentDouble() * b.getCurrentDouble() + c.getCurrentDouble()), false);
  }
  var fnmaddd;
  function fnmsubd$lambda(a, b, c) {
    return new Decimal(void 0, -(a.getCurrentDouble() * b.getCurrentDouble() - c.getCurrentDouble()), false);
  }
  var fnmsubd;
  function fsgnjd$lambda(a, b) {
    return new Decimal(void 0, withSign(a.getCurrentDouble(), b.getCurrentDouble()), false);
  }
  var fsgnjd;
  function fsgnjnd$lambda(a, b) {
    return new Decimal(void 0, withSign(a.getCurrentDouble(), get_sign_0(toRawBits_0(b.getCurrentDouble()).xor(L576460752303423488))), false);
  }
  var fsgnjnd;
  function fsgnjxd$lambda(a, b) {
    return new Decimal(void 0, withSign(a.getCurrentDouble(), get_sign_0(toRawBits_0(a.getCurrentDouble()).xor(toRawBits_0(b.getCurrentDouble())))), false);
  }
  var fsgnjxd;
  function fsqrtd$lambda(a, b) {
    var tmp$ = void 0;
    var x = a.getCurrentDouble();
    return new Decimal(tmp$, Math_0.sqrt(x), false);
  }
  var fsqrtd;
  function fsubd$lambda(a, b) {
    return new Decimal(void 0, a.getCurrentDouble() - b.getCurrentDouble(), false);
  }
  var fsubd;
  function fsd$lambda(sim, address, value) {
    sim.storeWordwCache_z8e4lc$(address, toRawBits_0(value.getCurrentDouble()).and(L4294967295).toInt());
    sim.storeWordwCache_z8e4lc$(address + 4 | 0, toRawBits_0(value.getCurrentDouble()).shiftRight(32).and(L4294967295).toInt());
    return Unit;
  }
  var fsd;
  function fcvtds$lambda(a, b) {
    return new Decimal(void 0, a.getCurrentFloat(), false);
  }
  var fcvtds;
  function fcvtsd$lambda(a, b) {
    return new Decimal(a.getCurrentDouble());
  }
  var fcvtsd;
  function flw$lambda(addr, sim) {
    var bits = sim.loadWordwCache_3p81yu$(addr);
    return new Decimal(Kotlin.floatFromBits(bits));
  }
  var flw;
  function fadds$lambda(a, b) {
    return new Decimal(a.getCurrentFloat() + b.getCurrentFloat());
  }
  var fadds;
  function fclasss$lambda(a, b) {
    var bits = 0;
    if (a.getCurrentFloat() === kotlin_js_internal_FloatCompanionObject.NEGATIVE_INFINITY)
      bits = bits | 1;
    if (a.getCurrentFloat() < 0 && a.getCurrentFloat() >= -1.17549435E-38)
      bits = bits | 2;
    if (a.getCurrentFloat() < 0 && a.getCurrentFloat() < -1.17549435E-38)
      bits = bits | 4;
    if (toRawBits(a.getCurrentFloat()) === 0)
      bits = bits | 8;
    if (toRawBits(a.getCurrentFloat()) === -2147483648)
      bits = bits | 16;
    if (a.getCurrentFloat() > 0 && a.getCurrentFloat() >= 1.17549435E-38)
      bits = bits | 32;
    if (a.getCurrentFloat() > 0 && a.getCurrentFloat() < 1.17549435E-38)
      bits = bits | 64;
    if (a.getCurrentFloat() === kotlin_js_internal_FloatCompanionObject.POSITIVE_INFINITY)
      bits = bits | 128;
    if (equals(kotlin_js_internal_FloatCompanionObject.NaN, a.getCurrentFloat()))
      bits = bits | 256;
    if (equals(kotlin_js_internal_FloatCompanionObject.NaN, a.getCurrentFloat()))
      bits = bits | 512;
    return bits;
  }
  var fclasss;
  function fcvtsw$lambda(a) {
    return new Decimal(a);
  }
  var fcvtsw;
  function fcvtswu$lambda(a) {
    return new Decimal(abs(a));
  }
  var fcvtswu;
  function fcvtws$lambda(a, b) {
    return numberToInt(round(a.getCurrentFloat()));
  }
  var fcvtws;
  function fcvtwus$lambda(a, b) {
    var x = round(a.getCurrentFloat());
    return numberToInt(Math_0.abs(x));
  }
  var fcvtwus;
  function fdivs$lambda(a, b) {
    return new Decimal(a.getCurrentFloat() / b.getCurrentFloat());
  }
  var fdivs;
  function feqs$lambda(a, b) {
    return a.getCurrentFloat() === b.getCurrentFloat() ? 1 : 0;
  }
  var feqs;
  function fles$lambda(a, b) {
    return a.getCurrentFloat() <= b.getCurrentFloat() ? 1 : 0;
  }
  var fles;
  function flts$lambda(a, b) {
    return a.getCurrentFloat() < b.getCurrentFloat() ? 1 : 0;
  }
  var flts;
  function fmadds$lambda(a, b, c) {
    return new Decimal(a.getCurrentFloat() * b.getCurrentFloat() + c.getCurrentFloat());
  }
  var fmadds;
  function fmaxs$lambda(a, b) {
    var a_0 = a.getCurrentFloat();
    var b_0 = b.getCurrentFloat();
    return new Decimal(Math_0.max(a_0, b_0));
  }
  var fmaxs;
  function fmins$lambda(a, b) {
    var a_0 = a.getCurrentFloat();
    var b_0 = b.getCurrentFloat();
    return new Decimal(Math_0.min(a_0, b_0));
  }
  var fmins;
  function fmsubs$lambda(a, b, c) {
    return new Decimal(a.getCurrentFloat() * b.getCurrentFloat() - c.getCurrentFloat());
  }
  var fmsubs;
  function fmuls$lambda(a, b) {
    return new Decimal(a.getCurrentFloat() * b.getCurrentFloat());
  }
  var fmuls;
  function fmvsx$lambda(a) {
    return new Decimal(Kotlin.floatFromBits(a));
  }
  var fmvsx;
  function fmvxs$lambda(a, b) {
    return toRawBits(a.getCurrentFloat());
  }
  var fmvxs;
  function fnmadds$lambda(a, b, c) {
    return new Decimal(-(a.getCurrentFloat() * b.getCurrentFloat() + c.getCurrentFloat()));
  }
  var fnmadds;
  function fnmsubs$lambda(a, b, c) {
    return new Decimal(-(a.getCurrentFloat() * b.getCurrentFloat() - c.getCurrentFloat()));
  }
  var fnmsubs;
  function fsgnjs$lambda(a, b) {
    return new Decimal(withSign(a.getCurrentFloat(), b.getCurrentFloat()));
  }
  var fsgnjs;
  function fsgnjns$lambda(a, b) {
    return new Decimal(withSign(a.getCurrentFloat(), get_sign(toRawBits(b.getCurrentFloat()) ^ -2147483648)));
  }
  var fsgnjns;
  function fsgnjxs$lambda(a, b) {
    return new Decimal(withSign(a.getCurrentFloat(), get_sign(toRawBits(a.getCurrentFloat()) ^ toRawBits(b.getCurrentFloat()))));
  }
  var fsgnjxs;
  function fsqrts$lambda(a, b) {
    var x = a.getCurrentFloat();
    return new Decimal(Math_0.sqrt(x));
  }
  var fsqrts;
  function fsubs$lambda(a, b) {
    return new Decimal(a.getCurrentFloat() - b.getCurrentFloat());
  }
  var fsubs;
  function fsw$lambda(sim, address, value) {
    sim.storeWordwCache_z8e4lc$(address, toRawBits(value.getCurrentFloat()));
    return Unit;
  }
  var fsw;
  function InstructionNotFoundError() {
    Kotlin.captureStack(Throwable, this);
    this.name = 'InstructionNotFoundError';
  }
  Object.defineProperty(InstructionNotFoundError.prototype, 'message', {
    get: function () {
      return this.message_yf7poh$_0;
    }
  });
  Object.defineProperty(InstructionNotFoundError.prototype, 'cause', {
    get: function () {
      return this.cause_fzp4gz$_0;
    }
  });
  InstructionNotFoundError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstructionNotFoundError',
    interfaces: [Throwable]
  };
  function InstructionNotFoundError_init(msg, $this) {
    if (msg === void 0)
      msg = null;
    $this = $this || Object.create(InstructionNotFoundError.prototype);
    Throwable.call($this);
    $this.message_yf7poh$_0 = msg;
    $this.cause_fzp4gz$_0 = null;
    InstructionNotFoundError.call($this);
    return $this;
  }
  function InstructionNotSupportedError() {
    Kotlin.captureStack(Throwable, this);
    this.name = 'InstructionNotSupportedError';
  }
  Object.defineProperty(InstructionNotSupportedError.prototype, 'message', {
    get: function () {
      return this.message_phobrp$_0;
    }
  });
  Object.defineProperty(InstructionNotSupportedError.prototype, 'cause', {
    get: function () {
      return this.cause_5tljk9$_0;
    }
  });
  InstructionNotSupportedError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstructionNotSupportedError',
    interfaces: [Throwable]
  };
  function InstructionNotSupportedError_init(msg, $this) {
    if (msg === void 0)
      msg = null;
    $this = $this || Object.create(InstructionNotSupportedError.prototype);
    Throwable.call($this);
    $this.message_phobrp$_0 = msg;
    $this.cause_5tljk9$_0 = null;
    InstructionNotSupportedError.call($this);
    return $this;
  }
  function InstructionReservedError() {
    this.name = 'InstructionReservedError';
  }
  InstructionReservedError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstructionReservedError',
    interfaces: [InstructionNotSupportedError]
  };
  function InstructionReservedError_init(msg, $this) {
    if (msg === void 0)
      msg = null;
    $this = $this || Object.create(InstructionReservedError.prototype);
    InstructionNotSupportedError_init(msg, $this);
    InstructionReservedError.call($this);
    return $this;
  }
  function addi$lambda(a, b) {
    return toShort(a + b);
  }
  function addi$lambda_0(a, b) {
    return a + b | 0;
  }
  function addi$lambda_1(a, b) {
    return a.add(b);
  }
  function addi$lambda_2(a, b) {
    return a.plus_k7dsfo$(b);
  }
  var addi;
  function addiw$lambda(a, b) {
    throw InstructionNotSupportedError_init('addiw is not supported on 16 bit systems!');
  }
  function addiw$lambda_0(a, b) {
    throw InstructionNotSupportedError_init('addiw is not supported on 32 bit systems!');
  }
  function addiw$lambda_1(a, b) {
    return Kotlin.Long.fromInt(a.toInt() + b.toInt() | 0);
  }
  function addiw$lambda_2(a, b) {
    return toQuadWord_2(a.toInt() + b.toInt() | 0);
  }
  var addiw;
  function andi$lambda(a, b) {
    return toShort(a & b);
  }
  function andi$lambda_0(a, b) {
    return a & b;
  }
  function andi$lambda_1(a, b) {
    return a.and(b);
  }
  function andi$lambda_2(a, b) {
    return a.and_k7dsfo$(b);
  }
  var andi;
  function csrrc$lambda(mcode, sim) {
    var vrs1 = numberToInt(sim.getReg_za3lpa$(mcode.get_cv51c2$(InstructionField$RS1_getInstance())));
    var vcsr = numberToInt(sim.getReg_za3lpa$(32));
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), vcsr);
    sim.setReg_135bro$(32, ~vrs1 & vcsr);
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function csrrc$lambda_0(mcode, sim) {
    var vrs1 = numberToLong(sim.getReg_za3lpa$(mcode.get_cv51c2$(InstructionField$RS1_getInstance())));
    var vcsr = numberToLong(sim.getReg_za3lpa$(32));
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), vcsr);
    sim.setReg_135bro$(32, vrs1.inv().and(vcsr));
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function csrrc$lambda_1(mcode, sim) {
    var vrs1 = toQuadWord(sim.getReg_za3lpa$(mcode.get_cv51c2$(InstructionField$RS1_getInstance())));
    var vcsr = toQuadWord(sim.getReg_za3lpa$(32));
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), vcsr);
    sim.setReg_135bro$(32, vrs1.inv().and_k7dsfo$(vcsr));
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function csrrc$lambda_2(it) {
    var dest = it.get_cv51c2$(InstructionField$RD_getInstance());
    var source = it.get_cv51c2$(InstructionField$RS1_getInstance());
    var csr = it.get_cv51c2$(InstructionField$IMM_11_0_getInstance());
    return 'csrrc x' + dest + ' ' + csr + ' x' + source;
  }
  var csrrc;
  function csrrci$lambda(mcode, sim) {
    var imm = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var vcsr = numberToInt(sim.getReg_za3lpa$(32));
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), vcsr);
    sim.setReg_135bro$(32, ~imm & vcsr);
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function csrrci$lambda_0(mcode, sim) {
    var imm = Kotlin.Long.fromInt(mcode.get_cv51c2$(InstructionField$RS1_getInstance()));
    var vcsr = numberToLong(sim.getReg_za3lpa$(32));
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), vcsr);
    sim.setReg_135bro$(32, imm.inv().and(vcsr));
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function csrrci$lambda_1(mcode, sim) {
    var imm = toQuadWord_2(mcode.get_cv51c2$(InstructionField$RS1_getInstance()));
    var vcsr = toQuadWord(sim.getReg_za3lpa$(32));
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), vcsr);
    sim.setReg_135bro$(32, imm.inv().and_k7dsfo$(vcsr));
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function csrrci$lambda_2(it) {
    var dest = it.get_cv51c2$(InstructionField$RD_getInstance());
    var source = it.get_cv51c2$(InstructionField$RS1_getInstance());
    var csr = it.get_cv51c2$(InstructionField$IMM_11_0_getInstance());
    return 'csrrci x' + dest + ' ' + csr + ' ' + source;
  }
  var csrrci;
  function csrrs$lambda(mcode, sim) {
    var vrs1 = numberToInt(sim.getReg_za3lpa$(mcode.get_cv51c2$(InstructionField$RS1_getInstance())));
    var vcsr = numberToInt(sim.getReg_za3lpa$(32));
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), vcsr);
    sim.setReg_135bro$(32, vrs1 | vcsr);
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function csrrs$lambda_0(mcode, sim) {
    var vrs1 = numberToLong(sim.getReg_za3lpa$(mcode.get_cv51c2$(InstructionField$RS1_getInstance())));
    var vcsr = numberToLong(sim.getReg_za3lpa$(32));
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), vcsr);
    sim.setReg_135bro$(32, vrs1.or(vcsr));
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function csrrs$lambda_1(mcode, sim) {
    var vrs1 = toQuadWord(sim.getReg_za3lpa$(mcode.get_cv51c2$(InstructionField$RS1_getInstance())));
    var vcsr = toQuadWord(sim.getReg_za3lpa$(32));
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), vcsr);
    sim.setReg_135bro$(32, vrs1.or_k7dsfo$(vcsr));
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function csrrs$lambda_2(it) {
    var dest = it.get_cv51c2$(InstructionField$RD_getInstance());
    var source = it.get_cv51c2$(InstructionField$RS1_getInstance());
    var csr = it.get_cv51c2$(InstructionField$IMM_11_0_getInstance());
    return 'csrrs x' + dest + ' ' + csr + ' x' + source;
  }
  var csrrs;
  function csrrsi$lambda(mcode, sim) {
    var imm = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var vcsr = numberToInt(sim.getReg_za3lpa$(32));
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), vcsr);
    sim.setReg_135bro$(32, imm | vcsr);
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function csrrsi$lambda_0(mcode, sim) {
    var imm = Kotlin.Long.fromInt(mcode.get_cv51c2$(InstructionField$RS1_getInstance()));
    var vcsr = numberToLong(sim.getReg_za3lpa$(32));
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), vcsr);
    sim.setReg_135bro$(32, imm.or(vcsr));
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function csrrsi$lambda_1(mcode, sim) {
    var imm = toQuadWord_2(mcode.get_cv51c2$(InstructionField$RS1_getInstance()));
    var vcsr = toQuadWord(sim.getReg_za3lpa$(32));
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), vcsr);
    sim.setReg_135bro$(32, imm.or_k7dsfo$(vcsr));
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function csrrsi$lambda_2(it) {
    var dest = it.get_cv51c2$(InstructionField$RD_getInstance());
    var source = it.get_cv51c2$(InstructionField$RS1_getInstance());
    var csr = it.get_cv51c2$(InstructionField$IMM_11_0_getInstance());
    return 'csrrsi x' + dest + ' ' + csr + ' ' + source;
  }
  var csrrsi;
  function csrrw$lambda(mcode, sim) {
    var vrs1 = numberToInt(sim.getReg_za3lpa$(mcode.get_cv51c2$(InstructionField$RS1_getInstance())));
    var vcsr = numberToInt(sim.getReg_za3lpa$(32));
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), vcsr);
    sim.setReg_135bro$(32, vrs1);
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function csrrw$lambda_0(mcode, sim) {
    var vrs1 = numberToLong(sim.getReg_za3lpa$(mcode.get_cv51c2$(InstructionField$RS1_getInstance())));
    var vcsr = numberToLong(sim.getReg_za3lpa$(32));
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), vcsr);
    sim.setReg_135bro$(32, vrs1);
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function csrrw$lambda_1(mcode, sim) {
    var vrs1 = toQuadWord(sim.getReg_za3lpa$(mcode.get_cv51c2$(InstructionField$RS1_getInstance())));
    var vcsr = toQuadWord(sim.getReg_za3lpa$(32));
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), vcsr);
    sim.setReg_135bro$(32, vrs1);
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function csrrw$lambda_2(it) {
    var dest = it.get_cv51c2$(InstructionField$RD_getInstance());
    var source = it.get_cv51c2$(InstructionField$RS1_getInstance());
    var csr = it.get_cv51c2$(InstructionField$IMM_11_0_getInstance());
    return 'csrrw x' + dest + ' ' + csr + ' x' + source;
  }
  var csrrw;
  function csrrwi$lambda(mcode, sim) {
    var imm = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var vcsr = numberToInt(sim.getReg_za3lpa$(32));
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), vcsr);
    sim.setReg_135bro$(32, imm);
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function csrrwi$lambda_0(mcode, sim) {
    var imm = Kotlin.Long.fromInt(mcode.get_cv51c2$(InstructionField$RS1_getInstance()));
    var vcsr = numberToLong(sim.getReg_za3lpa$(32));
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), vcsr);
    sim.setReg_135bro$(32, imm);
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function csrrwi$lambda_1(mcode, sim) {
    var imm = toQuadWord_2(mcode.get_cv51c2$(InstructionField$RS1_getInstance()));
    var vcsr = toQuadWord(sim.getReg_za3lpa$(32));
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), vcsr);
    sim.setReg_135bro$(32, imm);
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function csrrwi$lambda_2(it) {
    var dest = it.get_cv51c2$(InstructionField$RD_getInstance());
    var source = it.get_cv51c2$(InstructionField$RS1_getInstance());
    var csr = it.get_cv51c2$(InstructionField$IMM_11_0_getInstance());
    return 'csrrwi x' + dest + ' ' + csr + ' ' + source;
  }
  var csrrwi;
  function ebreak$lambda(mcode, sim) {
    sim.ebreak = true;
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function ebreak$lambda_0(mcode, sim) {
    sim.ebreak = true;
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function ebreak$lambda_1(mcode, sim) {
    sim.ebreak = true;
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function ebreak$lambda_2(mcode, sim) {
    sim.ebreak = true;
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function ebreak$lambda_3(it) {
    return 'ebreak';
  }
  var ebreak;
  function clib(sim) {
    var whichCall = sim.getReg_za3lpa$(Registers_getInstance().a6);
    switch (whichCall) {
      case 1:
        malloc(sim);
        break;
      case 2:
        calloc(sim);
        break;
      case 3:
        realloc(sim);
        break;
      case 4:
        free(sim);
        break;
      case 5:
        mallocActiveNumBlocks(sim);
        break;
      default:Renderer_getInstance().printConsole_kcmwxo$('Invalid clib ecall ' + whichCall.toString());
        break;
    }
  }
  function malloc(sim) {
    var size = numberToInt(sim.getReg_za3lpa$(Registers_getInstance().a1));
    var dest = sim.alloc.malloc_fzusl$(size);
    sim.setReg_135bro$(Registers_getInstance().a0, dest);
  }
  function calloc(sim) {
    var nitems = numberToInt(sim.getReg_za3lpa$(Registers_getInstance().a1));
    var size = numberToInt(sim.getReg_za3lpa$(Registers_getInstance().a2));
    var dest = sim.alloc.calloc_vux9f0$(nitems, size);
    sim.setReg_135bro$(Registers_getInstance().a0, dest);
  }
  function realloc(sim) {
    var ptr = numberToInt(sim.getReg_za3lpa$(Registers_getInstance().a1));
    var size = numberToInt(sim.getReg_za3lpa$(Registers_getInstance().a2));
    var dest = sim.alloc.realloc_vux9f0$(ptr, size);
    sim.setReg_135bro$(Registers_getInstance().a0, dest);
  }
  function free(sim) {
    var ptr = numberToInt(sim.getReg_za3lpa$(Registers_getInstance().a1));
    sim.alloc.free_za3lpa$(ptr);
  }
  function mallocActiveNumBlocks(sim) {
    var amt = sim.alloc.numActiveBlocks();
    sim.setReg_135bro$(Registers_getInstance().a0, amt);
  }
  function ecall$lambda(mcode, sim) {
    var whichCall = sim.getReg_za3lpa$(Registers_getInstance().a0);
    switch (whichCall) {
      case 1:
        printInteger(sim);
        break;
      case 4:
        printString(sim);
        break;
      case 5:
        atoi(sim);
        break;
      case 9:
        sbrk(sim);
        break;
      case 10:
        exit(sim);
        break;
      case 11:
        printChar(sim);
        break;
      case 13:
        openFile(sim);
        break;
      case 14:
        readFile(sim);
        break;
      case 15:
        writeFile(sim);
        break;
      case 16:
        closeFile(sim);
        break;
      case 17:
        exitWithCode(sim);
        break;
      case 18:
        fflush(sim);
        break;
      case 19:
        feof(sim);
        break;
      case 20:
        ferror(sim);
        break;
      case 34:
        printHex(sim);
        break;
      case 972:
        clib(sim);
        break;
      default:Renderer_getInstance().printConsole_kcmwxo$('Invalid ecall ' + whichCall.toString());
        break;
    }
    if (!(equals(whichCall, 10) || equals(whichCall, 17))) {
      sim.incrementPC_3p81yu$(mcode.length);
    }
    return Unit;
  }
  function ecall$lambda_0(mcode, sim) {
    var whichCall = numberToLong(sim.getReg_za3lpa$(10));
    if (equals(whichCall, L1))
      printInteger(sim);
    else if (equals(whichCall, L4))
      printString(sim);
    else if (equals(whichCall, L5))
      atoi(sim);
    else if (equals(whichCall, L9))
      sbrk(sim);
    else if (equals(whichCall, L10))
      exit(sim);
    else if (equals(whichCall, L11))
      printChar(sim);
    else if (equals(whichCall, L13))
      openFile(sim);
    else if (equals(whichCall, L14))
      readFile(sim);
    else if (equals(whichCall, L15))
      writeFile(sim);
    else if (equals(whichCall, L16))
      closeFile(sim);
    else if (equals(whichCall, L17))
      exitWithCode(sim);
    else if (equals(whichCall, L18))
      fflush(sim);
    else if (equals(whichCall, L19))
      feof(sim);
    else if (equals(whichCall, L20))
      ferror(sim);
    else if (equals(whichCall, L34))
      printHex(sim);
    else
      Renderer_getInstance().printConsole_kcmwxo$('Invalid ecall ' + whichCall.toString());
    if (!(equals(whichCall, L10) || equals(whichCall, L17))) {
      sim.incrementPC_3p81yu$(mcode.length);
    }
    return Unit;
  }
  function ecall$lambda_1(mcode, sim) {
    var whichCall = toQuadWord(sim.getReg_za3lpa$(10));
    if (equals(whichCall, new QuadWord(1)))
      printInteger(sim);
    else if (equals(whichCall, new QuadWord(4)))
      printString(sim);
    else if (equals(whichCall, new QuadWord(5)))
      atoi(sim);
    else if (equals(whichCall, new QuadWord(9)))
      sbrk(sim);
    else if (equals(whichCall, new QuadWord(10)))
      exit(sim);
    else if (equals(whichCall, new QuadWord(11)))
      printChar(sim);
    else if (equals(whichCall, new QuadWord(13)))
      openFile(sim);
    else if (equals(whichCall, new QuadWord(14)))
      readFile(sim);
    else if (equals(whichCall, new QuadWord(15)))
      writeFile(sim);
    else if (equals(whichCall, new QuadWord(16)))
      closeFile(sim);
    else if (equals(whichCall, new QuadWord(17)))
      exitWithCode(sim);
    else if (equals(whichCall, new QuadWord(18)))
      fflush(sim);
    else if (equals(whichCall, new QuadWord(19)))
      feof(sim);
    else if (equals(whichCall, new QuadWord(20)))
      ferror(sim);
    else if (equals(whichCall, new QuadWord(34)))
      printHex(sim);
    else
      Renderer_getInstance().printConsole_kcmwxo$('Invalid ecall ' + whichCall);
    if (!(equals(whichCall, new QuadWord(10)) || equals(whichCall, new QuadWord(17)))) {
      sim.incrementPC_3p81yu$(mcode.length);
    }
    return Unit;
  }
  function ecall$lambda_2(it) {
    return 'ecall';
  }
  var ecall;
  function Syscall(name, ordinal, syscall) {
    Enum.call(this);
    this.syscall = syscall;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Syscall_initFields() {
    Syscall_initFields = function () {
    };
    Syscall$PRINT_INT_instance = new Syscall('PRINT_INT', 0, 1);
    Syscall$PRINT_STR_instance = new Syscall('PRINT_STR', 1, 4);
    Syscall$ATOI_instance = new Syscall('ATOI', 2, 5);
    Syscall$SBRK_instance = new Syscall('SBRK', 3, 9);
    Syscall$EXIT_instance = new Syscall('EXIT', 4, 10);
    Syscall$PRINT_CHAR_instance = new Syscall('PRINT_CHAR', 5, 11);
    Syscall$OPEN_instance = new Syscall('OPEN', 6, 13);
    Syscall$READ_instance = new Syscall('READ', 7, 14);
    Syscall$WRITE_instance = new Syscall('WRITE', 8, 15);
    Syscall$CLOSE_instance = new Syscall('CLOSE', 9, 16);
    Syscall$EXIT_WITH_CODE_instance = new Syscall('EXIT_WITH_CODE', 10, 17);
    Syscall$FLUSH_instance = new Syscall('FLUSH', 11, 18);
    Syscall$FEOF_instance = new Syscall('FEOF', 12, 19);
    Syscall$FERROR_instance = new Syscall('FERROR', 13, 20);
    Syscall$PRINT_HEX_instance = new Syscall('PRINT_HEX', 14, 34);
  }
  var Syscall$PRINT_INT_instance;
  function Syscall$PRINT_INT_getInstance() {
    Syscall_initFields();
    return Syscall$PRINT_INT_instance;
  }
  var Syscall$PRINT_STR_instance;
  function Syscall$PRINT_STR_getInstance() {
    Syscall_initFields();
    return Syscall$PRINT_STR_instance;
  }
  var Syscall$ATOI_instance;
  function Syscall$ATOI_getInstance() {
    Syscall_initFields();
    return Syscall$ATOI_instance;
  }
  var Syscall$SBRK_instance;
  function Syscall$SBRK_getInstance() {
    Syscall_initFields();
    return Syscall$SBRK_instance;
  }
  var Syscall$EXIT_instance;
  function Syscall$EXIT_getInstance() {
    Syscall_initFields();
    return Syscall$EXIT_instance;
  }
  var Syscall$PRINT_CHAR_instance;
  function Syscall$PRINT_CHAR_getInstance() {
    Syscall_initFields();
    return Syscall$PRINT_CHAR_instance;
  }
  var Syscall$OPEN_instance;
  function Syscall$OPEN_getInstance() {
    Syscall_initFields();
    return Syscall$OPEN_instance;
  }
  var Syscall$READ_instance;
  function Syscall$READ_getInstance() {
    Syscall_initFields();
    return Syscall$READ_instance;
  }
  var Syscall$WRITE_instance;
  function Syscall$WRITE_getInstance() {
    Syscall_initFields();
    return Syscall$WRITE_instance;
  }
  var Syscall$CLOSE_instance;
  function Syscall$CLOSE_getInstance() {
    Syscall_initFields();
    return Syscall$CLOSE_instance;
  }
  var Syscall$EXIT_WITH_CODE_instance;
  function Syscall$EXIT_WITH_CODE_getInstance() {
    Syscall_initFields();
    return Syscall$EXIT_WITH_CODE_instance;
  }
  var Syscall$FLUSH_instance;
  function Syscall$FLUSH_getInstance() {
    Syscall_initFields();
    return Syscall$FLUSH_instance;
  }
  var Syscall$FEOF_instance;
  function Syscall$FEOF_getInstance() {
    Syscall_initFields();
    return Syscall$FEOF_instance;
  }
  var Syscall$FERROR_instance;
  function Syscall$FERROR_getInstance() {
    Syscall_initFields();
    return Syscall$FERROR_instance;
  }
  var Syscall$PRINT_HEX_instance;
  function Syscall$PRINT_HEX_getInstance() {
    Syscall_initFields();
    return Syscall$PRINT_HEX_instance;
  }
  Syscall.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Syscall',
    interfaces: [Enum]
  };
  function Syscall$values() {
    return [Syscall$PRINT_INT_getInstance(), Syscall$PRINT_STR_getInstance(), Syscall$ATOI_getInstance(), Syscall$SBRK_getInstance(), Syscall$EXIT_getInstance(), Syscall$PRINT_CHAR_getInstance(), Syscall$OPEN_getInstance(), Syscall$READ_getInstance(), Syscall$WRITE_getInstance(), Syscall$CLOSE_getInstance(), Syscall$EXIT_WITH_CODE_getInstance(), Syscall$FLUSH_getInstance(), Syscall$FEOF_getInstance(), Syscall$FERROR_getInstance(), Syscall$PRINT_HEX_getInstance()];
  }
  Syscall.values = Syscall$values;
  function Syscall$valueOf(name) {
    switch (name) {
      case 'PRINT_INT':
        return Syscall$PRINT_INT_getInstance();
      case 'PRINT_STR':
        return Syscall$PRINT_STR_getInstance();
      case 'ATOI':
        return Syscall$ATOI_getInstance();
      case 'SBRK':
        return Syscall$SBRK_getInstance();
      case 'EXIT':
        return Syscall$EXIT_getInstance();
      case 'PRINT_CHAR':
        return Syscall$PRINT_CHAR_getInstance();
      case 'OPEN':
        return Syscall$OPEN_getInstance();
      case 'READ':
        return Syscall$READ_getInstance();
      case 'WRITE':
        return Syscall$WRITE_getInstance();
      case 'CLOSE':
        return Syscall$CLOSE_getInstance();
      case 'EXIT_WITH_CODE':
        return Syscall$EXIT_WITH_CODE_getInstance();
      case 'FLUSH':
        return Syscall$FLUSH_getInstance();
      case 'FEOF':
        return Syscall$FEOF_getInstance();
      case 'FERROR':
        return Syscall$FERROR_getInstance();
      case 'PRINT_HEX':
        return Syscall$PRINT_HEX_getInstance();
      default:throwISE('No enum constant venusbackend.riscv.insts.integer.base.i.ecall.Syscall.' + name);
    }
  }
  Syscall.valueOf_61zpoe$ = Syscall$valueOf;
  function openFile(sim) {
    var filenameAddress = numberToInt(sim.getReg_za3lpa$(Registers_getInstance().a1));
    var permissions = numberToInt(sim.getReg_za3lpa$(Registers_getInstance().a2));
    var filename = getString(sim, filenameAddress);
    var fdID = sim.filesHandler.openFile_gw1r89$(sim, filename, permissions);
    sim.setReg_135bro$(Registers_getInstance().a0, fdID);
  }
  function readFile(sim) {
    var tmp$;
    var fdID = numberToInt(sim.getReg_za3lpa$(Registers_getInstance().a1));
    var bufferAddress = numberToInt(sim.getReg_za3lpa$(Registers_getInstance().a2));
    var size = numberToInt(sim.getReg_za3lpa$(Registers_getInstance().a3));
    if (size < 0) {
      sim.setReg_135bro$(Registers_getInstance().a0, FilesHandler$Companion_getInstance().EOF);
      return;
    }
    var data = sim.filesHandler.readFileDescriptor_vux9f0$(fdID, size);
    var offset = 0;
    if (data != null) {
      tmp$ = iterator(data);
      while (tmp$.hasNext()) {
        var c = unboxChar(tmp$.next());
        sim.storeBytewCache_z8e4lc$(bufferAddress + offset | 0, c | 0);
        offset = offset + 1 | 0;
      }
      sim.setReg_135bro$(Registers_getInstance().a0, offset);
    }
     else {
      sim.setReg_135bro$(Registers_getInstance().a0, FilesHandler$Companion_getInstance().EOF);
    }
  }
  function writeFile(sim) {
    var fdID = numberToInt(sim.getReg_za3lpa$(Registers_getInstance().a1));
    var bufferAddress = numberToInt(sim.getReg_za3lpa$(Registers_getInstance().a2));
    var sizeOfItem = numberToInt(sim.getReg_za3lpa$(Registers_getInstance().a4));
    var size = Kotlin.imul(numberToInt(sim.getReg_za3lpa$(Registers_getInstance().a3)), sizeOfItem);
    if (size < 0) {
      sim.setReg_135bro$(Registers_getInstance().a0, FilesHandler$Companion_getInstance().EOF);
      return;
    }
    var offset = 0;
    var sb = StringBuilder_init();
    while (offset < size) {
      var addr = bufferAddress + offset | 0;
      var byte = toShort(sim.loadByte_3p81yu$(addr));
      var char = toChar(byte);
      sb.append_s8itvh$(char);
      offset = offset + 1 | 0;
    }
    var s = sb.toString();
    var result = sim.filesHandler.writeFileDescriptor_19mbxw$(fdID, s);
    if (result !== FilesHandler$Companion_getInstance().EOF) {
      result = result / sizeOfItem | 0;
    }
    sim.setReg_135bro$(Registers_getInstance().a0, result);
  }
  function seekFile(sim) {
  }
  function tellFile(sim) {
  }
  function closeFile(sim) {
    var fdID = numberToInt(sim.getReg_za3lpa$(Registers_getInstance().a1));
    var a0 = sim.filesHandler.closeFileDescriptor_za3lpa$(fdID);
    sim.setReg_135bro$(Registers_getInstance().a0, a0);
  }
  function fflush(sim) {
    var fdID = numberToInt(sim.getReg_za3lpa$(Registers_getInstance().a1));
    var a0 = sim.filesHandler.flushFileDescriptor_za3lpa$(fdID);
    sim.setReg_135bro$(Registers_getInstance().a0, a0);
  }
  function feof(sim) {
    var fdID = numberToInt(sim.getReg_za3lpa$(Registers_getInstance().a1));
    var a0 = sim.filesHandler.getFileDescriptorEOF_za3lpa$(fdID);
    sim.setReg_135bro$(Registers_getInstance().a0, a0);
  }
  function ferror(sim) {
    var fdID = numberToInt(sim.getReg_za3lpa$(Registers_getInstance().a1));
    var a0 = sim.filesHandler.getFileDescriptorError_za3lpa$(fdID);
    sim.setReg_135bro$(Registers_getInstance().a0, a0);
  }
  function printHex(sim) {
    var arg = sim.getReg_za3lpa$(11);
    sim.ecallMsg = Renderer_getInstance().toHex_3p81yu$(arg);
    Renderer_getInstance().printConsole_kcmwxo$(sim.ecallMsg);
  }
  function printInteger(sim) {
    var arg = sim.getReg_za3lpa$(11);
    sim.ecallMsg = arg.toString();
    Renderer_getInstance().printConsole_kcmwxo$(sim.ecallMsg);
  }
  function printString(sim) {
    var arg = sim.getReg_za3lpa$(11);
    var s = getString(sim, arg);
    sim.ecallMsg = sim.ecallMsg + s;
    Renderer_getInstance().printConsole_kcmwxo$(s);
  }
  function atoi(sim) {
    var tmp$;
    var str_pointer = sim.getReg_za3lpa$(Registers_getInstance().a1);
    var s = getString(sim, str_pointer);
    try {
      tmp$ = toInt(s);
    }
     catch (e) {
      if (Kotlin.isType(e, NumberFormatException)) {
        tmp$ = 0;
      }
       else
        throw e;
    }
    var n = tmp$;
    sim.setReg_135bro$(Registers_getInstance().a0, n);
  }
  function sbrk(sim) {
    var bytes = sim.getReg_za3lpa$(11);
    if (compareTo(bytes, 0) < 0)
      return;
    sim.setReg_135bro$(10, sim.getHeapEnd());
    sim.addHeapSpace_3p81yu$(bytes);
  }
  function exit(sim) {
    sim.setPC_3p81yu$(MemorySegments_getInstance().STATIC_BEGIN);
    sim.exitcode = 0;
  }
  function printChar(sim) {
    var arg = sim.getReg_za3lpa$(11);
    sim.ecallMsg = String.fromCharCode(numberToChar(arg));
    Renderer_getInstance().printConsole_kcmwxo$(toBoxedChar(numberToChar(arg)));
  }
  function exitWithCode(sim) {
    sim.setPC_3p81yu$(MemorySegments_getInstance().STATIC_BEGIN);
    var retVal = sim.getReg_za3lpa$(11);
    sim.exitcode = numberToInt(retVal);
    sim.ecallMsg = '\n' + 'Exited with error code ' + retVal.toString();
    Renderer_getInstance().printConsole_kcmwxo$('\n' + 'Exited with error code ' + retVal.toString() + '\n');
  }
  function memdump(sim) {
    var tmp$;
    var filepathptr = sim.getReg_za3lpa$(Registers_getInstance().a1);
    if (equals(filepathptr, 0)) {
      tmp$ = 'venus.dump';
    }
     else {
      tmp$ = getString(sim, filepathptr);
    }
    var filepath = tmp$;
    var err = sim.VFS.touch(filepath);
    if (equals(err, '')) {
      err = sim.VFS.write(filepath, '');
    }
  }
  function getString(sim, address) {
    var addr = address;
    var s = StringBuilder_init();
    var c = sim.loadByte_3p81yu$(address);
    addr = inc(addr);
    while (c !== 0) {
      s.append_s8itvh$(toChar(c));
      c = sim.loadByte_3p81yu$(addr);
      addr = inc(addr);
    }
    return s.toString();
  }
  function MallocNode(size, free, nextNode, prevNode, nodeAddr, aupperMagic, alowerMagic) {
    MallocNode$Companion_getInstance();
    if (aupperMagic === void 0)
      aupperMagic = MallocNode$Companion_getInstance().upperMagic;
    if (alowerMagic === void 0)
      alowerMagic = MallocNode$Companion_getInstance().lowerMagic;
    this.size = size;
    this.free = free;
    this.nextNode = nextNode;
    this.prevNode = prevNode;
    this.nodeAddr = nodeAddr;
    this.aupperMagic = aupperMagic;
    this.alowerMagic = alowerMagic;
  }
  function MallocNode$Companion() {
    MallocNode$Companion_instance = this;
    this.lowBuffer = 0;
    this.highBuffer = 0;
    this.sizeof = 24 + this.lowBuffer + this.highBuffer | 0;
    this.upperMagic = 1019002044;
    this.lowerMagic = 1021107420;
    this.minSize = 1;
    this.nodes = HashMap_init();
  }
  MallocNode$Companion.prototype.loadBlock_lxbav0$ = function (sim, nodeAddr, ignore_magic) {
    if (ignore_magic === void 0)
      ignore_magic = false;
    if (nodeAddr === 0) {
      return null;
    }
    var lM = sim.loadWordwCache_3p81yu$(nodeAddr + this.lowBuffer | 0);
    var size = sim.loadWordwCache_3p81yu$(nodeAddr + this.lowBuffer + 4 | 0);
    var free = sim.loadWordwCache_3p81yu$(nodeAddr + this.lowBuffer + 8 | 0);
    var nextNode = sim.loadWordwCache_3p81yu$(nodeAddr + this.lowBuffer + 12 | 0);
    var prevNode = sim.loadWordwCache_3p81yu$(nodeAddr + this.lowBuffer + 16 | 0);
    var uM = sim.loadWordwCache_3p81yu$(nodeAddr + this.lowBuffer + 20 | 0);
    var node = new MallocNode(size, free, nextNode, prevNode, nodeAddr, uM, lM);
    if ((uM !== this.upperMagic || lM !== this.lowerMagic) && !ignore_magic) {
      Renderer_getInstance().stderr_za3rmp$('The magic value for this malloc node is incorrect! This means you are overriding malloc metadata OR have specified the address of an incorrect malloc node!\n');
      Renderer_getInstance().stderr_za3rmp$(node);
      return null;
    }
    return node;
  };
  MallocNode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MallocNode$Companion_instance = null;
  function MallocNode$Companion_getInstance() {
    if (MallocNode$Companion_instance === null) {
      new MallocNode$Companion();
    }
    return MallocNode$Companion_instance;
  }
  MallocNode.prototype.toString = function () {
    return 'Node Address: ' + toHex(this.nodeAddr) + '\n' + 'size: ' + toHex(this.size) + ' B' + '\n' + 'free: ' + this.isFree() + '\n' + 'Previous Node Address: ' + toHex(this.prevNode) + '\n' + 'Next Node Address: ' + toHex(this.nextNode) + '\n' + 'Lower Magic Value: A: ' + toHex(this.alowerMagic) + ' E: ' + toHex(MallocNode$Companion_getInstance().lowerMagic) + '\n' + 'Upper Magic Value: A: ' + toHex(this.aupperMagic) + ' E: ' + toHex(MallocNode$Companion_getInstance().upperMagic) + '\n' + 'Metadata Size: ' + toHex(MallocNode$Companion_getInstance().sizeof) + ' B' + '\n' + 'Minimum Node Size (Bytes): ' + toHex(MallocNode$Companion_getInstance().minSize) + ' B' + '\n' + 'Lower Buffer Size: ' + toHex(MallocNode$Companion_getInstance().lowBuffer) + ' B' + '\n' + 'Upper Buffer Size: ' + toHex(MallocNode$Companion_getInstance().highBuffer) + ' B' + '\n' + 'Sentinel: ' + this.isSentinel() + '\n' + 'Null (not in memory): ' + this.isNull();
  };
  MallocNode.prototype.storeMagic_pivkot$ = function (sim) {
    var $receiver = MallocNode$Companion_getInstance().nodes;
    var key = this.nodeAddr;
    $receiver.put_xwzc9p$(key, this);
    sim.storeWordwCache_z8e4lc$(this.nodeAddr, MallocNode$Companion_getInstance().lowerMagic);
    sim.storeWordwCache_z8e4lc$(this.nodeAddr + MallocNode$Companion_getInstance().lowBuffer + 20 | 0, MallocNode$Companion_getInstance().upperMagic);
  };
  MallocNode.prototype.storeSize_pivkot$ = function (sim) {
    var $receiver = MallocNode$Companion_getInstance().nodes;
    var key = this.nodeAddr;
    $receiver.put_xwzc9p$(key, this);
    sim.storeWordwCache_z8e4lc$(this.nodeAddr + MallocNode$Companion_getInstance().lowBuffer + 4 | 0, this.size);
  };
  MallocNode.prototype.storeFree_pivkot$ = function (sim) {
    var $receiver = MallocNode$Companion_getInstance().nodes;
    var key = this.nodeAddr;
    $receiver.put_xwzc9p$(key, this);
    sim.storeWordwCache_z8e4lc$(this.nodeAddr + MallocNode$Companion_getInstance().lowBuffer + 8 | 0, this.free);
  };
  MallocNode.prototype.storeNextNode_pivkot$ = function (sim) {
    var $receiver = MallocNode$Companion_getInstance().nodes;
    var key = this.nodeAddr;
    $receiver.put_xwzc9p$(key, this);
    sim.storeWordwCache_z8e4lc$(this.nodeAddr + MallocNode$Companion_getInstance().lowBuffer + 12 | 0, this.nextNode);
  };
  MallocNode.prototype.storePrevNode_pivkot$ = function (sim) {
    var $receiver = MallocNode$Companion_getInstance().nodes;
    var key = this.nodeAddr;
    $receiver.put_xwzc9p$(key, this);
    sim.storeWordwCache_z8e4lc$(this.nodeAddr + MallocNode$Companion_getInstance().lowBuffer + 16 | 0, this.prevNode);
  };
  MallocNode.prototype.storeNode_pivkot$ = function (sim) {
    if (this.nodeAddr === 0) {
      Renderer_getInstance().stderr_za3rmp$('Prevented a store of a null malloc node!\n');
      return;
    }
    this.storeMagic_pivkot$(sim);
    this.storeSize_pivkot$(sim);
    this.storeFree_pivkot$(sim);
    this.storeNextNode_pivkot$(sim);
    this.storePrevNode_pivkot$(sim);
  };
  MallocNode.prototype.isNextNull = function () {
    return this.nextNode === 0;
  };
  MallocNode.prototype.isPrevNull = function () {
    return this.prevNode === 0;
  };
  MallocNode.prototype.isFree = function () {
    return this.free !== 0;
  };
  MallocNode.prototype.isNull = function () {
    return this.nodeAddr === 0;
  };
  MallocNode.prototype.isSentinel = function () {
    return this.size === 0 && !this.isFree() && this.isPrevNull();
  };
  MallocNode.prototype.canFit_za3lpa$ = function (size) {
    return this.isFree() && this.size >= size;
  };
  MallocNode.prototype.dataAddr = function () {
    return this.nodeAddr + MallocNode$Companion_getInstance().sizeof | 0;
  };
  MallocNode.prototype.getNextNode_pivkot$ = function (sim) {
    var tmp$;
    if (this.nextNode === 0) {
      tmp$ = new MallocNode(0, 1, 0, 0, 0);
    }
     else {
      tmp$ = MallocNode$Companion_getInstance().loadBlock_lxbav0$(sim, this.nextNode);
    }
    return tmp$;
  };
  MallocNode.prototype.getPrevNode_pivkot$ = function (sim) {
    return MallocNode$Companion_getInstance().loadBlock_lxbav0$(sim, this.prevNode);
  };
  MallocNode.prototype.allocateNode_lxbav0$ = function (sim, wantedSize, calloc) {
    if (calloc === void 0)
      calloc = false;
    var tmp$;
    if (this.size < wantedSize) {
      return false;
    }
    this.free = 0;
    if (calloc) {
      if (sim.memset_qt1dr2$(this.dataAddr(), 0, wantedSize) === 0) {
        this.storeNode_pivkot$(sim);
        return false;
      }
    }
    if (this.size > (wantedSize + MallocNode$Companion_getInstance().sizeof + MallocNode$Companion_getInstance().minSize | 0)) {
      var newNodeAddr = this.dataAddr() + wantedSize | 0;
      var newNodeSize = this.size - (wantedSize + MallocNode$Companion_getInstance().sizeof) | 0;
      var newNode = new MallocNode(newNodeSize, 1, this.nextNode, this.nodeAddr, newNodeAddr);
      if (this.nextNode !== 0) {
        tmp$ = this.getNextNode_pivkot$(sim);
        if (tmp$ == null) {
          return null;
        }
        var nextNodeMetadata = tmp$;
        nextNodeMetadata.prevNode = newNodeAddr;
        nextNodeMetadata.storeNode_pivkot$(sim);
      }
      this.nextNode = newNodeAddr;
      this.size = wantedSize;
      newNode.storeNode_pivkot$(sim);
    }
    this.storeNode_pivkot$(sim);
    return true;
  };
  MallocNode.prototype.freeNode_pivkot$ = function (sim) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    if (this.isFree()) {
      Renderer_getInstance().stderr_za3rmp$('Double free!\n');
      Renderer_getInstance().stderr_za3rmp$(this);
      return;
    }
    if (this.isSentinel()) {
      Renderer_getInstance().stderr_za3rmp$('You cannot free the sentinel node!\n');
      Renderer_getInstance().stderr_za3rmp$(this);
      return;
    }
    this.free = 1;
    this.storeFree_pivkot$(sim);
    var next = this;
    var prev = this;
    var s = 0;
    while (true) {
      tmp$_0 = (tmp$ = next.getNextNode_pivkot$(sim)) != null ? tmp$.isFree() : null;
      if (tmp$_0 == null) {
        return;
      }
      if (!tmp$_0)
        break;
      tmp$_1 = next.getNextNode_pivkot$(sim);
      if (tmp$_1 == null) {
        return;
      }
      next = tmp$_1;
      if (next.isNull()) {
        break;
      }
      s = s + (MallocNode$Companion_getInstance().sizeof + next.size) | 0;
    }
    while (true) {
      if (!prev.isSentinel()) {
        tmp$_3 = (tmp$_2 = prev.getPrevNode_pivkot$(sim)) != null ? tmp$_2.isFree() : null;
        if (tmp$_3 == null) {
          return;
        }
      }
       else
        tmp$_3 = false;
      if (!tmp$_3)
        break;
      tmp$_4 = prev.getPrevNode_pivkot$(sim);
      if (tmp$_4 == null) {
        return;
      }
      prev = tmp$_4;
      s = s + (MallocNode$Companion_getInstance().sizeof + next.size) | 0;
    }
    if (!(this != null ? this.equals(next) : null) || !(this != null ? this.equals(prev) : null)) {
      if (!(this != null ? this.equals(prev) : null)) {
        s = s + (MallocNode$Companion_getInstance().sizeof + next.size) | 0;
      }
      prev.size = prev.size + s | 0;
      prev.nextNode = next.nodeAddr;
      next.prevNode = prev.nodeAddr;
      if (!next.isNull()) {
        next.storeNode_pivkot$(sim);
      }
      prev.storeNode_pivkot$(sim);
    }
  };
  MallocNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MallocNode',
    interfaces: []
  };
  MallocNode.prototype.component1 = function () {
    return this.size;
  };
  MallocNode.prototype.component2 = function () {
    return this.free;
  };
  MallocNode.prototype.component3 = function () {
    return this.nextNode;
  };
  MallocNode.prototype.component4 = function () {
    return this.prevNode;
  };
  MallocNode.prototype.component5 = function () {
    return this.nodeAddr;
  };
  MallocNode.prototype.component6 = function () {
    return this.aupperMagic;
  };
  MallocNode.prototype.component7 = function () {
    return this.alowerMagic;
  };
  MallocNode.prototype.copy_ui44o2$ = function (size, free, nextNode, prevNode, nodeAddr, aupperMagic, alowerMagic) {
    return new MallocNode(size === void 0 ? this.size : size, free === void 0 ? this.free : free, nextNode === void 0 ? this.nextNode : nextNode, prevNode === void 0 ? this.prevNode : prevNode, nodeAddr === void 0 ? this.nodeAddr : nodeAddr, aupperMagic === void 0 ? this.aupperMagic : aupperMagic, alowerMagic === void 0 ? this.alowerMagic : alowerMagic);
  };
  MallocNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.free) | 0;
    result = result * 31 + Kotlin.hashCode(this.nextNode) | 0;
    result = result * 31 + Kotlin.hashCode(this.prevNode) | 0;
    result = result * 31 + Kotlin.hashCode(this.nodeAddr) | 0;
    result = result * 31 + Kotlin.hashCode(this.aupperMagic) | 0;
    result = result * 31 + Kotlin.hashCode(this.alowerMagic) | 0;
    return result;
  };
  MallocNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.size, other.size) && Kotlin.equals(this.free, other.free) && Kotlin.equals(this.nextNode, other.nextNode) && Kotlin.equals(this.prevNode, other.prevNode) && Kotlin.equals(this.nodeAddr, other.nodeAddr) && Kotlin.equals(this.aupperMagic, other.aupperMagic) && Kotlin.equals(this.alowerMagic, other.alowerMagic)))));
  };
  function Alloc(sim) {
    Alloc$Companion_getInstance();
    this.sim = sim;
    this.initialized = false;
    this.sentinelMetadata = 0;
    this.alwaysCalloc = false;
  }
  Alloc.prototype.initialize = function () {
    this.sentinelMetadata = numberToInt(this.sim.getHeapEnd());
    var sentinel = new MallocNode(0, 0, 0, 0, this.sentinelMetadata);
    this.sim.addHeapSpace_3p81yu$(MallocNode$Companion_getInstance().sizeof + sentinel.size | 0);
    sentinel.storeNode_pivkot$(this.sim);
    this.initialized = true;
  };
  function Alloc$Companion() {
    Alloc$Companion_instance = this;
  }
  Alloc$Companion.prototype.getMetadata_za3lpa$ = function (ptr) {
    var tmp$;
    var loc = ptr - MallocNode$Companion_getInstance().sizeof | 0;
    if (loc < 0) {
      tmp$ = 0;
    }
     else {
      tmp$ = loc;
    }
    return tmp$;
  };
  Alloc$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Alloc$Companion_instance = null;
  function Alloc$Companion_getInstance() {
    if (Alloc$Companion_instance === null) {
      new Alloc$Companion();
    }
    return Alloc$Companion_instance;
  }
  Alloc.prototype.malloc_fzusl$ = function (size, calloc) {
    if (calloc === void 0)
      calloc = this.alwaysCalloc;
    var tmp$, tmp$_0, tmp$_1;
    if (!this.initialized) {
      this.initialize();
    }
    if (size <= 0) {
      return 0;
    }
    var tmp$_2;
    if ((tmp$ = MallocNode$Companion_getInstance().loadBlock_lxbav0$(this.sim, this.sentinelMetadata)) != null)
      tmp$_2 = tmp$;
    else {
      var tmp$_3;
      Renderer_getInstance().stderr_za3rmp$('Failed to get the sentinel metadata block!\n');
      Renderer_getInstance().stderr_za3rmp$((tmp$_3 = MallocNode$Companion_getInstance().loadBlock_lxbav0$(this.sim, this.sentinelMetadata, true)) != null ? tmp$_3 : 'null');
      return 0;
    }
    var m = tmp$_2;
    while (!m.isNextNull()) {
      var tmp$_4;
      if ((tmp$_0 = m.getNextNode_pivkot$(this.sim)) != null)
        tmp$_4 = tmp$_0;
      else {
        return 0;
      }
      m = tmp$_4;
      if (m.canFit_za3lpa$(size)) {
        tmp$_1 = m.allocateNode_lxbav0$(this.sim, size, calloc);
        if (tmp$_1 == null) {
          return 0;
        }
        if (tmp$_1) {
          return m.dataAddr();
        }
      }
    }
    var sizeToAdd = size + MallocNode$Companion_getInstance().sizeof | 0;
    if (this.sim.willHeapOverrideStack_3p81yu$(sizeToAdd)) {
      return 0;
    }
    var newMallocNode = new MallocNode(size, 0, 0, m.nodeAddr, numberToInt(this.sim.getHeapEnd()));
    this.sim.addHeapSpace_3p81yu$(sizeToAdd);
    m.nextNode = newMallocNode.nodeAddr;
    m.storeNextNode_pivkot$(this.sim);
    newMallocNode.storeNode_pivkot$(this.sim);
    return newMallocNode.dataAddr();
  };
  Alloc.prototype.calloc_vux9f0$ = function (nitems, size) {
    return this.malloc_fzusl$(Kotlin.imul(nitems, size), true);
  };
  Alloc.prototype.realloc_vux9f0$ = function (ptr, size) {
    var tmp$;
    if (size === 0) {
      if (ptr === 0) {
        tmp$ = 0;
      }
       else {
        this.free_za3lpa$(ptr);
        tmp$ = 0;
      }
      return tmp$;
    }
    var tm = MallocNode$Companion_getInstance().loadBlock_lxbav0$(this.sim, Alloc$Companion_getInstance().getMetadata_za3lpa$(ptr));
    if (ptr === 0 || tm == null) {
      return this.malloc_fzusl$(size);
    }
    var m = tm;
    var newBlock = this.malloc_fzusl$(size);
    if (newBlock === 0) {
      return 0;
    }
    this.sim.memcpy_qt1dr2$(newBlock, m.dataAddr(), size);
    m.freeNode_pivkot$(this.sim);
    return newBlock;
  };
  Alloc.prototype.free_za3lpa$ = function (ptr) {
    var tmp$;
    if (ptr !== 0) {
      (tmp$ = MallocNode$Companion_getInstance().loadBlock_lxbav0$(this.sim, Alloc$Companion_getInstance().getMetadata_za3lpa$(ptr))) != null ? (tmp$.freeNode_pivkot$(this.sim), Unit) : null;
    }
  };
  Alloc.prototype.numActiveBlocks = function () {
    var tmp$, tmp$_0, tmp$_1;
    if (!this.initialized) {
      return 0;
    }
    var counter = 0;
    var tmp$_2;
    if ((tmp$ = MallocNode$Companion_getInstance().loadBlock_lxbav0$(this.sim, this.sentinelMetadata)) != null)
      tmp$_2 = tmp$;
    else {
      var tmp$_3;
      Renderer_getInstance().stderr_za3rmp$('Failed to get the sentinel metadata block!\n');
      Renderer_getInstance().stderr_za3rmp$((tmp$_3 = MallocNode$Companion_getInstance().loadBlock_lxbav0$(this.sim, this.sentinelMetadata, true)) != null ? tmp$_3 : 'null');
      return -1;
    }
    var m = tmp$_2;
    if (m.isNextNull()) {
      return counter;
    }
    tmp$_0 = m.getNextNode_pivkot$(this.sim);
    if (tmp$_0 == null) {
      return -1;
    }
    m = tmp$_0;
    while (!m.isNextNull()) {
      if (!m.isFree()) {
        if (m.size > 0) {
          counter = counter + 1 | 0;
        }
      }
      tmp$_1 = m.getNextNode_pivkot$(this.sim);
      if (tmp$_1 == null) {
        return -1;
      }
      m = tmp$_1;
    }
    return counter;
  };
  Alloc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Alloc',
    interfaces: []
  };
  function fencei$lambda(it) {
    return 'fence.i';
  }
  var fencei;
  function fence$lambda(it) {
    return 'fence';
  }
  var fence;
  function jalr$lambda(prog, mcode, args, dbg) {
    ITypeParser_getInstance().invoke_phh6x1$(prog, mcode, args, dbg);
    return Unit;
  }
  function jalr$lambda_0(mcode, sim) {
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var imm = signExtend(mcode.get_cv51c2$(InstructionField$IMM_11_0_getInstance()), 12);
    var vrs1 = numberToInt(sim.getReg_za3lpa$(rs1));
    sim.setReg_135bro$(rd, numberToInt(sim.getPC()) + mcode.length | 0);
    sim.setPC_3p81yu$(vrs1 + imm >> 1 << 1);
    sim.jumped = true;
    return Unit;
  }
  function jalr$lambda_1(mcode, sim) {
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var imm = Kotlin.Long.fromInt(signExtend(mcode.get_cv51c2$(InstructionField$IMM_11_0_getInstance()), 12));
    var vrs1 = numberToLong(sim.getReg_za3lpa$(rs1));
    sim.setReg_135bro$(rd, numberToLong(sim.getPC()).add(Kotlin.Long.fromInt(mcode.length)));
    sim.setPC_3p81yu$(vrs1.add(imm).shiftRight(1).shiftLeft(1));
    sim.jumped = true;
    return Unit;
  }
  function jalr$lambda_2(mcode, sim) {
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var imm = toQuadWord_2(signExtend(mcode.get_cv51c2$(InstructionField$IMM_11_0_getInstance()), 12));
    var vrs1 = toQuadWord(sim.getReg_za3lpa$(rs1));
    sim.setReg_135bro$(rd, toQuadWord(sim.getPC()).plus_za3lpa$(mcode.length));
    sim.setPC_3p81yu$(vrs1.plus_k7dsfo$(imm).shr_za3lpa$(1).shl_za3lpa$(1));
    sim.jumped = true;
    return Unit;
  }
  function jalr$lambda_3(mcode) {
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var rs1 = mcode.get_cv51c2$(InstructionField$RS1_getInstance());
    var imm = signExtend(mcode.get_cv51c2$(InstructionField$IMM_11_0_getInstance()), 12);
    return 'jalr x' + rd + ' x' + rs1 + ' ' + imm;
  }
  var jalr;
  function lb$lambda(sim, address) {
    return sim.loadBytewCache_3p81yu$(address);
  }
  function lb$lambda_0(v) {
    return signExtend(v, 8);
  }
  function lb$lambda_1(sim, address) {
    return Kotlin.Long.fromInt(sim.loadBytewCache_3p81yu$(address));
  }
  function lb$lambda_2(v) {
    return Kotlin.Long.fromInt(signExtend(v.toInt(), 8));
  }
  function lb$lambda_3(sim, address) {
    return toQuadWord_2(sim.loadBytewCache_3p81yu$(address));
  }
  function lb$lambda_4(v) {
    return toQuadWord_2(signExtend(v.toInt(), 8));
  }
  var lb;
  function lbu$lambda(sim, addr) {
    return sim.loadBytewCache_3p81yu$(addr);
  }
  function lbu$lambda_0(sim, addr) {
    return Kotlin.Long.fromInt(sim.loadBytewCache_3p81yu$(addr));
  }
  function lbu$lambda_1(sim, addr) {
    return toQuadWord_2(sim.loadBytewCache_3p81yu$(addr));
  }
  var lbu;
  function ld$lambda(a, b) {
    throw InstructionNotSupportedError_init('LD is not supported by 16 bit systems!');
  }
  function ld$lambda_0(a, b) {
    throw InstructionNotSupportedError_init('LD is not supported by 32 bit systems!');
  }
  function ld$lambda_1(sim, addr) {
    return toQuadWord_3(sim.loadLongwCache_3p81yu$(addr));
  }
  var ld;
  function lh$lambda(sim, address) {
    return toShort(sim.loadHalfWordwCache_3p81yu$(address));
  }
  function lh$lambda_0(v) {
    return v;
  }
  function lh$lambda_1(sim, address) {
    return sim.loadHalfWordwCache_3p81yu$(address);
  }
  function lh$lambda_2(v) {
    return signExtend(v, 16);
  }
  function lh$lambda_3(sim, address) {
    return Kotlin.Long.fromInt(sim.loadHalfWordwCache_3p81yu$(address));
  }
  function lh$lambda_4(v) {
    return Kotlin.Long.fromInt(signExtend(v.toInt(), 16));
  }
  function lh$lambda_5(sim, address) {
    return toQuadWord_2(sim.loadHalfWordwCache_3p81yu$(address));
  }
  function lh$lambda_6(v) {
    return toQuadWord_2(signExtend(v.toInt(), 16));
  }
  var lh;
  function lhu$lambda(sim, address) {
    return toShort(sim.loadHalfWordwCache_3p81yu$(address));
  }
  function lhu$lambda_0(sim, address) {
    return sim.loadHalfWordwCache_3p81yu$(address);
  }
  function lhu$lambda_1(sim, address) {
    return Kotlin.Long.fromInt(sim.loadHalfWordwCache_3p81yu$(address));
  }
  function lhu$lambda_2(sim, address) {
    return toQuadWord_2(sim.loadHalfWordwCache_3p81yu$(address));
  }
  var lhu;
  function lw$lambda(sim, addr) {
    throw InstructionNotSupportedError_init('LW is not supported by 16 bit systems!');
  }
  function lw$lambda_0(sim, addr) {
    return Kotlin.Long.fromInt(sim.loadWordwCache_3p81yu$(addr));
  }
  function lw$lambda_1(sim, addr) {
    return toQuadWord_2(sim.loadWordwCache_3p81yu$(addr));
  }
  var lw;
  function lwu$lambda(sim, address) {
    throw InstructionNotSupportedError_init('lwu is not supported by 16 bit systems!');
  }
  function lwu$lambda_0(sim, address) {
    var $receiver = sim.loadWordwCache_3p81yu$(address);
    return (new ULong_init(Kotlin.Long.fromInt($receiver))).data;
  }
  function lwu$lambda_1(sim, address) {
    return toUQuadWord_1(sim.loadWordwCache_3p81yu$(address));
  }
  var lwu;
  function ori$lambda(a, b) {
    return toShort(a | b);
  }
  function ori$lambda_0(a, b) {
    return a | b;
  }
  function ori$lambda_1(a, b) {
    return a.or(b);
  }
  function ori$lambda_2(a, b) {
    return a.or_k7dsfo$(b);
  }
  var ori;
  function slli$lambda(a, b) {
    return b === toShort(0) ? a : toShort(a << b);
  }
  function slli$lambda_0(a, b) {
    return b === 0 ? a : a << b;
  }
  function slli$lambda_1(a, b) {
    return equals(b, L0) ? a : a.shiftLeft(b.toInt());
  }
  function slli$lambda_2(a, b) {
    return equals(b, toQuadWord_2(0)) ? a : a.shl_za3lpa$(b.toInt());
  }
  var slli;
  function slliw$lambda(a, b) {
    throw InstructionNotSupportedError_init('slliw is not supported on 16 bit systems!');
  }
  function slliw$lambda_0(a, b) {
    throw InstructionNotSupportedError_init('slliw is not supported on 32 bit systems!');
  }
  function slliw$lambda_1(a, b) {
    return equals(b, L0) ? Kotlin.Long.fromInt(a.toInt()) : Kotlin.Long.fromInt(a.toInt() << b.toInt());
  }
  function slliw$lambda_2(a, b) {
    return equals(b, toQuadWord_2(0)) ? toQuadWord_2(a.toInt()) : toQuadWord_2(a.toInt() << b.toInt());
  }
  var slliw;
  function slti$lambda(a, b) {
    return a < b ? 1 : 0;
  }
  function slti$lambda_0(a, b) {
    return a < b ? 1 : 0;
  }
  function slti$lambda_1(a, b) {
    return a.compareTo_11rb$(b) < 0 ? L1 : L0;
  }
  function slti$lambda_2(a, b) {
    return a.compareTo_11rb$(b) < 0 ? toQuadWord_2(1) : toQuadWord_2(0);
  }
  var slti;
  function sltiu$lambda(a, b) {
    return compareUnsignedShort(a, b) < 0 ? 1 : 0;
  }
  function sltiu$lambda_0(a, b) {
    return compareUnsigned(a, b) < 0 ? 1 : 0;
  }
  function sltiu$lambda_1(a, b) {
    return compareUnsignedLong(a, b) < 0 ? L1 : L0;
  }
  function sltiu$lambda_2(a, b) {
    return compareUnsignedQuadWord(a, b) < 0 ? toQuadWord_2(1) : toQuadWord_2(0);
  }
  var sltiu;
  function srai$lambda(a, b) {
    return b === toShort(0) ? a : toShort(a >> b);
  }
  function srai$lambda_0(a, b) {
    return b === 0 ? a : a >> b;
  }
  function srai$lambda_1(a, b) {
    return equals(b, L0) ? a : a.shiftRight(b.toInt());
  }
  function srai$lambda_2(a, b) {
    return equals(b, toQuadWord_2(0)) ? a : a.shr_za3lpa$(b.toInt());
  }
  var srai;
  function sraiw$lambda(a, b) {
    throw InstructionNotSupportedError_init('sraiw is not supported on 16 bit systems!');
  }
  function sraiw$lambda_0(a, b) {
    throw InstructionNotSupportedError_init('sraiw is not supported on 32 bit systems!');
  }
  function sraiw$lambda_1(a, b) {
    return equals(b, L0) ? Kotlin.Long.fromInt(a.toInt()) : Kotlin.Long.fromInt(a.toInt() >> b.toInt());
  }
  function sraiw$lambda_2(a, b) {
    return equals(b, toQuadWord_2(0)) ? toQuadWord_2(a.toInt()) : toQuadWord_2(a.toInt() >> b.toInt());
  }
  var sraiw;
  function srli$lambda(a, b) {
    return b === toShort(0) ? a : toShort(a >>> b);
  }
  function srli$lambda_0(a, b) {
    return b === 0 ? a : a >>> b;
  }
  function srli$lambda_1(a, b) {
    return equals(b, L0) ? a : a.shiftRightUnsigned(b.toInt());
  }
  function srli$lambda_2(a, b) {
    return equals(b, toQuadWord_2(0)) ? a : a.ushr_za3lpa$(b.toInt());
  }
  var srli;
  function srliw$lambda(a, b) {
    throw InstructionNotSupportedError_init('srliw is not supported on 16 bit systems!');
  }
  function srliw$lambda_0(a, b) {
    throw InstructionNotSupportedError_init('srliw is not supported on 32 bit systems!');
  }
  function srliw$lambda_1(a, b) {
    return equals(b, L0) ? Kotlin.Long.fromInt(a.toInt()) : Kotlin.Long.fromInt(a.toInt() >>> b.toInt());
  }
  function srliw$lambda_2(a, b) {
    return equals(b, toQuadWord_2(0)) ? toQuadWord_2(a.toInt()) : toQuadWord_2(a.toInt() >>> b.toInt());
  }
  var srliw;
  function xori$lambda(a, b) {
    return toShort(a ^ b);
  }
  function xori$lambda_0(a, b) {
    return a ^ b;
  }
  function xori$lambda_1(a, b) {
    return a.xor(b);
  }
  function xori$lambda_2(a, b) {
    return a.xor_k7dsfo$(b);
  }
  var xori;
  function add$lambda(a, b) {
    return toShort(a + b);
  }
  function add$lambda_0(a, b) {
    return a + b | 0;
  }
  function add$lambda_1(a, b) {
    return a.add(b);
  }
  function add$lambda_2(a, b) {
    return a.plus_k7dsfo$(b);
  }
  var add_0;
  function addw$lambda(a, b) {
    throw InstructionNotSupportedError_init('addw is not supported on 16 bit systems!');
  }
  function addw$lambda_0(a, b) {
    throw InstructionNotSupportedError_init('addw is not supported on 32 bit systems!');
  }
  function addw$lambda_1(a, b) {
    return Kotlin.Long.fromInt(a.toInt() + b.toInt() | 0);
  }
  function addw$lambda_2(a, b) {
    return toQuadWord_2(a.toInt() + b.toInt() | 0);
  }
  var addw;
  function and$lambda(a, b) {
    return toShort(a & b);
  }
  function and$lambda_0(a, b) {
    return a & b;
  }
  function and$lambda_1(a, b) {
    return a.and(b);
  }
  function and$lambda_2(a, b) {
    return a.and_k7dsfo$(b);
  }
  var and_0;
  function or$lambda(a, b) {
    return toShort(a | b);
  }
  function or$lambda_0(a, b) {
    return a | b;
  }
  function or$lambda_1(a, b) {
    return a.or(b);
  }
  function or$lambda_2(a, b) {
    return a.or_k7dsfo$(b);
  }
  var or_0;
  function sll$lambda(a, b) {
    var shift = toShort(b & 31);
    return shift === toShort(0) ? a : numberToShort(shl(a, shift));
  }
  function sll$lambda_0(a, b) {
    var shift = b & 31;
    return shift === 0 ? a : a << shift;
  }
  function sll$lambda_1(a, b) {
    var shift = b.toInt() & 63;
    return shift === 0 ? a : a.shiftLeft(shift);
  }
  function sll$lambda_2(a, b) {
    var shift = b.toInt() & 127;
    return shift === 0 ? a : a.shl_za3lpa$(shift);
  }
  var sll;
  function sllw$lambda(a, b) {
    throw InstructionNotSupportedError_init('sllw is not supported on 16 bit systems!');
  }
  function sllw$lambda_0(a, b) {
    throw InstructionNotSupportedError_init('sllw is not supported on 32 bit systems!');
  }
  function sllw$lambda_1(a, b) {
    var shift = b.toInt() & 31;
    return shift === 0 ? Kotlin.Long.fromInt(a.toInt()) : Kotlin.Long.fromInt(a.toInt() << shift);
  }
  function sllw$lambda_2(a, b) {
    var shift = b.toInt() & 31;
    return shift === 0 ? toQuadWord_2(a.toInt()) : toQuadWord_2(a.toInt() << shift);
  }
  var sllw;
  function slt$lambda(a, b) {
    return a < b ? 1 : 0;
  }
  function slt$lambda_0(a, b) {
    return a < b ? 1 : 0;
  }
  function slt$lambda_1(a, b) {
    return a.compareTo_11rb$(b) < 0 ? L1 : L0;
  }
  function slt$lambda_2(a, b) {
    return a.compareTo_11rb$(b) < 0 ? toQuadWord_2(1) : toQuadWord_2(0);
  }
  var slt;
  function sltu$lambda(a, b) {
    return compareUnsignedShort(a, b) < 0 ? 1 : 0;
  }
  function sltu$lambda_0(a, b) {
    return compareUnsigned(a, b) < 0 ? 1 : 0;
  }
  function sltu$lambda_1(a, b) {
    return compareUnsignedLong(a, b) < 0 ? L1 : L0;
  }
  function sltu$lambda_2(a, b) {
    return compareUnsignedQuadWord(a, b) < 0 ? toQuadWord_2(1) : toQuadWord_2(0);
  }
  var sltu;
  function sra$lambda(a, b) {
    var shift = toShort(b & 15);
    return shift === toShort(0) ? a : numberToShort(shr(a, shift));
  }
  function sra$lambda_0(a, b) {
    var shift = b & 31;
    return shift === 0 ? a : a >> shift;
  }
  function sra$lambda_1(a, b) {
    var shift = b.toInt() & 63;
    return shift === 0 ? a : a.shiftRight(shift);
  }
  function sra$lambda_2(a, b) {
    var shift = b.toInt() & 127;
    return shift === 0 ? a : a.shr_za3lpa$(shift);
  }
  var sra;
  function sraw$lambda(a, b) {
    throw InstructionNotSupportedError_init('sraw is not supported on 16 bit systems!');
  }
  function sraw$lambda_0(a, b) {
    throw InstructionNotSupportedError_init('sraw is not supported on 32 bit systems!');
  }
  function sraw$lambda_1(a, b) {
    var shift = b.toInt() & 31;
    return shift === 0 ? Kotlin.Long.fromInt(a.toInt()) : Kotlin.Long.fromInt(a.toInt() >> shift);
  }
  function sraw$lambda_2(a, b) {
    var shift = b.toInt() & 31;
    return shift === 0 ? toQuadWord_2(a.toInt()) : toQuadWord_2(a.toInt() >> shift);
  }
  var sraw;
  function srl$lambda(a, b) {
    var shift = toShort(b & 15);
    return shift === toShort(0) ? a : numberToShort(ushr(a, shift));
  }
  function srl$lambda_0(a, b) {
    var shift = b & 31;
    return shift === 0 ? a : a >>> shift;
  }
  function srl$lambda_1(a, b) {
    var shift = b.toInt() & 63;
    return shift === 0 ? a : a.shiftRightUnsigned(shift);
  }
  function srl$lambda_2(a, b) {
    var shift = b.toInt() & 127;
    return shift === 0 ? a : a.ushr_za3lpa$(shift);
  }
  var srl;
  function srlw$lambda(a, b) {
    throw InstructionNotSupportedError_init('srlw is not supported on 16 bit systems!');
  }
  function srlw$lambda_0(a, b) {
    throw InstructionNotSupportedError_init('srlw is not supported on 32 bit systems!');
  }
  function srlw$lambda_1(a, b) {
    var shift = b.toInt() & 31;
    return shift === 0 ? Kotlin.Long.fromInt(a.toInt()) : Kotlin.Long.fromInt(a.toInt() >>> shift);
  }
  function srlw$lambda_2(a, b) {
    var shift = b.toInt() & 31;
    return shift === 0 ? toQuadWord_2(a.toInt()) : toQuadWord_2(a.toInt() >>> shift);
  }
  var srlw;
  function sub$lambda(a, b) {
    return toShort(a - b);
  }
  function sub$lambda_0(a, b) {
    return a - b | 0;
  }
  function sub$lambda_1(a, b) {
    return a.subtract(b);
  }
  function sub$lambda_2(a, b) {
    return a.minus_k7dsfo$(b);
  }
  var sub;
  function subw$lambda(a, b) {
    throw InstructionNotSupportedError_init('subw is not supported on 16 bit systems!');
  }
  function subw$lambda_0(a, b) {
    throw InstructionNotSupportedError_init('subw is not supported on 32 bit systems!');
  }
  function subw$lambda_1(a, b) {
    return Kotlin.Long.fromInt(a.toInt() - b.toInt() | 0);
  }
  function subw$lambda_2(a, b) {
    return toQuadWord_2(a.toInt() - b.toInt() | 0);
  }
  var subw;
  function xor$lambda(a, b) {
    return toShort(a ^ b);
  }
  function xor$lambda_0(a, b) {
    return a ^ b;
  }
  function xor$lambda_1(a, b) {
    return a.xor(b);
  }
  function xor$lambda_2(a, b) {
    return a.xor_k7dsfo$(b);
  }
  var xor;
  function sb$lambda(sim, address, value) {
    sim.storeBytewCache_z8e4lc$(address, value);
    return Unit;
  }
  function sb$lambda_0(sim, address, value) {
    sim.storeBytewCache_z8e4lc$(address, value);
    return Unit;
  }
  function sb$lambda_1(sim, address, value) {
    sim.storeBytewCache_z8e4lc$(address, value);
    return Unit;
  }
  function sb$lambda_2(sim, address, value) {
    sim.storeBytewCache_z8e4lc$(address, value);
    return Unit;
  }
  var sb;
  function sd$lambda(sim, address, value) {
    throw InstructionNotSupportedError_init('sd is not supported on 32 bit systems!');
  }
  function sd$lambda_0(sim, address, value) {
    throw InstructionNotSupportedError_init('sd is not supported on 64 bit systems!');
  }
  function sd$lambda_1(sim, address, value) {
    sim.storeLongwCache_z8e4lc$(address, value);
    return Unit;
  }
  function sd$lambda_2(sim, address, value) {
    sim.storeLongwCache_z8e4lc$(address, value);
    return Unit;
  }
  var sd;
  function sh$lambda(sim, address, value) {
    sim.storeHalfWordwCache_z8e4lc$(address, value);
    return Unit;
  }
  function sh$lambda_0(sim, address, value) {
    sim.storeHalfWordwCache_z8e4lc$(address, value);
    return Unit;
  }
  function sh$lambda_1(sim, address, value) {
    sim.storeHalfWordwCache_z8e4lc$(address, value);
    return Unit;
  }
  function sh$lambda_2(sim, address, value) {
    sim.storeHalfWordwCache_z8e4lc$(address, value);
    return Unit;
  }
  var sh;
  function sw$lambda(sim, address, value) {
    throw InstructionNotSupportedError_init('sw is not supported on 16 bit systems!');
  }
  function sw$lambda_0(sim, address, value) {
    sim.storeWordwCache_z8e4lc$(address, value);
    return Unit;
  }
  function sw$lambda_1(sim, address, value) {
    sim.storeWordwCache_z8e4lc$(address, value);
    return Unit;
  }
  function sw$lambda_2(sim, address, value) {
    sim.storeWordwCache_z8e4lc$(address, value);
    return Unit;
  }
  var sw;
  function beq$lambda(a, b) {
    return a === b;
  }
  function beq$lambda_0(a, b) {
    return a === b;
  }
  function beq$lambda_1(a, b) {
    return equals(a, b);
  }
  function beq$lambda_2(a, b) {
    return equals(a, b);
  }
  var beq;
  function bge$lambda(a, b) {
    return a >= b;
  }
  function bge$lambda_0(a, b) {
    return a >= b;
  }
  function bge$lambda_1(a, b) {
    return a.compareTo_11rb$(b) >= 0;
  }
  function bge$lambda_2(a, b) {
    return a.compareTo_11rb$(b) >= 0;
  }
  var bge;
  function bgeu$lambda(a, b) {
    return compareUnsignedShort(a, b) >= 0;
  }
  function bgeu$lambda_0(a, b) {
    return compareUnsigned(a, b) >= 0;
  }
  function bgeu$lambda_1(a, b) {
    return compareUnsignedLong(a, b) >= 0;
  }
  function bgeu$lambda_2(a, b) {
    return compareUnsignedQuadWord(a, b) >= 0;
  }
  var bgeu;
  function blt$lambda(a, b) {
    return a < b;
  }
  function blt$lambda_0(a, b) {
    return a < b;
  }
  function blt$lambda_1(a, b) {
    return a.compareTo_11rb$(b) < 0;
  }
  function blt$lambda_2(a, b) {
    return a.compareTo_11rb$(b) < 0;
  }
  var blt;
  function bltu$lambda(a, b) {
    return compareUnsignedShort(a, b) < 0;
  }
  function bltu$lambda_0(a, b) {
    return compareUnsigned(a, b) < 0;
  }
  function bltu$lambda_1(a, b) {
    return compareUnsignedLong(a, b) < 0;
  }
  function bltu$lambda_2(a, b) {
    return compareUnsignedQuadWord(a, b) < 0;
  }
  var bltu;
  function bne$lambda(a, b) {
    return a !== b;
  }
  function bne$lambda_0(a, b) {
    return a !== b;
  }
  function bne$lambda_1(a, b) {
    return !equals(a, b);
  }
  function bne$lambda_2(a, b) {
    return !equals(a, b);
  }
  var bne;
  function auipc$lambda(mcode, sim) {
    throw InstructionNotSupportedError_init('auipc is not supported on 16 bit systems!');
  }
  function auipc$lambda_0(mcode, sim) {
    var offset = mcode.get_cv51c2$(InstructionField$IMM_31_12_getInstance()) << 12;
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), numberToInt(sim.getPC()) + offset | 0);
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function auipc$lambda_1(mcode, sim) {
    var offset = Kotlin.Long.fromInt(mcode.get_cv51c2$(InstructionField$IMM_31_12_getInstance()) << 12);
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), numberToLong(sim.getPC()).add(offset));
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function auipc$lambda_2(mcode, sim) {
    var offset = toQuadWord_2(mcode.get_cv51c2$(InstructionField$IMM_31_12_getInstance()) << 12);
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), toQuadWord(sim.getPC()).plus_k7dsfo$(offset));
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  var auipc;
  function lui$lambda(mcode, sim) {
    throw InstructionNotSupportedError_init('lui is not supported on 16 bit systems!');
  }
  function lui$lambda_0(mcode, sim) {
    var imm = mcode.get_cv51c2$(InstructionField$IMM_31_12_getInstance()) << 12;
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), imm);
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function lui$lambda_1(mcode, sim) {
    var imm = Kotlin.Long.fromInt(mcode.get_cv51c2$(InstructionField$IMM_31_12_getInstance()) << 12);
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), imm);
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function lui$lambda_2(mcode, sim) {
    var imm = toQuadWord_2(mcode.get_cv51c2$(InstructionField$IMM_31_12_getInstance()) << 12);
    sim.setReg_135bro$(mcode.get_cv51c2$(InstructionField$RD_getInstance()), imm);
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  var lui;
  function jal$lambda(prog, mcode, args, dbg) {
    var tmp$;
    checkArgsLength_0(args.size, 2, dbg);
    mcode.set_d3qz0$(InstructionField$RD_getInstance(), regNameToNumber(args.get_za3lpa$(0), void 0, dbg));
    var tmp$_0 = prog.labels.containsKey_11rb$(args.get_za3lpa$(1));
    if (!tmp$_0) {
      var $receiver = args.get_za3lpa$(1);
      tmp$_0 = Regex_init('\\d+[fb]').matches_6bul2c$($receiver);
    }
    if (tmp$_0) {
      tmp$ = args.get_za3lpa$(1);
    }
     else {
      try {
        getImmWarning += 'Interpreting label as offset!; ';
        tmp$ = venusInternalLabels + toString(prog.textSize + userStringToInt(args.get_za3lpa$(1)) | 0);
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          getImmWarning = replace(getImmWarning, 'Interpreting label as offset!; ', '');
          tmp$ = args.get_za3lpa$(1);
        }
         else
          throw e;
      }
    }
    var label = tmp$;
    if (Regex_init('\\d+[fb]').matches_6bul2c$(label)) {
      var location = ensureNotNull(prog.getLabelOffset_kexlgo$(label, prog.textSize, dbg)) + prog.textSize | 0;
      JALRelocator.invoke_dc9fqr$(mcode, prog.textSize, location, void 0, dbg);
    }
     else {
      prog.addRelocation_pjaf6f$(JALRelocator, label, 0, void 0, dbg);
    }
    return Unit;
  }
  function jal$lambda_0(mcode, sim) {
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var imm = constructJALImmediate(mcode);
    sim.setReg_135bro$(rd, numberToInt(sim.getPC()) + mcode.length | 0);
    sim.incrementPC_3p81yu$(imm);
    sim.jumped = true;
    return Unit;
  }
  function jal$lambda_1(mcode, sim) {
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var imm = Kotlin.Long.fromInt(constructJALImmediate(mcode));
    sim.setReg_135bro$(rd, numberToLong(sim.getPC()).add(Kotlin.Long.fromInt(mcode.length)));
    sim.incrementPC_3p81yu$(imm);
    sim.jumped = true;
    return Unit;
  }
  function jal$lambda_2(mcode, sim) {
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var imm = toQuadWord_2(constructJALImmediate(mcode));
    sim.setReg_135bro$(rd, toQuadWord(sim.getPC()).plus_za3lpa$(mcode.length));
    sim.incrementPC_3p81yu$(imm);
    sim.jumped = true;
    return Unit;
  }
  function jal$lambda_3(mcode) {
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var imm = constructJALImmediate(mcode);
    return 'jal x' + rd + ' ' + imm;
  }
  var jal;
  function constructJALImmediate(mcode) {
    var imm_20 = mcode.get_cv51c2$(InstructionField$IMM_20_getInstance());
    var imm_10_1 = mcode.get_cv51c2$(InstructionField$IMM_10_1_getInstance());
    var imm_11 = mcode.get_cv51c2$(InstructionField$IMM_11_J_getInstance());
    var imm_19_12 = mcode.get_cv51c2$(InstructionField$IMM_19_12_getInstance());
    var imm = 0;
    imm = setBitslice(imm, imm_20, 20, 21);
    imm = setBitslice(imm, imm_10_1, 1, 11);
    imm = setBitslice(imm, imm_11, 11, 12);
    imm = setBitslice(imm, imm_19_12, 12, 20);
    return signExtend(imm, 21);
  }
  function amoaddweval32$lambda(data, vrs2) {
    return data + vrs2 | 0;
  }
  var amoaddweval32;
  var amoaddw;
  var amoaddwaq;
  var amoaddwrl;
  var amoaddwaqrl;
  var amoaddwrlaq;
  function amoandweval32$lambda(data, vrs2) {
    return data & vrs2;
  }
  var amoandweval32;
  var amoandw;
  var amoandwaq;
  var amoandwrl;
  var amoandwaqrl;
  var amoandwrlaq;
  function amomaxweval32$lambda(data, vrs2) {
    return Math_0.max(data, vrs2);
  }
  var amomaxweval32;
  var amomaxw;
  var amomaxwaq;
  var amomaxwrl;
  var amomaxwaqrl;
  var amomaxwrlaq;
  function amomaxuweval32$lambda(data, vrs2) {
    var a = data ^ -2147483648;
    var b = vrs2 ^ -2147483648;
    return Math_0.max(a, b);
  }
  var amomaxuweval32;
  var amomaxuw;
  var amomaxuwaq;
  var amomaxuwrl;
  var amomaxuwaqrl;
  var amomaxuwrlaq;
  function amominweval32$lambda(data, vrs2) {
    return Math_0.min(data, vrs2);
  }
  var amominweval32;
  var amominw;
  var amominwaq;
  function amominwrl$lambda(data, vrs2) {
    return Math_0.min(data, vrs2);
  }
  var amominwrl;
  var amominwaqrl;
  var amominwrlaq;
  function amominuweval32$lambda(data, vrs2) {
    var a = data ^ -2147483648;
    var b = vrs2 ^ -2147483648;
    return Math_0.min(a, b);
  }
  var amominuweval32;
  var amominuw;
  var amominuwaq;
  var amominuwrl;
  var amominuwaqrl;
  var amominuwrlaq;
  function amoorweval32$lambda(data, vrs2) {
    return data | vrs2;
  }
  var amoorweval32;
  var amoorw;
  var amoorwaq;
  var amoorwrl;
  var amoorwaqrl;
  var amoorwrlaq;
  function amoswapweval32$lambda(data, vrs2) {
    return vrs2;
  }
  var amoswapweval32;
  var amoswapw;
  var amoswapwaq;
  var amoswapwrl;
  var amoswapwaqrl;
  var amoswapwrlaq;
  function amoxorweval32$lambda(data, vrs2) {
    return data ^ vrs2;
  }
  var amoxorweval32;
  var amoxorw;
  var amoxorwaq;
  var amoxorwrl;
  var amoxorwaqrl;
  var amoxorwrlaq;
  function lrweval32$lambda(data, vrs2) {
    return data;
  }
  var lrweval32;
  var lrw;
  var lrwaq;
  var lrwrl;
  var lrwaqrl;
  var lrwrlaq;
  function scweval32$lambda(data, vrs2) {
    return data ^ vrs2;
  }
  var scweval32;
  var scw;
  var scwaq;
  var scwrl;
  var scwaqrl;
  var scwrlaq;
  function caddw$lambda(f, f_0) {
    throw InstructionReservedError_init('This instruction is reserved in RV32');
  }
  var caddw;
  function cand$lambda(a, b) {
    return a & b;
  }
  var cand;
  function cor$lambda(a, b) {
    return a ^ b;
  }
  var cor;
  function csub$lambda(a, b) {
    return a - b | 0;
  }
  var csub;
  function csubw$lambda(f, f_0) {
    throw InstructionReservedError_init('This instruction is reserved in RV32');
  }
  var csubw;
  function cxor$lambda(a, b) {
    return a ^ b;
  }
  var cxor;
  function caddi$lambda(prog, mcode, args, dbg) {
    checkArgsLength_0(args.size, 2, dbg);
    mcode.set_d3qz0$(InstructionField$RD_getInstance(), regNameToNumber(args.get_za3lpa$(0), void 0, dbg));
    var imm = getImmediate(args.get_za3lpa$(1), numberToInt(-Math_0.pow(2.0, 5)), numberToInt(Math_0.pow(2.0, 5)) - 1 | 0, dbg);
    var fimm = imm & 31;
    mcode.set_d3qz0$(InstructionField$IMM_b2_b6_getInstance(), fimm);
    var simm = (imm & 32) >> 5;
    mcode.set_d3qz0$(InstructionField$IMM_b12_getInstance(), simm);
    return Unit;
  }
  function caddi$lambda_0(mcode, sim) {
    throw InstructionNotSupportedError_init('C.ADDI is not supported by 16 bit systems!');
  }
  function caddi$lambda_1(mcode, sim) {
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var rawimm6_2 = mcode.get_cv51c2$(InstructionField$IMM_b2_b6_getInstance());
    var rawimm_12 = mcode.get_cv51c2$(InstructionField$IMM_b12_getInstance());
    var imm = rawimm_12 << 5 | rawimm6_2;
    var rs1v = numberToInt(sim.getReg_za3lpa$(rd));
    sim.setReg_135bro$(rd, imm + rs1v | 0);
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function caddi$lambda_2(mcode, sim) {
    throw InstructionNotSupportedError_init('C.ADDI is not supported by 64 bit systems!');
  }
  function caddi$lambda_3(mcode, sim) {
    throw InstructionNotSupportedError_init('C.ADDI is not supported by 128 bit systems!');
  }
  function caddi$lambda_4(mcode) {
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var rawimm6_2 = mcode.get_cv51c2$(InstructionField$IMM_b2_b6_getInstance());
    var rawimm_12 = mcode.get_cv51c2$(InstructionField$IMM_b12_getInstance());
    var imm = rawimm_12 << 5 | rawimm6_2;
    return 'c.addi x' + rd + ' ' + imm;
  }
  var caddi;
  function clwsp$lambda(prog, mcode, args, dbg) {
    checkArgsLength_0(args.size, 2, dbg);
    mcode.set_d3qz0$(InstructionField$RD_getInstance(), regNameToNumber(args.get_za3lpa$(0), void 0, dbg));
    var imm = getImmediate(args.get_za3lpa$(1), numberToInt(-Math_0.pow(2.0, 7)), numberToInt(Math_0.pow(2.0, 7)) - 1 | 0, dbg);
    throw new NotImplementedError('Still working on correct imm for C.LWSP');
  }
  function clwsp$lambda_0(mcode, sim) {
    throw InstructionNotSupportedError_init('C.LWSP is not supported by 16 bit systems!');
  }
  function clwsp$lambda_1(mcode, sim) {
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var rawimm6_2 = mcode.get_cv51c2$(InstructionField$IMM_b2_b6_getInstance());
    var rawimm_12 = mcode.get_cv51c2$(InstructionField$IMM_b12_getInstance());
    var imm4_2 = rawimm6_2 & 28;
    var imm7_6 = rawimm6_2 & 3;
    var imm = (imm4_2 | rawimm_12 << 3 | imm7_6 << 4) << 2;
    var sp = numberToInt(sim.getReg_za3lpa$(Registers_getInstance().sp));
    var data = sim.loadWordwCache_3p81yu$(sp + imm | 0);
    sim.setReg_135bro$(rd, data);
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function clwsp$lambda_2(mcode, sim) {
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var rawimm6_2 = mcode.get_cv51c2$(InstructionField$IMM_b2_b6_getInstance());
    var rawimm_12 = mcode.get_cv51c2$(InstructionField$IMM_b12_getInstance());
    var imm4_2 = rawimm6_2 & 28;
    var imm7_6 = rawimm6_2 & 3;
    var imm = (imm4_2 | rawimm_12 << 3 | imm7_6 << 4) << 2;
    var sp = numberToLong(sim.getReg_za3lpa$(Registers_getInstance().sp));
    var data = Kotlin.Long.fromInt(sim.loadWordwCache_3p81yu$(sp.add(Kotlin.Long.fromInt(imm))));
    sim.setReg_135bro$(rd, data);
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function clwsp$lambda_3(mcode, sim) {
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var rawimm6_2 = mcode.get_cv51c2$(InstructionField$IMM_b2_b6_getInstance());
    var rawimm_12 = mcode.get_cv51c2$(InstructionField$IMM_b12_getInstance());
    var imm4_2 = rawimm6_2 & 28;
    var imm7_6 = rawimm6_2 & 3;
    var imm = (imm4_2 | rawimm_12 << 3 | imm7_6 << 4) << 2;
    var sp = numberToLong(sim.getReg_za3lpa$(Registers_getInstance().sp));
    var data = Kotlin.Long.fromInt(sim.loadWordwCache_3p81yu$(sp.add(Kotlin.Long.fromInt(imm))));
    sim.setReg_135bro$(rd, data);
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function clwsp$lambda_4(mcode) {
    var rd = mcode.get_cv51c2$(InstructionField$RD_getInstance());
    var rawimm6_2 = mcode.get_cv51c2$(InstructionField$IMM_b2_b6_getInstance());
    var rawimm_12 = mcode.get_cv51c2$(InstructionField$IMM_b12_getInstance());
    var imm4_2 = rawimm6_2 & 28;
    var imm7_6 = rawimm6_2 & 3;
    var imm = (imm4_2 | rawimm_12 << 3 | imm7_6 << 4) << 2;
    return 'c.lwsp x' + rd + ' ' + imm;
  }
  var clwsp;
  function cnop$lambda(prog, mcode, args, dbg) {
    checkArgsLength_0(args.size, 0, dbg);
    return Unit;
  }
  function cnop$lambda_0(mcode, sim) {
    throw InstructionNotSupportedError_init('C.NOP is not supported by 16 bit systems!');
  }
  function cnop$lambda_1(mcode, sim) {
    sim.incrementPC_3p81yu$(mcode.length);
    return Unit;
  }
  function cnop$lambda_2(mcode, sim) {
    throw InstructionNotSupportedError_init('C.NOP is not supported by 64 bit systems!');
  }
  function cnop$lambda_3(mcode, sim) {
    throw InstructionNotSupportedError_init('C.NOP is not supported by 128 bit systems!');
  }
  function cnop$lambda_4(mcode) {
    return 'c.nop';
  }
  var cnop;
  function cadd$lambda(a, b) {
    return a + b | 0;
  }
  var cadd;
  function cebreak$lambda(it) {
    return 'c.ebreak';
  }
  var cebreak;
  function cmv$lambda(f, b) {
    return b;
  }
  var cmv;
  function div$lambda(a, b) {
    return b === toShort(0) ? -1 | 0 : a === kotlin_js_internal_ShortCompanionObject.MIN_VALUE && b === toShort(-1) ? a : toShort(a / b | 0);
  }
  function div$lambda_0(a, b) {
    return b === 0 ? -1 : a === -2147483648 && b === -1 ? a : a / b | 0;
  }
  function div$lambda_1(a, b) {
    return equals(b, L0) ? L_1 : equals(a, Long$Companion$MIN_VALUE) && equals(b, L_1) ? a : a.div(b);
  }
  function div$lambda_2(a, b) {
    return equals(b, toQuadWord_2(0)) ? toQuadWord_2(-1) : equals(a, QuadWord$Companion_getInstance().MIN_VALUE) && equals(b, toQuadWord_2(-1)) ? a : a.div_k7dsfo$(b);
  }
  var div_0;
  function divu$lambda(a, b) {
    var x = a << 16 >>> 16;
    var y = b << 16 >>> 16;
    return y === 0 ? toShort(-1) : toShort(x / y | 0);
  }
  function divu$lambda_0(a, b) {
    var x = Kotlin.Long.fromInt(a).shiftLeft(32).shiftRightUnsigned(32);
    var y = Kotlin.Long.fromInt(b).shiftLeft(32).shiftRightUnsigned(32);
    return equals(y, L0) ? -1 : x.div(y).toInt();
  }
  function divu$lambda_1(a, b) {
    var x = toQuadWord_3(a).shl_za3lpa$(64).ushr_za3lpa$(64);
    var y = toQuadWord_3(b).shl_za3lpa$(64).ushr_za3lpa$(64);
    return equals(y, new QuadWord()) ? L_1 : x.div_k7dsfo$(y).toLong();
  }
  function divu$lambda_2(a, b) {
    var x = toDoubleQuadWord(a).shl_za3lpa$(128).ushr_za3lpa$(128);
    var y = toDoubleQuadWord(b).shl_za3lpa$(128).ushr_za3lpa$(128);
    return equals(y, toDoubleQuadWord_2(0)) ? toQuadWord_2(-1) : toQuadWord(x.div_t8kpdv$(y));
  }
  var divu;
  function divw$lambda(a, b) {
    throw InstructionNotSupportedError_init('divw is not supported on 16 bit systems!');
  }
  function divw$lambda_0(a, b) {
    throw InstructionNotSupportedError_init('divw is not supported on 32 bit systems!');
  }
  function divw$lambda_1(a, b) {
    return b.toInt() === 0 ? L_1 : a.toInt() === -2147483648 && b.toInt() === -1 ? Kotlin.Long.fromInt(a.toInt()) : Kotlin.Long.fromInt(a.toInt() / b.toInt() | 0);
  }
  function divw$lambda_2(a, b) {
    return b.toInt() === 0 ? toQuadWord_2(-1) : a.toInt() === -2147483648 && b.toInt() === -1 ? toQuadWord_2(a.toInt()) : toQuadWord_2(a.toInt() / b.toInt() | 0);
  }
  var divw;
  function mul$lambda(a, b) {
    return toShort(a * b | 0);
  }
  function mul$lambda_0(a, b) {
    return Kotlin.imul(a, b);
  }
  function mul$lambda_1(a, b) {
    return a.multiply(b);
  }
  function mul$lambda_2(a, b) {
    return a.times_k7dsfo$(b);
  }
  var mul;
  function mulh$lambda(a, b) {
    var x = a;
    var y = b;
    return toShort(Kotlin.imul(x, y) >>> 16);
  }
  function mulh$lambda_0(a, b) {
    var x = Kotlin.Long.fromInt(a);
    var y = Kotlin.Long.fromInt(b);
    return x.multiply(y).shiftRightUnsigned(32).toInt();
  }
  function mulh$lambda_1(a, b) {
    var x = toQuadWord_3(a);
    var y = toQuadWord_3(b);
    return x.times_k7dsfo$(y).ushr_za3lpa$(64).toLong();
  }
  function mulh$lambda_2(a, b) {
    var x = toDoubleQuadWord(a);
    var y = toDoubleQuadWord(b);
    return toQuadWord(x.times_t8kpdv$(y).ushr_za3lpa$(128));
  }
  var mulh;
  function mulhsu$lambda(a, b) {
    var x = a;
    var y = b << 16 >>> 16;
    return toShort(Kotlin.imul(x, y) >>> 16);
  }
  function mulhsu$lambda_0(a, b) {
    var x = Kotlin.Long.fromInt(a);
    var y = Kotlin.Long.fromInt(b).shiftLeft(32).shiftRightUnsigned(32);
    return x.multiply(y).shiftRightUnsigned(32).toInt();
  }
  function mulhsu$lambda_1(a, b) {
    var x = toQuadWord_3(a);
    var y = toQuadWord_3(b).shl_za3lpa$(32).ushr_za3lpa$(32);
    return x.times_k7dsfo$(y).ushr_za3lpa$(32).toLong();
  }
  function mulhsu$lambda_2(a, b) {
    var x = toDoubleQuadWord(a);
    var y = toDoubleQuadWord(b).shl_za3lpa$(32).ushr_za3lpa$(32);
    return toQuadWord(x.times_t8kpdv$(y).ushr_za3lpa$(32));
  }
  var mulhsu;
  function mulhu$lambda(a, b) {
    var x = a << 16 >>> 16;
    var y = b << 16 >>> 16;
    return toShort(Kotlin.imul(x, y) >>> 16);
  }
  function mulhu$lambda_0(a, b) {
    var x = Kotlin.Long.fromInt(a).shiftLeft(32).shiftRightUnsigned(32);
    var y = Kotlin.Long.fromInt(b).shiftLeft(32).shiftRightUnsigned(32);
    return x.multiply(y).shiftRightUnsigned(32).toInt();
  }
  function mulhu$lambda_1(a, b) {
    var x = toQuadWord_3(a).shl_za3lpa$(32).ushr_za3lpa$(32);
    var y = toQuadWord_3(b).shl_za3lpa$(32).ushr_za3lpa$(32);
    return x.times_k7dsfo$(y).ushr_za3lpa$(32).toLong();
  }
  function mulhu$lambda_2(a, b) {
    var x = toDoubleQuadWord(a).shl_za3lpa$(32).ushr_za3lpa$(32);
    var y = toDoubleQuadWord(b).shl_za3lpa$(32).ushr_za3lpa$(32);
    return toQuadWord(x.times_t8kpdv$(y).ushr_za3lpa$(32));
  }
  var mulhu;
  function mulw$lambda(a, b) {
    throw InstructionNotSupportedError_init('mulw is not supported on 16 bit systems!');
  }
  function mulw$lambda_0(a, b) {
    throw InstructionNotSupportedError_init('mulw is not supported on 32 bit systems!');
  }
  function mulw$lambda_1(a, b) {
    return Kotlin.Long.fromInt(Kotlin.imul(a.toInt(), b.toInt()));
  }
  function mulw$lambda_2(a, b) {
    return toQuadWord_2(Kotlin.imul(a.toInt(), b.toInt()));
  }
  var mulw;
  function rem$lambda(a, b) {
    return b === toShort(0) ? a : a === kotlin_js_internal_ShortCompanionObject.MIN_VALUE && b === toShort(-1) ? 0 : toShort(a % b);
  }
  function rem$lambda_0(a, b) {
    return b === 0 ? a : a === -2147483648 && b === -1 ? 0 : a % b;
  }
  function rem$lambda_1(a, b) {
    return equals(b, L0) ? a : equals(a, Long$Companion$MIN_VALUE) && equals(b, L_1) ? L0 : a.modulo(b);
  }
  function rem$lambda_2(a, b) {
    return equals(b, toQuadWord_2(0)) ? a : equals(a, QuadWord$Companion_getInstance().MIN_VALUE) && equals(b, toQuadWord_2(-1)) ? toQuadWord_2(0) : a.rem_k7dsfo$(b);
  }
  var rem_0;
  function remu$lambda(a, b) {
    var x = a << 16 >>> 16;
    var y = b << 16 >>> 16;
    return b === toShort(0) ? a : toShort(x % y);
  }
  function remu$lambda_0(a, b) {
    var x = Kotlin.Long.fromInt(a).shiftLeft(32).shiftRightUnsigned(32);
    var y = Kotlin.Long.fromInt(b).shiftLeft(32).shiftRightUnsigned(32);
    return b === 0 ? a : x.modulo(y).toInt();
  }
  function remu$lambda_1(a, b) {
    var x = toQuadWord_3(a).shl_za3lpa$(32).ushr_za3lpa$(32);
    var y = toQuadWord_3(b).shl_za3lpa$(32).ushr_za3lpa$(32);
    return equals(b, L0) ? a : x.rem_k7dsfo$(y).toLong();
  }
  function remu$lambda_2(a, b) {
    var x = toDoubleQuadWord(a).shl_za3lpa$(32).ushr_za3lpa$(32);
    var y = toDoubleQuadWord(b).shl_za3lpa$(32).ushr_za3lpa$(32);
    return equals(b, new QuadWord()) ? a : toQuadWord(x.rem_t8kpdv$(y));
  }
  var remu;
  function remuw$lambda(a, b) {
    throw InstructionNotSupportedError_init('remuw is not supported on 16 bit systems!');
  }
  function remuw$lambda_0(a, b) {
    throw InstructionNotSupportedError_init('remuw is not supported on 32 bit systems!');
  }
  function remuw$lambda_1(a, b) {
    var x = a.shiftLeft(32).shiftRightUnsigned(32);
    var y = b.shiftLeft(32).shiftRightUnsigned(32);
    return b.toInt() === 0 ? Kotlin.Long.fromInt(a.toInt()) : Kotlin.Long.fromInt(x.modulo(y).toInt());
  }
  function remuw$lambda_2(a, b) {
    var x = a.toLong().shiftLeft(32).shiftRightUnsigned(32);
    var y = b.toLong().shiftLeft(32).shiftRightUnsigned(32);
    return b.toInt() === 0 ? toQuadWord_2(a.toInt()) : toQuadWord_2(x.modulo(y).toInt());
  }
  var remuw;
  function remw$lambda(a, b) {
    throw InstructionNotSupportedError_init('remw is not supported on 16 bit systems!');
  }
  function remw$lambda_0(a, b) {
    throw InstructionNotSupportedError_init('remw is not supported on 32 bit systems!');
  }
  function remw$lambda_1(a, b) {
    return b.toInt() === 0 ? a : a.toInt() === -2147483648 && b.toInt() === -1 ? L0 : Kotlin.Long.fromInt(a.toInt() % b.toInt());
  }
  function remw$lambda_2(a, b) {
    return b.toInt() === 0 ? toQuadWord_2(a.toInt()) : a.toInt() === -2147483648 && b.toInt() === -1 ? toQuadWord_2(0) : toQuadWord_2(a.toInt() % b.toInt());
  }
  var remw;
  function MachineCode(encoding) {
    this.encoding_0 = encoding;
    this.length = 4;
  }
  MachineCode.prototype.get_cv51c2$ = function (ifield) {
    var mask = L1.shiftLeft(ifield.hi).subtract(L1.shiftLeft(ifield.lo)).toInt();
    return (this.encoding_0 & mask) >>> ifield.lo;
  };
  MachineCode.prototype.set_d3qz0$ = function (ifield, value) {
    var mask = L1.shiftLeft(ifield.hi).subtract(L1.shiftLeft(ifield.lo)).toInt();
    this.encoding_0 = this.encoding_0 & ~mask;
    this.encoding_0 = this.encoding_0 | value << ifield.lo & mask;
  };
  MachineCode.prototype.toString = function () {
    return Kotlin.Long.fromInt(this.encoding_0).toString();
  };
  MachineCode.prototype.toString_za3lpa$ = function (radix) {
    return toString_1(Kotlin.Long.fromInt(this.encoding_0), radix);
  };
  MachineCode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MachineCode',
    interfaces: []
  };
  function MemorySegments() {
    MemorySegments_instance = this;
    this.STACK_BEGIN = 2147483632;
    this.HEAP_BEGIN = 268468224;
    this.STATIC_BEGIN = 268435456;
    this.TEXT_BEGIN = 0;
  }
  MemorySegments.prototype.setTextBegin_za3lpa$ = function (i) {
    if (i < 0) {
      throw SimulatorError_init('The text location must be a positive number!');
    }
     else if (i >= MemorySegments_getInstance().STATIC_BEGIN) {
      throw SimulatorError_init('The text location in memory cannot be larger than the static!');
    }
    MemorySegments_getInstance().TEXT_BEGIN = i;
  };
  MemorySegments.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MemorySegments',
    interfaces: []
  };
  var MemorySegments_instance = null;
  function MemorySegments_getInstance() {
    if (MemorySegments_instance === null) {
      new MemorySegments();
    }
    return MemorySegments_instance;
  }
  function MemSize(name, ordinal, size) {
    Enum.call(this);
    this.size = size;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MemSize_initFields() {
    MemSize_initFields = function () {
    };
    MemSize$QUAD_instance = new MemSize('QUAD', 0, 16);
    MemSize$LONG_instance = new MemSize('LONG', 1, 8);
    MemSize$WORD_instance = new MemSize('WORD', 2, 4);
    MemSize$HALF_instance = new MemSize('HALF', 3, 2);
    MemSize$BYTE_instance = new MemSize('BYTE', 4, 1);
  }
  var MemSize$QUAD_instance;
  function MemSize$QUAD_getInstance() {
    MemSize_initFields();
    return MemSize$QUAD_instance;
  }
  var MemSize$LONG_instance;
  function MemSize$LONG_getInstance() {
    MemSize_initFields();
    return MemSize$LONG_instance;
  }
  var MemSize$WORD_instance;
  function MemSize$WORD_getInstance() {
    MemSize_initFields();
    return MemSize$WORD_instance;
  }
  var MemSize$HALF_instance;
  function MemSize$HALF_getInstance() {
    MemSize_initFields();
    return MemSize$HALF_instance;
  }
  var MemSize$BYTE_instance;
  function MemSize$BYTE_getInstance() {
    MemSize_initFields();
    return MemSize$BYTE_instance;
  }
  MemSize.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MemSize',
    interfaces: [Enum]
  };
  function MemSize$values() {
    return [MemSize$QUAD_getInstance(), MemSize$LONG_getInstance(), MemSize$WORD_getInstance(), MemSize$HALF_getInstance(), MemSize$BYTE_getInstance()];
  }
  MemSize.values = MemSize$values;
  function MemSize$valueOf(name) {
    switch (name) {
      case 'QUAD':
        return MemSize$QUAD_getInstance();
      case 'LONG':
        return MemSize$LONG_getInstance();
      case 'WORD':
        return MemSize$WORD_getInstance();
      case 'HALF':
        return MemSize$HALF_getInstance();
      case 'BYTE':
        return MemSize$BYTE_getInstance();
      default:throwISE('No enum constant venusbackend.riscv.MemSize.' + name);
    }
  }
  MemSize.valueOf_61zpoe$ = MemSize$valueOf;
  function Import(path, relative) {
    this.path = path;
    this.relative = relative;
  }
  Import.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Import',
    interfaces: []
  };
  Import.prototype.component1 = function () {
    return this.path;
  };
  Import.prototype.component2 = function () {
    return this.relative;
  };
  Import.prototype.copy_ivxn3r$ = function (path, relative) {
    return new Import(path === void 0 ? this.path : path, relative === void 0 ? this.relative : relative);
  };
  Import.prototype.toString = function () {
    return 'Import(path=' + Kotlin.toString(this.path) + (', relative=' + Kotlin.toString(this.relative)) + ')';
  };
  Import.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.relative) | 0;
    return result;
  };
  Import.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.path, other.path) && Kotlin.equals(this.relative, other.relative)))));
  };
  var venusInternalLabels;
  function Program(name, absPath) {
    if (name === void 0)
      name = 'anonymous';
    this.name = name;
    this.absPath = absPath;
    this.insts = ArrayList_init();
    this.debugInfo = ArrayList_init();
    this.labels = HashMap_init();
    this.equivs = HashMap_init();
    this.relocationTable = ArrayList_init();
    this.dataRelocationTable = ArrayList_init();
    this.dataSegment = ArrayList_init();
    this.localReferences = HashMap_init();
    this.textSize = 0;
    this.dataSize = 0;
    this.globalLabels_0 = HashSet_init();
    this.imports = ArrayList_init();
    this.SYM_PATN_0 = Regex_init('(.*?)(?:([-+])(?:(\\d+)|(.*)))?$');
  }
  Program.prototype.add_6cx2xq$ = function (mcode) {
    this.insts.add_11rb$(mcode);
    this.textSize = this.textSize + mcode.length | 0;
  };
  Program.prototype.addToData_s8j3t7$ = function (byte) {
    this.dataSegment.add_11rb$(byte);
    this.dataSize = this.dataSize + 1 | 0;
  };
  Program.prototype.overwriteData_6t1wet$ = function (offset, byte) {
    this.dataSegment.set_wxm5ur$(offset, byte);
  };
  Program.prototype.addImport_ivxn3r$ = function (filepath, relative) {
    this.imports.add_11rb$(new Import(filepath, relative));
  };
  Program.prototype.addDebugInfo_wb9iis$ = function (dbg) {
    while (this.debugInfo.size < this.insts.size) {
      this.debugInfo.add_11rb$(dbg);
    }
  };
  Program.prototype.addLabel_bm4lxs$ = function (label, offset) {
    if (Regex_init('\\d+').matches_6bul2c$(label)) {
      var intlabel = toInt(label);
      if (this.localReferences.containsKey_11rb$(intlabel)) {
        var set = ensureNotNull(this.localReferences.get_11rb$(intlabel));
        set.add_11rb$(offset);
      }
       else {
        var new_set = HashSet_init();
        new_set.add_11rb$(offset);
        this.localReferences.put_xwzc9p$(intlabel, new_set);
      }
      return null;
    }
     else {
      return this.labels.put_xwzc9p$(label, offset);
    }
  };
  Program.prototype.addEqu_puj7f4$ = function (label, defn) {
    return this.equivs.put_xwzc9p$(label, defn);
  };
  Program.prototype.symbolPart_qxjnze$ = function (labelArg, dbg) {
    var tmp$;
    tmp$ = this.SYM_PATN_0.find_905azu$(labelArg);
    if (tmp$ == null) {
      throw AssemblerError_init('bad symbol reference: ' + labelArg, dbg);
    }
    var match = tmp$;
    return match.groupValues.get_za3lpa$(1);
  };
  Program.prototype.labelOffsetPart_qxjnze$ = function (labelArg, dbg) {
    var tmp$;
    tmp$ = this.SYM_PATN_0.find_905azu$(labelArg);
    if (tmp$ == null) {
      throw AssemblerError_init('ill-formed symbol reference: ' + labelArg, dbg);
    }
    var match = tmp$;
    var tmp$_0 = match.destructured;
    var sign = tmp$_0.match.groupValues.get_za3lpa$(2);
    var num = tmp$_0.match.groupValues.get_za3lpa$(3);
    var offsetSym = tmp$_0.match.groupValues.get_za3lpa$(4);
    if (equals(sign, '')) {
      return 0;
    }
    if (!equals(num, '')) {
      return toInt(sign + num);
    }
    var $receiver = this.labels;
    var tmp$_1;
    if (!(Kotlin.isType(tmp$_1 = $receiver, Map) ? tmp$_1 : throwCCE()).containsKey_11rb$(offsetSym)) {
      throw AssemblerError_init('undefined symbol: ' + offsetSym, dbg);
    }
    return equals(sign, '-') ? -ensureNotNull(this.labels.get_11rb$(offsetSym)) | 0 : ensureNotNull(this.labels.get_11rb$(offsetSym));
  };
  Program.prototype.getLabelOffset_kexlgo$ = function (label, address, dbg) {
    var tmp$, tmp$_0;
    if (Regex_init('\\d+[fb]').matches_6bul2c$(label)) {
      var endIndex = label.length - 1 | 0;
      var intlabel = toInt(label.substring(0, endIndex));
      tmp$ = this.localReferences.get_11rb$(intlabel);
      if (tmp$ == null) {
        throw AssemblerError_init("The number label '" + intlabel + "' has not been defined!", dbg);
      }
      var number_set = tmp$;
      if (Regex_init('\\d+f').matches_6bul2c$(label)) {
        var destination = ArrayList_init();
        var tmp$_1;
        tmp$_1 = number_set.iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          if (element >= address)
            destination.add_11rb$(element);
        }
        tmp$_0 = min(destination);
      }
       else {
        var destination_0 = ArrayList_init();
        var tmp$_2;
        tmp$_2 = number_set.iterator();
        while (tmp$_2.hasNext()) {
          var element_0 = tmp$_2.next();
          if (element_0 <= address)
            destination_0.add_11rb$(element_0);
        }
        tmp$_0 = max(destination_0);
      }
    }
     else {
      tmp$_0 = this.labels.get_11rb$(label);
    }
    var loc = tmp$_0;
    return loc != null ? loc - this.textSize | 0 : null;
  };
  Program.prototype.getImmediate_druo6x$ = function (str, min, max, dbg) {
    var tmp$;
    try {
      tmp$ = userStringToInt(str);
    }
     catch (e) {
      if (Kotlin.isType(e, NumberFormatException)) {
        var sym = this.symbolPart_qxjnze$(str, dbg);
        var offsetVal = this.labelOffsetPart_qxjnze$(str, dbg);
        var tmp$_0 = !equals(sym, '');
        if (tmp$_0) {
          var $receiver = this.labels;
          var tmp$_1;
          tmp$_0 = !(Kotlin.isType(tmp$_1 = $receiver, Map) ? tmp$_1 : throwCCE()).containsKey_11rb$(sym);
        }
        if (tmp$_0) {
          throw AssemblerError_init('undefined symbol: ' + sym, dbg);
        }
        var symVal = equals(sym, '') ? 0 : ensureNotNull(this.labels.get_11rb$(sym));
        tmp$ = symVal + offsetVal | 0;
      }
       else
        throw e;
    }
    var imm = tmp$;
    if (!(min <= imm && imm <= max))
      throw AssemblerError_init('immediate ' + str + ' (= ' + imm + ') out of range (should be between ' + min + ' and ' + max + ')', dbg);
    return imm;
  };
  Program.prototype.addRelocation_pjaf6f$ = function (relocator, label, labelOffset, offset, dbg) {
    if (offset === void 0)
      offset = this.textSize;
    return this.relocationTable.add_11rb$(new RelocationInfo(relocator, offset, label, labelOffset, dbg));
  };
  Program.prototype.addDataRelocation_9yf72u$ = function (label, labelOffset, offset, dbg) {
    if (offset === void 0)
      offset = this.textSize;
    return this.dataRelocationTable.add_11rb$(new DataRelocationInfo(offset, label, labelOffset, dbg));
  };
  Program.prototype.makeLabelGlobal_61zpoe$ = function (label) {
    this.globalLabels_0.add_11rb$(label);
  };
  Program.prototype.isGlobalLabel_61zpoe$ = function (label) {
    return this.globalLabels_0.contains_11rb$(label);
  };
  Program.prototype.dump = function () {
    return this.insts;
  };
  Program.prototype.assembleDependencies = function () {
    return ArrayList_init();
  };
  Program.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Program',
    interfaces: []
  };
  function Registers() {
    Registers_instance = this;
    this.zero = 0;
    this.ra = 1;
    this.sp = 2;
    this.gp = 3;
    this.tp = 4;
    this.t0 = 5;
    this.t1 = 6;
    this.t2 = 7;
    this.s0 = 8;
    this.fp = 8;
    this.s1 = 9;
    this.a0 = 10;
    this.a1 = 11;
    this.a2 = 12;
    this.a3 = 13;
    this.a4 = 14;
    this.a5 = 15;
    this.a6 = 16;
    this.a7 = 17;
    this.s2 = 18;
    this.s3 = 19;
    this.s4 = 20;
    this.s5 = 21;
    this.s6 = 22;
    this.s7 = 23;
    this.s8 = 24;
    this.s9 = 25;
    this.s10 = 26;
    this.s11 = 27;
    this.t3 = 28;
    this.t4 = 29;
    this.t5 = 30;
    this.t6 = 31;
    this.ft0 = 0;
    this.ft1 = 1;
    this.ft2 = 2;
    this.ft3 = 3;
    this.ft4 = 4;
    this.ft5 = 5;
    this.ft6 = 6;
    this.ft7 = 7;
    this.fs0 = 8;
    this.fs1 = 9;
    this.fa0 = 10;
    this.fa1 = 11;
    this.fa2 = 12;
    this.fa3 = 13;
    this.fa4 = 14;
    this.fa5 = 15;
    this.fa6 = 16;
    this.fa7 = 17;
    this.fs2 = 18;
    this.fs3 = 19;
    this.fs4 = 20;
    this.fs5 = 21;
    this.fs6 = 22;
    this.fs7 = 23;
    this.fs8 = 24;
    this.fs9 = 25;
    this.fs10 = 26;
    this.fs11 = 27;
    this.ft8 = 28;
    this.ft9 = 29;
    this.ft10 = 30;
    this.ft11 = 31;
  }
  Registers.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Registers',
    interfaces: []
  };
  var Registers_instance = null;
  function Registers_getInstance() {
    if (Registers_instance === null) {
      new Registers();
    }
    return Registers_instance;
  }
  function Settings() {
    Settings_instance = this;
    this.strict = false;
  }
  Settings.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Settings',
    interfaces: []
  };
  var Settings_instance = null;
  function Settings_getInstance() {
    if (Settings_instance === null) {
      new Settings();
    }
    return Settings_instance;
  }
  function userStringToInt(s) {
    var tmp$, tmp$_0;
    if (isCharacterLiteral(s)) {
      return characterLiteralToInt(s);
    }
    if (startsWith(s, '0x'))
      tmp$ = 16;
    else if (startsWith(s, '0b'))
      tmp$ = 2;
    else if (startsWith(drop_0(s, 1), '0x'))
      tmp$ = 16;
    else if (startsWith(drop_0(s, 1), '0b'))
      tmp$ = 2;
    else
      return toLong_0(s).toInt();
    var radix = tmp$;
    switch (first_0(s)) {
      case 43:
      case 45:
        tmp$_0 = 1;
        break;
      default:tmp$_0 = 0;
        break;
    }
    var skipSign = tmp$_0;
    var noRadixString = take(s, skipSign) + drop_0(s, skipSign + 2 | 0);
    return toLong(noRadixString, radix).toInt();
  }
  function userStringToLong(s) {
    var tmp$, tmp$_0;
    if (isCharacterLiteral(s)) {
      return characterLiteralToLong(s);
    }
    if (startsWith(s, '0x'))
      tmp$ = 16;
    else if (startsWith(s, '0b'))
      tmp$ = 2;
    else if (startsWith(drop_0(s, 1), '0x'))
      tmp$ = 16;
    else if (startsWith(drop_0(s, 1), '0b'))
      tmp$ = 2;
    else
      return toLong_0(s);
    var radix = tmp$;
    switch (first_0(s)) {
      case 43:
      case 45:
        tmp$_0 = 1;
        break;
      default:tmp$_0 = 0;
        break;
    }
    var skipSign = tmp$_0;
    var noRadixString = take(s, skipSign) + drop_0(s, skipSign + 2 | 0);
    return toLong(noRadixString, radix);
  }
  function userStringToFloat(s) {
    var tmp$;
    if (startsWith(s, '0x'))
      tmp$ = 16;
    else if (startsWith(s, '0b'))
      tmp$ = 2;
    else if (startsWith(drop_0(s, 1), '0x'))
      tmp$ = 16;
    else if (startsWith(drop_0(s, 1), '0b'))
      tmp$ = 2;
    else {
      return toDouble(s);
    }
    var radix = tmp$;
    var bits = userStringToInt(s);
    var v = Kotlin.floatFromBits(bits);
    return v;
  }
  function userStringToDouble(s) {
    var tmp$;
    if (startsWith(s, '0x'))
      tmp$ = 16;
    else if (startsWith(s, '0b'))
      tmp$ = 2;
    else if (startsWith(drop_0(s, 1), '0x'))
      tmp$ = 16;
    else if (startsWith(drop_0(s, 1), '0b'))
      tmp$ = 2;
    else
      return toDouble(s);
    var radix = tmp$;
    var bits = userStringToLong(s);
    var v = Kotlin.doubleFromBits(bits);
    return v;
  }
  function getBit(value, position) {
    return numberToLong(value).shiftRight(position).and(L1).toInt();
  }
  function unescapeString(s) {
    return replace(replace(replace(replace(replace(replace(s, '\\n', '\n'), '\\r', '\r'), '\\t', '\t'), '\\b', '\b'), '\\"', '"'), "\\'", "'");
  }
  function isNumeral(s) {
    try {
      userStringToInt(s);
      return true;
    }
     catch (e) {
      if (Kotlin.isType(e, NumberFormatException)) {
        return false;
      }
       else
        throw e;
    }
  }
  function isCharacterLiteral(s) {
    return first_0(s) === 39 && last_0(s) === 39;
  }
  function characterLiteralToInt(s) {
    var stripSingleQuotes = dropLast(drop_0(s, 1), 1);
    if (equals(stripSingleQuotes, "\\'"))
      return 39;
    if (equals(stripSingleQuotes, '"'))
      return 34;
    try {
      var parsed = unescapeString(stripSingleQuotes);
      if (parsed.length === 0)
        throw new NumberFormatException('character literal ' + s + ' is empty');
      if (parsed.length > 1)
        throw new NumberFormatException('character literal ' + s + ' too long');
      return parsed.charCodeAt(0) | 0;
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw new NumberFormatException('could not parse character literal ' + s);
      }
       else
        throw e;
    }
  }
  function characterLiteralToLong(s) {
    var stripSingleQuotes = dropLast(drop_0(s, 1), 1);
    if (equals(stripSingleQuotes, "\\'"))
      return L39;
    if (equals(stripSingleQuotes, '"'))
      return L34;
    try {
      var parsed = unescapeString(stripSingleQuotes);
      if (parsed.length === 0)
        throw new NumberFormatException('character literal ' + s + ' is empty');
      if (parsed.length > 1)
        throw new NumberFormatException('character literal ' + s + ' too long');
      return Kotlin.Long.fromInt(parsed.charCodeAt(0) | 0);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw new NumberFormatException('could not parse character literal ' + s);
      }
       else
        throw e;
    }
  }
  function AlignmentError() {
    this.name = 'AlignmentError';
  }
  AlignmentError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AlignmentError',
    interfaces: [SimulatorError]
  };
  function AlignmentError_init(msg, $this) {
    if (msg === void 0)
      msg = null;
    $this = $this || Object.create(AlignmentError.prototype);
    SimulatorError_init(msg, void 0, void 0, $this);
    AlignmentError.call($this);
    return $this;
  }
  function Block(blocksize) {
    this.blocksize_0 = blocksize;
    this.blockState = BlockState$EMPTY_getInstance();
    this.tag_l00o2a$_0 = 0;
    this.isValid_e8vh7a$_0 = false;
    this.isDirty_5ukpfk$_0 = false;
    this.recentUse_ochk64$_0 = 0;
    this.isValid = false;
    this.isDirty = false;
    this.recentUse = 0;
  }
  Object.defineProperty(Block.prototype, 'tag', {
    get: function () {
      return this.tag_l00o2a$_0;
    },
    set: function (tag) {
      this.tag_l00o2a$_0 = tag;
    }
  });
  Object.defineProperty(Block.prototype, 'isValid', {
    get: function () {
      return this.isValid_e8vh7a$_0;
    },
    set: function (isValid) {
      this.isValid_e8vh7a$_0 = isValid;
    }
  });
  Object.defineProperty(Block.prototype, 'isDirty', {
    get: function () {
      return this.isDirty_5ukpfk$_0;
    },
    set: function (isDirty) {
      this.isDirty_5ukpfk$_0 = isDirty;
    }
  });
  Object.defineProperty(Block.prototype, 'recentUse', {
    get: function () {
      return this.recentUse_ochk64$_0;
    },
    set: function (recentUse) {
      this.recentUse_ochk64$_0 = recentUse;
    }
  });
  Block.prototype.read_vux9f0$ = function (address, useCounter) {
    this.recentUse = useCounter;
  };
  Block.prototype.write_vux9f0$ = function (offset, useCounter) {
    this.recentUse = useCounter;
    this.isValid = true;
    this.isDirty = true;
  };
  Block.prototype.writeBlock_za3lpa$ = function (tag) {
    this.tag = tag;
    this.isValid = true;
    this.isDirty = false;
  };
  Block.prototype.copy = function () {
    var b = new Block(this.blocksize_0);
    b.tag = this.tag;
    b.isValid = this.isValid;
    b.isDirty = this.isDirty;
    b.recentUse = this.recentUse;
    b.blockState = this.blockState;
    return b;
  };
  Block.prototype.toString = function () {
    var result = (this.isValid ? 1 : 0).toString() + '        ' + Renderer_getInstance().toHex_ydzd23$(this.tag) + '   ' + toString(this.isDirty ? 1 : 0) + '        ';
    return result;
  };
  Block.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Block',
    interfaces: []
  };
  function Cache(c) {
    this.numWrites_8be2vx$ = 0;
    this.numReads_8be2vx$ = 0;
    this.numWriteMisses_8be2vx$ = 0;
    this.numReadMisses_8be2vx$ = 0;
    this.numEvictions_0 = 0;
    this.c_0 = c;
    this.sets_8be2vx$ = null;
    this.numWrites_8be2vx$ = 0;
    this.numReads_8be2vx$ = 0;
    this.numWriteMisses_8be2vx$ = 0;
    this.numReadMisses_8be2vx$ = 0;
    this.numEvictions_0 = 0;
    var s = Kotlin.newArray(c.cacheSize() / Kotlin.imul(c.associativity(), c.cacheBlockSize()) | 0, null);
    for (var i = 0; i !== s.length; ++i) {
      s[i] = new Set(c.associativity(), c.cacheBlockSize(), c);
    }
    this.sets_8be2vx$ = copyToArray(filterNotNull(s));
  }
  Cache.prototype.read_e3g4se$ = function (address) {
    var tmp$;
    var h = true;
    var bs = BlockState$HIT_getInstance();
    if (!this.isInMemory_0(address)) {
      (tmp$ = this.c_0.nextLevelCacheHandler) != null ? (tmp$.read_e3g4se$(address), Unit) : null;
      this.allocate_0(address.address);
      this.numReadMisses_8be2vx$ = this.numReadMisses_8be2vx$ + 1 | 0;
      h = false;
      bs = BlockState$MISS_getInstance();
    }
    var set = this.sets_8be2vx$[numberToInt(rem(div(address.address, this.c_0.cacheBlockSize()), this.sets_8be2vx$.length))];
    var blockoffset = numberToInt(rem(address.address, this.c_0.cacheBlockSize()));
    this.numReads_8be2vx$ = this.numReads_8be2vx$ + 1 | 0;
    set.read_yrbglt$(numberToInt(this.getTag_0(address.address)), blockoffset, bs);
    return h;
  };
  Cache.prototype.write_e3g4se$ = function (address) {
    var tmp$;
    var h = true;
    var bs = BlockState$HIT_getInstance();
    if (!this.isInMemory_0(address)) {
      (tmp$ = this.c_0.nextLevelCacheHandler) != null ? (tmp$.write_e3g4se$(address), Unit) : null;
      this.allocate_0(address.address);
      this.numWriteMisses_8be2vx$ = this.numWriteMisses_8be2vx$ + 1 | 0;
      h = false;
      bs = BlockState$MISS_getInstance();
    }
    var index = numberToInt(rem(div(address.address, this.c_0.cacheBlockSize()), this.sets_8be2vx$.length));
    var blockoffset = numberToInt(rem(address.address, this.c_0.cacheBlockSize()));
    var set = this.sets_8be2vx$[index];
    this.numWrites_8be2vx$ = this.numWrites_8be2vx$ + 1 | 0;
    set.write_yrbglt$(numberToInt(this.getTag_0(address.address)), blockoffset, bs);
    return h;
  };
  Cache.prototype.isInMemory_0 = function (address) {
    var index = rem(div(address.address, this.c_0.cacheBlockSize()), this.sets_8be2vx$.length);
    return this.sets_8be2vx$[numberToInt(index)].findBlock_za3lpa$(numberToInt(this.getTag_0(address.address))) != null;
  };
  Cache.prototype.getTag_0 = function (address) {
    return div(address, Kotlin.imul(this.sets_8be2vx$.length, this.c_0.cacheBlockSize()));
  };
  Cache.prototype.allocate_0 = function (address) {
    var index = numberToInt(rem(div(address, this.c_0.cacheBlockSize()), this.sets_8be2vx$.length));
    var set = this.sets_8be2vx$[index];
    var evictee;
    if (this.c_0.blockRepPolicy().equals(BlockReplacementPolicy$RANDOM_getInstance())) {
      evictee = set.getRandom();
    }
     else {
      evictee = set.getLRU();
    }
    if (evictee.isDirty) {
      this.numEvictions_0 = this.numEvictions_0 + 1 | 0;
      var evicteeAddress = Kotlin.imul(Kotlin.imul(evictee.tag, this.sets_8be2vx$.length) + index | 0, this.c_0.cacheBlockSize());
    }
    var SAddress = times(div(address, this.c_0.cacheBlockSize()), this.c_0.cacheBlockSize());
    evictee.writeBlock_za3lpa$(numberToInt(this.getTag_0(address)));
  };
  Cache.prototype.copy = function () {
    var tmp$;
    var cc = new Cache(this.c_0);
    cc.numEvictions_0 = this.numEvictions_0;
    cc.numReadMisses_8be2vx$ = this.numReadMisses_8be2vx$;
    cc.numReads_8be2vx$ = this.numReads_8be2vx$;
    cc.numWriteMisses_8be2vx$ = this.numWrites_8be2vx$;
    cc.numWrites_8be2vx$ = this.numWrites_8be2vx$;
    tmp$ = this.sets_8be2vx$;
    for (var s = 0; s !== tmp$.length; ++s) {
      cc.sets_8be2vx$[s] = this.sets_8be2vx$[s].copy();
    }
    return cc;
  };
  Cache.prototype.blockStates = function () {
    var tmp$, tmp$_0;
    var bss = ArrayList_init();
    tmp$ = this.sets_8be2vx$;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var s = tmp$[tmp$_0];
      s.blockStates_un5gdn$(bss);
    }
    return bss;
  };
  Cache.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cache',
    interfaces: []
  };
  function CacheError() {
    this.name = 'CacheError';
  }
  CacheError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CacheError',
    interfaces: [SimulatorError]
  };
  function CacheError_init(msg, $this) {
    if (msg === void 0)
      msg = null;
    $this = $this || Object.create(CacheError.prototype);
    SimulatorError_init(msg, void 0, void 0, $this);
    CacheError.call($this);
    return $this;
  }
  function CacheHandler(cacheLevel) {
    this.cacheLevel = cacheLevel;
    this.seed = Random_0.Default.nextLong().toString();
    this.seededRandom = Random(hashCode(this.seed));
    this.numberOfBlocks_0 = 1;
    this.cacheBlockSize_0 = 4;
    this.placementPol_0 = PlacementPolicy$DIRECT_MAPPING_getInstance();
    this.BlockRepPolicy_0 = BlockReplacementPolicy$LRU_getInstance();
    this.associativity_0 = 1;
    this.cacheList_0 = ArrayList_init();
    this.addresses_0 = ArrayList_init();
    this.RorW_0 = ArrayList_init();
    this.nextLevelCacheHandler = null;
    this.attached_tm0h0d$_0 = false;
    this.reset_6taknv$();
  }
  Object.defineProperty(CacheHandler.prototype, 'attached', {
    get: function () {
      return this.attached_tm0h0d$_0;
    },
    set: function (attached) {
      this.attached_tm0h0d$_0 = attached;
    }
  });
  CacheHandler.prototype.read_e3g4se$ = function (a) {
    var tmp$;
    this.addresses_0.add_11rb$(a);
    this.RorW_0.add_11rb$(RW$READ_getInstance());
    if (this.attached) {
      var c = new CacheState(a, this, RW$READ_getInstance());
      this.cacheList_0.add_11rb$(c);
    }
     else {
      (tmp$ = this.nextLevelCacheHandler) != null ? (tmp$.read_e3g4se$(a), Unit) : null;
    }
  };
  CacheHandler.prototype.write_e3g4se$ = function (a) {
    var tmp$;
    this.addresses_0.add_11rb$(a);
    this.RorW_0.add_11rb$(RW$WRITE_getInstance());
    if (this.attached) {
      var c = new CacheState(a, this, RW$WRITE_getInstance());
      this.cacheList_0.add_11rb$(c);
    }
     else {
      (tmp$ = this.nextLevelCacheHandler) != null ? (tmp$.write_e3g4se$(a), Unit) : null;
    }
  };
  CacheHandler.prototype.undoAccess_e3g4se$ = function (addr) {
    if (this.memoryAccessCount() > 0) {
      this.addresses_0.removeAt_za3lpa$(get_lastIndex_0(this.addresses_0));
      this.RorW_0.removeAt_za3lpa$(get_lastIndex_0(this.RorW_0));
      if (this.attached) {
        this.cacheList_0.removeAt_za3lpa$(get_lastIndex_0(this.cacheList_0));
      }
    }
  };
  CacheHandler.prototype.setCurrentSeed_61zpoe$ = function (v) {
    this.seed = v;
    this.seededRandom = Random(hashCode(this.seed));
    this.update();
  };
  CacheHandler.prototype.update = function () {
    var adrs = this.addresses_0;
    var row = this.RorW_0;
    this.reset_6taknv$();
    for (var i = 0; i !== adrs.size; ++i) {
      if (row.get_za3lpa$(i) === RW$READ_getInstance()) {
        this.read_e3g4se$(adrs.get_za3lpa$(i));
      }
       else {
        this.write_e3g4se$(adrs.get_za3lpa$(i));
      }
    }
  };
  CacheHandler.prototype.attach_6taknv$ = function (attach) {
    var tmp$, tmp$_0, tmp$_1;
    this.attached = attach;
    if (attach) {
      this.update();
    }
     else {
      this.reset_6taknv$(false);
      (tmp$ = this.nextLevelCacheHandler) != null ? (tmp$.addresses_0 = this.addresses_0) : null;
      (tmp$_0 = this.nextLevelCacheHandler) != null ? (tmp$_0.RorW_0 = this.RorW_0) : null;
      (tmp$_1 = this.nextLevelCacheHandler) != null ? (tmp$_1.update(), Unit) : null;
    }
  };
  CacheHandler.prototype.reset_6taknv$ = function (full) {
    if (full === void 0)
      full = true;
    var tmp$;
    try {
      this.seededRandom = Random(hashCode(this.seed));
    }
     catch (e) {
      if (!Kotlin.isType(e, Throwable))
        throw e;
    }
    this.cacheList_0 = ArrayList_init();
    this.cacheList_0.add_11rb$(new CacheState(new Address(0, MemSize$WORD_getInstance()), this, RW$READ_getInstance(), true));
    if (full) {
      this.addresses_0 = ArrayList_init();
      this.RorW_0 = ArrayList_init();
    }
    (tmp$ = this.nextLevelCacheHandler) != null ? (tmp$.reset_6taknv$(), Unit) : null;
  };
  CacheHandler.prototype.getBlocksState = function () {
    return this.currentState().getBlocksState();
  };
  CacheHandler.prototype.getHitCount = function () {
    return this.currentState().getHitCount();
  };
  CacheHandler.prototype.getMissCount = function () {
    return this.currentState().getMissCount();
  };
  CacheHandler.prototype.getHitRate = function () {
    return this.currentState().getHitRate();
  };
  CacheHandler.prototype.getMissRate = function () {
    return this.currentState().getMissRate();
  };
  CacheHandler.prototype.wasHit = function () {
    return this.currentState().wasHit();
  };
  CacheHandler.prototype.memoryAccessCount = function () {
    return this.addresses_0.size;
  };
  CacheHandler.prototype.currentState = function () {
    var clsize = get_lastIndex_0(this.cacheList_0);
    if (clsize < 0) {
      return this.cacheList_0.get_za3lpa$(0);
    }
     else {
      return this.cacheList_0.get_za3lpa$(clsize);
    }
  };
  CacheHandler.prototype.cacheSize = function () {
    return Kotlin.imul(this.numberOfBlocks_0, this.cacheBlockSize_0);
  };
  CacheHandler.prototype.setNumberOfBlocks_za3lpa$ = function (i) {
    var d = Math_0.log2(i);
    if (!this.isInt_tq0o01$(d)) {
      throw CacheError_init('Number of Blocks must be a power of 2!');
    }
    this.numberOfBlocks_0 = i;
    if (this.placementPol_0 === PlacementPolicy$FULLY_ASSOCIATIVE_getInstance()) {
      this.setAssociativity_fzusl$(i, true);
    }
     else if (this.placementPol_0 === PlacementPolicy$NWAY_SET_ASSOCIATIVE_getInstance()) {
      if (i < this.associativity()) {
        this.setAssociativity_fzusl$(i);
      }
    }
    this.update();
  };
  CacheHandler.prototype.numberOfBlocks = function () {
    return this.numberOfBlocks_0;
  };
  CacheHandler.prototype.setCacheBlockSize_za3lpa$ = function (i) {
    var d = Math_0.log2(i);
    if (!this.isInt_tq0o01$(d)) {
      throw CacheError_init('CacheHandler Block Size must be a power of 2!');
    }
    this.cacheBlockSize_0 = i;
    this.update();
  };
  CacheHandler.prototype.cacheBlockSize = function () {
    return this.cacheBlockSize_0;
  };
  CacheHandler.prototype.setPlacementPol_wfyhai$ = function (p) {
    this.placementPol_0 = p;
    if (p.equals(PlacementPolicy$DIRECT_MAPPING_getInstance())) {
      this.associativity_0 = 1;
    }
    if (p.equals(PlacementPolicy$FULLY_ASSOCIATIVE_getInstance())) {
      this.associativity_0 = this.numberOfBlocks_0;
    }
    this.update();
  };
  CacheHandler.prototype.placementPol = function () {
    return this.placementPol_0;
  };
  CacheHandler.prototype.setBlockRepPolicy_nu1lus$ = function (brp) {
    this.BlockRepPolicy_0 = brp;
    this.update();
  };
  CacheHandler.prototype.blockRepPolicy = function () {
    return this.BlockRepPolicy_0;
  };
  CacheHandler.prototype.canSetAssociativity = function () {
    return this.placementPol_0 === PlacementPolicy$NWAY_SET_ASSOCIATIVE_getInstance();
  };
  CacheHandler.prototype.setAssociativity_fzusl$ = function (i, override) {
    if (override === void 0)
      override = false;
    var tmp$;
    if (this.placementPol_0 === PlacementPolicy$NWAY_SET_ASSOCIATIVE_getInstance() || override) {
      tmp$ = this.numberOfBlocks_0;
      if (!(1 <= i && i <= tmp$)) {
        return;
      }
      var d = Math_0.log2(i);
      if (!this.isInt_tq0o01$(d)) {
        throw CacheError_init('Associativity must be a positive nonzero power of 2!');
      }
      this.associativity_0 = i;
      this.update();
    }
  };
  CacheHandler.prototype.associativity = function () {
    return this.associativity_0;
  };
  CacheHandler.prototype.isInt_tq0o01$ = function (d) {
    var tmp$ = !isNaN_0(d) && !isInfinite(d);
    if (tmp$) {
      tmp$ = d === Math_0.floor(d);
    }
    return tmp$;
  };
  CacheHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CacheHandler',
    interfaces: []
  };
  function PlacementPolicy(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PlacementPolicy_initFields() {
    PlacementPolicy_initFields = function () {
    };
    PlacementPolicy$DIRECT_MAPPING_instance = new PlacementPolicy('DIRECT_MAPPING', 0);
    PlacementPolicy$FULLY_ASSOCIATIVE_instance = new PlacementPolicy('FULLY_ASSOCIATIVE', 1);
    PlacementPolicy$NWAY_SET_ASSOCIATIVE_instance = new PlacementPolicy('NWAY_SET_ASSOCIATIVE', 2);
  }
  var PlacementPolicy$DIRECT_MAPPING_instance;
  function PlacementPolicy$DIRECT_MAPPING_getInstance() {
    PlacementPolicy_initFields();
    return PlacementPolicy$DIRECT_MAPPING_instance;
  }
  var PlacementPolicy$FULLY_ASSOCIATIVE_instance;
  function PlacementPolicy$FULLY_ASSOCIATIVE_getInstance() {
    PlacementPolicy_initFields();
    return PlacementPolicy$FULLY_ASSOCIATIVE_instance;
  }
  var PlacementPolicy$NWAY_SET_ASSOCIATIVE_instance;
  function PlacementPolicy$NWAY_SET_ASSOCIATIVE_getInstance() {
    PlacementPolicy_initFields();
    return PlacementPolicy$NWAY_SET_ASSOCIATIVE_instance;
  }
  PlacementPolicy.prototype.toMyString = function () {
    if (this.equals(PlacementPolicy$FULLY_ASSOCIATIVE_getInstance())) {
      return 'Fully Associative';
    }
    if (this.equals(PlacementPolicy$NWAY_SET_ASSOCIATIVE_getInstance())) {
      return 'N-Way Set Associative';
    }
    return 'Direct Mapped';
  };
  PlacementPolicy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlacementPolicy',
    interfaces: [Enum]
  };
  function PlacementPolicy$values() {
    return [PlacementPolicy$DIRECT_MAPPING_getInstance(), PlacementPolicy$FULLY_ASSOCIATIVE_getInstance(), PlacementPolicy$NWAY_SET_ASSOCIATIVE_getInstance()];
  }
  PlacementPolicy.values = PlacementPolicy$values;
  function PlacementPolicy$valueOf(name) {
    switch (name) {
      case 'DIRECT_MAPPING':
        return PlacementPolicy$DIRECT_MAPPING_getInstance();
      case 'FULLY_ASSOCIATIVE':
        return PlacementPolicy$FULLY_ASSOCIATIVE_getInstance();
      case 'NWAY_SET_ASSOCIATIVE':
        return PlacementPolicy$NWAY_SET_ASSOCIATIVE_getInstance();
      default:throwISE('No enum constant venusbackend.simulator.cache.PlacementPolicy.' + name);
    }
  }
  PlacementPolicy.valueOf_61zpoe$ = PlacementPolicy$valueOf;
  function BlockReplacementPolicy(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BlockReplacementPolicy_initFields() {
    BlockReplacementPolicy_initFields = function () {
    };
    BlockReplacementPolicy$LRU_instance = new BlockReplacementPolicy('LRU', 0);
    BlockReplacementPolicy$RANDOM_instance = new BlockReplacementPolicy('RANDOM', 1);
  }
  var BlockReplacementPolicy$LRU_instance;
  function BlockReplacementPolicy$LRU_getInstance() {
    BlockReplacementPolicy_initFields();
    return BlockReplacementPolicy$LRU_instance;
  }
  var BlockReplacementPolicy$RANDOM_instance;
  function BlockReplacementPolicy$RANDOM_getInstance() {
    BlockReplacementPolicy_initFields();
    return BlockReplacementPolicy$RANDOM_instance;
  }
  BlockReplacementPolicy.prototype.toMyString = function () {
    if (this.equals(BlockReplacementPolicy$LRU_getInstance())) {
      return 'LRU';
    }
    return 'Random';
  };
  BlockReplacementPolicy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockReplacementPolicy',
    interfaces: [Enum]
  };
  function BlockReplacementPolicy$values() {
    return [BlockReplacementPolicy$LRU_getInstance(), BlockReplacementPolicy$RANDOM_getInstance()];
  }
  BlockReplacementPolicy.values = BlockReplacementPolicy$values;
  function BlockReplacementPolicy$valueOf(name) {
    switch (name) {
      case 'LRU':
        return BlockReplacementPolicy$LRU_getInstance();
      case 'RANDOM':
        return BlockReplacementPolicy$RANDOM_getInstance();
      default:throwISE('No enum constant venusbackend.simulator.cache.BlockReplacementPolicy.' + name);
    }
  }
  BlockReplacementPolicy.valueOf_61zpoe$ = BlockReplacementPolicy$valueOf;
  function BlockState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BlockState_initFields() {
    BlockState_initFields = function () {
    };
    BlockState$HIT_instance = new BlockState('HIT', 0);
    BlockState$MISS_instance = new BlockState('MISS', 1);
    BlockState$EMPTY_instance = new BlockState('EMPTY', 2);
  }
  var BlockState$HIT_instance;
  function BlockState$HIT_getInstance() {
    BlockState_initFields();
    return BlockState$HIT_instance;
  }
  var BlockState$MISS_instance;
  function BlockState$MISS_getInstance() {
    BlockState_initFields();
    return BlockState$MISS_instance;
  }
  var BlockState$EMPTY_instance;
  function BlockState$EMPTY_getInstance() {
    BlockState_initFields();
    return BlockState$EMPTY_instance;
  }
  BlockState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockState',
    interfaces: [Enum]
  };
  function BlockState$values() {
    return [BlockState$HIT_getInstance(), BlockState$MISS_getInstance(), BlockState$EMPTY_getInstance()];
  }
  BlockState.values = BlockState$values;
  function BlockState$valueOf(name) {
    switch (name) {
      case 'HIT':
        return BlockState$HIT_getInstance();
      case 'MISS':
        return BlockState$MISS_getInstance();
      case 'EMPTY':
        return BlockState$EMPTY_getInstance();
      default:throwISE('No enum constant venusbackend.simulator.cache.BlockState.' + name);
    }
  }
  BlockState.valueOf_61zpoe$ = BlockState$valueOf;
  function CacheState(address, cacheHandler, rw, default_0) {
    if (default_0 === void 0)
      default_0 = false;
    this.prevCacheState_0 = null;
    this.currentInternalCache_0 = null;
    this.cache_0 = cacheHandler;
    this.wasHit_0 = false;
    this.hitcount_0 = 0;
    this.latestChange = null;
    if (default_0) {
      this.prevCacheState_0 = this;
      this.currentInternalCache_0 = new InternalCache(cacheHandler);
      this.currentInternalCache_0.setup();
      this.latestChange = new ChangedBlockState(-1, BlockState$EMPTY_getInstance(), true);
    }
     else {
      this.prevCacheState_0 = cacheHandler.currentState();
      this.hitcount_0 = this.prevCacheState_0.getHitCount();
      this.currentInternalCache_0 = this.prevCacheState_0.currentInternalCache_0.copy();
      if (rw.equals(RW$READ_getInstance())) {
        this.wasHit_0 = this.currentInternalCache_0.read_e3g4se$(address);
      }
       else {
        this.wasHit_0 = this.currentInternalCache_0.write_e3g4se$(address);
      }
      this.hitcount_0 = this.hitcount_0 + (this.wasHit_0 ? 1 : 0) | 0;
      var b = this.getInternalChangedBlockState_0();
      if (b.noChange) {
        this.latestChange = this.prevCacheState_0.latestChange;
      }
       else {
        this.latestChange = b;
      }
    }
    this.prevBlockStates = ArrayList_init();
  }
  CacheState.prototype.getHitCount = function () {
    return this.hitcount_0;
  };
  CacheState.prototype.getMissCount = function () {
    return this.cache_0.memoryAccessCount() - this.hitcount_0 | 0;
  };
  CacheState.prototype.getHitRate = function () {
    return this.getHitCount() / this.cache_0.memoryAccessCount();
  };
  CacheState.prototype.getMissRate = function () {
    return this.getMissCount() / this.cache_0.memoryAccessCount();
  };
  CacheState.prototype.wasHit = function () {
    return this.wasHit_0;
  };
  CacheState.prototype.getBlocksState = function () {
    return this.currentInternalCache_0.getBlocksState();
  };
  CacheState.prototype.getInternalChangedBlockState_0 = function () {
    var prevStates = this.prevCacheState_0.getBlocksState();
    var currentStates = this.currentInternalCache_0.getBlocksState();
    for (var index = 0; index !== currentStates.size; ++index) {
      if (!equals(currentStates.get_za3lpa$(index), prevStates.get_za3lpa$(index))) {
        return new ChangedBlockState(index, BlockState$valueOf(currentStates.get_za3lpa$(index)));
      }
    }
    return new ChangedBlockState(-1, BlockState$EMPTY_getInstance(), true);
  };
  CacheState.prototype.getChangedBlockState = function () {
    var prevStates = this.prevCacheState_0.getBlocksState();
    var currentStates = this.currentInternalCache_0.getBlocksState();
    for (var index = 0; index !== currentStates.size; ++index) {
      if (!equals(currentStates.get_za3lpa$(index), prevStates.get_za3lpa$(index))) {
        return new ChangedBlockState(index, BlockState$valueOf(currentStates.get_za3lpa$(index)));
      }
    }
    return this.latestChange;
  };
  CacheState.prototype.getPrevChangedBlock = function () {
    return this.prevCacheState_0.getChangedBlockState().block;
  };
  CacheState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CacheState',
    interfaces: []
  };
  function RW(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function RW_initFields() {
    RW_initFields = function () {
    };
    RW$READ_instance = new RW('READ', 0);
    RW$WRITE_instance = new RW('WRITE', 1);
  }
  var RW$READ_instance;
  function RW$READ_getInstance() {
    RW_initFields();
    return RW$READ_instance;
  }
  var RW$WRITE_instance;
  function RW$WRITE_getInstance() {
    RW_initFields();
    return RW$WRITE_instance;
  }
  RW.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RW',
    interfaces: [Enum]
  };
  function RW$values() {
    return [RW$READ_getInstance(), RW$WRITE_getInstance()];
  }
  RW.values = RW$values;
  function RW$valueOf(name) {
    switch (name) {
      case 'READ':
        return RW$READ_getInstance();
      case 'WRITE':
        return RW$WRITE_getInstance();
      default:throwISE('No enum constant venusbackend.simulator.cache.RW.' + name);
    }
  }
  RW.valueOf_61zpoe$ = RW$valueOf;
  function ChangedBlockState(block, state, noChange) {
    if (noChange === void 0)
      noChange = false;
    this.block = block;
    this.state = state;
    this.noChange = noChange;
  }
  ChangedBlockState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChangedBlockState',
    interfaces: []
  };
  function InternalCache(cacheHandler) {
    this.cHandler = cacheHandler;
    this.cache_shbixa$_0 = this.cache_shbixa$_0;
  }
  Object.defineProperty(InternalCache.prototype, 'cache', {
    get: function () {
      if (this.cache_shbixa$_0 == null)
        return throwUPAE('cache');
      return this.cache_shbixa$_0;
    },
    set: function (cache) {
      this.cache_shbixa$_0 = cache;
    }
  });
  InternalCache.prototype.setup = function () {
    this.cache = new Cache(this.cHandler);
  };
  InternalCache.prototype.read_e3g4se$ = function (address) {
    return this.cache.read_e3g4se$(address);
  };
  InternalCache.prototype.write_e3g4se$ = function (address) {
    return this.cache.write_e3g4se$(address);
  };
  InternalCache.prototype.getBlocksState = function () {
    return this.cache.blockStates();
  };
  InternalCache.prototype.copy = function () {
    var inCache = new InternalCache(this.cHandler);
    inCache.cache = this.cache.copy();
    return inCache;
  };
  InternalCache.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InternalCache',
    interfaces: []
  };
  function Set(associativity, blocksize, cacheHandler) {
    this.associativity_8be2vx$ = associativity;
    this.blocksize_8be2vx$ = blocksize;
    this.cacheHandler = cacheHandler;
    this.useCounter_8be2vx$ = 0;
    this.blocks_8be2vx$ = null;
    this.useCounter_8be2vx$ = 0;
    var bs = Kotlin.newArray(this.associativity_8be2vx$, null);
    for (var i = 0; i !== bs.length; ++i) {
      bs[i] = new Block(this.blocksize_8be2vx$);
    }
    this.blocks_8be2vx$ = copyToArray(filterNotNull(bs));
  }
  Set.prototype.copy = function () {
    var tmp$;
    var s = new Set(this.associativity_8be2vx$, this.blocksize_8be2vx$, this.cacheHandler);
    s.useCounter_8be2vx$ = this.useCounter_8be2vx$;
    tmp$ = this.blocks_8be2vx$;
    for (var i = 0; i !== tmp$.length; ++i) {
      s.blocks_8be2vx$[i] = this.blocks_8be2vx$[i].copy();
    }
    return s;
  };
  Set.prototype.read_yrbglt$ = function (tag, offset, bs) {
    var theBlock = this.findBlock_za3lpa$(tag);
    theBlock != null ? (theBlock.blockState = bs) : null;
    theBlock != null ? (theBlock.read_vux9f0$(offset, (this.useCounter_8be2vx$ = this.useCounter_8be2vx$ + 1 | 0, this.useCounter_8be2vx$)), Unit) : null;
  };
  Set.prototype.write_yrbglt$ = function (tag, offset, bs) {
    var theBlock = this.findBlock_za3lpa$(tag);
    if (theBlock != null) {
      theBlock.write_vux9f0$(offset, (this.useCounter_8be2vx$ = this.useCounter_8be2vx$ + 1 | 0, this.useCounter_8be2vx$));
      theBlock.blockState = bs;
    }
  };
  Set.prototype.getLRU = function () {
    var tmp$;
    var lru = this.blocks_8be2vx$[0];
    var least = this.blocks_8be2vx$[0].recentUse;
    var temp;
    tmp$ = this.associativity_8be2vx$;
    for (var i = 1; i < tmp$; i++) {
      temp = this.blocks_8be2vx$[i].recentUse;
      if (temp < least) {
        lru = this.blocks_8be2vx$[i];
        least = temp;
      }
    }
    return lru;
  };
  Set.prototype.getRandom = function () {
    var index = this.getRandomInt_vux9f0$(0, this.associativity_8be2vx$ - 1 | 0);
    return this.blocks_8be2vx$[index];
  };
  Set.prototype.getRandomInt_vux9f0$ = function (min, vmax) {
    var max = vmax + 1 | 0;
    var x = this.cacheHandler.seededRandom.nextDouble() * (max - min | 0);
    var a = numberToInt(Math_0.floor(x)) + min | 0;
    return Math_0.min(a, vmax);
  };
  Set.prototype.findBlock_za3lpa$ = function (tag) {
    var tmp$;
    var result = null;
    tmp$ = this.blocks_8be2vx$;
    for (var i = 0; i !== tmp$.length; ++i) {
      if (this.blocks_8be2vx$[i].tag === tag && this.blocks_8be2vx$[i].isValid)
        return this.blocks_8be2vx$[i];
    }
    return result;
  };
  Set.prototype.blockStates_un5gdn$ = function (a) {
    var tmp$, tmp$_0;
    tmp$ = this.blocks_8be2vx$;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var b = tmp$[tmp$_0];
      a.add_11rb$(b.blockState.toString());
    }
  };
  Set.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Set',
    interfaces: []
  };
  function Diff() {
  }
  Diff.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Diff',
    interfaces: []
  };
  function CacheDiff(addr) {
    this.addr = addr;
  }
  CacheDiff.prototype.invoke_p5mfjm$ = function (state) {
    state.cache.undoAccess_e3g4se$(this.addr);
  };
  CacheDiff.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CacheDiff',
    interfaces: [Diff]
  };
  function FRegisterDiff(id, v) {
    this.id = id;
    this.v = v;
  }
  FRegisterDiff.prototype.invoke_p5mfjm$ = function (state) {
    state.setFReg_i6jhoq$(this.id, this.v);
  };
  FRegisterDiff.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FRegisterDiff',
    interfaces: [Diff]
  };
  function HeapSpaceDiff(heapEnd) {
    this.heapEnd = heapEnd;
  }
  HeapSpaceDiff.prototype.invoke_p5mfjm$ = function (state) {
    state.setHeapEnd_3p81yu$(this.heapEnd);
  };
  HeapSpaceDiff.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HeapSpaceDiff',
    interfaces: [Diff]
  };
  function InstructionDiff(idx, mc, orig) {
    this.idx = idx;
    this.mc = mc;
    this.orig = orig;
  }
  InstructionDiff.prototype.invoke_p5mfjm$ = function (state) {
    try {
      Renderer_getInstance().updateProgramListing_fttt2j$(this.idx, this.mc, this.orig);
    }
     catch (e) {
      if (!Kotlin.isType(e, Throwable))
        throw e;
    }
  };
  InstructionDiff.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstructionDiff',
    interfaces: [Diff]
  };
  function MemoryDiff(addr, value) {
    this.addr = addr;
    this.value = value;
  }
  MemoryDiff.prototype.invoke_p5mfjm$ = function (state) {
    state.mem.storeWord_z8e4lc$(this.addr, this.value);
  };
  MemoryDiff.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MemoryDiff',
    interfaces: [Diff]
  };
  function PCDiff(pc) {
    this.pc = pc;
  }
  PCDiff.prototype.invoke_p5mfjm$ = function (state) {
    state.setPC_3p81yu$(this.pc);
  };
  PCDiff.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PCDiff',
    interfaces: [Diff]
  };
  function RegisterDiff(id, v) {
    this.id = id;
    this.v = v;
  }
  RegisterDiff.prototype.invoke_p5mfjm$ = function (state) {
    state.setReg_135bro$(this.id, this.v);
  };
  RegisterDiff.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RegisterDiff',
    interfaces: [Diff]
  };
  function ExceededAllowedCyclesError() {
    this.name = 'ExceededAllowedCyclesError';
    this.infe_hgz34h$_0 = null;
    this.handled_hreydh$_0 = null;
  }
  Object.defineProperty(ExceededAllowedCyclesError.prototype, 'infe', {
    get: function () {
      return this.infe_hgz34h$_0;
    },
    set: function (infe) {
      this.infe_hgz34h$_0 = infe;
    }
  });
  Object.defineProperty(ExceededAllowedCyclesError.prototype, 'handled', {
    get: function () {
      return this.handled_hreydh$_0;
    },
    set: function (handled) {
      this.handled_hreydh$_0 = handled;
    }
  });
  ExceededAllowedCyclesError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExceededAllowedCyclesError',
    interfaces: [SimulatorError]
  };
  function ExceededAllowedCyclesError_init(msg, infe, handled, $this) {
    if (msg === void 0)
      msg = null;
    if (infe === void 0)
      infe = null;
    if (handled === void 0)
      handled = null;
    $this = $this || Object.create(ExceededAllowedCyclesError.prototype);
    SimulatorError_init(msg, void 0, void 0, $this);
    ExceededAllowedCyclesError.call($this);
    $this.infe = infe;
    $this.handled = handled;
    return $this;
  }
  function FileDescriptor(vfsFile, fileMetaData) {
    this.vfsFile = vfsFile;
    this.fileMetaData = fileMetaData;
    this.feof = false;
    this.ferror = false;
    this.dataStream = new StringBuilder(this.vfsFile.readText());
  }
  FileDescriptor.prototype.read_za3lpa$ = function (size) {
    var tmp$;
    var b = this.dataStream.length - this.fileMetaData.readOffset | 0;
    var amtToRead = Math_0.min(size, b);
    if (amtToRead === 0 || !this.fileMetaData.readable) {
      return null;
    }
    var oldoffset = this.fileMetaData.readOffset;
    tmp$ = this.fileMetaData;
    tmp$.readOffset = tmp$.readOffset + amtToRead | 0;
    return this.dataStream.subSequence_vux9f0$(oldoffset, this.fileMetaData.readOffset).toString();
  };
  FileDescriptor.prototype.write_61zpoe$ = function (value) {
    if (!this.fileMetaData.writeable) {
      return null;
    }
    this.dataStream.append_gw00v9$(value);
    return value.length;
  };
  FileDescriptor.prototype.flush = function () {
    if (this.fileMetaData.writeable) {
      this.vfsFile.setText(this.dataStream.toString());
    }
    return 0;
  };
  FileDescriptor.prototype.isEOF = function () {
    var tmp$;
    if (this.feof) {
      tmp$ = 1;
    }
     else {
      tmp$ = 0;
    }
    return tmp$;
  };
  FileDescriptor.prototype.getError = function () {
    var tmp$;
    if (this.ferror) {
      tmp$ = 1;
    }
     else {
      tmp$ = 0;
    }
    return tmp$;
  };
  FileDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FileDescriptor',
    interfaces: []
  };
  function FileMetaData(readOffset, readable, writeable) {
    if (readOffset === void 0)
      readOffset = 0;
    if (readable === void 0)
      readable = false;
    if (writeable === void 0)
      writeable = false;
    this.readOffset = readOffset;
    this.readable = readable;
    this.writeable = writeable;
  }
  FileMetaData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FileMetaData',
    interfaces: []
  };
  function FilesHandler(sim) {
    FilesHandler$Companion_getInstance();
    this.files = HashMap_init();
    this.fdCounter = 3;
  }
  function FilesHandler$Companion() {
    FilesHandler$Companion_instance = this;
    this.EOF = -1;
  }
  FilesHandler$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FilesHandler$Companion_instance = null;
  function FilesHandler$Companion_getInstance() {
    if (FilesHandler$Companion_instance === null) {
      new FilesHandler$Companion();
    }
    return FilesHandler$Companion_instance;
  }
  FilesHandler.prototype.openFile_gw1r89$ = function (sim, filename, permissions) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var o = sim.VFS.getObjectFromPath_s9h4kc$(filename);
    var resetText = false;
    switch (permissions) {
      case 0:
        if (o == null) {
          return FilesHandler$Companion_getInstance().EOF;
        }

        tmp$ = new FileMetaData(0, true, false);
        break;
      case 1:
        resetText = true;
        tmp$ = new FileMetaData(0, false, true);
        break;
      case 2:
        tmp$ = new FileMetaData(0, false, true);
        break;
      case 3:
        if (o == null) {
          return FilesHandler$Companion_getInstance().EOF;
        }

        tmp$ = new FileMetaData(0, true, true);
        break;
      case 4:
        resetText = true;
        tmp$ = new FileMetaData(0, true, true);
        break;
      case 5:
        tmp$ = new FileMetaData(0, true, true);
        break;
      default:return FilesHandler$Companion_getInstance().EOF;
    }
    var rw = tmp$;
    if (o == null) {
      tmp$_0 = sim.VFS.makeFileInDir_61zpoe$(filename);
      if (tmp$_0 == null) {
        return FilesHandler$Companion_getInstance().EOF;
      }
      tmp$_2 = tmp$_0;
    }
     else {
      if (o.type === VFSType$File_getInstance()) {
        tmp$_2 = Kotlin.isType(tmp$_1 = o, VFSFile) ? tmp$_1 : throwCCE();
      }
       else {
        return FilesHandler$Companion_getInstance().EOF;
      }
    }
    var f = tmp$_2;
    if (resetText) {
      f.setText('');
    }
    var fd = new FileDescriptor(f, rw);
    var $receiver = this.files;
    var key = this.fdCounter;
    $receiver.put_xwzc9p$(key, fd);
    return tmp$_3 = this.fdCounter, this.fdCounter = tmp$_3 + 1 | 0, tmp$_3;
  };
  FilesHandler.prototype.getFileDescriptor_za3lpa$ = function (fdID) {
    if (this.files.containsKey_11rb$(fdID)) {
      return this.files.get_11rb$(fdID);
    }
    return null;
  };
  FilesHandler.prototype.closeFileDescriptor_za3lpa$ = function (fdID) {
    var tmp$;
    var fd = this.files.remove_11rb$(fdID);
    return (tmp$ = fd != null ? fd.flush() : null) != null ? tmp$ : FilesHandler$Companion_getInstance().EOF;
  };
  FilesHandler.prototype.flushFileDescriptor_za3lpa$ = function (fdID) {
    var tmp$;
    var fd = this.getFileDescriptor_za3lpa$(fdID);
    return (tmp$ = fd != null ? fd.flush() : null) != null ? tmp$ : FilesHandler$Companion_getInstance().EOF;
  };
  FilesHandler.prototype.readFileDescriptor_vux9f0$ = function (fdID, size) {
    if (size < 0) {
      return null;
    }
    var fd = this.getFileDescriptor_za3lpa$(fdID);
    return fd != null ? fd.read_za3lpa$(size) : null;
  };
  FilesHandler.prototype.writeFileDescriptor_19mbxw$ = function (fdID, value) {
    var tmp$;
    var fd = this.getFileDescriptor_za3lpa$(fdID);
    return (tmp$ = fd != null ? fd.write_61zpoe$(value) : null) != null ? tmp$ : FilesHandler$Companion_getInstance().EOF;
  };
  FilesHandler.prototype.getFileDescriptorEOF_za3lpa$ = function (fdID) {
    var tmp$;
    var fd = this.getFileDescriptor_za3lpa$(fdID);
    return (tmp$ = fd != null ? fd.isEOF() : null) != null ? tmp$ : FilesHandler$Companion_getInstance().EOF;
  };
  FilesHandler.prototype.getFileDescriptorError_za3lpa$ = function (fdID) {
    var tmp$;
    var fd = this.getFileDescriptor_za3lpa$(fdID);
    return (tmp$ = fd != null ? fd.getError() : null) != null ? tmp$ : FilesHandler$Companion_getInstance().EOF;
  };
  FilesHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FilesHandler',
    interfaces: []
  };
  function History() {
    this.diffs_0 = ArrayList_init();
  }
  History.prototype.add_lk28az$ = function (pre) {
    return this.diffs_0.add_11rb$(toList(pre));
  };
  History.prototype.pop = function () {
    return this.diffs_0.removeAt_za3lpa$(this.diffs_0.size - 1 | 0);
  };
  History.prototype.isEmpty = function () {
    return this.diffs_0.isEmpty();
  };
  History.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'History',
    interfaces: []
  };
  function Memory() {
    this.memory_0 = HashMap_init();
  }
  Memory.prototype.removeByte_3p81yu$ = function (addr) {
    var $receiver = this.memory_0;
    var tmp$;
    (Kotlin.isType(tmp$ = $receiver, MutableMap) ? tmp$ : throwCCE()).remove_11rb$(addr);
  };
  Memory.prototype.loadByte_3p81yu$ = function (addr) {
    var tmp$, tmp$_0;
    var v = this.memory_0.get_11rb$(numberToLong(addr));
    return (tmp$_0 = (tmp$ = v != null ? v : null) != null ? tmp$ & 255 : null) != null ? tmp$_0 : 0;
  };
  Memory.prototype.loadHalfWord_3p81yu$ = function (addr) {
    var lsb = this.loadByte_3p81yu$(addr);
    var msbb = this.loadByte_3p81yu$(plus(addr, 1));
    var msb = msbb << 8;
    return msb | lsb;
  };
  Memory.prototype.loadWord_3p81yu$ = function (addr) {
    return this.loadHalfWord_3p81yu$(plus(addr, 2)) << 16 | this.loadHalfWord_3p81yu$(addr);
  };
  Memory.prototype.loadLong_3p81yu$ = function (addr) {
    return Kotlin.Long.fromInt(this.loadWord_3p81yu$(plus(addr, 4))).shiftLeft(32).or(Kotlin.Long.fromInt(this.loadWord_3p81yu$(addr)));
  };
  Memory.prototype.storeByte_z8e4lc$ = function (addr, value) {
    var $receiver = this.memory_0;
    var key = numberToLong(addr);
    var value_0 = numberToByte(value);
    $receiver.put_xwzc9p$(key, value_0);
  };
  Memory.prototype.storeHalfWord_z8e4lc$ = function (addr, value) {
    this.storeByte_z8e4lc$(addr, value);
    this.storeByte_z8e4lc$(plus(addr, 1), shr(value, 8));
  };
  Memory.prototype.storeWord_z8e4lc$ = function (addr, value) {
    this.storeHalfWord_z8e4lc$(addr, value);
    this.storeHalfWord_z8e4lc$(plus(addr, 2), shr(value, 16));
  };
  Memory.prototype.storeLong_z8e4lc$ = function (addr, value) {
    this.storeWord_z8e4lc$(addr, value);
    this.storeWord_z8e4lc$(plus(addr, 4), shr(value, 32));
  };
  Memory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Memory',
    interfaces: []
  };
  function Simulator_0(linkedProgram, VFS, settings, state, simulatorID) {
    if (VFS === void 0)
      VFS = new VirtualFileSystem('dummy');
    if (settings === void 0)
      settings = new SimulatorSettings();
    if (state === void 0)
      state = new SimulatorState32();
    if (simulatorID === void 0)
      simulatorID = 0;
    this.linkedProgram = linkedProgram;
    this.VFS = VFS;
    this.settings = settings;
    this.state = state;
    this.simulatorID = simulatorID;
    this.cycles_0 = 0;
    this.history_0 = new History();
    this.preInstruction_0 = ArrayList_init();
    this.postInstruction_0 = ArrayList_init();
    this.breakpoints_0 = HashSet_init();
    this.args = ArrayList_init();
    this.ebreak = false;
    this.stdout = '';
    this.filesHandler = new FilesHandler(this);
    this.instOrderMapping = HashMap_init();
    this.invInstOrderMapping = HashMap_init();
    this.exitcode = null;
    this.alloc = new Alloc(this);
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.state.getReg_za3lpa$(1);
    var i = 0;
    tmp$ = this.linkedProgram.prog.insts.iterator();
    while (tmp$.hasNext()) {
      var inst = tmp$.next();
      var $receiver = this.instOrderMapping;
      var key = i;
      var value = numberToInt(this.state.getMaxPC());
      $receiver.put_xwzc9p$(key, value);
      var $receiver_0 = this.invInstOrderMapping;
      var key_0 = numberToInt(this.state.getMaxPC());
      var value_0 = i;
      $receiver_0.put_xwzc9p$(key_0, value_0);
      i = i + 1 | 0;
      var mcode = inst.get_cv51c2$(InstructionField$ENTIRE_getInstance());
      tmp$_0 = inst.length;
      for (var j = 0; j < tmp$_0; j++) {
        this.state.mem.storeByte_z8e4lc$(this.state.getMaxPC(), mcode & 255);
        mcode = mcode >> 8;
        this.state.incMaxPC_3p81yu$(1);
      }
    }
    var dataOffset = MemorySegments_getInstance().STATIC_BEGIN;
    tmp$_1 = this.linkedProgram.prog.dataSegment.iterator();
    while (tmp$_1.hasNext()) {
      var datum = tmp$_1.next();
      this.state.mem.storeByte_z8e4lc$(dataOffset, datum);
      dataOffset = dataOffset + 1 | 0;
    }
    var tmp$_3 = this.state;
    var a = numberToInt(this.state.getHeapEnd());
    var b = dataOffset;
    tmp$_3.setHeapEnd_3p81yu$(Math_0.max(a, b));
    this.setPC_3p81yu$((tmp$_2 = this.linkedProgram.startPC) != null ? tmp$_2 : MemorySegments_getInstance().TEXT_BEGIN);
    if (this.settings.setRegesOnInit) {
      this.state.setReg_135bro$(Registers_getInstance().sp, 2147483632);
      this.state.setReg_135bro$(Registers_getInstance().gp, MemorySegments_getInstance().STATIC_BEGIN);
      if (this.linkedProgram.prog.isGlobalLabel_61zpoe$('main')) {
        this.state.setReg_135bro$(Registers_getInstance().ra, this.state.getMaxPC());
        this.settings.ecallOnlyExit = false;
        try {
          Renderer_getInstance().updateRegister_lirtej$(Registers_getInstance().ra, this.state.getMaxPC());
        }
         catch (e) {
          if (!Kotlin.isType(e, Exception))
            throw e;
        }
      }
    }
    this.ecallMsg = '';
    this.branched = false;
    this.jumped = false;
  }
  Simulator_0.prototype.isDone = function () {
    var tmp$;
    if (this.settings.ecallOnlyExit) {
      tmp$ = this.exitcode != null;
    }
     else {
      tmp$ = compareTo(this.getPC(), this.state.getMaxPC()) >= 0;
    }
    return tmp$;
  };
  Simulator_0.prototype.getCycles = function () {
    return this.cycles_0;
  };
  Simulator_0.prototype.getMaxPC = function () {
    return this.state.getMaxPC();
  };
  Simulator_0.prototype.incMaxPC_3p81yu$ = function (amount) {
    this.state.incMaxPC_3p81yu$(amount);
  };
  Simulator_0.prototype.getInstAt_3p81yu$ = function (addr) {
    var $receiver = this.invInstOrderMapping;
    var tmp$;
    var instnum = ensureNotNull((Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).get_11rb$(addr));
    return this.linkedProgram.prog.insts.get_za3lpa$(instnum);
  };
  Simulator_0.prototype.setMemory_8l1s6a$ = function (mem) {
    this.state.mem = mem;
  };
  Simulator_0.prototype.run = function () {
    while (!this.isDone()) {
      this.step();
    }
  };
  Simulator_0.prototype.runToBreakpoint = function () {
    if (!this.isDone()) {
      this.step();
    }
    while (!this.isDone() && !this.atBreakpoint()) {
      this.step();
    }
  };
  Simulator_0.prototype.step = function () {
    if (this.settings.maxSteps >= 0 && this.cycles_0 >= this.settings.maxSteps) {
      throw ExceededAllowedCyclesError_init('Ran for more than the max allowed steps (' + this.settings.maxSteps + ')!');
    }
    this.branched = false;
    this.jumped = false;
    this.ebreak = false;
    this.ecallMsg = '';
    this.cycles_0 = this.cycles_0 + 1 | 0;
    this.preInstruction_0.clear();
    this.postInstruction_0.clear();
    var mcode = this.getNextInstruction();
    try {
      switch (this.state.registerWidth) {
        case 16:
          Instruction$Companion_getInstance().get_6cx2xq$(mcode).impl16.invoke_j2zg41$(mcode, this);
          break;
        case 32:
          Instruction$Companion_getInstance().get_6cx2xq$(mcode).impl32.invoke_j2zg41$(mcode, this);
          break;
        case 64:
          Instruction$Companion_getInstance().get_6cx2xq$(mcode).impl64.invoke_j2zg41$(mcode, this);
          break;
        case 128:
          Instruction$Companion_getInstance().get_6cx2xq$(mcode).impl128.invoke_j2zg41$(mcode, this);
          break;
        default:throw SimulatorError_init('Unsupported register width!');
      }
    }
     catch (e) {
      if (Kotlin.isType(e, SimulatorError)) {
        if (e.infe == null) {
          throw e;
        }
        Renderer_getInstance().displayError_za3rmp$('\n[ERROR]: Could not decode the instruction (0x' + mcode.toString_za3lpa$(16) + ") at pc='" + toHex_0(this.getPC()) + "'!\n" + 'Please make sure that you are not jumping to the middle of an instruction!\n');
        throw e;
      }
       else
        throw e;
    }
    this.history_0.add_lk28az$(this.preInstruction_0);
    this.stdout = this.stdout + this.ecallMsg;
    if (this.isDone() && this.exitcode == null) {
      this.exitcode = numberToInt(this.state.getReg_za3lpa$(Registers_getInstance().a0));
    }
    return toList(this.postInstruction_0);
  };
  Simulator_0.prototype.undo = function () {
    var tmp$;
    this.exitcode = null;
    if (!this.canUndo())
      return emptyList();
    var diffs = this.history_0.pop();
    tmp$ = diffs.iterator();
    while (tmp$.hasNext()) {
      var diff = tmp$.next();
      diff.invoke_p5mfjm$(this.state);
    }
    this.cycles_0 = this.cycles_0 - 1 | 0;
    return diffs;
  };
  Simulator_0.prototype.removeAllArgsFromMem = function () {
    var sp = this.getReg_za3lpa$(2);
    while (compareTo(sp, 2147483632) < 0 && this.settings.setRegesOnInit) {
      this.state.mem.removeByte_3p81yu$(sp);
      sp = inc(sp);
      this.setReg_135bro$(Registers_getInstance().sp, sp);
    }
  };
  Simulator_0.prototype.removeAllArgs = function () {
    this.removeAllArgsFromMem();
    this.args.removeAll_brywnq$(this.args);
  };
  Simulator_0.prototype.removeArg_za3lpa$ = function (index) {
    var tmp$;
    tmp$ = this.args.size;
    if (0 <= index && index < tmp$) {
      this.args.removeAt_za3lpa$(index);
      this.removeAllArgsFromMem();
      this.addArgsToMem();
    }
  };
  Simulator_0.prototype.addArg_61zpoe$ = function (arg) {
    this.args.add_11rb$(arg);
    this.removeAllArgsFromMem();
    this.addArgsToMem();
  };
  Simulator_0.prototype.addArg_mhpeer$ = function (newargs) {
    this.args.addAll_brywnq$(newargs);
    this.removeAllArgsFromMem();
    this.addArgsToMem();
  };
  Simulator_0.prototype.addArgsToMem = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var registerSize = this.state.registerWidth / 8 | 0;
    var intSize = 4;
    if (!this.settings.setRegesOnInit) {
      return;
    }
    if (equals(this.getReg_za3lpa$(2), 2147483632)) {
      tmp$ = this.getReg_za3lpa$(2);
    }
     else {
      tmp$ = this.getReg_za3lpa$(11);
    }
    var spv = minus_1(tmp$, 1);
    var argv = ArrayList_init();
    var tmpargs = arrayListOf([this.linkedProgram.prog.name]);
    tmpargs.addAll_brywnq$(this.args);
    tmp$_0 = tmpargs.iterator();
    while (tmp$_0.hasNext()) {
      var arg = tmp$_0.next();
      spv = minus_1(this.getReg_za3lpa$(Registers_getInstance().sp), 1);
      this.storeByte_z8e4lc$(spv, 0);
      this.setRegNoUndo_135bro$(Registers_getInstance().sp, spv);
      var tmp$_3;
      tmp$_1 = iterator(reversed_0(Kotlin.isCharSequence(tmp$_3 = arg) ? tmp$_3 : throwCCE()).toString());
      while (tmp$_1.hasNext()) {
        var c = unboxChar(tmp$_1.next());
        spv = minus_1(this.getReg_za3lpa$(Registers_getInstance().sp), 1);
        this.storeByte_z8e4lc$(spv, c | 0);
        this.setRegNoUndo_135bro$(Registers_getInstance().sp, spv);
      }
      argv.add_11rb$(spv);
    }
    spv = minus_1(spv, rem(spv, registerSize));
    spv = minus_1(spv, intSize);
    this.storeWord_z8e4lc$(spv, 0);
    tmp$_2 = reversed(argv).iterator();
    while (tmp$_2.hasNext()) {
      var arg_0 = tmp$_2.next();
      spv = minus_1(spv, intSize);
      this.storeWord_z8e4lc$(spv, arg_0);
    }
    this.setRegNoUndo_135bro$(Registers_getInstance().a0, tmpargs.size);
    this.setRegNoUndo_135bro$(Registers_getInstance().a1, spv);
    this.setRegNoUndo_135bro$(Registers_getInstance().sp, spv);
    try {
      Renderer_getInstance().updateRegister_lirtej$(Registers_getInstance().sp, this.getReg_za3lpa$(Registers_getInstance().sp));
      Renderer_getInstance().updateRegister_lirtej$(Registers_getInstance().a0, this.getReg_za3lpa$(Registers_getInstance().a0));
      Renderer_getInstance().updateRegister_lirtej$(Registers_getInstance().a1, this.getReg_za3lpa$(Registers_getInstance().a1));
      Renderer_getInstance().updateMemory_za3lpa$(Renderer_getInstance().activeMemoryAddress);
    }
     catch (e) {
      if (!Kotlin.isType(e, Throwable))
        throw e;
    }
  };
  Simulator_0.prototype.reset_6taknv$ = function (keep_args) {
    if (keep_args === void 0)
      keep_args = false;
    while (this.canUndo()) {
      this.undo();
    }
    this.branched = false;
    this.jumped = false;
    this.ecallMsg = '';
    this.stdout = '';
    this.cycles_0 = 0;
    this.exitcode = null;
    var args = ArrayList_init_0(this.args);
    this.removeAllArgs();
    if (keep_args) {
      this.addArg_mhpeer$(args);
    }
    this.state.reset();
  };
  Simulator_0.prototype.trace = function () {
    return new Tracer(this);
  };
  Simulator_0.prototype.canUndo = function () {
    return !this.history_0.isEmpty();
  };
  Simulator_0.prototype.getReg_za3lpa$ = function (id) {
    return this.state.getReg_za3lpa$(id);
  };
  Simulator_0.prototype.setReg_135bro$ = function (id, v) {
    this.preInstruction_0.add_11rb$(new RegisterDiff(id, this.getReg_za3lpa$(id)));
    this.state.setReg_135bro$(id, v);
    this.postInstruction_0.add_11rb$(new RegisterDiff(id, this.getReg_za3lpa$(id)));
  };
  Simulator_0.prototype.setRegNoUndo_135bro$ = function (id, v) {
    this.state.setReg_135bro$(id, v);
  };
  Simulator_0.prototype.getFReg_za3lpa$ = function (id) {
    return this.state.getFReg_za3lpa$(id);
  };
  Simulator_0.prototype.setFReg_i6jhoq$ = function (id, v) {
    this.preInstruction_0.add_11rb$(new FRegisterDiff(id, this.state.getFReg_za3lpa$(id)));
    this.state.setFReg_i6jhoq$(id, v);
    this.postInstruction_0.add_11rb$(new FRegisterDiff(id, this.state.getFReg_za3lpa$(id)));
  };
  Simulator_0.prototype.setFRegNoUndo_i6jhoq$ = function (id, v) {
    this.state.setFReg_i6jhoq$(id, v);
  };
  Simulator_0.prototype.toggleBreakpointAt_za3lpa$ = function (idx) {
    if (this.breakpoints_0.contains_11rb$(idx)) {
      this.breakpoints_0.remove_11rb$(idx);
      return false;
    }
     else {
      this.breakpoints_0.add_11rb$(idx);
      return true;
    }
  };
  Simulator_0.prototype.atBreakpoint = function () {
    var location = numberToLong(minus_1(this.getPC(), MemorySegments_getInstance().TEXT_BEGIN));
    var inst = this.invInstOrderMapping.get_11rb$(location.toInt());
    if (inst == null) {
      return this.ebreak;
    }
    return this.ebreak ^ this.breakpoints_0.contains_11rb$(location.toInt() - 4 | 0);
  };
  Simulator_0.prototype.getPC = function () {
    return this.state.getPC();
  };
  Simulator_0.prototype.setPC_3p81yu$ = function (newPC) {
    this.preInstruction_0.add_11rb$(new PCDiff(this.getPC()));
    this.state.setPC_3p81yu$(newPC);
    this.postInstruction_0.add_11rb$(new PCDiff(this.getPC()));
  };
  Simulator_0.prototype.incrementPC_3p81yu$ = function (inc) {
    this.preInstruction_0.add_11rb$(new PCDiff(this.getPC()));
    this.state.incPC_3p81yu$(inc);
    this.postInstruction_0.add_11rb$(new PCDiff(this.getPC()));
  };
  Simulator_0.prototype.isValidAccess_ychryw$ = function (addr, bytes) {
    if (!this.settings.allowAccessBtnStackHeap) {
      var upperAddr = plus(addr, bytes);
      var sp = this.state.getReg_za3lpa$(Registers_getInstance().sp);
      var heap = this.state.getHeapEnd();
      if (compareTo(addr, heap) > 0 && compareTo(addr, sp) < 0 || (compareTo(upperAddr, heap) > 0 && compareTo(upperAddr, sp) < 0)) {
        throw SimulatorError_init("Attempting to access uninitialized memory between the stack and heap. Attempting to access '" + bytes + "' bytes at address '" + addr.toString() + "'.", void 0, true);
      }
    }
  };
  Simulator_0.prototype.loadByte_3p81yu$ = function (addr) {
    return this.state.mem.loadByte_3p81yu$(addr);
  };
  Simulator_0.prototype.loadBytewCache_3p81yu$ = function (addr) {
    if (this.settings.alignedAddress && !equals(rem(addr, MemSize$BYTE_getInstance().size), 0)) {
      throw AlignmentError_init("Address: '" + Renderer_getInstance().toHex_3p81yu$(addr) + "' is not BYTE aligned!");
    }
    this.isValidAccess_ychryw$(addr, MemSize$BYTE_getInstance().size);
    this.preInstruction_0.add_11rb$(new CacheDiff(new Address(addr, MemSize$BYTE_getInstance())));
    this.state.cache.read_e3g4se$(new Address(addr, MemSize$BYTE_getInstance()));
    this.postInstruction_0.add_11rb$(new CacheDiff(new Address(addr, MemSize$BYTE_getInstance())));
    return this.loadByte_3p81yu$(addr);
  };
  Simulator_0.prototype.loadHalfWord_3p81yu$ = function (addr) {
    return this.state.mem.loadHalfWord_3p81yu$(addr);
  };
  Simulator_0.prototype.loadHalfWordwCache_3p81yu$ = function (addr) {
    if (this.settings.alignedAddress && !equals(rem(addr, MemSize$HALF_getInstance().size), 0)) {
      throw AlignmentError_init("Address: '" + Renderer_getInstance().toHex_3p81yu$(addr) + "' is not HALF WORD aligned!");
    }
    this.isValidAccess_ychryw$(addr, MemSize$HALF_getInstance().size);
    this.preInstruction_0.add_11rb$(new CacheDiff(new Address(addr, MemSize$HALF_getInstance())));
    this.state.cache.read_e3g4se$(new Address(addr, MemSize$HALF_getInstance()));
    this.postInstruction_0.add_11rb$(new CacheDiff(new Address(addr, MemSize$HALF_getInstance())));
    return this.loadHalfWord_3p81yu$(addr);
  };
  Simulator_0.prototype.loadWord_3p81yu$ = function (addr) {
    return this.state.mem.loadWord_3p81yu$(addr);
  };
  Simulator_0.prototype.loadWordwCache_3p81yu$ = function (addr) {
    if (this.settings.alignedAddress && !equals(rem(addr, MemSize$WORD_getInstance().size), 0)) {
      throw AlignmentError_init("Address: '" + Renderer_getInstance().toHex_3p81yu$(addr) + "' is not WORD aligned!");
    }
    this.isValidAccess_ychryw$(addr, MemSize$WORD_getInstance().size);
    this.preInstruction_0.add_11rb$(new CacheDiff(new Address(addr, MemSize$WORD_getInstance())));
    this.state.cache.read_e3g4se$(new Address(addr, MemSize$WORD_getInstance()));
    this.postInstruction_0.add_11rb$(new CacheDiff(new Address(addr, MemSize$WORD_getInstance())));
    return this.loadWord_3p81yu$(addr);
  };
  Simulator_0.prototype.loadLong_3p81yu$ = function (addr) {
    return this.state.mem.loadLong_3p81yu$(addr);
  };
  Simulator_0.prototype.loadLongwCache_3p81yu$ = function (addr) {
    if (this.settings.alignedAddress && !equals(rem(addr, MemSize$LONG_getInstance().size), 0)) {
      throw AlignmentError_init("Address: '" + Renderer_getInstance().toHex_3p81yu$(addr) + "' is not LONG aligned!");
    }
    this.isValidAccess_ychryw$(addr, MemSize$LONG_getInstance().size);
    this.preInstruction_0.add_11rb$(new CacheDiff(new Address(addr, MemSize$LONG_getInstance())));
    this.state.cache.read_e3g4se$(new Address(addr, MemSize$LONG_getInstance()));
    this.postInstruction_0.add_11rb$(new CacheDiff(new Address(addr, MemSize$LONG_getInstance())));
    return this.loadLong_3p81yu$(addr);
  };
  Simulator_0.prototype.storeByte_z8e4lc$ = function (addr, value) {
    this.preInstruction_0.add_11rb$(new MemoryDiff(addr, this.loadWord_3p81yu$(addr)));
    this.state.mem.storeByte_z8e4lc$(addr, value);
    this.postInstruction_0.add_11rb$(new MemoryDiff(addr, this.loadWord_3p81yu$(addr)));
    this.storeTextOverrideCheck_k2iqlo$(addr, value, MemSize$BYTE_getInstance());
  };
  Simulator_0.prototype.storeBytewCache_z8e4lc$ = function (addr, value) {
    if (this.settings.alignedAddress && !equals(rem(addr, MemSize$BYTE_getInstance().size), 0)) {
      throw AlignmentError_init("Address: '" + Renderer_getInstance().toHex_3p81yu$(addr) + "' is not BYTE aligned!");
    }
    if (!this.settings.mutableText && contains_0(new IntRange(MemorySegments_getInstance().TEXT_BEGIN + 1 - MemSize$BYTE_getInstance().size | 0, numberToInt(this.state.getMaxPC())), addr)) {
      throw StoreError_init('You are attempting to edit the text of the program though the program is set to immutable at address ' + Renderer_getInstance().toHex_3p81yu$(addr) + '!');
    }
    this.isValidAccess_ychryw$(addr, MemSize$BYTE_getInstance().size);
    this.preInstruction_0.add_11rb$(new CacheDiff(new Address(addr, MemSize$BYTE_getInstance())));
    this.state.cache.write_e3g4se$(new Address(addr, MemSize$BYTE_getInstance()));
    this.storeByte_z8e4lc$(addr, value);
    this.postInstruction_0.add_11rb$(new CacheDiff(new Address(addr, MemSize$BYTE_getInstance())));
  };
  Simulator_0.prototype.storeHalfWord_z8e4lc$ = function (addr, value) {
    this.preInstruction_0.add_11rb$(new MemoryDiff(addr, this.loadWord_3p81yu$(addr)));
    this.state.mem.storeHalfWord_z8e4lc$(addr, value);
    this.postInstruction_0.add_11rb$(new MemoryDiff(addr, this.loadWord_3p81yu$(addr)));
    this.storeTextOverrideCheck_k2iqlo$(addr, value, MemSize$HALF_getInstance());
  };
  Simulator_0.prototype.storeHalfWordwCache_z8e4lc$ = function (addr, value) {
    if (this.settings.alignedAddress && !equals(rem(addr, MemSize$HALF_getInstance().size), 0)) {
      throw AlignmentError_init("Address: '" + Renderer_getInstance().toHex_3p81yu$(addr) + "' is not HALF WORD aligned!");
    }
    if (!this.settings.mutableText && contains_0(new IntRange(MemorySegments_getInstance().TEXT_BEGIN + 1 - MemSize$HALF_getInstance().size | 0, numberToInt(this.state.getMaxPC())), addr)) {
      throw StoreError_init('You are attempting to edit the text of the program though the program is set to immutable at address ' + Renderer_getInstance().toHex_3p81yu$(addr) + '!');
    }
    this.isValidAccess_ychryw$(addr, MemSize$HALF_getInstance().size);
    this.preInstruction_0.add_11rb$(new CacheDiff(new Address(addr, MemSize$HALF_getInstance())));
    this.state.cache.write_e3g4se$(new Address(addr, MemSize$HALF_getInstance()));
    this.storeHalfWord_z8e4lc$(addr, value);
    this.postInstruction_0.add_11rb$(new CacheDiff(new Address(addr, MemSize$HALF_getInstance())));
  };
  Simulator_0.prototype.storeWord_z8e4lc$ = function (addr, value) {
    this.preInstruction_0.add_11rb$(new MemoryDiff(addr, this.loadWord_3p81yu$(addr)));
    this.state.mem.storeWord_z8e4lc$(addr, value);
    this.postInstruction_0.add_11rb$(new MemoryDiff(addr, this.loadWord_3p81yu$(addr)));
    this.storeTextOverrideCheck_k2iqlo$(addr, value, MemSize$WORD_getInstance());
  };
  Simulator_0.prototype.storeWordwCache_z8e4lc$ = function (addr, value) {
    if (this.settings.alignedAddress && !equals(rem(addr, MemSize$WORD_getInstance().size), 0)) {
      throw AlignmentError_init("Address: '" + Renderer_getInstance().toHex_3p81yu$(addr) + "' is not WORD aligned!");
    }
    if (!this.settings.mutableText && contains_0(new IntRange(MemorySegments_getInstance().TEXT_BEGIN + 1 - MemSize$WORD_getInstance().size | 0, numberToInt(this.state.getMaxPC())), addr)) {
      throw StoreError_init('You are attempting to edit the text of the program though the program is set to immutable at address ' + Renderer_getInstance().toHex_3p81yu$(addr) + '!');
    }
    this.isValidAccess_ychryw$(addr, MemSize$WORD_getInstance().size);
    this.preInstruction_0.add_11rb$(new CacheDiff(new Address(addr, MemSize$WORD_getInstance())));
    this.state.cache.write_e3g4se$(new Address(addr, MemSize$WORD_getInstance()));
    this.storeWord_z8e4lc$(addr, value);
    this.postInstruction_0.add_11rb$(new CacheDiff(new Address(addr, MemSize$WORD_getInstance())));
  };
  Simulator_0.prototype.storeLong_z8e4lc$ = function (addr, value) {
    this.preInstruction_0.add_11rb$(new MemoryDiff(addr, this.loadLong_3p81yu$(addr)));
    this.state.mem.storeLong_z8e4lc$(addr, value);
    this.postInstruction_0.add_11rb$(new MemoryDiff(addr, this.loadLong_3p81yu$(addr)));
    this.storeTextOverrideCheck_k2iqlo$(addr, value, MemSize$LONG_getInstance());
  };
  Simulator_0.prototype.storeLongwCache_z8e4lc$ = function (addr, value) {
    if (this.settings.alignedAddress && !equals(rem(addr, MemSize$LONG_getInstance().size), 0)) {
      throw AlignmentError_init("Address: '" + Renderer_getInstance().toHex_3p81yu$(addr) + "' is not long aligned!");
    }
    if (!this.settings.mutableText && contains_0(new IntRange(MemorySegments_getInstance().TEXT_BEGIN + 1 - MemSize$WORD_getInstance().size | 0, numberToInt(this.state.getMaxPC())), addr)) {
      throw StoreError_init('You are attempting to edit the text of the program though the program is set to immutable at address ' + Renderer_getInstance().toHex_3p81yu$(addr) + '!');
    }
    this.isValidAccess_ychryw$(addr, MemSize$LONG_getInstance().size);
    this.preInstruction_0.add_11rb$(new CacheDiff(new Address(addr, MemSize$LONG_getInstance())));
    this.state.cache.write_e3g4se$(new Address(addr, MemSize$LONG_getInstance()));
    this.storeLong_z8e4lc$(addr, value);
    this.postInstruction_0.add_11rb$(new CacheDiff(new Address(addr, MemSize$LONG_getInstance())));
  };
  Simulator_0.prototype.storeTextOverrideCheck_k2iqlo$ = function (addr, value, size) {
    if (contains_0(until(MemorySegments_getInstance().TEXT_BEGIN, numberToInt(this.state.getMaxPC())), addr) || contains_0(until(MemorySegments_getInstance().TEXT_BEGIN, numberToInt(this.state.getMaxPC())), minus_1(plus(addr, size.size), MemSize$BYTE_getInstance().size))) {
      try {
        var adjAddr = times(div(addr, MemSize$WORD_getInstance().size), MemSize$WORD_getInstance().size);
        var lowerAddr = minus_1(adjAddr, MemorySegments_getInstance().TEXT_BEGIN);
        var newInst = this.state.mem.loadWord_3p81yu$(adjAddr);
        this.preInstruction_0.add_11rb$(Renderer_getInstance().updateProgramListing_fttt2j$(lowerAddr, newInst));
        if (!equals(plus(lowerAddr, MemorySegments_getInstance().TEXT_BEGIN), addr) && compareTo(minus_1(plus(lowerAddr, MemSize$WORD_getInstance().size), MemSize$BYTE_getInstance().size), this.state.getMaxPC()) < 0) {
          var newInst2 = this.state.mem.loadWord_3p81yu$(plus(adjAddr, MemSize$WORD_getInstance().size));
          this.preInstruction_0.add_11rb$(Renderer_getInstance().updateProgramListing_fttt2j$(plus(lowerAddr, 4), newInst2));
        }
      }
       catch (e) {
        if (!Kotlin.isType(e, Throwable))
          throw e;
      }
    }
  };
  Simulator_0.prototype.getHeapEnd = function () {
    return this.state.getHeapEnd();
  };
  Simulator_0.prototype.addHeapSpace_3p81yu$ = function (bytes) {
    if (this.willHeapOverrideStack_3p81yu$(bytes)) {
      throw SimulatorError_init('The heap has grown into the stack.');
    }
    this.preInstruction_0.add_11rb$(new HeapSpaceDiff(this.state.getHeapEnd()));
    this.state.incHeapEnd_3p81yu$(bytes);
    this.postInstruction_0.add_11rb$(new HeapSpaceDiff(this.state.getHeapEnd()));
  };
  Simulator_0.prototype.willHeapOverrideStack_3p81yu$ = function (bytes) {
    return compareTo(plus(this.getHeapEnd(), bytes), this.getReg_za3lpa$(Registers_getInstance().sp)) >= 0;
  };
  Simulator_0.prototype.getInstructionLength_0 = function (short0) {
    if ((short0 & 3) !== 3) {
      return 2;
    }
     else if ((short0 & 31) !== 31) {
      return 4;
    }
     else if ((short0 & 63) === 31) {
      return 6;
    }
     else if ((short0 & 127) === 63) {
      return 8;
    }
     else {
      throw SimulatorError_init('instruction lengths > 8 not supported');
    }
  };
  Simulator_0.prototype.getNextInstruction = function () {
    var tmp$;
    var pc = this.getPC();
    var $receiver = this.loadHalfWord_3p81yu$(pc);
    var instruction = new ULong_init(Kotlin.Long.fromInt($receiver));
    var length = this.getInstructionLength_0(instruction.data.toInt());
    tmp$ = length / 2 | 0;
    for (var i = 1; i < tmp$; i++) {
      var $receiver_0 = this.loadHalfWord_3p81yu$(plus(pc, 2));
      var short = new ULong_init(Kotlin.Long.fromInt($receiver_0));
      var bitCount = 16 * i | 0;
      var $this = new ULong_init(short.data.shiftLeft(bitCount));
      var other = instruction;
      instruction = new ULong_init($this.data.or(other.data));
    }
    var intStruction = instruction.data.toInt();
    var mcode = new MachineCode(intStruction);
    mcode.length = length;
    return mcode;
  };
  Simulator_0.prototype.memcpy_qt1dr2$ = function (destaddr, srcaddr, size) {
    var dest = destaddr;
    var src = srcaddr;
    var s = size;
    while (s > 0) {
      this.storeByte_z8e4lc$(dest, this.loadByte_3p81yu$(src));
      dest = dest + 1 | 0;
      src = src + 1 | 0;
      s = s - 1 | 0;
    }
    return destaddr;
  };
  Simulator_0.prototype.memset_qt1dr2$ = function (destaddr, item, size) {
    var dest = destaddr;
    var s = size;
    while (s > 0) {
      this.storeByte_z8e4lc$(dest, item);
      dest = dest + 1 | 0;
      s = s - 1 | 0;
    }
    return destaddr;
  };
  Simulator_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Simulator',
    interfaces: []
  };
  function SimulatorError() {
    Kotlin.captureStack(Throwable, this);
    this.name = 'SimulatorError';
    this.infe_ue46ab$_0 = null;
    this.handled_gvgmbr$_0 = null;
  }
  Object.defineProperty(SimulatorError.prototype, 'infe', {
    get: function () {
      return this.infe_ue46ab$_0;
    },
    set: function (infe) {
      this.infe_ue46ab$_0 = infe;
    }
  });
  Object.defineProperty(SimulatorError.prototype, 'handled', {
    get: function () {
      return this.handled_gvgmbr$_0;
    },
    set: function (handled) {
      this.handled_gvgmbr$_0 = handled;
    }
  });
  Object.defineProperty(SimulatorError.prototype, 'message', {
    get: function () {
      return this.message_97404c$_0;
    }
  });
  Object.defineProperty(SimulatorError.prototype, 'cause', {
    get: function () {
      return this.cause_ls9v0m$_0;
    }
  });
  SimulatorError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimulatorError',
    interfaces: [Throwable]
  };
  function SimulatorError_init(msg, infe, handled, $this) {
    if (msg === void 0)
      msg = null;
    if (infe === void 0)
      infe = null;
    if (handled === void 0)
      handled = null;
    $this = $this || Object.create(SimulatorError.prototype);
    Throwable.call($this);
    $this.message_97404c$_0 = msg;
    $this.cause_ls9v0m$_0 = null;
    SimulatorError.call($this);
    $this.infe = infe;
    $this.handled = handled;
    return $this;
  }
  function SimulatorSettings(alignedAddress, mutableText, ecallOnlyExit, setRegesOnInit, maxSteps, ASLR, NX_bit, allowAccessBtnStackHeap) {
    if (alignedAddress === void 0)
      alignedAddress = false;
    if (mutableText === void 0)
      mutableText = true;
    if (ecallOnlyExit === void 0)
      ecallOnlyExit = false;
    if (setRegesOnInit === void 0)
      setRegesOnInit = true;
    if (maxSteps === void 0)
      maxSteps = -1;
    if (ASLR === void 0)
      ASLR = false;
    if (NX_bit === void 0)
      NX_bit = false;
    if (allowAccessBtnStackHeap === void 0)
      allowAccessBtnStackHeap = false;
    this.alignedAddress = alignedAddress;
    this.mutableText = mutableText;
    this.ecallOnlyExit = ecallOnlyExit;
    this.setRegesOnInit = setRegesOnInit;
    this.maxSteps = maxSteps;
    this.ASLR = ASLR;
    this.NX_bit = NX_bit;
    this.allowAccessBtnStackHeap = allowAccessBtnStackHeap;
  }
  SimulatorSettings.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimulatorSettings',
    interfaces: []
  };
  SimulatorSettings.prototype.component1 = function () {
    return this.alignedAddress;
  };
  SimulatorSettings.prototype.component2 = function () {
    return this.mutableText;
  };
  SimulatorSettings.prototype.component3 = function () {
    return this.ecallOnlyExit;
  };
  SimulatorSettings.prototype.component4 = function () {
    return this.setRegesOnInit;
  };
  SimulatorSettings.prototype.component5 = function () {
    return this.maxSteps;
  };
  SimulatorSettings.prototype.component6 = function () {
    return this.ASLR;
  };
  SimulatorSettings.prototype.component7 = function () {
    return this.NX_bit;
  };
  SimulatorSettings.prototype.component8 = function () {
    return this.allowAccessBtnStackHeap;
  };
  SimulatorSettings.prototype.copy_9paq85$ = function (alignedAddress, mutableText, ecallOnlyExit, setRegesOnInit, maxSteps, ASLR, NX_bit, allowAccessBtnStackHeap) {
    return new SimulatorSettings(alignedAddress === void 0 ? this.alignedAddress : alignedAddress, mutableText === void 0 ? this.mutableText : mutableText, ecallOnlyExit === void 0 ? this.ecallOnlyExit : ecallOnlyExit, setRegesOnInit === void 0 ? this.setRegesOnInit : setRegesOnInit, maxSteps === void 0 ? this.maxSteps : maxSteps, ASLR === void 0 ? this.ASLR : ASLR, NX_bit === void 0 ? this.NX_bit : NX_bit, allowAccessBtnStackHeap === void 0 ? this.allowAccessBtnStackHeap : allowAccessBtnStackHeap);
  };
  SimulatorSettings.prototype.toString = function () {
    return 'SimulatorSettings(alignedAddress=' + Kotlin.toString(this.alignedAddress) + (', mutableText=' + Kotlin.toString(this.mutableText)) + (', ecallOnlyExit=' + Kotlin.toString(this.ecallOnlyExit)) + (', setRegesOnInit=' + Kotlin.toString(this.setRegesOnInit)) + (', maxSteps=' + Kotlin.toString(this.maxSteps)) + (', ASLR=' + Kotlin.toString(this.ASLR)) + (', NX_bit=' + Kotlin.toString(this.NX_bit)) + (', allowAccessBtnStackHeap=' + Kotlin.toString(this.allowAccessBtnStackHeap)) + ')';
  };
  SimulatorSettings.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.alignedAddress) | 0;
    result = result * 31 + Kotlin.hashCode(this.mutableText) | 0;
    result = result * 31 + Kotlin.hashCode(this.ecallOnlyExit) | 0;
    result = result * 31 + Kotlin.hashCode(this.setRegesOnInit) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxSteps) | 0;
    result = result * 31 + Kotlin.hashCode(this.ASLR) | 0;
    result = result * 31 + Kotlin.hashCode(this.NX_bit) | 0;
    result = result * 31 + Kotlin.hashCode(this.allowAccessBtnStackHeap) | 0;
    return result;
  };
  SimulatorSettings.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.alignedAddress, other.alignedAddress) && Kotlin.equals(this.mutableText, other.mutableText) && Kotlin.equals(this.ecallOnlyExit, other.ecallOnlyExit) && Kotlin.equals(this.setRegesOnInit, other.setRegesOnInit) && Kotlin.equals(this.maxSteps, other.maxSteps) && Kotlin.equals(this.ASLR, other.ASLR) && Kotlin.equals(this.NX_bit, other.NX_bit) && Kotlin.equals(this.allowAccessBtnStackHeap, other.allowAccessBtnStackHeap)))));
  };
  function SimulatorState() {
  }
  SimulatorState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SimulatorState',
    interfaces: []
  };
  function SimulatorState128() {
    var array = Array_0(33);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new QuadWord();
    }
    this.regs128_0 = array;
    var array_0 = Array_0(33);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = new Decimal();
    }
    this.fregs_0 = array_0;
    this.pc_0 = new QuadWord();
    this.maxpc_0 = toQuadWord_2(MemorySegments_getInstance().TEXT_BEGIN);
    this.heapEnd_0 = toQuadWord_2(268468224);
    this.registerWidth_8cihd0$_0 = 128;
    this.mem_hh3c2e$_0 = new Memory();
    this.cache_ys8x7n$_0 = new CacheHandler(1);
  }
  Object.defineProperty(SimulatorState128.prototype, 'registerWidth', {
    get: function () {
      return this.registerWidth_8cihd0$_0;
    }
  });
  Object.defineProperty(SimulatorState128.prototype, 'mem', {
    get: function () {
      return this.mem_hh3c2e$_0;
    },
    set: function (mem) {
      this.mem_hh3c2e$_0 = mem;
    }
  });
  Object.defineProperty(SimulatorState128.prototype, 'cache', {
    get: function () {
      return this.cache_ys8x7n$_0;
    },
    set: function (cache) {
      this.cache_ys8x7n$_0 = cache;
    }
  });
  SimulatorState128.prototype.setCacheHandler_gfyr0r$ = function (ch) {
    this.cache = ch;
  };
  SimulatorState128.prototype.setPC_3p81yu$ = function (location) {
    this.pc_0 = toQuadWord(location);
  };
  SimulatorState128.prototype.getPC = function () {
    return this.pc_0;
  };
  SimulatorState128.prototype.incPC_3p81yu$ = function (amount) {
    this.pc_0 = this.pc_0.plus_k7dsfo$(toQuadWord(amount));
  };
  SimulatorState128.prototype.setMaxPC_3p81yu$ = function (location) {
    this.maxpc_0 = toQuadWord(location);
  };
  SimulatorState128.prototype.getMaxPC = function () {
    return this.maxpc_0;
  };
  SimulatorState128.prototype.incMaxPC_3p81yu$ = function (amount) {
    this.maxpc_0 = toQuadWord(this.maxpc_0.plus_k7dsfo$(toQuadWord(amount)));
  };
  SimulatorState128.prototype.getReg_za3lpa$ = function (i) {
    return this.regs128_0[i];
  };
  SimulatorState128.prototype.setReg_135bro$ = function (i, v) {
    if (i !== 0)
      this.regs128_0[i] = toQuadWord(v);
  };
  SimulatorState128.prototype.getFReg_za3lpa$ = function (i) {
    return this.fregs_0[i];
  };
  SimulatorState128.prototype.setFReg_i6jhoq$ = function (i, v) {
    this.fregs_0[i] = v;
  };
  SimulatorState128.prototype.getHeapEnd = function () {
    return this.heapEnd_0;
  };
  SimulatorState128.prototype.setHeapEnd_3p81yu$ = function (i) {
    this.heapEnd_0 = toQuadWord(i);
  };
  SimulatorState128.prototype.incHeapEnd_3p81yu$ = function (amount) {
    this.heapEnd_0 = this.heapEnd_0.plus_k7dsfo$(toQuadWord(amount));
  };
  SimulatorState128.prototype.reset = function () {
    this.cache.reset_6taknv$();
  };
  SimulatorState128.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimulatorState128',
    interfaces: [SimulatorState]
  };
  function SimulatorState16() {
    var array = Array_0(33);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = toShort(0);
    }
    this.regs16_0 = array;
    var array_0 = Array_0(33);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = new Decimal();
    }
    this.fregs_0 = array_0;
    this.pc_0 = 0;
    this.maxpc_0 = toShort(MemorySegments_getInstance().TEXT_BEGIN);
    this.heapEnd_0 = toShort(268468224);
    this.registerWidth_chg6lq$_0 = 16;
    this.mem_12zhwg$_0 = new Memory();
    this.cache_jyb6xf$_0 = new CacheHandler(1);
  }
  Object.defineProperty(SimulatorState16.prototype, 'registerWidth', {
    get: function () {
      return this.registerWidth_chg6lq$_0;
    }
  });
  Object.defineProperty(SimulatorState16.prototype, 'mem', {
    get: function () {
      return this.mem_12zhwg$_0;
    },
    set: function (mem) {
      this.mem_12zhwg$_0 = mem;
    }
  });
  Object.defineProperty(SimulatorState16.prototype, 'cache', {
    get: function () {
      return this.cache_jyb6xf$_0;
    },
    set: function (cache) {
      this.cache_jyb6xf$_0 = cache;
    }
  });
  SimulatorState16.prototype.setCacheHandler_gfyr0r$ = function (ch) {
    this.cache = ch;
  };
  SimulatorState16.prototype.setPC_3p81yu$ = function (location) {
    this.pc_0 = numberToShort(location);
  };
  SimulatorState16.prototype.getPC = function () {
    return this.pc_0;
  };
  SimulatorState16.prototype.incPC_3p81yu$ = function (amount) {
    this.pc_0 = toShort(this.pc_0 + numberToShort(amount));
  };
  SimulatorState16.prototype.setMaxPC_3p81yu$ = function (location) {
    this.maxpc_0 = numberToShort(location);
  };
  SimulatorState16.prototype.getMaxPC = function () {
    return this.maxpc_0;
  };
  SimulatorState16.prototype.incMaxPC_3p81yu$ = function (amount) {
    this.maxpc_0 = toShort(this.maxpc_0 + numberToShort(amount));
  };
  SimulatorState16.prototype.getReg_za3lpa$ = function (i) {
    return this.regs16_0[i];
  };
  SimulatorState16.prototype.setReg_135bro$ = function (i, v) {
    if (i !== 0)
      this.regs16_0[i] = numberToShort(v);
  };
  SimulatorState16.prototype.getFReg_za3lpa$ = function (i) {
    return this.fregs_0[i];
  };
  SimulatorState16.prototype.setFReg_i6jhoq$ = function (i, v) {
    this.fregs_0[i] = v;
  };
  SimulatorState16.prototype.getHeapEnd = function () {
    return this.heapEnd_0;
  };
  SimulatorState16.prototype.setHeapEnd_3p81yu$ = function (i) {
    this.heapEnd_0 = numberToShort(i);
  };
  SimulatorState16.prototype.incHeapEnd_3p81yu$ = function (amount) {
    this.heapEnd_0 = toShort(this.heapEnd_0 + numberToShort(amount));
  };
  SimulatorState16.prototype.reset = function () {
    this.cache.reset_6taknv$();
  };
  SimulatorState16.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimulatorState16',
    interfaces: [SimulatorState]
  };
  function SimulatorState32() {
    var array = Array_0(33);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = 0;
    }
    this.regs32_0 = array;
    var array_0 = Array_0(33);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = new Decimal();
    }
    this.fregs_0 = array_0;
    this.pc_0 = 0;
    this.maxpc_0 = MemorySegments_getInstance().TEXT_BEGIN;
    this.heapEnd_0 = 268468224;
    this.registerWidth_4z9wx4$_0 = 32;
    this.mem_qdmkyu$_0 = new Memory();
    this.cache_d26mxz$_0 = new CacheHandler(1);
  }
  Object.defineProperty(SimulatorState32.prototype, 'registerWidth', {
    get: function () {
      return this.registerWidth_4z9wx4$_0;
    }
  });
  Object.defineProperty(SimulatorState32.prototype, 'mem', {
    get: function () {
      return this.mem_qdmkyu$_0;
    },
    set: function (mem) {
      this.mem_qdmkyu$_0 = mem;
    }
  });
  Object.defineProperty(SimulatorState32.prototype, 'cache', {
    get: function () {
      return this.cache_d26mxz$_0;
    },
    set: function (cache) {
      this.cache_d26mxz$_0 = cache;
    }
  });
  SimulatorState32.prototype.setCacheHandler_gfyr0r$ = function (ch) {
    this.cache = ch;
  };
  SimulatorState32.prototype.setPC_3p81yu$ = function (location) {
    this.pc_0 = numberToInt(location);
  };
  SimulatorState32.prototype.getPC = function () {
    return this.pc_0;
  };
  SimulatorState32.prototype.incPC_3p81yu$ = function (amount) {
    this.pc_0 = this.pc_0 + numberToInt(amount) | 0;
  };
  SimulatorState32.prototype.setMaxPC_3p81yu$ = function (location) {
    this.maxpc_0 = numberToInt(location);
  };
  SimulatorState32.prototype.getMaxPC = function () {
    return this.maxpc_0;
  };
  SimulatorState32.prototype.incMaxPC_3p81yu$ = function (amount) {
    this.maxpc_0 = this.maxpc_0 + numberToInt(amount) | 0;
  };
  SimulatorState32.prototype.getReg_za3lpa$ = function (i) {
    return this.regs32_0[i];
  };
  SimulatorState32.prototype.setReg_135bro$ = function (i, v) {
    if (i !== 0)
      this.regs32_0[i] = numberToInt(v);
  };
  SimulatorState32.prototype.getFReg_za3lpa$ = function (i) {
    return this.fregs_0[i];
  };
  SimulatorState32.prototype.setFReg_i6jhoq$ = function (i, v) {
    this.fregs_0[i] = v;
  };
  SimulatorState32.prototype.getHeapEnd = function () {
    return this.heapEnd_0;
  };
  SimulatorState32.prototype.setHeapEnd_3p81yu$ = function (i) {
    this.heapEnd_0 = numberToInt(i);
  };
  SimulatorState32.prototype.incHeapEnd_3p81yu$ = function (amount) {
    this.heapEnd_0 = this.heapEnd_0 + numberToInt(amount) | 0;
  };
  SimulatorState32.prototype.reset = function () {
    this.cache.reset_6taknv$();
  };
  SimulatorState32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimulatorState32',
    interfaces: [SimulatorState]
  };
  function SimulatorState64() {
    var array = Array_0(33);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = L0;
    }
    this.regs64_0 = array;
    var array_0 = Array_0(33);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = new Decimal();
    }
    this.fregs_0 = array_0;
    this.pc_0 = L0;
    this.maxpc_0 = Kotlin.Long.fromInt(MemorySegments_getInstance().TEXT_BEGIN);
    this.heapEnd_0 = L268468224;
    this.registerWidth_pr4mxz$_0 = 64;
    this.mem_bsmg7$_0 = new Memory();
    this.cache_pxuasa$_0 = new CacheHandler(1);
  }
  Object.defineProperty(SimulatorState64.prototype, 'registerWidth', {
    get: function () {
      return this.registerWidth_pr4mxz$_0;
    }
  });
  Object.defineProperty(SimulatorState64.prototype, 'mem', {
    get: function () {
      return this.mem_bsmg7$_0;
    },
    set: function (mem) {
      this.mem_bsmg7$_0 = mem;
    }
  });
  Object.defineProperty(SimulatorState64.prototype, 'cache', {
    get: function () {
      return this.cache_pxuasa$_0;
    },
    set: function (cache) {
      this.cache_pxuasa$_0 = cache;
    }
  });
  SimulatorState64.prototype.setCacheHandler_gfyr0r$ = function (ch) {
    this.cache = ch;
  };
  SimulatorState64.prototype.setPC_3p81yu$ = function (location) {
    this.pc_0 = numberToLong(location);
  };
  SimulatorState64.prototype.getPC = function () {
    return this.pc_0;
  };
  SimulatorState64.prototype.incPC_3p81yu$ = function (amount) {
    this.pc_0 = this.pc_0.add(numberToLong(amount));
  };
  SimulatorState64.prototype.setMaxPC_3p81yu$ = function (location) {
    this.maxpc_0 = numberToLong(location);
  };
  SimulatorState64.prototype.getMaxPC = function () {
    return this.maxpc_0;
  };
  SimulatorState64.prototype.incMaxPC_3p81yu$ = function (amount) {
    this.maxpc_0 = this.maxpc_0.add(numberToLong(amount));
  };
  SimulatorState64.prototype.getReg_za3lpa$ = function (i) {
    return this.regs64_0[i];
  };
  SimulatorState64.prototype.setReg_135bro$ = function (i, v) {
    if (i !== 0)
      this.regs64_0[i] = numberToLong(v);
  };
  SimulatorState64.prototype.getFReg_za3lpa$ = function (i) {
    return this.fregs_0[i];
  };
  SimulatorState64.prototype.setFReg_i6jhoq$ = function (i, v) {
    this.fregs_0[i] = v;
  };
  SimulatorState64.prototype.getHeapEnd = function () {
    return this.heapEnd_0;
  };
  SimulatorState64.prototype.setHeapEnd_3p81yu$ = function (i) {
    this.heapEnd_0 = numberToLong(i);
  };
  SimulatorState64.prototype.incHeapEnd_3p81yu$ = function (amount) {
    this.heapEnd_0 = this.heapEnd_0.add(numberToLong(amount));
  };
  SimulatorState64.prototype.reset = function () {
    this.cache.reset_6taknv$();
  };
  SimulatorState64.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimulatorState64',
    interfaces: [SimulatorState]
  };
  function StoreError() {
    this.name = 'StoreError';
  }
  StoreError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StoreError',
    interfaces: [SimulatorError]
  };
  function StoreError_init(msg, $this) {
    if (msg === void 0)
      msg = null;
    $this = $this || Object.create(StoreError.prototype);
    SimulatorError_init(msg, void 0, void 0, $this);
    StoreError.call($this);
    return $this;
  }
  function Trace(branched, jumped, ecallMsg, regs, inst, line, pc, error) {
    if (error === void 0)
      error = null;
    this.branched = false;
    this.jumped = false;
    this.ecallMsg = '';
    var array = Array_0(0);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = 0;
    }
    this.regs = array;
    this.inst = new MachineCode(0);
    this.line = 0;
    this.pc = 0;
    this.prevTrace = null;
    this.error = null;
    this.ecallMsg = ecallMsg;
    this.branched = branched;
    this.jumped = jumped;
    this.regs = regs;
    this.inst = inst;
    this.line = line;
    this.pc = pc;
    this.error = error;
  }
  Trace.prototype.getString_bm4lxs$ = function (format, base) {
    var tmp$, tmp$_0;
    if (this.error != null) {
      return toString(this.error);
    }
    if (equals(this.ecallMsg, 'exiting the simulator')) {
      return 'exiting the simulator\n';
    }
    try {
      tmp$ = Instruction$Companion_getInstance().get_6cx2xq$(this.inst).disasm.invoke_6cx2xq$(this.inst);
    }
     catch (e) {
      if (Kotlin.isType(e, SimulatorError)) {
        tmp$ = 'Invalid Instruction';
      }
       else
        throw e;
    }
    var code = tmp$;
    var f = replace(replace(replace(replace(replace(format, '%output%', this.ecallMsg), '%inst%', numToBase(base, this.inst.get_cv51c2$(InstructionField$ENTIRE_getInstance()), this.inst.length * 8 | 0, true)), '%pc%', numToBase(base, this.getPC(), 32, false)), '%line%', numToBase(base, this.line, 16, false)), '%decode%', code);
    tmp$_0 = this.regs.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      f = replace(f, '%' + i.toString() + '%', numToBase(base, numberToInt(this.regs[i]), 32, true));
      f = replace(f, '%x' + i.toString() + '%', numToBase(base, numberToInt(this.regs[i]), 32, true));
    }
    return f;
  };
  Trace.prototype.getPC = function () {
    if (Tracer$Companion_getInstance().wordAddressed) {
      return div(this.pc, 4);
    }
    return this.pc;
  };
  Trace.prototype.copy = function () {
    return new Trace(this.branched, this.jumped, this.ecallMsg, this.regs.slice(), this.inst, this.line, this.pc);
  };
  Trace.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Trace',
    interfaces: []
  };
  function numToBase(curNumBase, nu, lengthNeeded, signextend) {
    var tmp$, tmp$_0;
    var n = typeof (tmp$ = nu) === 'number' ? tmp$ : throwCCE();
    var amount = Math_0.pow(2, lengthNeeded);
    var length = roundToInt(getBaseLog(curNumBase, amount));
    if (signextend) {
      tmp$_0 = toString_1(toLong(decimalToHexString(n), 16), curNumBase);
    }
     else {
      tmp$_0 = toString_0(n, curNumBase);
    }
    var num = tmp$_0;
    if ((length - num.length | 0) > 0) {
      num = repeat('0', length - num.length | 0) + num;
    }
    var snum = '';
    if (curNumBase === 2) {
      for (var i = 0; i < length; i++) {
        if (i % 4 === 0 && i !== 0) {
          snum += ' ';
        }
        snum += String.fromCharCode(num.charCodeAt(i));
      }
    }
     else {
      snum = num;
    }
    return snum;
  }
  function getBaseLog(x, y) {
    return Math_0.log2(y) / Math_0.log2(x);
  }
  function decimalToHexString(number) {
    var tmp$;
    var retval = Kotlin.Long.fromInt(number);
    if (number < 0) {
      retval = L4294967295.add(Kotlin.Long.fromInt(number)).add(Kotlin.Long.fromInt(1));
    }
    var rv = toString_1(retval, 16).toUpperCase();
    if (rv.length > 8) {
      tmp$ = substring(rv, until(0, 8));
    }
     else {
      tmp$ = rv;
    }
    return tmp$;
  }
  function Tracer(sim) {
    Tracer$Companion_getInstance();
    this.sim = sim;
    this.version = 'v2.0.1';
    this.format = '%output%%0%\t%1%\t%2%\t%3%\t%4%\t%5%\t%6%\t%7%\t%8%\t%9%\t%10%\t%11%\t%12%\t%13%\t%14%\t%15%\t%16%\t%17%\t%18%\t%19%\t%20%\t%21%\t%22%\t%23%\t%24%\t%25%\t%26%\t%27%\t%28%\t%29%\t%30%\t%31%\t%line%\t%pc%\t%inst%\n';
    this.amtReg = 32;
    this.base = 2;
    this.totCommands = -1;
    this.instFirst = false;
    this.prevInst_0 = new MachineCode(0);
    this.maxSteps = 1000000;
    this.tr = new TraceEncapsulation();
    this.twoStage = false;
  }
  function Tracer$Companion() {
    Tracer$Companion_instance = this;
    this.wordAddressed = false;
  }
  Tracer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Tracer$Companion_instance = null;
  function Tracer$Companion_getInstance() {
    if (Tracer$Companion_instance === null) {
      new Tracer$Companion();
    }
    return Tracer$Companion_instance;
  }
  Tracer.prototype.trace = function () {
    this.traceStart();
    var err = null;
    while (!this.sim.isDone()) {
      try {
        this.traceStep();
      }
       catch (e) {
        if (Kotlin.isType(e, SimulatorError)) {
          err = e;
          break;
        }
         else
          throw e;
      }
    }
    this.traceEnd();
    if (err != null) {
      this.traceAddError_pdchbv$(err);
    }
  };
  Tracer.prototype.traceAddError_pdchbv$ = function (err) {
    var tmp$ = this.tr.trace;
    var array = Array_0(0);
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      array[i] = 0;
    }
    tmp$.add_11rb$(new Trace(false, false, '', array, new MachineCode(0), 0, 0, err));
  };
  Tracer.prototype.traceFullReset = function () {
    this.tr.traced = false;
    this.tr.trace = ArrayList_init();
    this.tr.prevTrace = null;
    this.tr.traceLine = 0;
    this.tr.str = '';
    this.tr.stred = false;
    this.tr.stringIndex = 0;
  };
  Tracer.prototype.traceStart = function () {
    this.traceFullReset();
    this.sim.reset_6taknv$(true);
    if (this.twoStage) {
      this.tr.trace.add_11rb$(new Trace(this.didBrach(), this.didJump(), this.getecallMsg(), this.getRegs(), !this.sim.isDone() ? this.sim.getNextInstruction() : new MachineCode(0), this.tr.traceLine, this.sim.getPC()));
      var tmp$;
      tmp$ = this.tr;
      tmp$.traceLine = tmp$.traceLine + 1 | 0;
    }
    if (!this.instFirst && !this.sim.isDone()) {
      this.prevInst_0 = this.sim.getNextInstruction();
      this.sim.step();
    }
  };
  Tracer.prototype.traceStep = function () {
    if (this.sim.isDone()) {
      return;
    }
    if (this.tr.traceLine > this.maxSteps && this.maxSteps > 0) {
      throw SimulatorError_init('The max number of steps (' + toString(this.maxSteps) + ') in the tracer has been reached! You can increase this in the settings or disable it by setting it to 0 or less. This is the current safty for infinitely looping programs.');
    }
    var currentTrace = this.getSingleTrace_za3lpa$(this.tr.traceLine);
    currentTrace.prevTrace = this.tr.prevTrace;
    this.tr.trace.add_11rb$(currentTrace);
    this.tr.prevTrace = currentTrace;
    this.sim.step();
    var tmp$;
    tmp$ = this.tr;
    tmp$.traceLine = tmp$.traceLine + 1 | 0;
  };
  Tracer.prototype.traceEnd = function () {
    var currentTrace = this.getSingleTrace_za3lpa$(this.tr.traceLine);
    currentTrace.prevTrace = this.tr.prevTrace;
    this.tr.trace.add_11rb$(currentTrace);
    this.tr.traced = true;
    this.sim.reset_6taknv$(true);
    if (this.twoStage) {
      var i = get_lastIndex_0(this.tr.trace);
      if (i < 0) {
        return;
      }
      var prevmc = new MachineCode(0);
      var prevpc = plus(this.tr.trace.get_za3lpa$(i).pc, prevmc.length);
      while (i > 0) {
        var cur = this.tr.trace.get_za3lpa$(i);
        var curmc = cur.inst;
        var curpc = cur.pc;
        cur.inst = prevmc;
        cur.pc = prevpc;
        prevmc = curmc;
        prevpc = curpc;
        i = i - 1 | 0;
      }
    }
  };
  Tracer.prototype.getSingleTrace_za3lpa$ = function (line) {
    var mc = new MachineCode(0);
    if (!this.sim.isDone()) {
      mc = this.sim.getNextInstruction();
    }
    if (!this.instFirst) {
      var t = mc;
      mc = this.prevInst_0;
      this.prevInst_0 = t;
    }
    return new Trace(this.didBrach(), this.didJump(), this.getecallMsg(), this.getRegs(), mc, line, this.sim.getPC());
  };
  Tracer.prototype.getRegs = function () {
    var tmp$;
    var array = Array_0(this.amtReg);
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      array[i] = 0;
    }
    var r = array;
    tmp$ = this.amtReg - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$; i_0++) {
      r[i_0] = this.sim.getReg_za3lpa$(i_0);
    }
    return r;
  };
  Tracer.prototype.didBrach = function () {
    return this.sim.branched;
  };
  Tracer.prototype.didJump = function () {
    return this.sim.jumped;
  };
  Tracer.prototype.getecallMsg = function () {
    return this.sim.ecallMsg;
  };
  Tracer.prototype.getString = function () {
    if (!this.tr.stred) {
      throw SimulatorError_init('The trace string has not finished!');
    }
    return this.tr.str;
  };
  Tracer.prototype.traceStringStart = function () {
    if (!this.tr.traced) {
      throw SimulatorError_init('You need to make the run the trace before you can get the trace string!');
    }
    var tr = this.tr.trace;
    this.cleanFormat_0();
    this.tr.reset();
  };
  Tracer.prototype.traceStringStep = function () {
    var tmp$, tmp$_0;
    var t = this.tr.getNextTrace();
    if (this.twoStage && this.instFirst) {
      if (this.tr.peak().branched) {
        this.traceStringBranchHelper_l0fgas$(t);
      }
      if (this.tr.peak().jumped) {
        if (!this.twoStage) {
          t.regs = this.tr.peak().regs.slice();
        }
        if ((tmp$ = t.prevTrace) != null) {
          tmp$.regs = t.regs.slice();
        }
        this.traceStringJumpHelper_l0fgas$(t);
        if (this.twoStage) {
          t.regs = this.tr.peak().regs.slice();
        }
      }
    }
    t.line = this.tr.stringIndex;
    var peaked = this.tr.peak();
    if (this.twoStage && this.instFirst && (peaked.jumped || peaked.branched) && compareTo(t.pc, this.sim.getMaxPC()) > 0) {
      t.pc = numberToInt(t.pc) + 4 | 0;
    }
    this.tr.str = this.tr.str + t.getString_bm4lxs$(this.format, this.base);
    var tmp$_1;
    tmp$_1 = this.tr;
    tmp$_1.stringIndex = tmp$_1.stringIndex + 1 | 0;
    if (this.twoStage && !this.instFirst) {
      if (t.branched) {
        this.traceStringBranchHelper_l0fgas$(t);
      }
      if (t.jumped) {
        t.regs = this.tr.peak().regs.slice();
        if ((tmp$_0 = t.prevTrace) != null) {
          tmp$_0.regs = t.regs.slice();
        }
        this.traceStringJumpHelper_l0fgas$(t);
      }
    }
    if (this.totCommands > 0 && this.tr.stringIndex >= this.totCommands) {
      return false;
    }
    return this.tr.hasNext();
  };
  Tracer.prototype.traceStringBranchHelper_l0fgas$ = function (t) {
    var tmp$;
    var pt = t.prevTrace;
    var flushed = (tmp$ = pt != null ? pt.copy() : null) != null ? tmp$ : this.getSingleTrace_za3lpa$(-1);
    var nextPC = plus(flushed.pc, flushed.inst.length);
    flushed.pc = nextPC;
    nextPC = minus_1(nextPC, MemorySegments_getInstance().TEXT_BEGIN);
    flushed.inst = compareTo(nextPC, this.sim.getMaxPC()) < 0 ? this.sim.getInstAt_3p81yu$(nextPC) : new MachineCode(0);
    flushed.line = this.tr.stringIndex;
    if (this.instFirst && this.twoStage) {
      flushed.regs = t.regs;
    }
    this.tr.str = this.tr.str + flushed.getString_bm4lxs$(this.format, this.base);
    var tmp$_0;
    tmp$_0 = this.tr;
    tmp$_0.stringIndex = tmp$_0.stringIndex + 1 | 0;
  };
  Tracer.prototype.traceStringJumpHelper_l0fgas$ = function (t) {
    var tmp$;
    var pt = t.prevTrace;
    var flushed = (tmp$ = pt != null ? pt.copy() : null) != null ? tmp$ : this.getSingleTrace_za3lpa$(-1);
    var nextPC = plus(flushed.pc, flushed.inst.length);
    flushed.pc = nextPC;
    nextPC = minus_1(nextPC, MemorySegments_getInstance().TEXT_BEGIN);
    flushed.inst = compareTo(nextPC, this.sim.getMaxPC()) < 0 ? this.sim.getInstAt_3p81yu$(nextPC) : new MachineCode(0);
    flushed.line = this.tr.stringIndex;
    this.tr.str = this.tr.str + flushed.getString_bm4lxs$(this.format, this.base);
    var tmp$_0;
    tmp$_0 = this.tr;
    tmp$_0.stringIndex = tmp$_0.stringIndex + 1 | 0;
  };
  Tracer.prototype.traceStringEnd = function () {
    var tr = this.tr.trace;
    var t = tr.get_za3lpa$(tr.size - 1 | 0);
    while (this.tr.stringIndex < this.totCommands) {
      t.inst = new MachineCode(0);
      t.line = t.line + 1 | 0;
      t.pc = plus(t.pc, t.inst.length);
      this.tr.str = this.tr.str + t.getString_bm4lxs$(this.format, this.base);
      var tmp$;
      tmp$ = this.tr;
      tmp$.stringIndex = tmp$.stringIndex + 1 | 0;
    }
    try {
      this.twoStage && this.instFirst && this.tr.trace.get_za3lpa$(2).jumped;
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        println('Internal error in traceString');
        println(e);
      }
       else
        throw e;
    }
    this.tr.stred = true;
  };
  Tracer.prototype.traceString = function () {
    this.traceStringStart();
    while (this.tr.hasNext()) {
      this.traceStringStep();
    }
    this.traceStringEnd();
  };
  Tracer.prototype.incPC_0 = function (pc) {
    return pc + 4 | 0;
  };
  Tracer.prototype.cleanFormat_0 = function () {
    this.format = replace(replace(this.format, '\\t', '\t'), '\\n', '\n');
  };
  Tracer.prototype.setWordAddressed_6taknv$ = function (b) {
    Tracer$Companion_getInstance().wordAddressed = b;
  };
  Tracer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tracer',
    interfaces: []
  };
  function TraceEncapsulation() {
    this.trace_5yu159$_0 = this.trace_5yu159$_0;
    this.traced = false;
    this.prevTrace = null;
    this.traceLine = 0;
    this.str = '';
    this.stred = false;
    this.stringIndex = 0;
    this.curLoc_0 = 0;
  }
  Object.defineProperty(TraceEncapsulation.prototype, 'trace', {
    get: function () {
      if (this.trace_5yu159$_0 == null)
        return throwUPAE('trace');
      return this.trace_5yu159$_0;
    },
    set: function (trace) {
      this.trace_5yu159$_0 = trace;
    }
  });
  TraceEncapsulation.prototype.getNextTrace = function () {
    if (!this.hasNext()) {
      throw new IndexOutOfBoundsException('There are no more items to iterate over!');
    }
    var t = this.trace.get_za3lpa$(this.curLoc_0);
    this.curLoc_0 = this.curLoc_0 + 1 | 0;
    return t;
  };
  TraceEncapsulation.prototype.peak = function () {
    var tmp$ = this.trace;
    var a = this.curLoc_0;
    var b = get_lastIndex_0(this.trace);
    return tmp$.get_za3lpa$(Math_0.min(a, b));
  };
  TraceEncapsulation.prototype.reset = function () {
    this.curLoc_0 = 0;
  };
  TraceEncapsulation.prototype.hasNext = function () {
    return this.curLoc_0 < this.trace.size;
  };
  TraceEncapsulation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TraceEncapsulation',
    interfaces: []
  };
  var hexMap;
  function toHex(value, num_nibbles, add_prefix) {
    if (num_nibbles === void 0)
      num_nibbles = 8;
    if (add_prefix === void 0)
      add_prefix = true;
    var remainder = {v: Kotlin.Long.fromInt(value)};
    var suffix = {v: ''};
    for (var index = 0; index < num_nibbles; index++) {
      var hexDigit = unboxChar(hexMap.get_za3lpa$(remainder.v.and(L15).toInt()));
      var other = suffix.v;
      suffix.v = String.fromCharCode(hexDigit) + other;
      remainder.v = remainder.v.shiftRightUnsigned(4);
    }
    if (add_prefix) {
      suffix.v = '0x' + suffix.v;
    }
    return suffix.v;
  }
  function toHex_0(value) {
    return toHex(numberToInt(value));
  }
  var package$venus = _.venus || (_.venus = {});
  var package$api = package$venus.api || (package$venus.api = {});
  Object.defineProperty(package$api, 'API', {
    get: API_getInstance
  });
  package$api.FunctionsList = FunctionsList;
  Object.defineProperty(package$api, 'ScriptManager', {
    get: ScriptManager_getInstance
  });
  package$api.pkg = pkg;
  var package$venusbackend = package$api.venusbackend || (package$api.venusbackend = {});
  var package$simulator = package$venusbackend.simulator || (package$venusbackend.simulator = {});
  Object.defineProperty(package$simulator, 'Simulator', {
    get: Simulator_getInstance
  });
  package$venus.CookieJar = CookieJar;
  Object.defineProperty(package$venus, 'Driver', {
    get: Driver_getInstance
  });
  package$venus.handleError_d6c7lj$ = handleError;
  package$venus.LocalStorage = LocalStorage;
  Object.defineProperty(package$venus, 'Renderer', {
    get: Renderer_getInstance
  });
  var package$terminal = package$venus.terminal || (package$venus.terminal = {});
  var package$cmds = package$terminal.cmds || (package$terminal.cmds = {});
  Object.defineProperty(package$cmds, 'assemble', {
    get: function () {
      return assemble;
    },
    set: function (value) {
      assemble = value;
    }
  });
  Object.defineProperty(package$cmds, 'cat', {
    get: function () {
      return cat;
    },
    set: function (value) {
      cat = value;
    }
  });
  Object.defineProperty(package$cmds, 'cd', {
    get: function () {
      return cd;
    },
    set: function (value) {
      cd = value;
    }
  });
  Object.defineProperty(package$cmds, 'cp', {
    get: function () {
      return cp;
    },
    set: function (value) {
      cp = value;
    }
  });
  Object.defineProperty(package$cmds, 'download', {
    get: function () {
      return download;
    },
    set: function (value) {
      download = value;
    }
  });
  package$cmds.downloadFile_puj7f4$ = downloadFile;
  Object.defineProperty(package$cmds, 'edit', {
    get: function () {
      return edit;
    },
    set: function (value) {
      edit = value;
    }
  });
  Object.defineProperty(package$cmds, 'help', {
    get: function () {
      return help;
    },
    set: function (value) {
      help = value;
    }
  });
  Object.defineProperty(package$cmds, 'link', {
    get: function () {
      return link;
    },
    set: function (value) {
      link = value;
    }
  });
  Object.defineProperty(package$cmds, 'ls', {
    get: function () {
      return ls;
    },
    set: function (value) {
      ls = value;
    }
  });
  Object.defineProperty(package$cmds, 'mkdir', {
    get: function () {
      return mkdir;
    },
    set: function (value) {
      mkdir = value;
    }
  });
  Object.defineProperty(package$cmds, 'mv', {
    get: function () {
      return mv;
    },
    set: function (value) {
      mv = value;
    }
  });
  Object.defineProperty(package$cmds, 'pwd', {
    get: function () {
      return pwd;
    },
    set: function (value) {
      pwd = value;
    }
  });
  Object.defineProperty(package$cmds, 'rm', {
    get: function () {
      return rm;
    },
    set: function (value) {
      rm = value;
    }
  });
  Object.defineProperty(package$cmds, 'run', {
    get: function () {
      return run;
    },
    set: function (value) {
      run = value;
    }
  });
  Object.defineProperty(package$cmds, 'save', {
    get: function () {
      return save;
    },
    set: function (value) {
      save = value;
    }
  });
  Object.defineProperty(package$cmds, 'touch', {
    get: function () {
      return touch;
    },
    set: function (value) {
      touch = value;
    }
  });
  Object.defineProperty(package$cmds, 'tree', {
    get: function () {
      return tree;
    },
    set: function (value) {
      tree = value;
    }
  });
  Object.defineProperty(package$cmds, 'unzip', {
    get: function () {
      return unzip;
    },
    set: function (value) {
      unzip = value;
    }
  });
  Object.defineProperty(package$cmds, 'upload', {
    get: function () {
      return upload;
    },
    set: function (value) {
      upload = value;
    }
  });
  package$cmds.handleFileUploads_4o1mq3$ = handleFileUploads;
  package$cmds.setup_reader_6d2hh8$ = setup_reader;
  Object.defineProperty(package$cmds, 'vdb', {
    get: function () {
      return vdb;
    },
    set: function (value) {
      vdb = value;
    }
  });
  Object.defineProperty(package$cmds, 'xxd', {
    get: function () {
      return xxd;
    },
    set: function (value) {
      xxd = value;
    }
  });
  Object.defineProperty(package$cmds, 'zip', {
    get: function () {
      return zip_0;
    },
    set: function (value) {
      zip_0 = value;
    }
  });
  Object.defineProperty(Command, 'Companion', {
    get: Command$Companion_getInstance
  });
  package$terminal.Command = Command;
  package$terminal.CommandNotFoundError_init_pdl1vj$ = CommandNotFoundError_init;
  package$terminal.CommandNotFoundError = CommandNotFoundError;
  package$terminal.CommandNotImplementedError_init_pdl1vj$ = CommandNotImplementedError_init;
  package$terminal.CommandNotImplementedError = CommandNotImplementedError;
  package$terminal.Terminal = Terminal;
  var package$vfs = package$venus.vfs || (package$venus.vfs = {});
  package$vfs.JsonContainer = JsonContainer;
  Object.defineProperty(VFSDrive, 'Companion', {
    get: VFSDrive$Companion_getInstance
  });
  package$vfs.VFSDrive = VFSDrive;
  package$vfs.VFSDummy = VFSDummy;
  Object.defineProperty(VFSFile, 'Companion', {
    get: VFSFile$Companion_getInstance
  });
  package$vfs.VFSFile = VFSFile;
  Object.defineProperty(VFSFolder, 'Companion', {
    get: VFSFolder$Companion_getInstance
  });
  package$vfs.VFSFolder = VFSFolder;
  Object.defineProperty(VFSLinkedProgram, 'Companion', {
    get: VFSLinkedProgram$Companion_getInstance
  });
  package$vfs.VFSLinkedProgram = VFSLinkedProgram;
  Object.defineProperty(VFSObject, 'Companion', {
    get: VFSObject$Companion_getInstance
  });
  package$vfs.VFSObject = VFSObject;
  package$vfs.VFSPermissions = VFSPermissions;
  Object.defineProperty(VFSProgram, 'Companion', {
    get: VFSProgram$Companion_getInstance
  });
  package$vfs.VFSProgram = VFSProgram;
  Object.defineProperty(VFSType, 'Drive', {
    get: VFSType$Drive_getInstance
  });
  Object.defineProperty(VFSType, 'Folder', {
    get: VFSType$Folder_getInstance
  });
  Object.defineProperty(VFSType, 'File', {
    get: VFSType$File_getInstance
  });
  Object.defineProperty(VFSType, 'Program', {
    get: VFSType$Program_getInstance
  });
  Object.defineProperty(VFSType, 'LinkedProgram', {
    get: VFSType$LinkedProgram_getInstance
  });
  Object.defineProperty(VFSType, 'Dummy', {
    get: VFSType$Dummy_getInstance
  });
  package$vfs.VFSType = VFSType;
  Object.defineProperty(VirtualFileSystem, 'Companion', {
    get: VirtualFileSystem$Companion_getInstance
  });
  package$vfs.VirtualFileSystem = VirtualFileSystem;
  var package$zip = package$venus.zip || (package$venus.zip = {});
  package$zip.Zip = Zip;
  var package$venusbackend_0 = _.venusbackend || (_.venusbackend = {});
  var package$assembler = package$venusbackend_0.assembler || (package$venusbackend_0.assembler = {});
  Object.defineProperty(package$assembler, 'Assembler', {
    get: Assembler_getInstance
  });
  package$assembler.DebugInfo = DebugInfo;
  package$assembler.DebugInstruction = DebugInstruction;
  package$assembler.PassOneOutput = PassOneOutput;
  package$assembler.AssemblerOutput = AssemblerOutput;
  Object.defineProperty(package$assembler, 'p1warnings', {
    get: function () {
      return p1warnings;
    }
  });
  package$assembler.AssemblerPassOne = AssemblerPassOne;
  package$assembler.AssemblerPassTwo = AssemblerPassTwo;
  Object.defineProperty(AssemblerError, 'Companion', {
    get: AssemblerError$Companion_getInstance
  });
  package$assembler.AssemblerError_init_tzx6ug$ = AssemblerError_init;
  package$assembler.AssemblerError_init_h1fdkt$ = AssemblerError_init_0;
  package$assembler.AssemblerError_init_1lkl4b$ = AssemblerError_init_1;
  package$assembler.AssemblerError = AssemblerError;
  package$assembler.AssemblerWarning_init_pdl1vj$ = AssemblerWarning_init;
  package$assembler.AssemblerWarning_init_h1fdkt$ = AssemblerWarning_init_0;
  package$assembler.AssemblerWarning = AssemblerWarning;
  Object.defineProperty(package$assembler, 'Lexer', {
    get: Lexer_getInstance
  });
  package$assembler.LintError = LintError;
  Object.defineProperty(package$assembler, 'Linter', {
    get: Linter_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'beqz', {
    get: PseudoDispatcher$beqz_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'bgez', {
    get: PseudoDispatcher$bgez_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'bgt', {
    get: PseudoDispatcher$bgt_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'bgtu', {
    get: PseudoDispatcher$bgtu_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'bgtz', {
    get: PseudoDispatcher$bgtz_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'ble', {
    get: PseudoDispatcher$ble_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'bleu', {
    get: PseudoDispatcher$bleu_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'blez', {
    get: PseudoDispatcher$blez_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'bltz', {
    get: PseudoDispatcher$bltz_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'bnez', {
    get: PseudoDispatcher$bnez_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'call', {
    get: PseudoDispatcher$call_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'jal', {
    get: PseudoDispatcher$jal_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'jalr', {
    get: PseudoDispatcher$jalr_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'j', {
    get: PseudoDispatcher$j_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'jr', {
    get: PseudoDispatcher$jr_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'la', {
    get: PseudoDispatcher$la_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'lb', {
    get: PseudoDispatcher$lb_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'lbu', {
    get: PseudoDispatcher$lbu_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'lh', {
    get: PseudoDispatcher$lh_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'lhu', {
    get: PseudoDispatcher$lhu_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'li', {
    get: PseudoDispatcher$li_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'lw', {
    get: PseudoDispatcher$lw_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'ld', {
    get: PseudoDispatcher$ld_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'mv', {
    get: PseudoDispatcher$mv_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'neg', {
    get: PseudoDispatcher$neg_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'negw', {
    get: PseudoDispatcher$negw_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'nop', {
    get: PseudoDispatcher$nop_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'not', {
    get: PseudoDispatcher$not_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'ret', {
    get: PseudoDispatcher$ret_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'sb', {
    get: PseudoDispatcher$sb_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'sextw', {
    get: PseudoDispatcher$sextw_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'seqz', {
    get: PseudoDispatcher$seqz_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'sgtz', {
    get: PseudoDispatcher$sgtz_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'sh', {
    get: PseudoDispatcher$sh_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'sltz', {
    get: PseudoDispatcher$sltz_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'snez', {
    get: PseudoDispatcher$snez_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'sw', {
    get: PseudoDispatcher$sw_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'sd', {
    get: PseudoDispatcher$sd_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'tail', {
    get: PseudoDispatcher$tail_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'seq', {
    get: PseudoDispatcher$seq_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'sge', {
    get: PseudoDispatcher$sge_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'sgeu', {
    get: PseudoDispatcher$sgeu_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'sgt', {
    get: PseudoDispatcher$sgt_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'sgtu', {
    get: PseudoDispatcher$sgtu_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'sle', {
    get: PseudoDispatcher$sle_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'sleu', {
    get: PseudoDispatcher$sleu_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'sne', {
    get: PseudoDispatcher$sne_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'fmvs', {
    get: PseudoDispatcher$fmvs_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'fabss', {
    get: PseudoDispatcher$fabss_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'fnegs', {
    get: PseudoDispatcher$fnegs_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'fmvd', {
    get: PseudoDispatcher$fmvd_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'fabsd', {
    get: PseudoDispatcher$fabsd_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'fnegd', {
    get: PseudoDispatcher$fnegd_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'flw', {
    get: PseudoDispatcher$flw_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'fld', {
    get: PseudoDispatcher$fld_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'fsw', {
    get: PseudoDispatcher$fsw_getInstance
  });
  Object.defineProperty(PseudoDispatcher, 'fsd', {
    get: PseudoDispatcher$fsd_getInstance
  });
  package$assembler.PseudoDispatcher = PseudoDispatcher;
  package$assembler.PseudoDispatcherError_init_pdl1vj$ = PseudoDispatcherError_init;
  package$assembler.PseudoDispatcherError_init_h1fdkt$ = PseudoDispatcherError_init_0;
  package$assembler.PseudoDispatcherError = PseudoDispatcherError;
  var package$pseudos = package$assembler.pseudos || (package$assembler.pseudos = {});
  Object.defineProperty(package$pseudos, 'BEQZ', {
    get: BEQZ_getInstance
  });
  Object.defineProperty(package$pseudos, 'BGEZ', {
    get: BGEZ_getInstance
  });
  Object.defineProperty(package$pseudos, 'BGT', {
    get: BGT_getInstance
  });
  Object.defineProperty(package$pseudos, 'BGTU', {
    get: BGTU_getInstance
  });
  Object.defineProperty(package$pseudos, 'BGTZ', {
    get: BGTZ_getInstance
  });
  Object.defineProperty(package$pseudos, 'BLE', {
    get: BLE_getInstance
  });
  Object.defineProperty(package$pseudos, 'BLEU', {
    get: BLEU_getInstance
  });
  Object.defineProperty(package$pseudos, 'BLEZ', {
    get: BLEZ_getInstance
  });
  Object.defineProperty(package$pseudos, 'BLTZ', {
    get: BLTZ_getInstance
  });
  Object.defineProperty(package$pseudos, 'BNEZ', {
    get: BNEZ_getInstance
  });
  Object.defineProperty(package$pseudos, 'CALL', {
    get: CALL_getInstance
  });
  Object.defineProperty(package$pseudos, 'FABSD', {
    get: FABSD_getInstance
  });
  Object.defineProperty(package$pseudos, 'FABSS', {
    get: FABSS_getInstance
  });
  Object.defineProperty(package$pseudos, 'FMVD', {
    get: FMVD_getInstance
  });
  Object.defineProperty(package$pseudos, 'FMVS', {
    get: FMVS_getInstance
  });
  Object.defineProperty(package$pseudos, 'FNEGD', {
    get: FNEGD_getInstance
  });
  Object.defineProperty(package$pseudos, 'FNEGS', {
    get: FNEGS_getInstance
  });
  Object.defineProperty(package$pseudos, 'J', {
    get: J_getInstance
  });
  Object.defineProperty(package$pseudos, 'JAL', {
    get: JAL_getInstance
  });
  Object.defineProperty(package$pseudos, 'JALR', {
    get: JALR_getInstance
  });
  Object.defineProperty(package$pseudos, 'JR', {
    get: JR_getInstance
  });
  Object.defineProperty(package$pseudos, 'LA', {
    get: LA_getInstance
  });
  Object.defineProperty(package$pseudos, 'LI', {
    get: LI_getInstance
  });
  Object.defineProperty(package$pseudos, 'Load', {
    get: Load_getInstance
  });
  Object.defineProperty(package$pseudos, 'MV', {
    get: MV_getInstance
  });
  Object.defineProperty(package$pseudos, 'NEG', {
    get: NEG_getInstance
  });
  Object.defineProperty(package$pseudos, 'NEGW', {
    get: NEGW_getInstance
  });
  Object.defineProperty(package$pseudos, 'NOP', {
    get: NOP_getInstance
  });
  Object.defineProperty(package$pseudos, 'NOT', {
    get: NOT_getInstance
  });
  Object.defineProperty(package$pseudos, 'RET', {
    get: RET_getInstance
  });
  Object.defineProperty(package$pseudos, 'SEQ', {
    get: SEQ_getInstance
  });
  Object.defineProperty(package$pseudos, 'SEQZ', {
    get: SEQZ_getInstance
  });
  Object.defineProperty(package$pseudos, 'SEXTW', {
    get: SEXTW_getInstance
  });
  Object.defineProperty(package$pseudos, 'SGE', {
    get: SGE_getInstance
  });
  Object.defineProperty(package$pseudos, 'SGT', {
    get: SGT_getInstance
  });
  Object.defineProperty(package$pseudos, 'SGTZ', {
    get: SGTZ_getInstance
  });
  Object.defineProperty(package$pseudos, 'SLE', {
    get: SLE_getInstance
  });
  Object.defineProperty(package$pseudos, 'SLTZ', {
    get: SLTZ_getInstance
  });
  Object.defineProperty(package$pseudos, 'SNE', {
    get: SNE_getInstance
  });
  Object.defineProperty(package$pseudos, 'SNEZ', {
    get: SNEZ_getInstance
  });
  Object.defineProperty(package$pseudos, 'Store', {
    get: Store_getInstance
  });
  Object.defineProperty(package$pseudos, 'TAIL', {
    get: TAIL_getInstance
  });
  package$pseudos.checkArgsLength_uyauq5$ = checkArgsLength;
  package$pseudos.checkStrictMode = checkStrictMode;
  package$assembler.PseudoWriter = PseudoWriter;
  var package$cli = package$venusbackend_0.cli || (package$venusbackend_0.cli = {});
  package$cli.Action = Action;
  package$cli.FlagAction = FlagAction;
  package$cli.ArgumentAction = ArgumentAction;
  package$cli.CommandAction = CommandAction;
  package$cli.ArgumentValue = ArgumentValue;
  package$cli.CommandLineBuilder = CommandLineBuilder;
  package$cli.CommandLineException = CommandLineException;
  package$cli.StopParsingException = StopParsingException;
  package$cli.HelpPrintedException = HelpPrintedException;
  package$cli.MissingArgumentException = MissingArgumentException;
  package$cli.stopParsing = stopParsing;
  package$cli.CommandLineInterface = CommandLineInterface;
  package$cli.CommandLineParser = CommandLineParser;
  package$cli.Event = Event;
  package$cli.Listener = Listener;
  package$cli.add_569ies$ = add;
  package$cli.EventTrigger = EventTrigger;
  package$cli.SimpleEvent = SimpleEvent;
  package$cli.onArgument_9mlzs0$ = onArgument;
  package$cli.onRemainingArguments_fmdlnk$ = onRemainingArguments;
  package$cli.onFlag_fmdlnk$ = onFlag;
  package$cli.onFlag_jrqgiz$ = onFlag_0;
  package$cli.onFlagValue_mzu47i$ = onFlagValue;
  package$cli.onFlagValue_qv7go7$ = onFlagValue_0;
  package$cli.MappedEvent = MappedEvent;
  package$cli.map_xkiz9t$ = map;
  $$importsForInline$$.venus = _;
  package$cli.onEach_569ies$ = onEach;
  package$cli.once_569ies$ = once;
  package$cli.ArgumentStorage = ArgumentStorage;
  package$cli.store_oixed9$ = store;
  package$cli.store_fzizi2$ = store_0;
  package$cli.storeConst_oageq2$ = storeConst;
  package$cli.storeTrue_j0g6ms$ = storeTrue;
  package$cli.addTo_miobvx$ = addTo;
  package$cli.addToList_459nz7$ = addToList;
  package$cli.FlagActionBase = FlagActionBase;
  package$cli.FlagArgumentBase = FlagArgumentBase;
  package$cli.registerAction_hggfqw$ = registerAction;
  package$cli.registerArgument_bgx4q5$ = registerArgument;
  package$cli.flagAction_oeri9o$ = flagAction;
  package$cli.flagAction_g3ntap$ = flagAction_0;
  package$cli.flagArgument_v55bsy$ = flagArgument;
  package$cli.flagArgument_8earfv$ = flagArgument_0;
  package$cli.flagArgument_cw3l0g$ = flagArgument_1;
  package$cli.foldFlagArguments_mto8mp$ = foldFlagArguments;
  package$cli.foldFlagArguments_3ugvhi$ = foldFlagArguments_0;
  package$cli.help_k498vw$ = help_0;
  package$cli.help_i8f5i5$ = help_1;
  package$cli.FlagValueActionBase = FlagValueActionBase;
  package$cli.FlagValueArgumentBase = FlagValueArgumentBase;
  package$cli.registerAction_mhrudj$ = registerAction_0;
  package$cli.registerArgument_1lscde$ = registerArgument_0;
  package$cli.flagValueAction_9qh7py$ = flagValueAction;
  package$cli.flagValueAction_bcptdh$ = flagValueAction_0;
  package$cli.flagValueArgument_hj6xa1$ = flagValueArgument;
  package$cli.flagValueArgument_weq3lo$ = flagValueArgument_0;
  package$cli.flagValueArgument_182cy1$ = flagValueArgument_1;
  package$cli.flagValueArgument_exkaz8$ = flagValueArgument_2;
  package$cli.flagValueArgument_e8p38l$ = flagValueArgument_3;
  package$cli.flagValueArgument_qhk0gq$ = flagValueArgument_4;
  package$cli.HelpEntriesGroup = HelpEntriesGroup;
  package$cli.helpEntriesGroup_8gngcu$ = helpEntriesGroup;
  package$cli.help_wg8rou$ = help_2;
  package$cli.help_agim4k$ = help_3;
  package$cli.help_iylylx$ = help_4;
  package$cli.HelpPrinter = HelpPrinter;
  package$cli.printSectionOrNothing_q3wd50$ = printSectionOrNothing;
  package$cli.printSection_v8i7fn$ = printSection;
  package$cli.HelpEntry = HelpEntry;
  package$cli.SimpleHelpPrinter = SimpleHelpPrinter;
  package$cli.helpSeparator_m66fcg$ = helpSeparator;
  package$cli.parseArgs_rmxfud$ = parseArgs;
  package$cli.parse_uij32t$ = parse;
  package$cli.parse_1x073x$ = parse_0;
  package$cli.PositionalArgument = PositionalArgument;
  package$cli.PositionalActionBase = PositionalActionBase;
  package$cli.PositionalArgumentBase = PositionalArgumentBase;
  package$cli.SinglePositionalArgumentBase = SinglePositionalArgumentBase;
  package$cli.ListPositionalArgumentBase = ListPositionalArgumentBase;
  package$cli.registerAction_4sv78g$ = registerAction_1;
  package$cli.registerArgument_67em9n$ = registerArgument_1;
  package$cli.positionalAction_hvvyqr$ = positionalAction;
  package$cli.positionalArgument_mhhxv8$ = positionalArgument;
  package$cli.positionalArgument_vrjji2$ = positionalArgument_0;
  package$cli.positionalArgument_f371sx$ = positionalArgument_1;
  package$cli.positionalArgument_tsx21x$ = positionalArgument_2;
  package$cli.positionalArgumentsList_lpif2s$ = positionalArgumentsList;
  package$cli.positionalArgumentsList_szngpq$ = positionalArgumentsList_0;
  package$cli.foldPositionalArguments_3tguee$ = foldPositionalArguments;
  package$cli.SharedOptionBuilder = SharedOptionBuilder;
  package$cli.sharedOption_ltf6c5$ = sharedOption;
  package$cli.Subcommand = Subcommand;
  package$cli.subcommands_4luwqv$ = subcommands;
  package$cli.subcommand_5exkea$ = subcommand;
  package$cli.nextOrNull_bqa0xn$ = nextOrNull;
  var package$linker = package$venusbackend_0.linker || (package$venusbackend_0.linker = {});
  package$linker.ImportProgramData = ImportProgramData;
  package$linker.ProgramDebugInfo = ProgramDebugInfo;
  package$linker.LinkedProgram = LinkedProgram;
  package$linker.RelocationInfo = RelocationInfo;
  package$linker.DataRelocationInfo = DataRelocationInfo;
  Object.defineProperty(package$linker, 'Linker', {
    get: Linker_getInstance
  });
  package$linker.ProgramAndLibraries = ProgramAndLibraries;
  Object.defineProperty(DoubleQuadWord, 'Companion', {
    get: DoubleQuadWord$Companion_getInstance
  });
  var package$numbers = package$venusbackend_0.numbers || (package$venusbackend_0.numbers = {});
  package$numbers.DoubleQuadWord = DoubleQuadWord;
  package$numbers.toDoubleQuadWord_rcaex3$ = toDoubleQuadWord;
  package$numbers.toDoubleQuadWord_mz3mee$ = toDoubleQuadWord_0;
  package$numbers.toDoubleQuadWord_5vcgdc$ = toDoubleQuadWord_1;
  package$numbers.toDoubleQuadWord_s8ev3n$ = toDoubleQuadWord_2;
  package$numbers.toDoubleQuadWord_mts6qi$ = toDoubleQuadWord_3;
  package$numbers.toUDoubleQuadWord_mz3mee$ = toUDoubleQuadWord;
  package$numbers.toUDoubleQuadWord_5vcgdc$ = toUDoubleQuadWord_0;
  package$numbers.toUDoubleQuadWord_s8ev3n$ = toUDoubleQuadWord_1;
  package$numbers.toUDoubleQuadWord_mts6qi$ = toUDoubleQuadWord_2;
  package$numbers.minus_lvgnu8$ = minus;
  Object.defineProperty(QuadWord, 'Companion', {
    get: QuadWord$Companion_getInstance
  });
  package$numbers.QuadWord = QuadWord;
  package$numbers.toQuadWord_rcaex3$ = toQuadWord;
  package$numbers.toQuadWord_mz3mee$ = toQuadWord_0;
  package$numbers.toQuadWord_5vcgdc$ = toQuadWord_1;
  package$numbers.toQuadWord_s8ev3n$ = toQuadWord_2;
  package$numbers.toQuadWord_mts6qi$ = toQuadWord_3;
  package$numbers.toUQuadWord_mz3mee$ = toUQuadWord;
  package$numbers.toUQuadWord_5vcgdc$ = toUQuadWord_0;
  package$numbers.toUQuadWord_s8ev3n$ = toUQuadWord_1;
  package$numbers.toUQuadWord_mts6qi$ = toUQuadWord_2;
  package$numbers.minus_xf4nq9$ = minus_0;
  package$venusbackend_0.plus_a5ehzx$ = plus;
  package$venusbackend_0.minus_a5ehzx$ = minus_1;
  package$venusbackend_0.times_a5ehzx$ = times;
  package$venusbackend_0.div_a5ehzx$ = div;
  package$venusbackend_0.inc_rcaex3$ = inc;
  package$venusbackend_0.compareTo_a5ehzx$ = compareTo;
  package$venusbackend_0.shr_a5ehzx$ = shr;
  package$venusbackend_0.ushr_a5ehzx$ = ushr;
  package$venusbackend_0.shl_a5ehzx$ = shl;
  package$venusbackend_0.rem_a5ehzx$ = rem;
  package$venusbackend_0.and_a5ehzx$ = and;
  package$venusbackend_0.or_a5ehzx$ = or;
  var package$riscv = package$venusbackend_0.riscv || (package$venusbackend_0.riscv = {});
  package$riscv.Address = Address;
  Object.defineProperty(InitInstructions, 'Companion', {
    get: InitInstructions$Companion_getInstance
  });
  package$riscv.InitInstructions = InitInstructions;
  Object.defineProperty(InstructionField, 'ENTIRE', {
    get: InstructionField$ENTIRE_getInstance
  });
  Object.defineProperty(InstructionField, 'HALF', {
    get: InstructionField$HALF_getInstance
  });
  Object.defineProperty(InstructionField, 'OPCODE', {
    get: InstructionField$OPCODE_getInstance
  });
  Object.defineProperty(InstructionField, 'OP2', {
    get: InstructionField$OP2_getInstance
  });
  Object.defineProperty(InstructionField, 'RD', {
    get: InstructionField$RD_getInstance
  });
  Object.defineProperty(InstructionField, 'RS2P', {
    get: InstructionField$RS2P_getInstance
  });
  Object.defineProperty(InstructionField, 'CRS2', {
    get: InstructionField$CRS2_getInstance
  });
  Object.defineProperty(InstructionField, 'FUNCT3', {
    get: InstructionField$FUNCT3_getInstance
  });
  Object.defineProperty(InstructionField, 'CFUNCT3', {
    get: InstructionField$CFUNCT3_getInstance
  });
  Object.defineProperty(InstructionField, 'FUNCT2', {
    get: InstructionField$FUNCT2_getInstance
  });
  Object.defineProperty(InstructionField, 'CFUNCT2', {
    get: InstructionField$CFUNCT2_getInstance
  });
  Object.defineProperty(InstructionField, 'FUNCT', {
    get: InstructionField$FUNCT_getInstance
  });
  Object.defineProperty(InstructionField, 'FUNCT6', {
    get: InstructionField$FUNCT6_getInstance
  });
  Object.defineProperty(InstructionField, 'FUNCT4', {
    get: InstructionField$FUNCT4_getInstance
  });
  Object.defineProperty(InstructionField, 'WIDTH', {
    get: InstructionField$WIDTH_getInstance
  });
  Object.defineProperty(InstructionField, 'RS1P', {
    get: InstructionField$RS1P_getInstance
  });
  Object.defineProperty(InstructionField, 'RDP', {
    get: InstructionField$RDP_getInstance
  });
  Object.defineProperty(InstructionField, 'RS1', {
    get: InstructionField$RS1_getInstance
  });
  Object.defineProperty(InstructionField, 'RS2', {
    get: InstructionField$RS2_getInstance
  });
  Object.defineProperty(InstructionField, 'RS3', {
    get: InstructionField$RS3_getInstance
  });
  Object.defineProperty(InstructionField, 'FUNCT7', {
    get: InstructionField$FUNCT7_getInstance
  });
  Object.defineProperty(InstructionField, 'FUNCT5', {
    get: InstructionField$FUNCT5_getInstance
  });
  Object.defineProperty(InstructionField, 'RL', {
    get: InstructionField$RL_getInstance
  });
  Object.defineProperty(InstructionField, 'AQ', {
    get: InstructionField$AQ_getInstance
  });
  Object.defineProperty(InstructionField, 'IMM_b2_b6', {
    get: InstructionField$IMM_b2_b6_getInstance
  });
  Object.defineProperty(InstructionField, 'IMM_b12', {
    get: InstructionField$IMM_b12_getInstance
  });
  Object.defineProperty(InstructionField, 'IMM_11_0', {
    get: InstructionField$IMM_11_0_getInstance
  });
  Object.defineProperty(InstructionField, 'IMM_4_0', {
    get: InstructionField$IMM_4_0_getInstance
  });
  Object.defineProperty(InstructionField, 'IMM_11_5', {
    get: InstructionField$IMM_11_5_getInstance
  });
  Object.defineProperty(InstructionField, 'IMM_11_B', {
    get: InstructionField$IMM_11_B_getInstance
  });
  Object.defineProperty(InstructionField, 'IMM_4_1', {
    get: InstructionField$IMM_4_1_getInstance
  });
  Object.defineProperty(InstructionField, 'IMM_10_5', {
    get: InstructionField$IMM_10_5_getInstance
  });
  Object.defineProperty(InstructionField, 'IMM_12', {
    get: InstructionField$IMM_12_getInstance
  });
  Object.defineProperty(InstructionField, 'IMM_12_2', {
    get: InstructionField$IMM_12_2_getInstance
  });
  Object.defineProperty(InstructionField, 'IMM_31_12', {
    get: InstructionField$IMM_31_12_getInstance
  });
  Object.defineProperty(InstructionField, 'IMM_19_12', {
    get: InstructionField$IMM_19_12_getInstance
  });
  Object.defineProperty(InstructionField, 'IMM_11_J', {
    get: InstructionField$IMM_11_J_getInstance
  });
  Object.defineProperty(InstructionField, 'IMM_10_1', {
    get: InstructionField$IMM_10_1_getInstance
  });
  Object.defineProperty(InstructionField, 'IMM_20', {
    get: InstructionField$IMM_20_getInstance
  });
  Object.defineProperty(InstructionField, 'SHAMT', {
    get: InstructionField$SHAMT_getInstance
  });
  package$riscv.InstructionField = InstructionField;
  var package$insts = package$riscv.insts || (package$riscv.insts = {});
  var package$dsl = package$insts.dsl || (package$insts.dsl = {});
  var package$disasms = package$dsl.disasms || (package$dsl.disasms = {});
  var package$base = package$disasms.base || (package$disasms.base = {});
  Object.defineProperty(package$base, 'BTypeDisassembler', {
    get: BTypeDisassembler_getInstance
  });
  Object.defineProperty(package$base, 'ITypeDisassembler', {
    get: ITypeDisassembler_getInstance
  });
  Object.defineProperty(package$base, 'LoadDisassembler', {
    get: LoadDisassembler_getInstance
  });
  Object.defineProperty(package$base, 'RTypeDisassembler', {
    get: RTypeDisassembler_getInstance
  });
  Object.defineProperty(package$base, 'ShiftImmediateDisassembler', {
    get: ShiftImmediateDisassembler_getInstance
  });
  Object.defineProperty(package$base, 'STypeDisassembler', {
    get: STypeDisassembler_getInstance
  });
  Object.defineProperty(package$base, 'UTypeDisassembler', {
    get: UTypeDisassembler_getInstance
  });
  var package$extensions = package$disasms.extensions || (package$disasms.extensions = {});
  var package$atomic = package$extensions.atomic || (package$extensions.atomic = {});
  Object.defineProperty(package$atomic, 'AMORTypeDisassembler', {
    get: AMORTypeDisassembler_getInstance
  });
  var package$compressed = package$extensions.compressed || (package$extensions.compressed = {});
  Object.defineProperty(package$compressed, 'CATypeDisassembler', {
    get: CATypeDisassembler_getInstance
  });
  Object.defineProperty(package$compressed, 'CRTypeDisassembler', {
    get: CRTypeDisassembler_getInstance
  });
  var package$floating = package$extensions.floating || (package$extensions.floating = {});
  Object.defineProperty(package$floating, 'FFRRTypeDisassembler', {
    get: FFRRTypeDisassembler_getInstance
  });
  Object.defineProperty(package$floating, 'FITypeDisassembler', {
    get: FITypeDisassembler_getInstance
  });
  Object.defineProperty(package$floating, 'FR4TypeDisassembler', {
    get: FR4TypeDisassembler_getInstance
  });
  Object.defineProperty(package$floating, 'FRRTypeDisassembler', {
    get: FRRTypeDisassembler_getInstance
  });
  Object.defineProperty(package$floating, 'FRTypeDisassembler', {
    get: FRTypeDisassembler_getInstance
  });
  Object.defineProperty(package$floating, 'FSTypeDisassembler', {
    get: FSTypeDisassembler_getInstance
  });
  Object.defineProperty(package$floating, 'RFRTypeDisassembler', {
    get: RFRTypeDisassembler_getInstance
  });
  package$disasms.InstructionDisassembler = InstructionDisassembler;
  package$disasms.RawDisassembler = RawDisassembler;
  var package$formats = package$dsl.formats || (package$dsl.formats = {});
  var package$base_0 = package$formats.base || (package$formats.base = {});
  package$base_0.BTypeFormat = BTypeFormat;
  package$base_0.ITypeFormat = ITypeFormat;
  package$base_0.RTypeFormat = RTypeFormat;
  package$base_0.STypeFormat = STypeFormat;
  package$base_0.UTypeFormat = UTypeFormat;
  var package$extensions_0 = package$formats.extensions || (package$formats.extensions = {});
  var package$atomic_0 = package$extensions_0.atomic || (package$extensions_0.atomic = {});
  package$atomic_0.AMORTypeFormat = AMORTypeFormat;
  var package$compressed_0 = package$extensions_0.compressed || (package$extensions_0.compressed = {});
  package$compressed_0.CATypeFormat = CATypeFormat;
  package$compressed_0.CRTypeFormat = CRTypeFormat;
  var package$floating_0 = package$extensions_0.floating || (package$extensions_0.floating = {});
  package$floating_0.FRTypeFormat = FRTypeFormat;
  package$floating_0.FSRS2TypeFormat = FSRS2TypeFormat;
  package$floating_0.R4TypeFormat = R4TypeFormat;
  package$formats.FieldEqual = FieldEqual;
  package$formats.InstructionFormat = InstructionFormat;
  package$formats.OpcodeCFunct3Format = OpcodeCFunct3Format;
  package$formats.OpcodeFormat = OpcodeFormat;
  package$formats.OpcodeFunct3Format = OpcodeFunct3Format;
  var package$impls = package$dsl.impls || (package$dsl.impls = {});
  var package$base_1 = package$impls.base || (package$impls.base = {});
  var package$b32 = package$base_1.b32 || (package$base_1.b32 = {});
  package$b32.BTypeImplementation32 = BTypeImplementation32;
  package$b32.constructBranchImmediate_6cx2xq$ = constructBranchImmediate;
  package$b32.ITypeImplementation32 = ITypeImplementation32;
  package$b32.LoadImplementation32 = LoadImplementation32;
  package$b32.RTypeImplementation32 = RTypeImplementation32;
  package$b32.ShiftImmediateImplementation32 = ShiftImmediateImplementation32;
  package$b32.STypeImplementation32 = STypeImplementation32;
  package$b32.constructStoreImmediate_6cx2xq$ = constructStoreImmediate;
  var package$b64 = package$base_1.b64 || (package$base_1.b64 = {});
  package$b64.BTypeImplementation64 = BTypeImplementation64;
  package$b64.constructBranchImmediate64_6cx2xq$ = constructBranchImmediate64;
  package$b64.ITypeImplementation64 = ITypeImplementation64;
  package$b64.LoadImplementation64 = LoadImplementation64;
  package$b64.RTypeImplementation64 = RTypeImplementation64;
  package$b64.ShiftImmediateImplementation64 = ShiftImmediateImplementation64;
  package$b64.STypeImplementation64 = STypeImplementation64;
  package$b64.constructStoreImmediate64_6cx2xq$ = constructStoreImmediate64;
  var package$extensions_1 = package$impls.extensions || (package$impls.extensions = {});
  var package$atomic_1 = package$extensions_1.atomic || (package$extensions_1.atomic = {});
  var package$b32_0 = package$atomic_1.b32 || (package$atomic_1.b32 = {});
  package$b32_0.AMORTypeImplementation32 = AMORTypeImplementation32;
  var package$compressed_1 = package$extensions_1.compressed || (package$extensions_1.compressed = {});
  var package$b32_1 = package$compressed_1.b32 || (package$compressed_1.b32 = {});
  package$b32_1.CATypeImplementation32 = CATypeImplementation32;
  package$b32_1.CRTypeImplementation32 = CRTypeImplementation32;
  var package$floating_1 = package$extensions_1.floating || (package$extensions_1.floating = {});
  var package$b32_2 = package$floating_1.b32 || (package$floating_1.b32 = {});
  package$b32_2.FFRRTypeImplementation32 = FFRRTypeImplementation32;
  package$b32_2.FITypeImplementation32 = FITypeImplementation32;
  package$b32_2.FR4TypeImplementation32 = FR4TypeImplementation32;
  package$b32_2.FRTypeImplementation32 = FRTypeImplementation32;
  package$b32_2.FSTypeImplementation32 = FSTypeImplementation32;
  package$b32_2.constructStoreImmediate_6cx2xq$ = constructStoreImmediate_0;
  package$b32_2.RtFTypeImplementation32 = RtFTypeImplementation32;
  package$impls.InstructionImplementation = InstructionImplementation;
  Object.defineProperty(package$impls, 'NoImplementation', {
    get: NoImplementation_getInstance
  });
  package$impls.RawImplementation = RawImplementation;
  package$impls.signExtend_6xvm5r$ = signExtend;
  package$impls.setBitslice_r9yya9$ = setBitslice;
  var package$parsers = package$dsl.parsers || (package$dsl.parsers = {});
  var package$base_2 = package$parsers.base || (package$parsers.base = {});
  Object.defineProperty(package$base_2, 'BTypeParser', {
    get: BTypeParser_getInstance
  });
  Object.defineProperty(package$base_2, 'CSRTypeParser', {
    get: CSRTypeParser_getInstance
  });
  Object.defineProperty(package$base_2, 'ITypeParser', {
    get: ITypeParser_getInstance
  });
  Object.defineProperty(package$base_2, 'LoadParser', {
    get: LoadParser_getInstance
  });
  Object.defineProperty(package$base_2, 'RTypeParser', {
    get: RTypeParser_getInstance
  });
  Object.defineProperty(package$base_2, 'ShiftImmediateParser', {
    get: ShiftImmediateParser_getInstance
  });
  Object.defineProperty(package$base_2, 'STypeParser', {
    get: STypeParser_getInstance
  });
  Object.defineProperty(package$base_2, 'UTypeParser', {
    get: UTypeParser_getInstance
  });
  Object.defineProperty(package$parsers, 'DoNothingParser', {
    get: DoNothingParser_getInstance
  });
  var package$extensions_2 = package$parsers.extensions || (package$parsers.extensions = {});
  var package$atomic_2 = package$extensions_2.atomic || (package$extensions_2.atomic = {});
  Object.defineProperty(package$atomic_2, 'AMORTypeParser', {
    get: AMORTypeParser_getInstance
  });
  var package$compressed_2 = package$extensions_2.compressed || (package$extensions_2.compressed = {});
  Object.defineProperty(package$compressed_2, 'CATypeParser', {
    get: CATypeParser_getInstance
  });
  Object.defineProperty(package$compressed_2, 'CRTypeParser', {
    get: CRTypeParser_getInstance
  });
  var package$floating_2 = package$extensions_2.floating || (package$extensions_2.floating = {});
  Object.defineProperty(package$floating_2, 'FFRRTypeParser', {
    get: FFRRTypeParser_getInstance
  });
  Object.defineProperty(package$floating_2, 'FITypeParser', {
    get: FITypeParser_getInstance
  });
  Object.defineProperty(package$floating_2, 'FR4TypeParser', {
    get: FR4TypeParser_getInstance
  });
  Object.defineProperty(package$floating_2, 'FRRTypeParser', {
    get: FRRTypeParser_getInstance
  });
  Object.defineProperty(package$floating_2, 'FRTypeParser', {
    get: FRTypeParser_getInstance
  });
  Object.defineProperty(package$floating_2, 'FSTypeParser', {
    get: FSTypeParser_getInstance
  });
  Object.defineProperty(package$floating_2, 'RFRTypeParser', {
    get: RFRTypeParser_getInstance
  });
  package$parsers.InstructionParser = InstructionParser;
  package$parsers.ParserError = ParserError;
  package$parsers.RawParser = RawParser;
  package$parsers.checkArgsLength_vfws87$ = checkArgsLength_0;
  package$parsers.regNameToNumber_k2p2f6$ = regNameToNumber;
  package$parsers.checkInteger_qxjnze$ = checkInteger;
  package$parsers.checkFloating_qxjnze$ = checkFloating;
  var package$relocators = package$dsl.relocators || (package$dsl.relocators = {});
  Object.defineProperty(package$relocators, 'ImmAbsRelocator', {
    get: function () {
      return ImmAbsRelocator;
    }
  });
  Object.defineProperty(package$relocators, 'ImmAbsStoreRelocator', {
    get: function () {
      return ImmAbsStoreRelocator;
    }
  });
  Object.defineProperty(package$relocators, 'JALRelocator', {
    get: function () {
      return JALRelocator;
    }
  });
  Object.defineProperty(package$relocators, 'NoRelocator64', {
    get: NoRelocator64_getInstance
  });
  Object.defineProperty(package$relocators, 'PCRelHiRelocator', {
    get: function () {
      return PCRelHiRelocator;
    }
  });
  Object.defineProperty(package$relocators, 'PCRelLoRelocator', {
    get: function () {
      return PCRelLoRelocator;
    }
  });
  Object.defineProperty(package$relocators, 'PCRelLoStoreRelocator', {
    get: function () {
      return PCRelLoStoreRelocator;
    }
  });
  package$relocators.Relocator32 = Relocator32;
  package$relocators.Relocator64 = Relocator64;
  package$relocators.Relocator = Relocator;
  var package$types = package$dsl.types || (package$dsl.types = {});
  var package$base_3 = package$types.base || (package$types.base = {});
  package$base_3.BTypeInstruction = BTypeInstruction;
  package$base_3.ITypeInstruction = ITypeInstruction;
  package$base_3.LoadTypeInstruction = LoadTypeInstruction;
  package$base_3.RTypeInstruction = RTypeInstruction;
  package$base_3.ShiftImmediateInstruction = ShiftImmediateInstruction;
  package$base_3.ShiftWImmediateInstruction = ShiftWImmediateInstruction;
  package$base_3.STypeInstruction = STypeInstruction;
  package$base_3.UTypeInstruction = UTypeInstruction;
  var package$extensions_3 = package$types.extensions || (package$types.extensions = {});
  var package$atomic_3 = package$extensions_3.atomic || (package$extensions_3.atomic = {});
  package$atomic_3.AMORTypeInstruction = AMORTypeInstruction;
  var package$compressed_3 = package$extensions_3.compressed || (package$extensions_3.compressed = {});
  package$compressed_3.CATypeInstruction = CATypeInstruction;
  package$compressed_3.CRTypeInstruction = CRTypeInstruction;
  var package$floating_3 = package$extensions_3.floating || (package$extensions_3.floating = {});
  package$floating_3.F3RTypeInstruction = F3RTypeInstruction;
  package$floating_3.FclassRTypeInstruction = FclassRTypeInstruction;
  package$floating_3.FFRRTypeInstruction = FFRRTypeInstruction;
  package$floating_3.FITypeInstruction = FITypeInstruction;
  package$floating_3.FR4TypeInstruction = FR4TypeInstruction;
  package$floating_3.FRRTypeInstruction = FRRTypeInstruction;
  package$floating_3.FRTypeInstruction = FRTypeInstruction;
  package$floating_3.FSTypeInstruction = FSTypeInstruction;
  package$floating_3.FtRTypeInstruction = FtRTypeInstruction;
  package$floating_3.RtFTypeInstruction = RtFTypeInstruction;
  Object.defineProperty(Instruction, 'Companion', {
    get: Instruction$Companion_getInstance
  });
  package$types.Instruction = Instruction;
  Object.defineProperty(package$dsl, 'getImmWarning', {
    get: function () {
      return getImmWarning;
    },
    set: function (value) {
      getImmWarning = value;
    }
  });
  package$dsl.getImmediate_druo6x$ = getImmediate;
  package$dsl.compareUnsignedShort_88h0c1$ = compareUnsignedShort;
  package$dsl.compareUnsigned_6xvm5r$ = compareUnsigned;
  package$dsl.compareUnsignedLong_cfj5zr$ = compareUnsignedLong;
  package$dsl.compareUnsignedQuadWord_iokc6n$ = compareUnsignedQuadWord;
  var package$floating_4 = package$insts.floating || (package$insts.floating = {});
  package$floating_4.Decimal = Decimal;
  var package$double = package$floating_4.double || (package$floating_4.double = {});
  var package$i = package$double.i || (package$double.i = {});
  Object.defineProperty(package$i, 'fld', {
    get: function () {
      return fld;
    }
  });
  var package$r = package$double.r || (package$double.r = {});
  Object.defineProperty(package$r, 'faddd', {
    get: function () {
      return faddd;
    }
  });
  Object.defineProperty(package$r, 'fclassd', {
    get: function () {
      return fclassd;
    }
  });
  Object.defineProperty(package$r, 'fcvtdw', {
    get: function () {
      return fcvtdw;
    }
  });
  Object.defineProperty(package$r, 'fcvtdwu', {
    get: function () {
      return fcvtdwu;
    }
  });
  Object.defineProperty(package$r, 'fcvtwd', {
    get: function () {
      return fcvtwd;
    }
  });
  Object.defineProperty(package$r, 'fcvtwud', {
    get: function () {
      return fcvtwud;
    }
  });
  Object.defineProperty(package$r, 'feqd', {
    get: function () {
      return feqd;
    }
  });
  Object.defineProperty(package$r, 'fled', {
    get: function () {
      return fled;
    }
  });
  Object.defineProperty(package$r, 'fltd', {
    get: function () {
      return fltd;
    }
  });
  Object.defineProperty(package$r, 'fmaddd', {
    get: function () {
      return fmaddd;
    }
  });
  Object.defineProperty(package$r, 'fmaxd', {
    get: function () {
      return fmaxd;
    }
  });
  Object.defineProperty(package$r, 'fmind', {
    get: function () {
      return fmind;
    }
  });
  Object.defineProperty(package$r, 'fmsubd', {
    get: function () {
      return fmsubd;
    }
  });
  Object.defineProperty(package$r, 'fmuld', {
    get: function () {
      return fmuld;
    }
  });
  Object.defineProperty(package$r, 'fmvdx', {
    get: function () {
      return fmvdx;
    }
  });
  Object.defineProperty(package$r, 'fmvxd', {
    get: function () {
      return fmvxd;
    }
  });
  Object.defineProperty(package$r, 'fnmaddd', {
    get: function () {
      return fnmaddd;
    }
  });
  Object.defineProperty(package$r, 'fnmsubd', {
    get: function () {
      return fnmsubd;
    }
  });
  Object.defineProperty(package$r, 'fsgnjd', {
    get: function () {
      return fsgnjd;
    }
  });
  Object.defineProperty(package$r, 'fsgnjnd', {
    get: function () {
      return fsgnjnd;
    }
  });
  Object.defineProperty(package$r, 'fsgnjxd', {
    get: function () {
      return fsgnjxd;
    }
  });
  Object.defineProperty(package$r, 'fsqrtd', {
    get: function () {
      return fsqrtd;
    }
  });
  Object.defineProperty(package$r, 'fsubd', {
    get: function () {
      return fsubd;
    }
  });
  var package$s = package$double.s || (package$double.s = {});
  Object.defineProperty(package$s, 'fsd', {
    get: function () {
      return fsd;
    }
  });
  Object.defineProperty(package$floating_4, 'fcvtds', {
    get: function () {
      return fcvtds;
    }
  });
  Object.defineProperty(package$floating_4, 'fcvtsd', {
    get: function () {
      return fcvtsd;
    }
  });
  var package$single = package$floating_4.single || (package$floating_4.single = {});
  var package$i_0 = package$single.i || (package$single.i = {});
  Object.defineProperty(package$i_0, 'flw', {
    get: function () {
      return flw;
    }
  });
  var package$r_0 = package$single.r || (package$single.r = {});
  Object.defineProperty(package$r_0, 'fadds', {
    get: function () {
      return fadds;
    }
  });
  Object.defineProperty(package$r_0, 'fclasss', {
    get: function () {
      return fclasss;
    }
  });
  Object.defineProperty(package$r_0, 'fcvtsw', {
    get: function () {
      return fcvtsw;
    }
  });
  Object.defineProperty(package$r_0, 'fcvtswu', {
    get: function () {
      return fcvtswu;
    }
  });
  Object.defineProperty(package$r_0, 'fcvtws', {
    get: function () {
      return fcvtws;
    }
  });
  Object.defineProperty(package$r_0, 'fcvtwus', {
    get: function () {
      return fcvtwus;
    }
  });
  Object.defineProperty(package$r_0, 'fdivs', {
    get: function () {
      return fdivs;
    }
  });
  Object.defineProperty(package$r_0, 'feqs', {
    get: function () {
      return feqs;
    }
  });
  Object.defineProperty(package$r_0, 'fles', {
    get: function () {
      return fles;
    }
  });
  Object.defineProperty(package$r_0, 'flts', {
    get: function () {
      return flts;
    }
  });
  Object.defineProperty(package$r_0, 'fmadds', {
    get: function () {
      return fmadds;
    }
  });
  Object.defineProperty(package$r_0, 'fmaxs', {
    get: function () {
      return fmaxs;
    }
  });
  Object.defineProperty(package$r_0, 'fmins', {
    get: function () {
      return fmins;
    }
  });
  Object.defineProperty(package$r_0, 'fmsubs', {
    get: function () {
      return fmsubs;
    }
  });
  Object.defineProperty(package$r_0, 'fmuls', {
    get: function () {
      return fmuls;
    }
  });
  Object.defineProperty(package$r_0, 'fmvsx', {
    get: function () {
      return fmvsx;
    }
  });
  Object.defineProperty(package$r_0, 'fmvxs', {
    get: function () {
      return fmvxs;
    }
  });
  Object.defineProperty(package$r_0, 'fnmadds', {
    get: function () {
      return fnmadds;
    }
  });
  Object.defineProperty(package$r_0, 'fnmsubs', {
    get: function () {
      return fnmsubs;
    }
  });
  Object.defineProperty(package$r_0, 'fsgnjs', {
    get: function () {
      return fsgnjs;
    }
  });
  Object.defineProperty(package$r_0, 'fsgnjns', {
    get: function () {
      return fsgnjns;
    }
  });
  Object.defineProperty(package$r_0, 'fsgnjxs', {
    get: function () {
      return fsgnjxs;
    }
  });
  Object.defineProperty(package$r_0, 'fsqrts', {
    get: function () {
      return fsqrts;
    }
  });
  Object.defineProperty(package$r_0, 'fsubs', {
    get: function () {
      return fsubs;
    }
  });
  var package$s_0 = package$single.s || (package$single.s = {});
  Object.defineProperty(package$s_0, 'fsw', {
    get: function () {
      return fsw;
    }
  });
  package$insts.InstructionNotFoundError_init_pdl1vj$ = InstructionNotFoundError_init;
  package$insts.InstructionNotFoundError = InstructionNotFoundError;
  package$insts.InstructionNotSupportedError_init_pdl1vj$ = InstructionNotSupportedError_init;
  package$insts.InstructionNotSupportedError = InstructionNotSupportedError;
  package$insts.InstructionReservedError_init_pdl1vj$ = InstructionReservedError_init;
  package$insts.InstructionReservedError = InstructionReservedError;
  var package$integer = package$insts.integer || (package$insts.integer = {});
  var package$base_4 = package$integer.base || (package$integer.base = {});
  var package$i_1 = package$base_4.i || (package$base_4.i = {});
  Object.defineProperty(package$i_1, 'addi', {
    get: function () {
      return addi;
    }
  });
  Object.defineProperty(package$i_1, 'addiw', {
    get: function () {
      return addiw;
    }
  });
  Object.defineProperty(package$i_1, 'andi', {
    get: function () {
      return andi;
    }
  });
  Object.defineProperty(package$i_1, 'csrrc', {
    get: function () {
      return csrrc;
    }
  });
  Object.defineProperty(package$i_1, 'csrrci', {
    get: function () {
      return csrrci;
    }
  });
  Object.defineProperty(package$i_1, 'csrrs', {
    get: function () {
      return csrrs;
    }
  });
  Object.defineProperty(package$i_1, 'csrrsi', {
    get: function () {
      return csrrsi;
    }
  });
  Object.defineProperty(package$i_1, 'csrrw', {
    get: function () {
      return csrrw;
    }
  });
  Object.defineProperty(package$i_1, 'csrrwi', {
    get: function () {
      return csrrwi;
    }
  });
  Object.defineProperty(package$i_1, 'ebreak', {
    get: function () {
      return ebreak;
    }
  });
  var package$ecall = package$i_1.ecall || (package$i_1.ecall = {});
  package$ecall.clib_pivkot$ = clib;
  package$ecall.malloc_pivkot$ = malloc;
  package$ecall.calloc_pivkot$ = calloc;
  package$ecall.realloc_pivkot$ = realloc;
  package$ecall.free_pivkot$ = free;
  package$ecall.mallocActiveNumBlocks_pivkot$ = mallocActiveNumBlocks;
  Object.defineProperty(package$ecall, 'ecall', {
    get: function () {
      return ecall;
    }
  });
  Object.defineProperty(Syscall, 'PRINT_INT', {
    get: Syscall$PRINT_INT_getInstance
  });
  Object.defineProperty(Syscall, 'PRINT_STR', {
    get: Syscall$PRINT_STR_getInstance
  });
  Object.defineProperty(Syscall, 'ATOI', {
    get: Syscall$ATOI_getInstance
  });
  Object.defineProperty(Syscall, 'SBRK', {
    get: Syscall$SBRK_getInstance
  });
  Object.defineProperty(Syscall, 'EXIT', {
    get: Syscall$EXIT_getInstance
  });
  Object.defineProperty(Syscall, 'PRINT_CHAR', {
    get: Syscall$PRINT_CHAR_getInstance
  });
  Object.defineProperty(Syscall, 'OPEN', {
    get: Syscall$OPEN_getInstance
  });
  Object.defineProperty(Syscall, 'READ', {
    get: Syscall$READ_getInstance
  });
  Object.defineProperty(Syscall, 'WRITE', {
    get: Syscall$WRITE_getInstance
  });
  Object.defineProperty(Syscall, 'CLOSE', {
    get: Syscall$CLOSE_getInstance
  });
  Object.defineProperty(Syscall, 'EXIT_WITH_CODE', {
    get: Syscall$EXIT_WITH_CODE_getInstance
  });
  Object.defineProperty(Syscall, 'FLUSH', {
    get: Syscall$FLUSH_getInstance
  });
  Object.defineProperty(Syscall, 'FEOF', {
    get: Syscall$FEOF_getInstance
  });
  Object.defineProperty(Syscall, 'FERROR', {
    get: Syscall$FERROR_getInstance
  });
  Object.defineProperty(Syscall, 'PRINT_HEX', {
    get: Syscall$PRINT_HEX_getInstance
  });
  package$ecall.Syscall = Syscall;
  Object.defineProperty(MallocNode, 'Companion', {
    get: MallocNode$Companion_getInstance
  });
  package$ecall.MallocNode = MallocNode;
  Object.defineProperty(Alloc, 'Companion', {
    get: Alloc$Companion_getInstance
  });
  package$ecall.Alloc = Alloc;
  Object.defineProperty(package$i_1, 'fencei', {
    get: function () {
      return fencei;
    }
  });
  Object.defineProperty(package$i_1, 'fence', {
    get: function () {
      return fence;
    }
  });
  Object.defineProperty(package$i_1, 'jalr', {
    get: function () {
      return jalr;
    }
  });
  Object.defineProperty(package$i_1, 'lb', {
    get: function () {
      return lb;
    }
  });
  Object.defineProperty(package$i_1, 'lbu', {
    get: function () {
      return lbu;
    }
  });
  Object.defineProperty(package$i_1, 'ld', {
    get: function () {
      return ld;
    }
  });
  Object.defineProperty(package$i_1, 'lh', {
    get: function () {
      return lh;
    }
  });
  Object.defineProperty(package$i_1, 'lhu', {
    get: function () {
      return lhu;
    }
  });
  Object.defineProperty(package$i_1, 'lw', {
    get: function () {
      return lw;
    }
  });
  Object.defineProperty(package$i_1, 'lwu', {
    get: function () {
      return lwu;
    }
  });
  Object.defineProperty(package$i_1, 'ori', {
    get: function () {
      return ori;
    }
  });
  Object.defineProperty(package$i_1, 'slli', {
    get: function () {
      return slli;
    }
  });
  Object.defineProperty(package$i_1, 'slliw', {
    get: function () {
      return slliw;
    }
  });
  Object.defineProperty(package$i_1, 'slti', {
    get: function () {
      return slti;
    }
  });
  Object.defineProperty(package$i_1, 'sltiu', {
    get: function () {
      return sltiu;
    }
  });
  Object.defineProperty(package$i_1, 'srai', {
    get: function () {
      return srai;
    }
  });
  Object.defineProperty(package$i_1, 'sraiw', {
    get: function () {
      return sraiw;
    }
  });
  Object.defineProperty(package$i_1, 'srli', {
    get: function () {
      return srli;
    }
  });
  Object.defineProperty(package$i_1, 'srliw', {
    get: function () {
      return srliw;
    }
  });
  Object.defineProperty(package$i_1, 'xori', {
    get: function () {
      return xori;
    }
  });
  var package$r_1 = package$base_4.r || (package$base_4.r = {});
  Object.defineProperty(package$r_1, 'add', {
    get: function () {
      return add_0;
    }
  });
  Object.defineProperty(package$r_1, 'addw', {
    get: function () {
      return addw;
    }
  });
  Object.defineProperty(package$r_1, 'and', {
    get: function () {
      return and_0;
    }
  });
  Object.defineProperty(package$r_1, 'or', {
    get: function () {
      return or_0;
    }
  });
  Object.defineProperty(package$r_1, 'sll', {
    get: function () {
      return sll;
    }
  });
  Object.defineProperty(package$r_1, 'sllw', {
    get: function () {
      return sllw;
    }
  });
  Object.defineProperty(package$r_1, 'slt', {
    get: function () {
      return slt;
    }
  });
  Object.defineProperty(package$r_1, 'sltu', {
    get: function () {
      return sltu;
    }
  });
  Object.defineProperty(package$r_1, 'sra', {
    get: function () {
      return sra;
    }
  });
  Object.defineProperty(package$r_1, 'sraw', {
    get: function () {
      return sraw;
    }
  });
  Object.defineProperty(package$r_1, 'srl', {
    get: function () {
      return srl;
    }
  });
  Object.defineProperty(package$r_1, 'srlw', {
    get: function () {
      return srlw;
    }
  });
  Object.defineProperty(package$r_1, 'sub', {
    get: function () {
      return sub;
    }
  });
  Object.defineProperty(package$r_1, 'subw', {
    get: function () {
      return subw;
    }
  });
  Object.defineProperty(package$r_1, 'xor', {
    get: function () {
      return xor;
    }
  });
  var package$s_1 = package$base_4.s || (package$base_4.s = {});
  Object.defineProperty(package$s_1, 'sb', {
    get: function () {
      return sb;
    }
  });
  Object.defineProperty(package$s_1, 'sd', {
    get: function () {
      return sd;
    }
  });
  Object.defineProperty(package$s_1, 'sh', {
    get: function () {
      return sh;
    }
  });
  Object.defineProperty(package$s_1, 'sw', {
    get: function () {
      return sw;
    }
  });
  var package$sb = package$base_4.sb || (package$base_4.sb = {});
  Object.defineProperty(package$sb, 'beq', {
    get: function () {
      return beq;
    }
  });
  Object.defineProperty(package$sb, 'bge', {
    get: function () {
      return bge;
    }
  });
  Object.defineProperty(package$sb, 'bgeu', {
    get: function () {
      return bgeu;
    }
  });
  Object.defineProperty(package$sb, 'blt', {
    get: function () {
      return blt;
    }
  });
  Object.defineProperty(package$sb, 'bltu', {
    get: function () {
      return bltu;
    }
  });
  Object.defineProperty(package$sb, 'bne', {
    get: function () {
      return bne;
    }
  });
  var package$u = package$base_4.u || (package$base_4.u = {});
  Object.defineProperty(package$u, 'auipc', {
    get: function () {
      return auipc;
    }
  });
  Object.defineProperty(package$u, 'lui', {
    get: function () {
      return lui;
    }
  });
  var package$uj = package$base_4.uj || (package$base_4.uj = {});
  Object.defineProperty(package$uj, 'jal', {
    get: function () {
      return jal;
    }
  });
  var package$extensions_4 = package$integer.extensions || (package$integer.extensions = {});
  var package$atomic_4 = package$extensions_4.atomic || (package$extensions_4.atomic = {});
  var package$r_2 = package$atomic_4.r || (package$atomic_4.r = {});
  Object.defineProperty(package$r_2, 'amoaddweval32', {
    get: function () {
      return amoaddweval32;
    }
  });
  Object.defineProperty(package$r_2, 'amoaddw', {
    get: function () {
      return amoaddw;
    }
  });
  Object.defineProperty(package$r_2, 'amoaddwaq', {
    get: function () {
      return amoaddwaq;
    }
  });
  Object.defineProperty(package$r_2, 'amoaddwrl', {
    get: function () {
      return amoaddwrl;
    }
  });
  Object.defineProperty(package$r_2, 'amoaddwaqrl', {
    get: function () {
      return amoaddwaqrl;
    }
  });
  Object.defineProperty(package$r_2, 'amoaddwrlaq', {
    get: function () {
      return amoaddwrlaq;
    }
  });
  Object.defineProperty(package$r_2, 'amoandweval32', {
    get: function () {
      return amoandweval32;
    }
  });
  Object.defineProperty(package$r_2, 'amoandw', {
    get: function () {
      return amoandw;
    }
  });
  Object.defineProperty(package$r_2, 'amoandwaq', {
    get: function () {
      return amoandwaq;
    }
  });
  Object.defineProperty(package$r_2, 'amoandwrl', {
    get: function () {
      return amoandwrl;
    }
  });
  Object.defineProperty(package$r_2, 'amoandwaqrl', {
    get: function () {
      return amoandwaqrl;
    }
  });
  Object.defineProperty(package$r_2, 'amoandwrlaq', {
    get: function () {
      return amoandwrlaq;
    }
  });
  Object.defineProperty(package$r_2, 'amomaxweval32', {
    get: function () {
      return amomaxweval32;
    }
  });
  Object.defineProperty(package$r_2, 'amomaxw', {
    get: function () {
      return amomaxw;
    }
  });
  Object.defineProperty(package$r_2, 'amomaxwaq', {
    get: function () {
      return amomaxwaq;
    }
  });
  Object.defineProperty(package$r_2, 'amomaxwrl', {
    get: function () {
      return amomaxwrl;
    }
  });
  Object.defineProperty(package$r_2, 'amomaxwaqrl', {
    get: function () {
      return amomaxwaqrl;
    }
  });
  Object.defineProperty(package$r_2, 'amomaxwrlaq', {
    get: function () {
      return amomaxwrlaq;
    }
  });
  Object.defineProperty(package$r_2, 'amomaxuweval32', {
    get: function () {
      return amomaxuweval32;
    }
  });
  Object.defineProperty(package$r_2, 'amomaxuw', {
    get: function () {
      return amomaxuw;
    }
  });
  Object.defineProperty(package$r_2, 'amomaxuwaq', {
    get: function () {
      return amomaxuwaq;
    }
  });
  Object.defineProperty(package$r_2, 'amomaxuwrl', {
    get: function () {
      return amomaxuwrl;
    }
  });
  Object.defineProperty(package$r_2, 'amomaxuwaqrl', {
    get: function () {
      return amomaxuwaqrl;
    }
  });
  Object.defineProperty(package$r_2, 'amomaxuwrlaq', {
    get: function () {
      return amomaxuwrlaq;
    }
  });
  Object.defineProperty(package$r_2, 'amominweval32', {
    get: function () {
      return amominweval32;
    }
  });
  Object.defineProperty(package$r_2, 'amominw', {
    get: function () {
      return amominw;
    }
  });
  Object.defineProperty(package$r_2, 'amominwaq', {
    get: function () {
      return amominwaq;
    }
  });
  Object.defineProperty(package$r_2, 'amominwrl', {
    get: function () {
      return amominwrl;
    }
  });
  Object.defineProperty(package$r_2, 'amominwaqrl', {
    get: function () {
      return amominwaqrl;
    }
  });
  Object.defineProperty(package$r_2, 'amominwrlaq', {
    get: function () {
      return amominwrlaq;
    }
  });
  Object.defineProperty(package$r_2, 'amominuweval32', {
    get: function () {
      return amominuweval32;
    }
  });
  Object.defineProperty(package$r_2, 'amominuw', {
    get: function () {
      return amominuw;
    }
  });
  Object.defineProperty(package$r_2, 'amominuwaq', {
    get: function () {
      return amominuwaq;
    }
  });
  Object.defineProperty(package$r_2, 'amominuwrl', {
    get: function () {
      return amominuwrl;
    }
  });
  Object.defineProperty(package$r_2, 'amominuwaqrl', {
    get: function () {
      return amominuwaqrl;
    }
  });
  Object.defineProperty(package$r_2, 'amominuwrlaq', {
    get: function () {
      return amominuwrlaq;
    }
  });
  Object.defineProperty(package$r_2, 'amoorweval32', {
    get: function () {
      return amoorweval32;
    }
  });
  Object.defineProperty(package$r_2, 'amoorw', {
    get: function () {
      return amoorw;
    }
  });
  Object.defineProperty(package$r_2, 'amoorwaq', {
    get: function () {
      return amoorwaq;
    }
  });
  Object.defineProperty(package$r_2, 'amoorwrl', {
    get: function () {
      return amoorwrl;
    }
  });
  Object.defineProperty(package$r_2, 'amoorwaqrl', {
    get: function () {
      return amoorwaqrl;
    }
  });
  Object.defineProperty(package$r_2, 'amoorwrlaq', {
    get: function () {
      return amoorwrlaq;
    }
  });
  Object.defineProperty(package$r_2, 'amoswapweval32', {
    get: function () {
      return amoswapweval32;
    }
  });
  Object.defineProperty(package$r_2, 'amoswapw', {
    get: function () {
      return amoswapw;
    }
  });
  Object.defineProperty(package$r_2, 'amoswapwaq', {
    get: function () {
      return amoswapwaq;
    }
  });
  Object.defineProperty(package$r_2, 'amoswapwrl', {
    get: function () {
      return amoswapwrl;
    }
  });
  Object.defineProperty(package$r_2, 'amoswapwaqrl', {
    get: function () {
      return amoswapwaqrl;
    }
  });
  Object.defineProperty(package$r_2, 'amoswapwrlaq', {
    get: function () {
      return amoswapwrlaq;
    }
  });
  Object.defineProperty(package$r_2, 'amoxorweval32', {
    get: function () {
      return amoxorweval32;
    }
  });
  Object.defineProperty(package$r_2, 'amoxorw', {
    get: function () {
      return amoxorw;
    }
  });
  Object.defineProperty(package$r_2, 'amoxorwaq', {
    get: function () {
      return amoxorwaq;
    }
  });
  Object.defineProperty(package$r_2, 'amoxorwrl', {
    get: function () {
      return amoxorwrl;
    }
  });
  Object.defineProperty(package$r_2, 'amoxorwaqrl', {
    get: function () {
      return amoxorwaqrl;
    }
  });
  Object.defineProperty(package$r_2, 'amoxorwrlaq', {
    get: function () {
      return amoxorwrlaq;
    }
  });
  Object.defineProperty(package$r_2, 'lrweval32', {
    get: function () {
      return lrweval32;
    }
  });
  Object.defineProperty(package$r_2, 'lrw', {
    get: function () {
      return lrw;
    }
  });
  Object.defineProperty(package$r_2, 'lrwaq', {
    get: function () {
      return lrwaq;
    }
  });
  Object.defineProperty(package$r_2, 'lrwrl', {
    get: function () {
      return lrwrl;
    }
  });
  Object.defineProperty(package$r_2, 'lrwaqrl', {
    get: function () {
      return lrwaqrl;
    }
  });
  Object.defineProperty(package$r_2, 'lrwrlaq', {
    get: function () {
      return lrwrlaq;
    }
  });
  Object.defineProperty(package$r_2, 'scweval32', {
    get: function () {
      return scweval32;
    }
  });
  Object.defineProperty(package$r_2, 'scw', {
    get: function () {
      return scw;
    }
  });
  Object.defineProperty(package$r_2, 'scwaq', {
    get: function () {
      return scwaq;
    }
  });
  Object.defineProperty(package$r_2, 'scwrl', {
    get: function () {
      return scwrl;
    }
  });
  Object.defineProperty(package$r_2, 'scwaqrl', {
    get: function () {
      return scwaqrl;
    }
  });
  Object.defineProperty(package$r_2, 'scwrlaq', {
    get: function () {
      return scwrlaq;
    }
  });
  var package$compressed_4 = package$extensions_4.compressed || (package$extensions_4.compressed = {});
  var package$ca = package$compressed_4.ca || (package$compressed_4.ca = {});
  Object.defineProperty(package$ca, 'caddw', {
    get: function () {
      return caddw;
    }
  });
  Object.defineProperty(package$ca, 'cand', {
    get: function () {
      return cand;
    }
  });
  Object.defineProperty(package$ca, 'cor', {
    get: function () {
      return cor;
    }
  });
  Object.defineProperty(package$ca, 'csub', {
    get: function () {
      return csub;
    }
  });
  Object.defineProperty(package$ca, 'csubw', {
    get: function () {
      return csubw;
    }
  });
  Object.defineProperty(package$ca, 'cxor', {
    get: function () {
      return cxor;
    }
  });
  var package$ci = package$compressed_4.ci || (package$compressed_4.ci = {});
  Object.defineProperty(package$ci, 'caddi', {
    get: function () {
      return caddi;
    }
  });
  Object.defineProperty(package$ci, 'clwsp', {
    get: function () {
      return clwsp;
    }
  });
  Object.defineProperty(package$ci, 'cnop', {
    get: function () {
      return cnop;
    }
  });
  var package$cr = package$compressed_4.cr || (package$compressed_4.cr = {});
  Object.defineProperty(package$cr, 'cadd', {
    get: function () {
      return cadd;
    }
  });
  Object.defineProperty(package$cr, 'cebreak', {
    get: function () {
      return cebreak;
    }
  });
  Object.defineProperty(package$cr, 'cmv', {
    get: function () {
      return cmv;
    }
  });
  var package$multiply = package$extensions_4.multiply || (package$extensions_4.multiply = {});
  var package$r_3 = package$multiply.r || (package$multiply.r = {});
  Object.defineProperty(package$r_3, 'div', {
    get: function () {
      return div_0;
    }
  });
  Object.defineProperty(package$r_3, 'divu', {
    get: function () {
      return divu;
    }
  });
  Object.defineProperty(package$r_3, 'divw', {
    get: function () {
      return divw;
    }
  });
  Object.defineProperty(package$r_3, 'mul', {
    get: function () {
      return mul;
    }
  });
  Object.defineProperty(package$r_3, 'mulh', {
    get: function () {
      return mulh;
    }
  });
  Object.defineProperty(package$r_3, 'mulhsu', {
    get: function () {
      return mulhsu;
    }
  });
  Object.defineProperty(package$r_3, 'mulhu', {
    get: function () {
      return mulhu;
    }
  });
  Object.defineProperty(package$r_3, 'mulw', {
    get: function () {
      return mulw;
    }
  });
  Object.defineProperty(package$r_3, 'rem', {
    get: function () {
      return rem_0;
    }
  });
  Object.defineProperty(package$r_3, 'remu', {
    get: function () {
      return remu;
    }
  });
  Object.defineProperty(package$r_3, 'remuw', {
    get: function () {
      return remuw;
    }
  });
  Object.defineProperty(package$r_3, 'remw', {
    get: function () {
      return remw;
    }
  });
  package$riscv.MachineCode = MachineCode;
  Object.defineProperty(package$riscv, 'MemorySegments', {
    get: MemorySegments_getInstance
  });
  Object.defineProperty(MemSize, 'QUAD', {
    get: MemSize$QUAD_getInstance
  });
  Object.defineProperty(MemSize, 'LONG', {
    get: MemSize$LONG_getInstance
  });
  Object.defineProperty(MemSize, 'WORD', {
    get: MemSize$WORD_getInstance
  });
  Object.defineProperty(MemSize, 'HALF', {
    get: MemSize$HALF_getInstance
  });
  Object.defineProperty(MemSize, 'BYTE', {
    get: MemSize$BYTE_getInstance
  });
  package$riscv.MemSize = MemSize;
  package$riscv.Import = Import;
  Object.defineProperty(package$riscv, 'venusInternalLabels', {
    get: function () {
      return venusInternalLabels;
    }
  });
  package$riscv.Program = Program;
  Object.defineProperty(package$riscv, 'Registers', {
    get: Registers_getInstance
  });
  Object.defineProperty(package$riscv, 'Settings', {
    get: Settings_getInstance
  });
  package$riscv.userStringToInt_61zpoe$ = userStringToInt;
  package$riscv.userStringToLong_61zpoe$ = userStringToLong;
  package$riscv.userStringToFloat_61zpoe$ = userStringToFloat;
  package$riscv.userStringToDouble_61zpoe$ = userStringToDouble;
  package$riscv.getBit_ychryw$ = getBit;
  package$riscv.unescapeString_61zpoe$ = unescapeString;
  package$riscv.isNumeral_61zpoe$ = isNumeral;
  var package$simulator_0 = package$venusbackend_0.simulator || (package$venusbackend_0.simulator = {});
  package$simulator_0.AlignmentError_init_pdl1vj$ = AlignmentError_init;
  package$simulator_0.AlignmentError = AlignmentError;
  var package$cache = package$simulator_0.cache || (package$simulator_0.cache = {});
  package$cache.Block = Block;
  package$cache.Cache = Cache;
  package$cache.CacheError_init_pdl1vj$ = CacheError_init;
  package$cache.CacheError = CacheError;
  package$cache.CacheHandler = CacheHandler;
  Object.defineProperty(PlacementPolicy, 'DIRECT_MAPPING', {
    get: PlacementPolicy$DIRECT_MAPPING_getInstance
  });
  Object.defineProperty(PlacementPolicy, 'FULLY_ASSOCIATIVE', {
    get: PlacementPolicy$FULLY_ASSOCIATIVE_getInstance
  });
  Object.defineProperty(PlacementPolicy, 'NWAY_SET_ASSOCIATIVE', {
    get: PlacementPolicy$NWAY_SET_ASSOCIATIVE_getInstance
  });
  package$cache.PlacementPolicy = PlacementPolicy;
  Object.defineProperty(BlockReplacementPolicy, 'LRU', {
    get: BlockReplacementPolicy$LRU_getInstance
  });
  Object.defineProperty(BlockReplacementPolicy, 'RANDOM', {
    get: BlockReplacementPolicy$RANDOM_getInstance
  });
  package$cache.BlockReplacementPolicy = BlockReplacementPolicy;
  Object.defineProperty(BlockState, 'HIT', {
    get: BlockState$HIT_getInstance
  });
  Object.defineProperty(BlockState, 'MISS', {
    get: BlockState$MISS_getInstance
  });
  Object.defineProperty(BlockState, 'EMPTY', {
    get: BlockState$EMPTY_getInstance
  });
  package$cache.BlockState = BlockState;
  package$cache.CacheState = CacheState;
  Object.defineProperty(RW, 'READ', {
    get: RW$READ_getInstance
  });
  Object.defineProperty(RW, 'WRITE', {
    get: RW$WRITE_getInstance
  });
  package$cache.RW = RW;
  package$cache.ChangedBlockState = ChangedBlockState;
  package$cache.Set = Set;
  package$simulator_0.Diff = Diff;
  var package$diffs = package$simulator_0.diffs || (package$simulator_0.diffs = {});
  package$diffs.CacheDiff = CacheDiff;
  package$diffs.FRegisterDiff = FRegisterDiff;
  package$diffs.HeapSpaceDiff = HeapSpaceDiff;
  package$diffs.InstructionDiff = InstructionDiff;
  package$diffs.MemoryDiff = MemoryDiff;
  package$diffs.PCDiff = PCDiff;
  package$diffs.RegisterDiff = RegisterDiff;
  package$simulator_0.ExceededAllowedCyclesError_init_3lwxi8$ = ExceededAllowedCyclesError_init;
  package$simulator_0.ExceededAllowedCyclesError = ExceededAllowedCyclesError;
  package$simulator_0.FileDescriptor = FileDescriptor;
  package$simulator_0.FileMetaData = FileMetaData;
  Object.defineProperty(FilesHandler, 'Companion', {
    get: FilesHandler$Companion_getInstance
  });
  package$simulator_0.FilesHandler = FilesHandler;
  package$simulator_0.History = History;
  package$simulator_0.Memory = Memory;
  package$simulator_0.Simulator = Simulator_0;
  package$simulator_0.SimulatorError_init_3lwxi8$ = SimulatorError_init;
  package$simulator_0.SimulatorError = SimulatorError;
  package$simulator_0.SimulatorSettings = SimulatorSettings;
  package$simulator_0.SimulatorState = SimulatorState;
  package$simulator_0.SimulatorState128 = SimulatorState128;
  package$simulator_0.SimulatorState16 = SimulatorState16;
  package$simulator_0.SimulatorState32 = SimulatorState32;
  package$simulator_0.SimulatorState64 = SimulatorState64;
  package$simulator_0.StoreError_init_pdl1vj$ = StoreError_init;
  package$simulator_0.StoreError = StoreError;
  package$simulator_0.Trace = Trace;
  package$simulator_0.numToBase_up82xn$ = numToBase;
  package$simulator_0.getBaseLog_lu1900$ = getBaseLog;
  package$simulator_0.decimalToHexString_za3lpa$ = decimalToHexString;
  Object.defineProperty(Tracer, 'Companion', {
    get: Tracer$Companion_getInstance
  });
  package$simulator_0.Tracer = Tracer;
  package$simulator_0.TraceEncapsulation = TraceEncapsulation;
  package$venusbackend_0.toHex_ydzd23$ = toHex;
  package$venusbackend_0.toHex_3p81yu$ = toHex_0;
  VFSFolder.prototype.getPath = VFSObject.prototype.getPath;
  VFSFolder.prototype.addChild_hijjve$ = VFSObject.prototype.addChild_hijjve$;
  VFSFolder.prototype.removeChild_61zpoe$ = VFSObject.prototype.removeChild_61zpoe$;
  VFSDummy.prototype.getPath = VFSObject.prototype.getPath;
  VFSDummy.prototype.addChild_hijjve$ = VFSObject.prototype.addChild_hijjve$;
  VFSDummy.prototype.removeChild_61zpoe$ = VFSObject.prototype.removeChild_61zpoe$;
  VFSDummy.prototype.stringify = VFSObject.prototype.stringify;
  VFSFile.prototype.getPath = VFSObject.prototype.getPath;
  VFSFile.prototype.addChild_hijjve$ = VFSObject.prototype.addChild_hijjve$;
  VFSFile.prototype.removeChild_61zpoe$ = VFSObject.prototype.removeChild_61zpoe$;
  VFSLinkedProgram.prototype.getPath = VFSObject.prototype.getPath;
  VFSLinkedProgram.prototype.addChild_hijjve$ = VFSObject.prototype.addChild_hijjve$;
  VFSLinkedProgram.prototype.removeChild_61zpoe$ = VFSObject.prototype.removeChild_61zpoe$;
  VFSProgram.prototype.getPath = VFSObject.prototype.getPath;
  VFSProgram.prototype.addChild_hijjve$ = VFSObject.prototype.addChild_hijjve$;
  VFSProgram.prototype.removeChild_61zpoe$ = VFSObject.prototype.removeChild_61zpoe$;
  FlagActionBase.prototype.invoke_drwoxr$ = FlagAction.prototype.invoke_drwoxr$;
  FlagValueActionBase.prototype.invoke_drwoxr$ = ArgumentAction.prototype.invoke_drwoxr$;
  SimpleHelpPrinter.prototype.begin = HelpPrinter.prototype.begin;
  SimpleHelpPrinter.prototype.end = HelpPrinter.prototype.end;
  PositionalActionBase.prototype.invoke_drwoxr$ = ArgumentAction.prototype.invoke_drwoxr$;
  assemble = new Command('assemble', assemble$lambda, assemble$lambda_0, trimMargin('assemble: takes in two arguments: [text in] {[program out], a.out}\n            |Returns a.out if no second argument exists'));
  cat = new Command('cat', cat$lambda, cat$lambda_0, 'cat: takes in one argument (a file or path to a file) and prints out the contents of the file.' + '\nEx cat foo.txt' + '\nUsage: cat [path to file]');
  cd = new Command('cd', cd$lambda, cd$lambda_0, 'cd takes in one argument (a path) and goes to the directory.' + '\nUsage: cd [path]');
  cp = new Command('cp', cp$lambda, cp$lambda_0, trimMargin('Copies a text/data file to a new location.\n            |Usage: cp [src] [dst]\n            |NOTE: This is a very dumb copy. It does not work on folders yet or many files!\n        '));
  download = new Command('download', download$lambda, download$lambda_0);
  edit = new Command('edit', edit$lambda, edit$lambda_0, 'edit: Takes in one argument [filename] and will copy the contents to the editor tab and then go to the editor tab.' + '\nUsage: edit [filename]');
  help = new Command('help', help$lambda, help$lambda_0, 'help: This command takes in zero or one argument.\nIf you do not have any arguments, all of the commands' + ' will be listed.\nIf you have one argument, then this will print out the help message of that command.');
  link = new Command('link', link$lambda, link$lambda_0, 'This command takes in names of programs which you want to link together.' + 'It only requires one program but takes in an arbitrary number of programs.' + '\nEG link out.l a.out b.out c.out' + '\nUsage: link [output] [input program 1] {[input program 2] ... [input program n]}');
  ls = new Command('ls', ls$lambda, ls$lambda_0, 'This command prints out the contents of the current folder.' + '\nIt currently does not take in any arguments.' + '\nUsage: ls');
  mkdir = new Command('mkdir', mkdir$lambda, mkdir$lambda_0, trimMargin('This command makes a folder in the current directory or path.\n            |Usage: mkdir [new folder name]\n        '));
  mv = new Command('mv', mv$lambda, mv$lambda_0, trimMargin('Moves a file/folder to a new location.\n            |Usage: mv [source] [destination]\n            |NOTE: This is a very dumb implementation of move and does not do any fancy things linux move does.\n        '));
  pwd = new Command('pwd', pwd$lambda, pwd$lambda_0, trimMargin('This command prints out the path of the current directory.\n            |It does not take any arguments.\n            |Usage: path\n        '));
  rm = new Command('rm', rm$lambda, rm$lambda_0, trimMargin('Remove (unlink) the FILE(s),\n            |Usage: rm [OPTION]... [FILE]...\n            |NOTE: Options and multiple file input is currently not implemented yet.\n        '));
  run = new Command('run', run$lambda, run$lambda_0, trimMargin('Runs the inputed linked program with given arguments.\n            |Usage: run [program name] [argument]...\n        '));
  save = new Command('save', save$lambda, save$lambda_0, trimMargin('Saves the data in the editor to the specified file.\n            |Usage: save [filename]\n        '));
  touch = new Command('touch', touch$lambda, touch$lambda_0, trimMargin('Creates a text/data file.\n            |Usage: touch [filename]\n            |NOTE: Does not modify the timestamp at the moment because that is not implemented yet in the VFS.\n        '));
  tree = new Command('tree', tree$lambda, tree$lambda_0);
  unzip = new Command('unzip', unzip$lambda, unzip$lambda_0, 'This command will unzip the file specified into the current directory.');
  upload = new Command('upload', upload$lambda, upload$lambda_0);
  vdb = new Command('vdb', vdb$lambda, vdb$lambda_0);
  xxd = new Command('xxd', xxd$lambda, xxd$lambda_0, trimMargin('Takes a file and prints it out in hex.\n            |Usage: xxd file\n            |NOTE: This is a very dumb xxd and does not have full features.\n        '));
  zip_0 = new Command('zip', zip$lambda, zip$lambda_0, 'This command creates a zip file.');
  p1warnings = ArrayList_init();
  ImmAbsRelocator = new Relocator(ImmAbsRelocator32_getInstance(), NoRelocator64_getInstance());
  ImmAbsStoreRelocator = new Relocator(ImmAbsStoreRelocator32_getInstance(), NoRelocator64_getInstance());
  JALRelocator = new Relocator(JALRelocator32_getInstance(), NoRelocator64_getInstance());
  PCRelHiRelocator = new Relocator(PCRelHiRelocator32_getInstance(), NoRelocator64_getInstance());
  PCRelLoRelocator = new Relocator(PCRelLoRelocator32_getInstance(), NoRelocator64_getInstance());
  PCRelLoStoreRelocator = new Relocator(PCRelLoStoreRelocator32_getInstance(), NoRelocator64_getInstance());
  getImmWarning = '';
  fld = new FITypeInstruction('fld', 7, 3, fld$lambda);
  faddd = new FRTypeInstruction('fadd.d', 83, 1, faddd$lambda);
  fclassd = new FclassRTypeInstruction('fclass.d', 83, 1, 112, fclassd$lambda);
  fcvtdw = new RtFTypeInstruction('fcvt.d.w', 83, 0, 105, 0, fcvtdw$lambda);
  fcvtdwu = new RtFTypeInstruction('fcvt.d.wu', 83, 0, 105, 1, fcvtdwu$lambda);
  fcvtwd = new FtRTypeInstruction('fcvt.w.d', 83, 0, 97, 0, fcvtwd$lambda);
  fcvtwud = new FtRTypeInstruction('fcvt.wu.d', 83, 0, 97, 1, fcvtwud$lambda);
  feqd = new FFRRTypeInstruction('feq.d', 83, 2, 81, feqd$lambda);
  fled = new FFRRTypeInstruction('fle.d', 83, 0, 81, fled$lambda);
  fltd = new FFRRTypeInstruction('flt.d', 83, 1, 81, fltd$lambda);
  fmaddd = new FR4TypeInstruction('fmadd.d', 67, 1, fmaddd$lambda);
  fmaxd = new F3RTypeInstruction('fmax.d', 83, 21, 1, fmaxd$lambda);
  fmind = new F3RTypeInstruction('fmin.d', 83, 21, 0, fmind$lambda);
  fmsubd = new FR4TypeInstruction('fmsub.d', 71, 1, fmsubd$lambda);
  fmuld = new FRTypeInstruction('fmul.d', 83, 9, fmuld$lambda);
  fmvdx = new RtFTypeInstruction('fmv.d.x', 83, 0, 121, 0, fmvdx$lambda);
  fmvxd = new FtRTypeInstruction('fmv.x.d', 83, 0, 113, 0, fmvxd$lambda);
  fnmaddd = new FR4TypeInstruction('fnmadd.d', 79, 1, fnmaddd$lambda);
  fnmsubd = new FR4TypeInstruction('fnmsub.d', 75, 1, fnmsubd$lambda);
  fsgnjd = new F3RTypeInstruction('fsgnj.d', 83, 17, 0, fsgnjd$lambda);
  fsgnjnd = new F3RTypeInstruction('fsgnjn.d', 83, 17, 1, fsgnjnd$lambda);
  fsgnjxd = new F3RTypeInstruction('fsgnjx.d', 83, 17, 2, fsgnjxd$lambda);
  fsqrtd = new FRRTypeInstruction('fsqrt.d', 83, 45, 0, fsqrtd$lambda);
  fsubd = new FRTypeInstruction('fsub.d', 83, 5, fsubd$lambda);
  fsd = new FSTypeInstruction('fsd', 39, 3, fsd$lambda);
  fcvtds = new FRRTypeInstruction('fcvt.d.s', 83, 33, 0, fcvtds$lambda);
  fcvtsd = new FRRTypeInstruction('fcvt.s.d', 83, 32, 1, fcvtsd$lambda);
  flw = new FITypeInstruction('flw', 7, 2, flw$lambda);
  fadds = new FRTypeInstruction('fadd.s', 83, 0, fadds$lambda);
  fclasss = new FclassRTypeInstruction('fclass.s', 83, 1, 112, fclasss$lambda);
  fcvtsw = new RtFTypeInstruction('fcvt.s.w', 83, 0, 104, 0, fcvtsw$lambda);
  fcvtswu = new RtFTypeInstruction('fcvt.s.wu', 83, 0, 104, 1, fcvtswu$lambda);
  fcvtws = new FtRTypeInstruction('fcvt.w.s', 83, 0, 96, 0, fcvtws$lambda);
  fcvtwus = new FtRTypeInstruction('fcvt.wu.s', 83, 0, 96, 1, fcvtwus$lambda);
  fdivs = new FRTypeInstruction('fdiv.s', 83, 12, fdivs$lambda);
  feqs = new FFRRTypeInstruction('feq.s', 83, 2, 80, feqs$lambda);
  fles = new FFRRTypeInstruction('fle.s', 83, 0, 80, fles$lambda);
  flts = new FFRRTypeInstruction('flt.s', 83, 1, 80, flts$lambda);
  fmadds = new FR4TypeInstruction('fmadd.s', 67, 0, fmadds$lambda);
  fmaxs = new F3RTypeInstruction('fmax.s', 83, 20, 1, fmaxs$lambda);
  fmins = new F3RTypeInstruction('fmin.s', 83, 20, 0, fmins$lambda);
  fmsubs = new FR4TypeInstruction('fmsub.s', 71, 0, fmsubs$lambda);
  fmuls = new FRTypeInstruction('fmul.s', 83, 8, fmuls$lambda);
  fmvsx = new RtFTypeInstruction('fmv.s.x', 83, 0, 120, 0, fmvsx$lambda);
  fmvxs = new FtRTypeInstruction('fmv.x.s', 83, 0, 112, 0, fmvxs$lambda);
  fnmadds = new FR4TypeInstruction('fnmadd.s', 79, 0, fnmadds$lambda);
  fnmsubs = new FR4TypeInstruction('fnmsub.s', 75, 0, fnmsubs$lambda);
  fsgnjs = new F3RTypeInstruction('fsgnj.s', 83, 16, 0, fsgnjs$lambda);
  fsgnjns = new F3RTypeInstruction('fsgnjn.s', 83, 16, 1, fsgnjns$lambda);
  fsgnjxs = new F3RTypeInstruction('fsgnjx.s', 83, 16, 2, fsgnjxs$lambda);
  fsqrts = new FRRTypeInstruction('fsqrt.s', 83, 44, 0, fsqrts$lambda);
  fsubs = new FRTypeInstruction('fsub.s', 83, 4, fsubs$lambda);
  fsw = new FSTypeInstruction('fsw', 39, 2, fsw$lambda);
  addi = new ITypeInstruction('addi', 19, 0, addi$lambda, addi$lambda_0, addi$lambda_1, addi$lambda_2);
  addiw = new ITypeInstruction('addiw', 27, 0, addiw$lambda, addiw$lambda_0, addiw$lambda_1, addiw$lambda_2);
  andi = new ITypeInstruction('andi', 19, 7, andi$lambda, andi$lambda_0, andi$lambda_1, andi$lambda_2);
  csrrc = new Instruction('csrrc', new InstructionFormat(4, listOf_0([new FieldEqual(InstructionField$OPCODE_getInstance(), 115), new FieldEqual(InstructionField$FUNCT3_getInstance(), 3)])), CSRTypeParser_getInstance(), NoImplementation_getInstance(), new RawImplementation(csrrc$lambda), new RawImplementation(csrrc$lambda_0), new RawImplementation(csrrc$lambda_1), new RawDisassembler(csrrc$lambda_2));
  csrrci = new Instruction('csrrci', new InstructionFormat(4, listOf_0([new FieldEqual(InstructionField$OPCODE_getInstance(), 115), new FieldEqual(InstructionField$FUNCT3_getInstance(), 7)])), CSRTypeParser_getInstance(), NoImplementation_getInstance(), new RawImplementation(csrrci$lambda), new RawImplementation(csrrci$lambda_0), new RawImplementation(csrrci$lambda_1), new RawDisassembler(csrrci$lambda_2));
  csrrs = new Instruction('csrrs', new InstructionFormat(4, listOf_0([new FieldEqual(InstructionField$OPCODE_getInstance(), 115), new FieldEqual(InstructionField$FUNCT3_getInstance(), 2)])), CSRTypeParser_getInstance(), NoImplementation_getInstance(), new RawImplementation(csrrs$lambda), new RawImplementation(csrrs$lambda_0), new RawImplementation(csrrs$lambda_1), new RawDisassembler(csrrs$lambda_2));
  csrrsi = new Instruction('csrrsi', new InstructionFormat(4, listOf_0([new FieldEqual(InstructionField$OPCODE_getInstance(), 115), new FieldEqual(InstructionField$FUNCT3_getInstance(), 6)])), CSRTypeParser_getInstance(), NoImplementation_getInstance(), new RawImplementation(csrrsi$lambda), new RawImplementation(csrrsi$lambda_0), new RawImplementation(csrrsi$lambda_1), new RawDisassembler(csrrsi$lambda_2));
  csrrw = new Instruction('csrrw', new InstructionFormat(4, listOf_0([new FieldEqual(InstructionField$OPCODE_getInstance(), 115), new FieldEqual(InstructionField$FUNCT3_getInstance(), 1)])), CSRTypeParser_getInstance(), NoImplementation_getInstance(), new RawImplementation(csrrw$lambda), new RawImplementation(csrrw$lambda_0), new RawImplementation(csrrw$lambda_1), new RawDisassembler(csrrw$lambda_2));
  csrrwi = new Instruction('csrrwi', new InstructionFormat(4, listOf_0([new FieldEqual(InstructionField$OPCODE_getInstance(), 115), new FieldEqual(InstructionField$FUNCT3_getInstance(), 5)])), CSRTypeParser_getInstance(), NoImplementation_getInstance(), new RawImplementation(csrrwi$lambda), new RawImplementation(csrrwi$lambda_0), new RawImplementation(csrrwi$lambda_1), new RawDisassembler(csrrwi$lambda_2));
  ebreak = new Instruction('ebreak', new InstructionFormat(4, listOf(new FieldEqual(InstructionField$ENTIRE_getInstance(), 1048691))), DoNothingParser_getInstance(), new RawImplementation(ebreak$lambda), new RawImplementation(ebreak$lambda_0), new RawImplementation(ebreak$lambda_1), new RawImplementation(ebreak$lambda_2), new RawDisassembler(ebreak$lambda_3));
  ecall = new Instruction('ecall', new InstructionFormat(4, listOf(new FieldEqual(InstructionField$ENTIRE_getInstance(), 115))), DoNothingParser_getInstance(), NoImplementation_getInstance(), new RawImplementation(ecall$lambda), new RawImplementation(ecall$lambda_0), new RawImplementation(ecall$lambda_1), new RawDisassembler(ecall$lambda_2));
  fencei = new Instruction('fence.i', new InstructionFormat(4, listOf(new FieldEqual(InstructionField$ENTIRE_getInstance(), 4111))), DoNothingParser_getInstance(), NoImplementation_getInstance(), NoImplementation_getInstance(), NoImplementation_getInstance(), NoImplementation_getInstance(), new RawDisassembler(fencei$lambda));
  fence = new Instruction('fence', new InstructionFormat(4, listOf(new FieldEqual(InstructionField$ENTIRE_getInstance(), 15))), DoNothingParser_getInstance(), NoImplementation_getInstance(), NoImplementation_getInstance(), NoImplementation_getInstance(), NoImplementation_getInstance(), new RawDisassembler(fence$lambda));
  jalr = new Instruction('jalr', new ITypeFormat(103, 0), new RawParser(jalr$lambda), NoImplementation_getInstance(), new RawImplementation(jalr$lambda_0), new RawImplementation(jalr$lambda_1), new RawImplementation(jalr$lambda_2), new RawDisassembler(jalr$lambda_3));
  lb = new LoadTypeInstruction('lb', 3, 0, void 0, void 0, lb$lambda, lb$lambda_0, lb$lambda_1, lb$lambda_2, lb$lambda_3, lb$lambda_4);
  lbu = new LoadTypeInstruction('lbu', 3, 4, void 0, void 0, lbu$lambda, void 0, lbu$lambda_0, void 0, lbu$lambda_1);
  ld = new LoadTypeInstruction('ld', 3, 3, ld$lambda, void 0, ld$lambda_0, void 0, getCallableRef('loadLongwCache', function ($receiver, addr) {
    return $receiver.loadLongwCache_3p81yu$(addr);
  }), void 0, ld$lambda_1);
  lh = new LoadTypeInstruction('lh', 3, 1, lh$lambda, lh$lambda_0, lh$lambda_1, lh$lambda_2, lh$lambda_3, lh$lambda_4, lh$lambda_5, lh$lambda_6);
  lhu = new LoadTypeInstruction('lhu', 3, 5, lhu$lambda, void 0, lhu$lambda_0, void 0, lhu$lambda_1, void 0, lhu$lambda_2);
  lw = new LoadTypeInstruction('lw', 3, 2, lw$lambda, void 0, getCallableRef('loadWordwCache', function ($receiver, addr) {
    return $receiver.loadWordwCache_3p81yu$(addr);
  }), void 0, lw$lambda_0, void 0, lw$lambda_1);
  lwu = new LoadTypeInstruction('lwu', 3, 2, lwu$lambda, void 0, getCallableRef('loadWordwCache', function ($receiver, addr) {
    return $receiver.loadWordwCache_3p81yu$(addr);
  }), void 0, lwu$lambda_0, void 0, lwu$lambda_1);
  ori = new ITypeInstruction('ori', 19, 6, ori$lambda, ori$lambda_0, ori$lambda_1, ori$lambda_2);
  slli = new ShiftImmediateInstruction('slli', 1, 0, slli$lambda, slli$lambda_0, slli$lambda_1, slli$lambda_2);
  slliw = new ShiftWImmediateInstruction('slliw', 1, 0, 27, slliw$lambda, slliw$lambda_0, slliw$lambda_1, slliw$lambda_2);
  slti = new ITypeInstruction('slti', 19, 2, slti$lambda, slti$lambda_0, slti$lambda_1, slti$lambda_2);
  sltiu = new ITypeInstruction('sltiu', 19, 3, sltiu$lambda, sltiu$lambda_0, sltiu$lambda_1, sltiu$lambda_2);
  srai = new ShiftImmediateInstruction('srai', 5, 32, srai$lambda, srai$lambda_0, srai$lambda_1, srai$lambda_2);
  sraiw = new ShiftWImmediateInstruction('sraiw', 5, 32, 27, sraiw$lambda, sraiw$lambda_0, sraiw$lambda_1, sraiw$lambda_2);
  srli = new ShiftImmediateInstruction('srli', 5, 0, srli$lambda, srli$lambda_0, srli$lambda_1, srli$lambda_2);
  srliw = new ShiftWImmediateInstruction('srliw', 5, 0, 27, srliw$lambda, srliw$lambda_0, srliw$lambda_1, srliw$lambda_2);
  xori = new ITypeInstruction('xori', 19, 4, xori$lambda, xori$lambda_0, xori$lambda_1, xori$lambda_2);
  add_0 = new RTypeInstruction('add', 51, 0, 0, add$lambda, add$lambda_0, add$lambda_1, add$lambda_2);
  addw = new RTypeInstruction('addw', 59, 0, 0, addw$lambda, addw$lambda_0, addw$lambda_1, addw$lambda_2);
  and_0 = new RTypeInstruction('and', 51, 7, 0, and$lambda, and$lambda_0, and$lambda_1, and$lambda_2);
  or_0 = new RTypeInstruction('or', 51, 6, 0, or$lambda, or$lambda_0, or$lambda_1, or$lambda_2);
  sll = new RTypeInstruction('sll', 51, 1, 0, sll$lambda, sll$lambda_0, sll$lambda_1, sll$lambda_2);
  sllw = new RTypeInstruction('sllw', 59, 1, 0, sllw$lambda, sllw$lambda_0, sllw$lambda_1, sllw$lambda_2);
  slt = new RTypeInstruction('slt', 51, 2, 0, slt$lambda, slt$lambda_0, slt$lambda_1, slt$lambda_2);
  sltu = new RTypeInstruction('sltu', 51, 3, 0, sltu$lambda, sltu$lambda_0, sltu$lambda_1, sltu$lambda_2);
  sra = new RTypeInstruction('sra', 51, 5, 32, sra$lambda, sra$lambda_0, sra$lambda_1, sra$lambda_2);
  sraw = new RTypeInstruction('sraw', 59, 5, 32, sraw$lambda, sraw$lambda_0, sraw$lambda_1, sraw$lambda_2);
  srl = new RTypeInstruction('srl', 51, 5, 0, srl$lambda, srl$lambda_0, srl$lambda_1, srl$lambda_2);
  srlw = new RTypeInstruction('srlw', 59, 5, 0, srlw$lambda, srlw$lambda_0, srlw$lambda_1, srlw$lambda_2);
  sub = new RTypeInstruction('sub', 51, 0, 32, sub$lambda, sub$lambda_0, sub$lambda_1, sub$lambda_2);
  subw = new RTypeInstruction('subw', 59, 0, 32, subw$lambda, subw$lambda_0, subw$lambda_1, subw$lambda_2);
  xor = new RTypeInstruction('xor', 51, 4, 0, xor$lambda, xor$lambda_0, xor$lambda_1, xor$lambda_2);
  sb = new STypeInstruction('sb', 35, 0, sb$lambda, sb$lambda_0, sb$lambda_1, sb$lambda_2);
  sd = new STypeInstruction('sd', 35, 3, sd$lambda, sd$lambda_0, sd$lambda_1, sd$lambda_2);
  sh = new STypeInstruction('sh', 35, 1, sh$lambda, sh$lambda_0, sh$lambda_1, sh$lambda_2);
  sw = new STypeInstruction('sw', 35, 2, sw$lambda, sw$lambda_0, sw$lambda_1, sw$lambda_2);
  beq = new BTypeInstruction('beq', 99, 0, beq$lambda, beq$lambda_0, beq$lambda_1, beq$lambda_2);
  bge = new BTypeInstruction('bge', 99, 5, bge$lambda, bge$lambda_0, bge$lambda_1, bge$lambda_2);
  bgeu = new BTypeInstruction('bgeu', 99, 7, bgeu$lambda, bgeu$lambda_0, bgeu$lambda_1, bgeu$lambda_2);
  blt = new BTypeInstruction('blt', 99, 4, blt$lambda, blt$lambda_0, blt$lambda_1, blt$lambda_2);
  bltu = new BTypeInstruction('bltu', 99, 6, bltu$lambda, bltu$lambda_0, bltu$lambda_1, bltu$lambda_2);
  bne = new BTypeInstruction('bne', 99, 1, bne$lambda, bne$lambda_0, bne$lambda_1, bne$lambda_2);
  auipc = new UTypeInstruction('auipc', 23, auipc$lambda, auipc$lambda_0, auipc$lambda_1, auipc$lambda_2);
  lui = new UTypeInstruction('lui', 55, lui$lambda, lui$lambda_0, lui$lambda_1, lui$lambda_2);
  jal = new Instruction('jal', new OpcodeFormat(111), new RawParser(jal$lambda), NoImplementation_getInstance(), new RawImplementation(jal$lambda_0), new RawImplementation(jal$lambda_1), new RawImplementation(jal$lambda_2), new RawDisassembler(jal$lambda_3));
  amoaddweval32 = amoaddweval32$lambda;
  amoaddw = new AMORTypeInstruction('amoadd.w', 47, 2, 0, 0, 0, void 0, amoaddweval32);
  amoaddwaq = new AMORTypeInstruction('amoadd.w.aq', 47, 2, 1, 0, 0, void 0, amoaddweval32);
  amoaddwrl = new AMORTypeInstruction('amoadd.w.rl', 47, 2, 0, 1, 0, void 0, amoaddweval32);
  amoaddwaqrl = new AMORTypeInstruction('amoadd.w.aq.rl', 47, 2, 1, 1, 0, void 0, amoaddweval32);
  amoaddwrlaq = new AMORTypeInstruction('amoadd.w.rl.aq', 47, 2, 1, 1, 0, void 0, amoaddweval32);
  amoandweval32 = amoandweval32$lambda;
  amoandw = new AMORTypeInstruction('amoand.w', 47, 2, 0, 0, 12, void 0, amoandweval32);
  amoandwaq = new AMORTypeInstruction('amoand.w.aq', 47, 2, 1, 0, 12, void 0, amoandweval32);
  amoandwrl = new AMORTypeInstruction('amoand.w.rl', 47, 2, 0, 1, 12, void 0, amoandweval32);
  amoandwaqrl = new AMORTypeInstruction('amoand.w.aq.rl', 47, 2, 1, 1, 12, void 0, amoandweval32);
  amoandwrlaq = new AMORTypeInstruction('amoand.w.rl.aq', 47, 2, 1, 1, 12, void 0, amoandweval32);
  amomaxweval32 = amomaxweval32$lambda;
  amomaxw = new AMORTypeInstruction('amomax.w', 47, 2, 0, 0, 20, void 0, amomaxweval32);
  amomaxwaq = new AMORTypeInstruction('amomax.w.aq', 47, 2, 1, 0, 20, void 0, amomaxweval32);
  amomaxwrl = new AMORTypeInstruction('amomax.w.rl', 47, 2, 0, 1, 20, void 0, amomaxweval32);
  amomaxwaqrl = new AMORTypeInstruction('amomax.w.aq.rl', 47, 2, 1, 1, 20, void 0, amomaxweval32);
  amomaxwrlaq = new AMORTypeInstruction('amomax.w.rl.aq', 47, 2, 1, 1, 20, void 0, amomaxweval32);
  amomaxuweval32 = amomaxuweval32$lambda;
  amomaxuw = new AMORTypeInstruction('amomaxu.w', 47, 2, 0, 0, 28, void 0, amomaxuweval32);
  amomaxuwaq = new AMORTypeInstruction('amomaxu.w.aq', 47, 2, 1, 0, 28, void 0, amomaxuweval32);
  amomaxuwrl = new AMORTypeInstruction('amomaxu.w.rl', 47, 2, 0, 1, 28, void 0, amomaxuweval32);
  amomaxuwaqrl = new AMORTypeInstruction('amomaxu.w.aq.rl', 47, 2, 1, 1, 28, void 0, amomaxuweval32);
  amomaxuwrlaq = new AMORTypeInstruction('amomaxu.w.rl.aq', 47, 2, 1, 1, 28, void 0, amomaxuweval32);
  amominweval32 = amominweval32$lambda;
  amominw = new AMORTypeInstruction('amomin.w', 47, 2, 0, 0, 16, void 0, amominweval32);
  amominwaq = new AMORTypeInstruction('amomin.w.aq', 47, 2, 1, 1, 16, void 0, amominweval32);
  amominwrl = new AMORTypeInstruction('amomin.w.rl', 47, 2, 1, 1, 16, void 0, amominwrl$lambda);
  amominwaqrl = new AMORTypeInstruction('amomin.w.aq.rl', 47, 2, 1, 1, 16, void 0, amominweval32);
  amominwrlaq = new AMORTypeInstruction('amomin.w.rl.aq', 47, 2, 1, 1, 16, void 0, amominweval32);
  amominuweval32 = amominuweval32$lambda;
  amominuw = new AMORTypeInstruction('amominu.w', 47, 2, 0, 0, 24, void 0, amominuweval32);
  amominuwaq = new AMORTypeInstruction('amominu.w.aq', 47, 2, 1, 0, 24, void 0, amominuweval32);
  amominuwrl = new AMORTypeInstruction('amominu.w.rl', 47, 2, 0, 1, 24, void 0, amominuweval32);
  amominuwaqrl = new AMORTypeInstruction('amominu.w.aq.rl', 47, 2, 1, 1, 24, void 0, amominuweval32);
  amominuwrlaq = new AMORTypeInstruction('amominu.w.rl.aq', 47, 2, 1, 1, 24, void 0, amominuweval32);
  amoorweval32 = amoorweval32$lambda;
  amoorw = new AMORTypeInstruction('amoor.w', 47, 2, 0, 0, 8, void 0, amoorweval32);
  amoorwaq = new AMORTypeInstruction('amoor.w.aq', 47, 2, 1, 0, 8, void 0, amoorweval32);
  amoorwrl = new AMORTypeInstruction('amoor.w.rl', 47, 2, 0, 1, 8, void 0, amoorweval32);
  amoorwaqrl = new AMORTypeInstruction('amoor.w.aq.rl', 47, 2, 1, 1, 8, void 0, amoorweval32);
  amoorwrlaq = new AMORTypeInstruction('amoor.w.rl.aq', 47, 2, 1, 1, 8, void 0, amoorweval32);
  amoswapweval32 = amoswapweval32$lambda;
  amoswapw = new AMORTypeInstruction('amoswap.w', 47, 2, 0, 0, 1, void 0, amoswapweval32);
  amoswapwaq = new AMORTypeInstruction('amoswap.w.aq', 47, 2, 1, 0, 1, void 0, amoswapweval32);
  amoswapwrl = new AMORTypeInstruction('amoswap.w.rl', 47, 2, 0, 1, 1, void 0, amoswapweval32);
  amoswapwaqrl = new AMORTypeInstruction('amoswap.w.aq.rl', 47, 2, 1, 1, 1, void 0, amoswapweval32);
  amoswapwrlaq = new AMORTypeInstruction('amoswap.w.rl.aq', 47, 2, 1, 1, 1, void 0, amoswapweval32);
  amoxorweval32 = amoxorweval32$lambda;
  amoxorw = new AMORTypeInstruction('amoxor.w', 47, 2, 0, 0, 4, void 0, amoxorweval32);
  amoxorwaq = new AMORTypeInstruction('amoxor.w.aq', 47, 2, 1, 0, 4, void 0, amoxorweval32);
  amoxorwrl = new AMORTypeInstruction('amoxor.w.rl', 47, 2, 0, 1, 4, void 0, amoxorweval32);
  amoxorwaqrl = new AMORTypeInstruction('amoxor.w.aq.rl', 47, 2, 1, 1, 4, void 0, amoxorweval32);
  amoxorwrlaq = new AMORTypeInstruction('amoxor.w.rl.aq', 47, 2, 1, 1, 4, void 0, amoxorweval32);
  lrweval32 = lrweval32$lambda;
  lrw = new AMORTypeInstruction('lr.w', 47, 2, 0, 0, 2, void 0, lrweval32);
  lrwaq = new AMORTypeInstruction('lr.w.aq', 47, 2, 1, 0, 2, void 0, lrweval32);
  lrwrl = new AMORTypeInstruction('lr.w.rl', 47, 2, 0, 1, 2, void 0, lrweval32);
  lrwaqrl = new AMORTypeInstruction('lr.w.aq.rl', 47, 2, 1, 1, 2, void 0, lrweval32);
  lrwrlaq = new AMORTypeInstruction('lr.w.rl.aq', 47, 2, 1, 1, 2, void 0, lrweval32);
  scweval32 = scweval32$lambda;
  scw = new AMORTypeInstruction('sc.w', 47, 2, 0, 0, 3, void 0, scweval32);
  scwaq = new AMORTypeInstruction('sc.w.aq', 47, 2, 1, 0, 3, void 0, scweval32);
  scwrl = new AMORTypeInstruction('sc.w.rl', 47, 2, 0, 1, 3, void 0, scweval32);
  scwaqrl = new AMORTypeInstruction('sc.w.aq.rl', 47, 2, 1, 1, 3, void 0, scweval32);
  scwrlaq = new AMORTypeInstruction('sc.w.rl.aq', 47, 2, 1, 1, 3, void 0, scweval32);
  caddw = new CATypeInstruction('c.addw', 1, 1, 39, void 0, void 0, caddw$lambda);
  cand = new CATypeInstruction('c.and', 1, 3, 35, void 0, void 0, cand$lambda);
  cor = new CATypeInstruction('c.or', 1, 2, 35, void 0, void 0, cor$lambda);
  csub = new CATypeInstruction('c.sub', 1, 0, 35, void 0, void 0, csub$lambda);
  csubw = new CATypeInstruction('c.subw', 1, 0, 39, void 0, void 0, csubw$lambda);
  cxor = new CATypeInstruction('c.xor', 1, 1, 35, void 0, void 0, cxor$lambda);
  caddi = new Instruction('c.addi', new OpcodeCFunct3Format(1, 0, [new FieldEqual(InstructionField$RD_getInstance(), 0, true), new FieldEqual(InstructionField$IMM_b2_b6_getInstance(), 0, true, listOf(InstructionField$IMM_b12_getInstance()))]), new RawParser(caddi$lambda), new RawImplementation(caddi$lambda_0), new RawImplementation(caddi$lambda_1), new RawImplementation(caddi$lambda_2), new RawImplementation(caddi$lambda_3), new RawDisassembler(caddi$lambda_4));
  clwsp = new Instruction('c.lwsp', new OpcodeCFunct3Format(2, 2, [new FieldEqual(InstructionField$RD_getInstance(), 0, true)]), new RawParser(clwsp$lambda), new RawImplementation(clwsp$lambda_0), new RawImplementation(clwsp$lambda_1), new RawImplementation(clwsp$lambda_2), new RawImplementation(clwsp$lambda_3), new RawDisassembler(clwsp$lambda_4));
  cnop = new Instruction('c.nop', new OpcodeCFunct3Format(1, 0, [new FieldEqual(InstructionField$RD_getInstance(), 0, false), new FieldEqual(InstructionField$IMM_b2_b6_getInstance(), 0, false, listOf(InstructionField$IMM_b12_getInstance()))]), new RawParser(cnop$lambda), new RawImplementation(cnop$lambda_0), new RawImplementation(cnop$lambda_1), new RawImplementation(cnop$lambda_2), new RawImplementation(cnop$lambda_3), new RawDisassembler(cnop$lambda_4));
  cadd = new CRTypeInstruction('c.add', 2, 9, [new FieldEqual(InstructionField$RD_getInstance(), 0, true), new FieldEqual(InstructionField$CRS2_getInstance(), 0, true)], void 0, cadd$lambda);
  cebreak = new Instruction('ebreak', new InstructionFormat(2, listOf(new FieldEqual(InstructionField$HALF_getInstance(), 36866))), DoNothingParser_getInstance(), ebreak.impl16, ebreak.impl32, ebreak.impl64, ebreak.impl128, new RawDisassembler(cebreak$lambda));
  cmv = new CRTypeInstruction('c.mv', 2, 8, void 0, void 0, cmv$lambda);
  div_0 = new RTypeInstruction('div', 51, 4, 1, div$lambda, div$lambda_0, div$lambda_1, div$lambda_2);
  divu = new RTypeInstruction('divu', 51, 5, 1, divu$lambda, divu$lambda_0, divu$lambda_1, divu$lambda_2);
  divw = new RTypeInstruction('divw', 59, 4, 1, divw$lambda, divw$lambda_0, divw$lambda_1, divw$lambda_2);
  mul = new RTypeInstruction('mul', 51, 0, 1, mul$lambda, mul$lambda_0, mul$lambda_1, mul$lambda_2);
  mulh = new RTypeInstruction('mulh', 51, 1, 1, mulh$lambda, mulh$lambda_0, mulh$lambda_1, mulh$lambda_2);
  mulhsu = new RTypeInstruction('mulhsu', 51, 2, 1, mulhsu$lambda, mulhsu$lambda_0, mulhsu$lambda_1, mulhsu$lambda_2);
  mulhu = new RTypeInstruction('mulhu', 51, 3, 1, mulhu$lambda, mulhu$lambda_0, mulhu$lambda_1, mulhu$lambda_2);
  mulw = new RTypeInstruction('mulw', 59, 0, 1, mulw$lambda, mulw$lambda_0, mulw$lambda_1, mulw$lambda_2);
  rem_0 = new RTypeInstruction('rem', 51, 6, 1, rem$lambda, rem$lambda_0, rem$lambda_1, rem$lambda_2);
  remu = new RTypeInstruction('remu', 51, 7, 1, remu$lambda, remu$lambda_0, remu$lambda_1, remu$lambda_2);
  remuw = new RTypeInstruction('remuw', 59, 7, 1, remuw$lambda, remuw$lambda_0, remuw$lambda_1, remuw$lambda_2);
  remw = new RTypeInstruction('remw', 59, 6, 1, remw$lambda, remw$lambda_0, remw$lambda_1, remw$lambda_2);
  venusInternalLabels = 'Venus_Internal_Label-';
  hexMap = listOf_0([toBoxedChar(48), toBoxedChar(49), toBoxedChar(50), toBoxedChar(51), toBoxedChar(52), toBoxedChar(53), toBoxedChar(54), toBoxedChar(55), toBoxedChar(56), toBoxedChar(57), toBoxedChar(65), toBoxedChar(66), toBoxedChar(67), toBoxedChar(68), toBoxedChar(69), toBoxedChar(70)]);
  Kotlin.defineModule('venus', _);
  return _;
}(typeof venus === 'undefined' ? {} : venus, kotlin);

//# sourceMappingURL=venus.js.map