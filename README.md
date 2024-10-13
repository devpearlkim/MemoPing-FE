# MemoPing 메모핑 📒✨

> 메모를 간단히 기록할 수 있는 메모핑! 메모가 어렵다구? 메모핑과 함께 간단하고 쉽게 메모할 수 있어!

## Overview

A simple memo web application built with Next.js and Firebase Realtime Database. The application allows users to create, read, and delete memos with real-time synchronization using a Test-Driven Development (TDD) approach.

## Features

- ✏️ **Create Memo**: Add new memos with a simple input form.
- 📄 **Read Memo**: View a list of memos, which updates in real-time.
- 🗑️ **Delete Memo**: Remove memos from the list with a single click.
- 🔄 **Real-time Synchronization**: All changes are instantly reflected for all users through Firebase Realtime Database.
- ✅ **Test-Driven Development**: TDD methodology applied with Jest and React Testing Library.

## Tech Stack

- **Frontend**: Next.js, TypeScript
- **Backend**: Firebase Realtime Database
- **Testing**: Jest
- **Styling**: Tailwind CSS, Next UI

### **CRUD 기능 세부 분할 및 체크리스트**

#### **1. 메모 생성 (Create)**

- [v] **입력 상태 관리**: 사용자의 입력에 따라 상태가 업데이트.
  - [v] 입력 필드에 텍스트를 입력할 때 상태가 올바르게 변경되는지 확인.
- [v] **입력 유효성 검사**: 빈 값일 경우 메모는 추가되지 않고 alert 창 띄움.
  - [v] 빈 값 입력 시 alert 뜨는지 확인.
  - [v] 빈 값 입력 시 메모가 추가되지 않는지 확인.
- [ ] **메모 저장**: 유효한 입력이 제출되면, Firebase에 저장.
  - [ ] 제출 버튼 클릭 시 메모가 Firebase에 저장되는지 확인.
  - [ ] 저장 중 오류가 발생하면, 적절한 에러 메시지 표시.
- [ ] **저장 중 로딩 상태 표시**: 저장 중에 로딩 상태를 UI에 표시.

#### **2. 메모 읽기 (Read)**

- [ ] **Firebase에서 메모 데이터 가져오기**: Firebase에서 메모 목록을 불러오기.
  - [ ] 메모 데이터를 불러오고 상태에 저장.
  - [ ] 데이터 가져오기 실패 시, 오류 메시지 표시.
- [ ] **실시간 업데이트 반영**: 데이터 변경 시 화면에 실시간 반영.
- [v] **메모 목록 렌더링**: 가져온 메모 목록을 화면에 표시.
  - [v] 메모의 제목과 메시지 표시
  - [v] 메모가 없는 경우, "메모가 없습니다" 메시지 표시.

#### **3. 메모 수정 (Update)**

- [ ] **수정 버튼 추가**: 각 메모 아이템에 수정 버튼 추가.
- [ ] **수정 상태 전환**: 수정 버튼 클릭 시, 수정 가능한 입력 필드로 전환.
  - [ ] 수정 버튼 클릭 시, 기존 메모 내용이 입력 필드에 표시.
- [ ] **수정 내용 저장**: 수정된 내용이 Firebase에 업데이트.
- [ ] **수정 취소**: 수정 상태에서 취소 버튼을 클릭 시, 이전 내용 유지.

#### **4. 메모 삭제 (Delete)**

- [ ] **삭제 버튼 추가**: 각 메모 아이템에 삭제 버튼 추가.
- [ ] **삭제 확인 모달**: 삭제 버튼 클릭 시, 확인 모달 표시.
- [ ] **메모 삭제**: 확인 후, Firebase에서 메모 삭제.
- [ ] **삭제 중 로딩 상태 표시**: 삭제 중 로딩 상태를 표시.
