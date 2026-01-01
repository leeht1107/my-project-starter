# Claude Code 커스텀 커맨드

이 폴더에는 프로젝트별 커스텀 커맨드가 포함되어 있습니다.

## 사용 가능한 커맨드

### `/add-ui` - shadcn/ui 컴포넌트 추가

shadcn/ui 컴포넌트를 프로젝트에 빠르게 추가합니다.

**사용법:**
```bash
/add-ui <component-name> [<component-name> ...]
```

**예시:**
```bash
# 단일 컴포넌트 추가
/add-ui dialog

# 여러 컴포넌트 한 번에 추가
/add-ui dropdown-menu select toast

# 자주 사용하는 컴포넌트 세트
/add-ui form input label textarea checkbox
```

**사용 가능한 컴포넌트:**
- 전체 목록: https://ui.shadcn.com/docs/components
- 주요 컴포넌트: accordion, alert, avatar, badge, button, card, checkbox, dialog, dropdown-menu, form, input, label, select, sheet, table, tabs, toast, tooltip 등

**참고:**
- 컴포넌트는 `components/ui/` 폴더에 자동으로 추가됩니다
- 이미 존재하는 컴포넌트는 덮어씌워집니다
- 설정은 `components.json` 파일을 따릅니다 (New York 스타일)
