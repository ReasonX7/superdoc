// @ts-check
import { translator as mc_AlternateContent_translator } from './mc/altermateContent/alternate-content-translator';
import { translator as sd_pageReference_translator } from './sd/pageReference/pageReference-translator';
import { translator as sd_tableOfContents_translator } from './sd/tableOfContents/tableOfContents-translator';
import { translator as sd_index_translator } from './sd/index/index-translator';
import { translator as sd_indexEntry_translator } from './sd/indexEntry/indexEntry-translator';
import { translator as sd_tableOfContentsEntry_translator } from './sd/tableOfContentsEntry/tableOfContentsEntry-translator';
import { translator as sd_crossReference_translator } from './sd/crossReference/crossReference-translator';
import { translator as sd_sequenceField_translator } from './sd/sequenceField/sequenceField-translator';
import { translator as sd_citation_translator } from './sd/citation/citation-translator';
import { translator as sd_bibliography_translator } from './sd/bibliography/bibliography-translator';
import { translator as sd_authorityEntry_translator } from './sd/authorityEntry/authorityEntry-translator';
import { translator as sd_tableOfAuthorities_translator } from './sd/tableOfAuthorities/tableOfAuthorities-translator';
import { translator as sd_autoPageNumber_translator } from './sd/autoPageNumber/autoPageNumber-translator';
import { translator as sd_totalPageNumber_translator } from './sd/totalPageNumber/totalPageNumber-translator';
import { translator as w_abstractNum_translator } from './w/abstractNum/abstractNum-translator';
import { translator as w_abstractNumId_translator } from './w/abstractNumId/abstractNumId-translator';
import { translator as w_adjustRightInd_translator } from './w/adjustRightInd/adjustRightInd-translator';
import { translator as w_autoRedefine_translator } from './w/autoRedefine/autoRedefine-translator';
import { translator as w_autoSpaceDE_translator } from './w/autoSpaceDE/autoSpaceDE-translator';
import { translator as w_autoSpaceDN_translator } from './w/autoSpaceDN/autoSpaceDN-translator';
import { translator as w_aliases_translator } from './w/aliases/aliases-translator';
import { translator as w_b_translator } from './w/b/b-translator';
import { translator as w_basedOn_translator } from './w/basedOn/basedOn-translator';
import { translator as w_bdr_translator } from './w/bdr/bdr-translator';
import { translator as w_bar_translator } from './w/bar/bar-translator';
import { translator as w_bCs_translator } from './w/bCs/bCs-translator';
import { translator as w_bidiVisual_translator } from './w/bidiVisual/bidiVisual-translator';
import { translator as w_bookmarkEnd_translator } from './w/bookmark-end/bookmark-end-translator';
import { translator as w_bookmarkStart_translator } from './w/bookmark-start/bookmark-start-translator';
import { translator as w_bottom_translator } from './w/bottom/bottom-translator';
import { translator as w_br_translator } from './w/br/br-translator';
import { translator as w_cantSplit_translator } from './w/cantSplit/cantSplit-translator';
import { translator as w_caps_translator } from './w/caps/caps-translator';
import { translator as w_cnfStyle_translator } from './w/cnfStyle/cnfStyle-translator';
import { translator as w_color_translator } from './w/color/color-translator';
import {
  commentRangeStartTranslator as w_commentRangeStart_translator,
  commentRangeEndTranslator as w_commentRangeEnd_translator,
} from './w/commentRange/comment-range-translator';
import { translator as w_footnoteReference_translator } from './w/footnoteReference/footnoteReference-translator';
import { translator as w_endnoteReference_translator } from './w/endnoteReference/endnoteReference-translator';
import { translator as w_contextualSpacing } from './w/contextualSpacing/contextualSpacing-translator';
import { translator as w_cs } from './w/cs/cs-translator';
import { translator as w_del_translator } from './w/del/del-translator';
import { translator as w_divId_translator } from './w/divId/divId-translator';
import { translator as w_docDefaults_translator } from './w/docDefaults/docDefaults-translator';
import { translator as w_drawing_translator } from './w/drawing/drawing-translator';
import { translator as w_dstrike_translator } from './w/dstrike/dstrike-translator';
import { translator as w_eastAsianLayout_translator } from './w/eastAsianLayout/eastAsianLayout-translator';
import { translator as w_effect_translator } from './w/effect/effect-translator';
import { translator as w_em_translator } from './w/em/em-translator';
import { translator as w_emboss_translator } from './w/emboss/emboss-translator';
import { translator as w_end_translator } from './w/end/end-translator';
import { translator as w_framePr_translator } from './w/framePr/framePr-translator';
import { translator as w_fitText_translator } from './w/fitText/fitText-translator';
import { translator as w_gridAfter_translator } from './w/gridAfter/gridAfter-translator';
import { translator as w_gridBefore_translator } from './w/gridBefore/gridBefore-translator';
import { translator as w_gridCol_translator } from './w/gridCol/gridCol-translator';
import { translator as w_gridSpan_translator } from './w/gridSpan/gridSpan-translator';
import { translator as w_header_translator } from './w/header/header-translator';
import { translator as w_headers_translator } from './w/headers/headers-translator';
import { translator as w_hidden_translator } from './w/hidden/hidden-translator';
import { translator as w_hideMark_translator } from './w/hideMark/hideMark-translator';
import { translator as w_highlight_translator } from './w/highlight/highlight-translator';
import { translator as w_hyperlink_translator } from './w/hyperlink/hyperlink-translator';
import { translator as w_i_translator } from './w/i/i-translator';
import { translator as w_iCs_translator } from './w/iCs/iCs-translator';
import { translator as w_ilvl_translator } from './w/ilvl/ilvl-translator';
import { translator as w_imprint_translator } from './w/imprint/imprint-translator';
import { translator as w_ind_translator } from './w/ind/ind-translator';
import { translator as w_ins_translator } from './w/ins/ins-translator';
import { translator as w_insideH_translator } from './w/insideH/insideH-translator';
import { translator as w_insideV_translator } from './w/insideV/insideV-translator';
import { translator as w_isLgl_translator } from './w/isLgl/isLgl-translator';
import { translator as w_jc_translator } from './w/jc/jc-translator';
import { translator as w_keepLines_translator } from './w/keepLines/keepLines-translator';
import { translator as w_keepNext_translator } from './w/keepNext/keepNext-translator';
import { translator as w_kern_translator } from './w/kern/kern-translator';
import { translator as w_kinsoku_translator } from './w/kinsoku/kinsoku-translator';
import { translator as w_lang_translator } from './w/lang/lang-translator';
import { translator as w_latentStyles_translator } from './w/latentStyles/latentStyles-translator';
import { translator as w_locked_translator } from './w/locked/locked-translator';
import { translator as w_link_translator } from './w/link/link-translator';
import { translator as w_lvl_translator } from './w/lvl/lvl-translator';
import { translator as w_lvlOverride_translator } from './w/lvlOverride/lvlOverride-translator';
import { translator as w_lvlJc_translator } from './w/lvlJc/lvlJc-translator';
import { translator as w_lvlPicBulletId_translator } from './w/lvlPicBulletId/lvlPicBulletId-translator';
import { translator as w_lvlRestart_translator } from './w/lvlRestart/lvlRestart-translator';
import { translator as w_lvlStart_translator } from './w/start/lvlStart-translator';
import { translator as w_lvlText_translator } from './w/lvlText/lvlText-translator';
import { translator as w_multiLevelType_translator } from './w/multiLevelType/multiLevelType-translator';
import { translator as w_mirrorIndents_translator } from './w/mirrorIndents/mirrorIndents-translator';
import { translator as w_left_translator } from './w/left/left-translator';
import { translator as w_lsdException_translator } from './w/lsdException/lsdException-translator';
import { translator as w_name_translator } from './w/name/name-translator';
import { translator as w_next_translator } from './w/next/next-translator';
import { translator as w_noProof_translator } from './w/noProof/noProof-translator';
import { translator as w_noWrap_translator } from './w/noWrap/noWrap-translator';
import { translator as w_num_translator } from './w/num/num-translator';
import { translator as w_numbering_translator } from './w/numbering/numbering-translator';
import { translator as w_numFmt_translator } from './w/numFmt/numFmt-translator';
import { translator as w_numId_translator } from './w/numId/numId-translator';
import { translator as w_numIdMacAtCleanup_translator } from './w/numIdMacAtCleanup/numIdMacAtCleanup-translator';
import { translator as w_numPr_translator } from './w/numPr/numPr-translator';
import { translator as w_numStyleLink_translator } from './w/numStyleLink/numStyleLink-translator';
import { translator as w_nsid_translator } from './w/nsid/nsid-translator';
import { translator as w_oMath_translator } from './w/oMath/oMath-translator';
import { translator as w_outline_translator } from './w/outline/outline-translator';
import { translator as w_outlineLvl_translator } from './w/outlineLvl/outlineLvl-translator';
import { translator as w_overflowPunct } from './w/overflowPunct/overflowPunct-translator';
import { translator as w_p_translator } from './w/p/p-translator';
import { translator as w_pageBreakBefore_translator } from './w/pageBreakBefore/pageBreakBefore-translator';
import { translator as w_pBdr_translator } from './w/pBdr/pBdr-translator';
import { translator as w_personal_translator } from './w/personal/personal-translator';
import { translator as w_personalCompose_translator } from './w/personalCompose/personalCompose-translator';
import { translator as w_personalReply_translator } from './w/personalReply/personalReply-translator';
import { translator as w_position_translator } from './w/position/position-translator';
import { translator as w_pPr_translator } from './w/pPr/pPr-translator';
import { translator as w_pStyle_translator } from './w/pStyle/pStyle-translator';
import { translator as w_permEnd_translator } from './w/perm-end/perm-end-translator';
import { translator as w_permStart_translator } from './w/perm-start/perm-start-translator';
import { translator as w_r_translator } from './w/r/r-translator';
import { translator as w_rFonts_translator } from './w/rFonts/rFonts-translator';
import { translator as w_rPr_translator } from './w/rpr/rpr-translator';
import { translator as w_rStyle_translator } from './w/rStyle/rstyle-translator';
import { translator as w_rsid_translator } from './w/rsid/rsid-translator';
import { translator as w_rtl_translator } from './w/rtl/rtl-translator';
import { translator as w_right_translator } from './w/right/right-translator';
import { translator as w_sdt_translator } from './w/sdt/sdt-translator';
import { translator as w_semiHidden_translator } from './w/semiHidden/semiHidden-translator';
import { translator as w_shadow_translator } from './w/shadow/shadow-translator';
import { translator as w_shd_translator } from './w/shd/shd-translator';
import { translator as w_smallCaps_translator } from './w/smallCaps/smallCaps-translator';
import { translator as w_snapToGrid_translator } from './w/snapToGrid/snapToGrid-translator';
import { translator as w_start_translator } from './w/start/start-translator';
import { translator as w_startOverride_translator } from './w/startOverride/startOverride-translator';
import { translator as w_strike_translator } from './w/strike/strike-translator';
import { translator as w_style_translator } from './w/style/style-translator';
import { translator as w_styleLink_translator } from './w/styleLink/styleLink-translator';
import { translator as w_styles_translator } from './w/styles/styles-translator';
import { translator as w_spacing_translator } from './w/spacing/spacing-translator';
import { translator as w_suppressAutoHyphens_translator } from './w/suppressAutoHyphens/suppressAutoHyphens-translator';
import { translator as w_suppressLineNumbers_translator } from './w/suppressLineNumbers/suppressLineNumbers-translator';
import { translator as w_suppressOverlap_translator } from './w/suppressOverlap/suppressOverlap-translator';
import { translator as w_suff_translator } from './w/suff/suff-translator';
import { translator as w_sz_translator } from './w/sz/sz-translator';
import { translator as w_szCs_translator } from './w/szcs/szcs-translator';
import { translator as w_t_translator } from './w/t/t-translator';
import { translator as w_tab_translator } from './w/tab/tab-translator';
import { translator as w_tabs_translator } from './w/tabs/tabs-translator';
import { translator as w_tbl_translator } from './w/tbl/tbl-translator';
import { translator as w_tblBorders_translator } from './w/tblBorders/tblBorders-translator';
import { translator as w_tblCaption_translator } from './w/tblCaption/tblCaption-translator';
import { translator as w_tblCellMar_translator } from './w/tblCellMar/tblCellMar-translator';
import { translator as w_tblCellSpacing_translator } from './w/tblCellSpacing/tblCellSpacing-translator';
import { translator as w_tblDescription_translator } from './w/tblDescription/tblDescription-translator';
import { translator as w_tblGrid_translator } from './w/tblGrid/tblGrid-translator';
import { translator as w_tblHeader_translator } from './w/tblHeader/tblHeader-translator';
import { translator as w_tblInd_translator } from './w/tblInd/tblInd-translator';
import { translator as w_tblLayout_translator } from './w/tblLayout/tblLayout-translator';
import { translator as w_tblLook_translator } from './w/tblLook/tblLook-translator';
import { translator as w_tblOverlap_translator } from './w/tblOverlap/tblOverlap-translator';
import { translator as w_tblPr_translator } from './w/tblPr/tblPr-translator';
import { translator as w_tblStyle_translator } from './w/tblStyle/tblStyle-translator';
import { translator as w_tblStyleColBandSize_translator } from './w/tblStyleColBandSize/tblStyleColBandSize-translator';
import { translator as w_tblStyleRowBandSize_translator } from './w/tblStyleRowBandSize/tblStyleRowBandSize-translator';
import { translator as w_tblW_translator } from './w/tblW/tblW-translator';
import { translator as w_tblpPr_translator } from './w/tblpPr/tblpPr-translator';
import { translator as w_tc_translator } from './w/tc/tc-translator';
import { translator as w_top_translator } from './w/top/top-translator';
import { translator as w_tr_translator } from './w/tr/tr-translator';
import { translator as w_trHeight_translator } from './w/trHeight/trHeight-translator';
import { translator as w_trPr_translator } from './w/trPr/trPr-translator';
import { translator as w_u_translator } from './w/u/u-translator';
import { translator as w_uiPriority_translator } from './w/uiPriority/uiPriority-translator';
import { translator as w_unhideWhenUsed_translator } from './w/unhideWhenUsed/unhideWhenUsed-translator';
import { translator as w_w_translator } from './w/w/w-translator';
import { translator as w_wAfter_translator } from './w/wAfter/wAfter-translator';
import { translator as w_wBefore_translator } from './w/wBefore/wBefore-translator';
import { translator as w_vMerge_translator } from './w/vMerge/vMerge-translator';
import { translator as w_vAlign_translator } from './w/vAlign/vAlign-translator';
import { translator as w_vertAlign_translator } from './w/vertAlign/vertAlign-translator';
import { translator as w_specVanish_translator } from './w/specVanish/specVanish-translator';
import { translator as w_tcFitText_translator } from './w/tcFitText/tcFitText-translator';
import { translator as w_tcW_translator } from './w/tcW/tcW-translator';
import { translator as w_textDirection_translator } from './w/textDirection/textDirection-translator';
import { translator as w_tl2br_translator } from './w/tl2br/tl2br-translator';
import { translator as w_tmpl_translator } from './w/tmpl/tmpl-translator';
import { translator as w_tr2bl_translator } from './w/tr2bl/tr2bl-translator';
import { translator as w_tcBorders_translator } from './w/tcBorders/tcBorders-translator';
import { translator as w_tcMar_translator } from './w/tcMar/tcMar-translator';
import { translator as w_tcPr_translator } from './w/tcPr/tcPr-translator';
import { translator as w_textAlignment_translator } from './w/textAlignment/textAlignment-translator';
import { translator as w_textBoxTightWrap_translator } from './w/textboxTightWrap/textboxTightWrap-translator';
import { translator as w_topLinePunct_translator } from './w/topLinePunct/topLinePunct-translator';
import { translator as w_vanish_translator } from './w/vanish/vanish-translator';
import { translator as w_webHidden_translator } from './w/webHidden/webHidden-translator';
import { translator as w_widowControl_translator } from './w/widowControl/widowControl-translator';
import { translator as w_wordWrap_translator } from './w/wordWrap/wordWrap-translator';
import { translator as w_qFormat_translator } from './w/qFormat/qFormat-translator';
import { translator as wp_anchor_translator } from './wp/anchor/anchor-translator';
import { translator as wp_inline_translator } from './wp/inline/inline-translator';

/**
 * @typedef {Object} RegisteredHandlers
 */

const translatorList = Array.from(
  new Set([
    mc_AlternateContent_translator,
    sd_pageReference_translator,
    sd_tableOfContents_translator,
    sd_index_translator,
    sd_indexEntry_translator,
    sd_tableOfContentsEntry_translator,
    sd_crossReference_translator,
    sd_sequenceField_translator,
    sd_citation_translator,
    sd_bibliography_translator,
    sd_authorityEntry_translator,
    sd_tableOfAuthorities_translator,
    sd_autoPageNumber_translator,
    sd_totalPageNumber_translator,
    w_abstractNum_translator,
    w_abstractNumId_translator,
    w_adjustRightInd_translator,
    w_autoRedefine_translator,
    w_autoSpaceDE_translator,
    w_autoSpaceDN_translator,
    w_aliases_translator,
    w_b_translator,
    w_bar_translator,
    w_bCs_translator,
    w_basedOn_translator,
    w_bdr_translator,
    w_bidiVisual_translator,
    w_bookmarkEnd_translator,
    w_bookmarkStart_translator,
    w_bottom_translator,
    w_br_translator,
    w_cantSplit_translator,
    w_caps_translator,
    w_cnfStyle_translator,
    w_color_translator,
    w_contextualSpacing,
    w_cs,
    w_del_translator,
    w_divId_translator,
    w_docDefaults_translator,
    w_drawing_translator,
    w_dstrike_translator,
    w_eastAsianLayout_translator,
    w_effect_translator,
    w_em_translator,
    w_emboss_translator,
    w_end_translator,
    w_footnoteReference_translator,
    w_endnoteReference_translator,
    w_fitText_translator,
    w_framePr_translator,
    w_gridAfter_translator,
    w_gridBefore_translator,
    w_gridCol_translator,
    w_gridSpan_translator,
    w_header_translator,
    w_headers_translator,
    w_hidden_translator,
    w_hideMark_translator,
    w_highlight_translator,
    w_hyperlink_translator,
    w_i_translator,
    w_iCs_translator,
    w_ilvl_translator,
    w_ind_translator,
    w_imprint_translator,
    w_ins_translator,
    w_insideH_translator,
    w_insideV_translator,
    w_isLgl_translator,
    w_jc_translator,
    w_keepLines_translator,
    w_keepNext_translator,
    w_kern_translator,
    w_kinsoku_translator,
    w_lang_translator,
    w_latentStyles_translator,
    w_left_translator,
    w_lsdException_translator,
    w_link_translator,
    w_lvl_translator,
    w_lvlOverride_translator,
    w_lvlJc_translator,
    w_lvlPicBulletId_translator,
    w_lvlRestart_translator,
    w_lvlStart_translator,
    w_lvlText_translator,
    w_multiLevelType_translator,
    w_locked_translator,
    w_mirrorIndents_translator,
    w_name_translator,
    w_next_translator,
    w_noProof_translator,
    w_noWrap_translator,
    w_num_translator,
    w_numbering_translator,
    w_numFmt_translator,
    w_numId_translator,
    w_numIdMacAtCleanup_translator,
    w_numPr_translator,
    w_numStyleLink_translator,
    w_nsid_translator,
    w_outline_translator,
    w_outlineLvl_translator,
    w_overflowPunct,
    w_oMath_translator,
    w_p_translator,
    w_pageBreakBefore_translator,
    w_pBdr_translator,
    w_personal_translator,
    w_personalCompose_translator,
    w_personalReply_translator,
    w_position_translator,
    w_pPr_translator,
    w_pStyle_translator,
    w_permStart_translator,
    w_permEnd_translator,
    w_r_translator,
    w_rFonts_translator,
    w_rPr_translator,
    w_rStyle_translator,
    w_rsid_translator,
    w_rtl_translator,
    w_right_translator,
    w_sdt_translator,
    w_semiHidden_translator,
    w_shadow_translator,
    w_shd_translator,
    w_smallCaps_translator,
    w_snapToGrid_translator,
    w_spacing_translator,
    w_suppressAutoHyphens_translator,
    w_suppressLineNumbers_translator,
    w_suppressOverlap_translator,
    w_suff_translator,
    w_specVanish_translator,
    w_start_translator,
    w_startOverride_translator,
    w_strike_translator,
    w_style_translator,
    w_styleLink_translator,
    w_styles_translator,
    w_sz_translator,
    w_szCs_translator,
    w_t_translator,
    w_tab_translator,
    w_tabs_translator,
    w_tbl_translator,
    w_tblBorders_translator,
    w_tblCaption_translator,
    w_tblCellMar_translator,
    w_tblCellSpacing_translator,
    w_tblDescription_translator,
    w_tblGrid_translator,
    w_tblHeader_translator,
    w_tblInd_translator,
    w_tblLayout_translator,
    w_tblLook_translator,
    w_tblOverlap_translator,
    w_tblPr_translator,
    w_tblStyle_translator,
    w_tblStyleColBandSize_translator,
    w_tblStyleRowBandSize_translator,
    w_tblW_translator,
    w_tblpPr_translator,
    w_tc_translator,
    w_tcBorders_translator,
    w_tcFitText_translator,
    w_tcMar_translator,
    w_tcPr_translator,
    w_tcW_translator,
    w_textDirection_translator,
    w_tl2br_translator,
    w_tmpl_translator,
    w_tr_translator,
    w_tr2bl_translator,
    w_trHeight_translator,
    w_trPr_translator,
    w_textAlignment_translator,
    w_textBoxTightWrap_translator,
    w_topLinePunct_translator,
    w_top_translator,
    w_u_translator,
    w_uiPriority_translator,
    w_unhideWhenUsed_translator,
    w_vAlign_translator,
    w_vanish_translator,
    w_vertAlign_translator,
    w_vMerge_translator,
    w_w_translator,
    w_wAfter_translator,
    w_wBefore_translator,
    w_webHidden_translator,
    w_widowControl_translator,
    w_wordWrap_translator,
    w_qFormat_translator,
    wp_anchor_translator,
    wp_inline_translator,
    w_commentRangeStart_translator,
    w_commentRangeEnd_translator,
  ]),
);

const additionalHandlers = Object.freeze(
  translatorList.reduce((acc, translator) => {
    if (typeof translator === 'function') return acc;
    const key = translator?.xmlName;
    if (!key) return acc;
    acc[key] = translator;
    return acc;
  }, {}),
);

const baseHandlers = {
  ...additionalHandlers,
};

/** @type {RegisteredHandlers} */
export const registeredHandlers = Object.freeze(baseHandlers);
