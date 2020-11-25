--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4
-- Dumped by pg_dump version 12.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: company; Type: TABLE DATA; Schema: core; Owner: maint
--

INSERT INTO core.company VALUES ('f60b7c8c-06a8-4cb7-862a-2505e1cb7e69', '2020-11-25 12:23:34.661919', '2020-11-25 12:23:34.661919', 'admin', 'admin', 'company', 'core', 0, true, 'ACME Corp', '');
INSERT INTO core.company VALUES ('20a8e60c-4494-4c09-aa9f-e14e4f6272db', '2020-11-25 12:23:34.661919', '2020-11-25 12:23:34.661919', 'admin', 'admin', 'company', 'core', 0, true, 'Evil Corp', '');
INSERT INTO core.company VALUES ('66bf055e-2944-4e9e-ac0e-7eb78e5e69d1', '2020-11-25 12:23:34.661919', '2020-11-25 12:23:34.661919', 'admin', 'admin', 'company', 'core', 0, true, 'Microsoft', '');
INSERT INTO core.company VALUES ('21b0a610-8bb1-41a7-b709-c731be0223a8', '2020-11-25 12:23:34.661919', '2020-11-25 12:23:34.661919', 'admin', 'admin', 'company', 'core', 0, true, 'Apple', '');
INSERT INTO core.company VALUES ('710e7bbe-d1b3-4a39-a9f3-a7e8dbc41487', '2020-11-25 12:23:34.661919', '2020-11-25 12:23:34.661919', 'admin', 'admin', 'company', 'core', 0, true, 'Google', '');


--
-- Data for Name: department; Type: TABLE DATA; Schema: core; Owner: maint
--



--
-- Data for Name: user; Type: TABLE DATA; Schema: system; Owner: maint
--



--
-- Data for Name: group; Type: TABLE DATA; Schema: system; Owner: maint
--



--
-- Data for Name: ci; Type: TABLE DATA; Schema: cmdb; Owner: maint
--



--
-- Data for Name: cost_centre; Type: TABLE DATA; Schema: core; Owner: maint
--



--
-- Data for Name: location; Type: TABLE DATA; Schema: core; Owner: maint
--



--
-- Data for Name: task; Type: TABLE DATA; Schema: core; Owner: maint
--



--
-- Data for Name: itsm_task; Type: TABLE DATA; Schema: itsm; Owner: maint
--



--
-- Data for Name: sla_definition; Type: TABLE DATA; Schema: itsm; Owner: maint
--



--
-- Data for Name: task_sla; Type: TABLE DATA; Schema: itsm; Owner: maint
--



--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: maint
--

INSERT INTO public.migrations VALUES (1, 1606266732178, 'init1606266732178');


--
-- Data for Name: dictionary; Type: TABLE DATA; Schema: system; Owner: maint
--

INSERT INTO system.dictionary VALUES ('a79003aa-57c2-45ad-8f54-c0c8bc4823f8', '2020-11-25 12:24:52.813349', '2020-11-25 12:24:52.813349', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'guid', 'GUID', 'dbo', 'uuid', NULL, 36, NULL);
INSERT INTO system.dictionary VALUES ('e4b20861-7764-42e8-8f33-b16bfce650c4', '2020-11-25 12:24:52.813927', '2020-11-25 12:24:52.813927', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'guid', 'GUID', 'dictionary', 'uuid', NULL, 36, NULL);
INSERT INTO system.dictionary VALUES ('049b1ad3-c0ac-45de-8d62-c35669588b18', '2020-11-25 12:24:52.813927', '2020-11-25 12:24:52.813927', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created_by', 'Created By', 'dictionary', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('2614a06f-9715-48fd-8118-96923844bbfc', '2020-11-25 12:24:52.813349', '2020-11-25 12:24:52.813349', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created_by', 'Created By', 'dbo', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('bba0b248-3b03-4011-847b-f250eb3c0332', '2020-11-25 12:24:52.813349', '2020-11-25 12:24:52.813349', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated_by', 'Updated By', 'dbo', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('bf112be6-d303-407f-8353-4e8b251b5010', '2020-11-25 12:24:52.813631', '2020-11-25 12:24:52.813631', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'guid', 'GUID', 'user', 'uuid', NULL, 36, NULL);
INSERT INTO system.dictionary VALUES ('b938de3f-5e88-46c5-84a5-66aac4de7f13', '2020-11-25 12:24:52.813927', '2020-11-25 12:24:52.813927', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated_by', 'Updated By', 'dictionary', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('71c987a7-52d2-4917-9cca-4be584aef211', '2020-11-25 12:24:52.813349', '2020-11-25 12:24:52.813349', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created', 'Created', 'dbo', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('37164924-f276-4fe9-8828-1a756ac74360', '2020-11-25 12:24:52.813631', '2020-11-25 12:24:52.813631', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created_by', 'Created By', 'user', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('3ebad45b-ed9a-44b0-bb7a-ee839f8747c7', '2020-11-25 12:24:52.813927', '2020-11-25 12:24:52.813927', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created', 'Created', 'dictionary', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('1247bab2-de1e-47f1-8ba4-b648bc607d18', '2020-11-25 12:24:52.813349', '2020-11-25 12:24:52.813349', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated', 'Updated', 'dbo', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('47b23cbf-c930-4518-8fbe-a4dff2ceda2b', '2020-11-25 12:24:52.813631', '2020-11-25 12:24:52.813631', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated_by', 'Updated By', 'user', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('2c2f9498-7ef0-470c-8d17-ec3aca1ef05d', '2020-11-25 12:24:52.813349', '2020-11-25 12:24:52.813349', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'class_name', 'Class Name', 'dbo', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('3f520696-e77b-424c-85ce-7e9df1270413', '2020-11-25 12:24:52.813927', '2020-11-25 12:24:52.813927', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated', 'Updated', 'dictionary', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('ab4404cc-164a-46a7-9859-6aad7157899f', '2020-11-25 12:24:52.813631', '2020-11-25 12:24:52.813631', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created', 'Created', 'user', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('1b70d1ba-3f4c-452a-8e32-c66a53e09212', '2020-11-25 12:24:52.813349', '2020-11-25 12:24:52.813349', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'update_count', 'Update count', 'dbo', 'int', NULL, 32, NULL);
INSERT INTO system.dictionary VALUES ('38dcfcd8-9cf2-41f5-a9df-03ae6989db12', '2020-11-25 12:24:52.813927', '2020-11-25 12:24:52.813927', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'class_name', 'Class Name', 'dictionary', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('0653da15-5daa-40d4-bf8f-8f19ea621f19', '2020-11-25 12:24:52.813349', '2020-11-25 12:24:52.813349', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'scope', 'Scope', 'dbo', 'text', NULL, 400, NULL);
INSERT INTO system.dictionary VALUES ('44dfbc10-0719-4b07-bd01-1830ba2b6616', '2020-11-25 12:24:52.813631', '2020-11-25 12:24:52.813631', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated', 'Updated', 'user', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('c7524e5b-072d-4f0f-9fca-8905eb0d8831', '2020-11-25 12:24:52.813927', '2020-11-25 12:24:52.813927', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'update_count', 'Update count', 'dictionary', 'int', NULL, 32, NULL);
INSERT INTO system.dictionary VALUES ('f22a045f-015b-4e39-82cb-ff5eb0d0f241', '2020-11-25 12:24:52.813631', '2020-11-25 12:24:52.813631', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'class_name', 'Class Name', 'user', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('a03a36a2-09bb-46fe-8ebd-0579af0cade4', '2020-11-25 12:24:52.813927', '2020-11-25 12:24:52.813927', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'scope', 'Scope', 'dictionary', 'text', NULL, 400, NULL);
INSERT INTO system.dictionary VALUES ('70947a64-7bfa-46b0-92d1-58b94f736bf1', '2020-11-25 12:24:52.813631', '2020-11-25 12:24:52.813631', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'update_count', 'Update count', 'user', 'int', NULL, 32, NULL);
INSERT INTO system.dictionary VALUES ('023bcd38-98b6-4410-a002-8690cc7b26ab', '2020-11-25 12:24:52.813631', '2020-11-25 12:24:52.813631', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'scope', 'Scope', 'user', 'text', NULL, 400, NULL);
INSERT INTO system.dictionary VALUES ('78b87188-1ef8-41d3-a5df-988c156c1709', '2020-11-25 12:24:52.841343', '2020-11-25 12:24:52.841343', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'guid', 'GUID', 'acl', 'uuid', NULL, 36, NULL);
INSERT INTO system.dictionary VALUES ('d68422d6-0fa1-4701-b59e-799d5ebdd690', '2020-11-25 12:24:52.841343', '2020-11-25 12:24:52.841343', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created_by', 'Created By', 'acl', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('e32749c8-2b48-402d-b6f3-a16a072898a8', '2020-11-25 12:24:52.841343', '2020-11-25 12:24:52.841343', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated_by', 'Updated By', 'acl', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('3ae879d8-f3da-4e51-ac6e-a83692773cd4', '2020-11-25 12:24:52.841343', '2020-11-25 12:24:52.841343', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created', 'Created', 'acl', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('b5612a71-d56c-4f81-a133-71c02d996005', '2020-11-25 12:24:52.841343', '2020-11-25 12:24:52.841343', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated', 'Updated', 'acl', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('53e15844-cb41-4638-9d1d-3d7c565d25e8', '2020-11-25 12:24:52.841343', '2020-11-25 12:24:52.841343', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'class_name', 'Class Name', 'acl', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('fe7d7b30-15f7-4d02-99e9-c5330763eb4f', '2020-11-25 12:24:52.841343', '2020-11-25 12:24:52.841343', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'update_count', 'Update count', 'acl', 'int', NULL, 32, NULL);
INSERT INTO system.dictionary VALUES ('96d0246f-3bfe-42a0-9005-7e6c96bd5949', '2020-11-25 12:24:52.841343', '2020-11-25 12:24:52.841343', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'scope', 'Scope', 'acl', 'text', NULL, 400, NULL);
INSERT INTO system.dictionary VALUES ('ff51f5b0-f1c5-4f6b-9435-7696d56470b5', '2020-11-25 12:24:52.857944', '2020-11-25 12:24:52.857944', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'guid', 'GUID', 'acl_requires_role', 'uuid', NULL, 36, NULL);
INSERT INTO system.dictionary VALUES ('57d0e5cf-a46b-4195-bc1c-50c4876ca544', '2020-11-25 12:24:52.857944', '2020-11-25 12:24:52.857944', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created_by', 'Created By', 'acl_requires_role', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('27fa8f7e-fd8b-41a7-9f2a-5e8a8dfd5fac', '2020-11-25 12:24:52.857944', '2020-11-25 12:24:52.857944', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated_by', 'Updated By', 'acl_requires_role', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('51d9c078-bd9c-404b-bf72-0681fce75e84', '2020-11-25 12:24:52.857944', '2020-11-25 12:24:52.857944', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created', 'Created', 'acl_requires_role', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('7ead2598-2dc3-4f9a-a527-2ac1640e0035', '2020-11-25 12:24:52.857944', '2020-11-25 12:24:52.857944', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated', 'Updated', 'acl_requires_role', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('6c110d55-de34-4778-a32e-10389d70514e', '2020-11-25 12:24:52.857944', '2020-11-25 12:24:52.857944', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'class_name', 'Class Name', 'acl_requires_role', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('bd202f16-3aa6-4b78-950e-7efaf1e5c3f9', '2020-11-25 12:24:52.858141', '2020-11-25 12:24:52.858141', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'guid', 'GUID', 'field_label', 'uuid', NULL, 36, NULL);
INSERT INTO system.dictionary VALUES ('284e390f-2ed3-41d9-ba67-2dac750aa80f', '2020-11-25 12:24:52.857944', '2020-11-25 12:24:52.857944', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'update_count', 'Update count', 'acl_requires_role', 'int', NULL, 32, NULL);
INSERT INTO system.dictionary VALUES ('73a067ed-a105-40bb-9c73-55a5e2ade9ce', '2020-11-25 12:24:52.858141', '2020-11-25 12:24:52.858141', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created_by', 'Created By', 'field_label', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('a18e60c8-e958-4875-8312-8e30aecda93f', '2020-11-25 12:24:52.857944', '2020-11-25 12:24:52.857944', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'scope', 'Scope', 'acl_requires_role', 'text', NULL, 400, NULL);
INSERT INTO system.dictionary VALUES ('085e2292-009e-4b7f-99db-453378036fd5', '2020-11-25 12:24:52.858141', '2020-11-25 12:24:52.858141', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated_by', 'Updated By', 'field_label', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('41bf3bf4-85d4-4eb4-9a24-2dd2aaaee85e', '2020-11-25 12:24:52.858141', '2020-11-25 12:24:52.858141', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created', 'Created', 'field_label', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('6cd4f5d4-29dd-4521-9b4e-9c170c39ccaa', '2020-11-25 12:24:52.858141', '2020-11-25 12:24:52.858141', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated', 'Updated', 'field_label', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('64996039-dfe4-431e-9a53-a6688c16b08b', '2020-11-25 12:24:52.858141', '2020-11-25 12:24:52.858141', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'class_name', 'Class Name', 'field_label', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('7dba90be-38ad-4345-80ce-3a3a3bef896e', '2020-11-25 12:24:52.858141', '2020-11-25 12:24:52.858141', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'update_count', 'Update count', 'field_label', 'int', NULL, 32, NULL);
INSERT INTO system.dictionary VALUES ('e0368e78-2328-4d49-9d7b-734177991094', '2020-11-25 12:24:52.858141', '2020-11-25 12:24:52.858141', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'scope', 'Scope', 'field_label', 'text', NULL, 400, NULL);
INSERT INTO system.dictionary VALUES ('2b0ccb9d-d5fc-4f1b-a481-e0df6b363c86', '2020-11-25 12:24:52.878118', '2020-11-25 12:24:52.878118', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'guid', 'GUID', 'group', 'uuid', NULL, 36, NULL);
INSERT INTO system.dictionary VALUES ('f7e3a94a-39cf-4014-8e71-e1d8f8a5f6e8', '2020-11-25 12:24:52.878118', '2020-11-25 12:24:52.878118', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created_by', 'Created By', 'group', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('28b3022c-55bd-4bcc-8281-959e0085fee1', '2020-11-25 12:24:52.878118', '2020-11-25 12:24:52.878118', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated_by', 'Updated By', 'group', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('b751ef22-b727-4e09-97ad-9e89311645cf', '2020-11-25 12:24:52.878118', '2020-11-25 12:24:52.878118', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created', 'Created', 'group', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('1449da82-3ae0-42d5-b880-b0048962d3c0', '2020-11-25 12:24:52.878118', '2020-11-25 12:24:52.878118', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated', 'Updated', 'group', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('20d43e09-38c6-4863-866c-b0e6cf929e1a', '2020-11-25 12:24:52.878118', '2020-11-25 12:24:52.878118', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'class_name', 'Class Name', 'group', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('db056ed3-0f62-4754-8549-880eb7168ead', '2020-11-25 12:24:52.878118', '2020-11-25 12:24:52.878118', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'update_count', 'Update count', 'group', 'int', NULL, 32, NULL);
INSERT INTO system.dictionary VALUES ('0302ad74-ec25-4bad-b385-f9a6e6ba3fc7', '2020-11-25 12:24:52.878118', '2020-11-25 12:24:52.878118', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'scope', 'Scope', 'group', 'text', NULL, 400, NULL);
INSERT INTO system.dictionary VALUES ('d87450bc-a90f-4336-b45e-1ec98d357a5d', '2020-11-25 12:24:52.919037', '2020-11-25 12:24:52.919037', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'guid', 'GUID', 'ui_action_requires_role', 'uuid', NULL, 36, NULL);
INSERT INTO system.dictionary VALUES ('d007db92-c2ae-4262-8fad-8886d22eceea', '2020-11-25 12:24:52.919037', '2020-11-25 12:24:52.919037', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created_by', 'Created By', 'ui_action_requires_role', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('40d6407f-a990-42ce-86ef-bd4edf1bda8e', '2020-11-25 12:24:52.919037', '2020-11-25 12:24:52.919037', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated_by', 'Updated By', 'ui_action_requires_role', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('54c636a5-42b3-4d0b-b4e1-923a5decf2cf', '2020-11-25 12:24:52.919037', '2020-11-25 12:24:52.919037', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created', 'Created', 'ui_action_requires_role', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('3b71540d-77db-4dc1-962e-01625ca90876', '2020-11-25 12:24:52.919037', '2020-11-25 12:24:52.919037', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated', 'Updated', 'ui_action_requires_role', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('ed44af53-6213-4538-941a-85ae35430aad', '2020-11-25 12:24:52.919037', '2020-11-25 12:24:52.919037', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'class_name', 'Class Name', 'ui_action_requires_role', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('05d25512-1d47-4c54-be63-7a1669d4bc3d', '2020-11-25 12:24:52.919037', '2020-11-25 12:24:52.919037', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'update_count', 'Update count', 'ui_action_requires_role', 'int', NULL, 32, NULL);
INSERT INTO system.dictionary VALUES ('b49d830c-dffe-4e66-8020-84ac86df3579', '2020-11-25 12:24:52.919037', '2020-11-25 12:24:52.919037', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'scope', 'Scope', 'ui_action_requires_role', 'text', NULL, 400, NULL);
INSERT INTO system.dictionary VALUES ('73cce3be-fceb-4c17-be42-decb865a643a', '2020-11-25 12:24:52.882375', '2020-11-25 12:24:52.882375', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'guid', 'GUID', 'group_membership', 'uuid', NULL, 36, NULL);
INSERT INTO system.dictionary VALUES ('9699aa7f-c26b-4863-a1ab-7ade4b65fdef', '2020-11-25 12:24:52.882375', '2020-11-25 12:24:52.882375', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created_by', 'Created By', 'group_membership', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('6db58b22-86c6-4f9b-8436-31294697f99e', '2020-11-25 12:24:52.882375', '2020-11-25 12:24:52.882375', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated_by', 'Updated By', 'group_membership', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('32426ec2-fe59-4844-b657-6381a931c610', '2020-11-25 12:24:52.882375', '2020-11-25 12:24:52.882375', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created', 'Created', 'group_membership', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('a0e04508-59f4-4214-8a93-1c2d827d3905', '2020-11-25 12:24:52.882375', '2020-11-25 12:24:52.882375', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated', 'Updated', 'group_membership', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('c51fd136-0d72-441f-9170-b6e3ab1a936d', '2020-11-25 12:24:52.882375', '2020-11-25 12:24:52.882375', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'class_name', 'Class Name', 'group_membership', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('dc6df829-79f0-43a2-a478-4ee54e0ab12f', '2020-11-25 12:24:52.882375', '2020-11-25 12:24:52.882375', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'update_count', 'Update count', 'group_membership', 'int', NULL, 32, NULL);
INSERT INTO system.dictionary VALUES ('fdc85c14-7e5b-4027-8546-a5ccff2bba9b', '2020-11-25 12:24:52.882375', '2020-11-25 12:24:52.882375', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'scope', 'Scope', 'group_membership', 'text', NULL, 400, NULL);
INSERT INTO system.dictionary VALUES ('1d814240-287b-432b-88ae-fa4b42817585', '2020-11-25 12:24:52.934211', '2020-11-25 12:24:52.934211', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'guid', 'GUID', 'server_script', 'uuid', NULL, 36, NULL);
INSERT INTO system.dictionary VALUES ('3b4c72df-9f01-4003-87d9-e1ca8f2c1b60', '2020-11-25 12:24:52.934211', '2020-11-25 12:24:52.934211', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created_by', 'Created By', 'server_script', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('c2805035-fbd6-402e-be77-a1ec9b89ead2', '2020-11-25 12:24:52.934211', '2020-11-25 12:24:52.934211', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated_by', 'Updated By', 'server_script', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('fc5efe73-0425-4d7c-92a6-0a52786099bb', '2020-11-25 12:24:52.934211', '2020-11-25 12:24:52.934211', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created', 'Created', 'server_script', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('85ac5513-a92c-4b89-93cb-430d8bd44952', '2020-11-25 12:24:52.934211', '2020-11-25 12:24:52.934211', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated', 'Updated', 'server_script', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('b5ef259f-576a-4930-8267-dd117ef48459', '2020-11-25 12:24:52.934211', '2020-11-25 12:24:52.934211', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'class_name', 'Class Name', 'server_script', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('605aad5c-f77f-4a51-b485-45f0739944b5', '2020-11-25 12:24:52.934211', '2020-11-25 12:24:52.934211', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'update_count', 'Update count', 'server_script', 'int', NULL, 32, NULL);
INSERT INTO system.dictionary VALUES ('43a50164-3f17-4ca0-97d6-0d55e1e66bd2', '2020-11-25 12:24:52.934211', '2020-11-25 12:24:52.934211', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'scope', 'Scope', 'server_script', 'text', NULL, 400, NULL);
INSERT INTO system.dictionary VALUES ('e33a0bed-3faf-4efd-962d-d62d75b62824', '2020-11-25 12:24:52.889681', '2020-11-25 12:24:52.889681', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'guid', 'GUID', 'ui_action', 'uuid', NULL, 36, NULL);
INSERT INTO system.dictionary VALUES ('5afc98e7-01f7-4382-8c5b-981a31114dd6', '2020-11-25 12:24:52.889681', '2020-11-25 12:24:52.889681', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created_by', 'Created By', 'ui_action', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('45972b44-91bc-4047-acb5-e7deba24cc0d', '2020-11-25 12:24:52.889681', '2020-11-25 12:24:52.889681', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated_by', 'Updated By', 'ui_action', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('e66858c5-3944-4f90-bc43-23d9cdae9f86', '2020-11-25 12:24:52.889681', '2020-11-25 12:24:52.889681', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created', 'Created', 'ui_action', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('0284d3fe-7252-423b-a2d8-3fafac73aaa1', '2020-11-25 12:24:52.889681', '2020-11-25 12:24:52.889681', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated', 'Updated', 'ui_action', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('f0e306b2-ed44-43fc-848e-4baf814dd8e0', '2020-11-25 12:24:52.889681', '2020-11-25 12:24:52.889681', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'class_name', 'Class Name', 'ui_action', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('9cb701a2-688c-4311-84d0-ac6e0e398d19', '2020-11-25 12:24:52.889681', '2020-11-25 12:24:52.889681', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'update_count', 'Update count', 'ui_action', 'int', NULL, 32, NULL);
INSERT INTO system.dictionary VALUES ('c5ea0243-cb0f-455e-ba49-0d290eb05585', '2020-11-25 12:24:52.889681', '2020-11-25 12:24:52.889681', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'scope', 'Scope', 'ui_action', 'text', NULL, 400, NULL);
INSERT INTO system.dictionary VALUES ('344e4378-ff49-476d-a9fb-0087fd8969dd', '2020-11-25 12:24:52.934489', '2020-11-25 12:24:52.934489', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'guid', 'GUID', 'role', 'uuid', NULL, 36, NULL);
INSERT INTO system.dictionary VALUES ('96d8eff2-7604-4995-9179-f54788d78934', '2020-11-25 12:24:52.934489', '2020-11-25 12:24:52.934489', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created_by', 'Created By', 'role', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('43651aea-42cd-43dd-bdb9-218a0685769f', '2020-11-25 12:24:52.934489', '2020-11-25 12:24:52.934489', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated_by', 'Updated By', 'role', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('52de1bb4-669c-4d62-9a23-0b2f6585f87c', '2020-11-25 12:24:52.934489', '2020-11-25 12:24:52.934489', 'maint', 'maint', 'dictionary', 'system', 0, true, false, true, false, false, 'created', 'Created', 'role', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('a0cb8344-176c-4675-949b-ae31c4d1abc8', '2020-11-25 12:24:52.934489', '2020-11-25 12:24:52.934489', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'updated', 'Updated', 'role', 'timestamp', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('5bc5112b-8c49-4f42-b338-72d7105fa8ec', '2020-11-25 12:24:52.934489', '2020-11-25 12:24:52.934489', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'class_name', 'Class Name', 'role', 'text', NULL, 80, NULL);
INSERT INTO system.dictionary VALUES ('4b49ec35-cd39-42da-95de-5d2c5f754175', '2020-11-25 12:24:52.934489', '2020-11-25 12:24:52.934489', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'update_count', 'Update count', 'role', 'int', NULL, 32, NULL);
INSERT INTO system.dictionary VALUES ('8402efaf-e679-4e87-9d57-e43e1f74c4fa', '2020-11-25 12:24:52.934489', '2020-11-25 12:24:52.934489', 'maint', 'maint', 'dictionary', 'system', 0, true, false, false, false, false, 'scope', 'Scope', 'role', 'text', NULL, 400, NULL);


--
-- Data for Name: acl; Type: TABLE DATA; Schema: system; Owner: maint
--



--
-- Data for Name: role; Type: TABLE DATA; Schema: system; Owner: maint
--

INSERT INTO system.role VALUES ('b5105aed-4bb7-4432-b34e-5d55074fc16c', '2020-11-25 12:24:52.95235', '2020-11-25 12:24:52.95235', 'maint', 'maint', 'role', 'system', 0, true, 'admin');
INSERT INTO system.role VALUES ('cffbd479-93e6-4ba9-8ece-85396995324a', '2020-11-25 12:24:52.95235', '2020-11-25 12:24:52.95235', 'maint', 'maint', 'role', 'system', 0, true, 'itil');
INSERT INTO system.role VALUES ('bc85ec8d-c670-4330-97a6-f29cddfaf567', '2020-11-25 12:24:52.95235', '2020-11-25 12:24:52.95235', 'maint', 'maint', 'role', 'system', 0, true, 'user');


--
-- Data for Name: acl_requires_role; Type: TABLE DATA; Schema: system; Owner: maint
--



--
-- Data for Name: dbo; Type: TABLE DATA; Schema: system; Owner: maint
--

INSERT INTO system.dbo VALUES ('2851562a-6609-4d35-ae5d-819fffcfaf89', '2020-11-25 12:24:52.753435', '2020-11-25 12:24:52.753435', 'maint', 'maint', 'dbo', 'system', 0, true, 'dbo', 'Table', NULL, NULL, false, NULL, NULL, 'system');
INSERT INTO system.dbo VALUES ('1958e427-cce9-48b7-ac2d-76ad16ab93b4', '2020-11-25 12:24:52.753435', '2020-11-25 12:24:52.753435', 'maint', 'maint', 'dbo', 'system', 0, true, 'user', 'User', NULL, NULL, false, NULL, NULL, 'system');
INSERT INTO system.dbo VALUES ('56df0283-441a-4f4e-98d1-43863b886248', '2020-11-25 12:24:52.753435', '2020-11-25 12:24:52.753435', 'maint', 'maint', 'dbo', 'system', 0, true, 'dictionary', 'Dictionary', NULL, NULL, false, NULL, NULL, 'system');
INSERT INTO system.dbo VALUES ('7a040403-721e-489e-9fbb-20086496f2de', '2020-11-25 12:24:52.753435', '2020-11-25 12:24:52.753435', 'maint', 'maint', 'dbo', 'system', 0, true, 'acl', 'Access Control', NULL, NULL, false, NULL, NULL, 'system');
INSERT INTO system.dbo VALUES ('2131dece-d5c9-44f4-af4e-c2fbd60ffcf1', '2020-11-25 12:24:52.753435', '2020-11-25 12:24:52.753435', 'maint', 'maint', 'dbo', 'system', 0, true, 'acl_requires_role', 'ACL Requires Role', NULL, NULL, false, NULL, NULL, 'system');
INSERT INTO system.dbo VALUES ('aadd5d7b-9918-45f7-9b92-a2a7593cf95b', '2020-11-25 12:24:52.753435', '2020-11-25 12:24:52.753435', 'maint', 'maint', 'dbo', 'system', 0, true, 'field_label', 'Field Label', NULL, NULL, false, NULL, NULL, 'system');
INSERT INTO system.dbo VALUES ('441b0c71-b9b7-4b1f-8ee9-4a581e77dee6', '2020-11-25 12:24:52.753435', '2020-11-25 12:24:52.753435', 'maint', 'maint', 'dbo', 'system', 0, true, 'group', 'Group', NULL, NULL, false, NULL, NULL, 'system');
INSERT INTO system.dbo VALUES ('9a3588a7-496c-4aba-adb2-aff1e8027e02', '2020-11-25 12:24:52.753435', '2020-11-25 12:24:52.753435', 'maint', 'maint', 'dbo', 'system', 0, true, 'group_membership', 'Group Membership', NULL, NULL, false, NULL, NULL, 'system');
INSERT INTO system.dbo VALUES ('d4117dbe-d421-40fb-82c4-8890355ee1b1', '2020-11-25 12:24:52.753435', '2020-11-25 12:24:52.753435', 'maint', 'maint', 'dbo', 'system', 0, true, 'ui_action', 'UI Action', NULL, NULL, false, NULL, NULL, 'system');
INSERT INTO system.dbo VALUES ('1cc7636c-67b1-48af-93fb-8459742ff4d3', '2020-11-25 12:24:52.753435', '2020-11-25 12:24:52.753435', 'maint', 'maint', 'dbo', 'system', 0, true, 'ui_action_requires_role', 'UI Action Requires Role', NULL, NULL, false, NULL, NULL, 'system');
INSERT INTO system.dbo VALUES ('29a50a77-9e17-4e8b-852c-f575b2a26388', '2020-11-25 12:24:52.753435', '2020-11-25 12:24:52.753435', 'maint', 'maint', 'dbo', 'system', 0, true, 'server_script', 'Server Script', NULL, NULL, false, NULL, NULL, 'system');
INSERT INTO system.dbo VALUES ('0f4df2aa-1777-44f7-9751-cfc946179ab2', '2020-11-25 12:24:52.753435', '2020-11-25 12:24:52.753435', 'maint', 'maint', 'dbo', 'system', 0, true, 'role', 'Role', NULL, NULL, false, NULL, NULL, 'system');


--
-- Data for Name: event; Type: TABLE DATA; Schema: system; Owner: maint
--



--
-- Data for Name: event_action; Type: TABLE DATA; Schema: system; Owner: maint
--



--
-- Data for Name: event_queue_entry; Type: TABLE DATA; Schema: system; Owner: maint
--



--
-- Data for Name: field_label; Type: TABLE DATA; Schema: system; Owner: maint
--

INSERT INTO system.field_label VALUES ('3edb0500-fec5-4393-be3d-32a7f6f6d99b', '2020-11-25 12:24:52.981064', '2020-11-25 12:24:52.981064', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created By', 'dbo', '2614a06f-9715-48fd-8118-96923844bbfc');
INSERT INTO system.field_label VALUES ('7a1cef35-dd0b-42c7-b05a-e42f5f0931c0', '2020-11-25 12:24:52.981279', '2020-11-25 12:24:52.981279', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated By', 'dbo', 'bba0b248-3b03-4011-847b-f250eb3c0332');
INSERT INTO system.field_label VALUES ('a0a313dd-7938-457c-b6e7-7c2db685badc', '2020-11-25 12:24:52.980825', '2020-11-25 12:24:52.980825', 'maint', 'maint', 'field_label', 'system', 0, true, 'GUID', 'dbo', 'a79003aa-57c2-45ad-8f54-c0c8bc4823f8');
INSERT INTO system.field_label VALUES ('5b617faa-355c-448c-80b9-38198d2ac2db', '2020-11-25 12:24:52.991657', '2020-11-25 12:24:52.991657', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created', 'dbo', '71c987a7-52d2-4917-9cca-4be584aef211');
INSERT INTO system.field_label VALUES ('87ac0f34-ddd8-4ee8-a482-8727b76bd77a', '2020-11-25 12:24:52.991989', '2020-11-25 12:24:52.991989', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated', 'dbo', '1247bab2-de1e-47f1-8ba4-b648bc607d18');
INSERT INTO system.field_label VALUES ('f0ce0331-d179-4da6-9e7e-d1c4e29b1561', '2020-11-25 12:24:52.994565', '2020-11-25 12:24:52.994565', 'maint', 'maint', 'field_label', 'system', 0, true, 'Class Name', 'dbo', '2c2f9498-7ef0-470c-8d17-ec3aca1ef05d');
INSERT INTO system.field_label VALUES ('4ae56cba-049f-469a-a0b9-643e3612bc8c', '2020-11-25 12:24:52.998039', '2020-11-25 12:24:52.998039', 'maint', 'maint', 'field_label', 'system', 0, true, 'Update count', 'dbo', '1b70d1ba-3f4c-452a-8e32-c66a53e09212');
INSERT INTO system.field_label VALUES ('c95bfef6-05c3-469b-9c2e-49358a35105a', '2020-11-25 12:24:53.000484', '2020-11-25 12:24:53.000484', 'maint', 'maint', 'field_label', 'system', 0, true, 'Scope', 'dbo', '0653da15-5daa-40d4-bf8f-8f19ea621f19');
INSERT INTO system.field_label VALUES ('63e0457a-2db1-4cff-9957-07f39e96229a', '2020-11-25 12:24:53.007667', '2020-11-25 12:24:53.007667', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created By', 'dictionary', '049b1ad3-c0ac-45de-8d62-c35669588b18');
INSERT INTO system.field_label VALUES ('d0e13763-1726-433a-ae96-e50576bee425', '2020-11-25 12:24:53.007897', '2020-11-25 12:24:53.007897', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated By', 'dictionary', 'b938de3f-5e88-46c5-84a5-66aac4de7f13');
INSERT INTO system.field_label VALUES ('e20b6b39-5eca-4252-ae3a-154bd524c1c7', '2020-11-25 12:24:53.00743', '2020-11-25 12:24:53.00743', 'maint', 'maint', 'field_label', 'system', 0, true, 'GUID', 'dictionary', 'e4b20861-7764-42e8-8f33-b16bfce650c4');
INSERT INTO system.field_label VALUES ('81e9ae12-fd72-4c1e-b452-e2370c335b00', '2020-11-25 12:24:53.014825', '2020-11-25 12:24:53.014825', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated', 'dictionary', '3f520696-e77b-424c-85ce-7e9df1270413');
INSERT INTO system.field_label VALUES ('ccd37139-b9cb-4f66-b42f-1212a2538488', '2020-11-25 12:24:53.014614', '2020-11-25 12:24:53.014614', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created', 'dictionary', '3ebad45b-ed9a-44b0-bb7a-ee839f8747c7');
INSERT INTO system.field_label VALUES ('3289c4a7-204b-40bb-b83f-0f93947d6dab', '2020-11-25 12:24:53.016461', '2020-11-25 12:24:53.016461', 'maint', 'maint', 'field_label', 'system', 0, true, 'Class Name', 'dictionary', '38dcfcd8-9cf2-41f5-a9df-03ae6989db12');
INSERT INTO system.field_label VALUES ('a0164839-cd6b-4393-956f-e2cdf23cdba6', '2020-11-25 12:24:53.026172', '2020-11-25 12:24:53.026172', 'maint', 'maint', 'field_label', 'system', 0, true, 'Update count', 'dictionary', 'c7524e5b-072d-4f0f-9fca-8905eb0d8831');
INSERT INTO system.field_label VALUES ('b25bd355-79e1-4dec-9ae6-51a1f4f59796', '2020-11-25 12:24:53.026436', '2020-11-25 12:24:53.026436', 'maint', 'maint', 'field_label', 'system', 0, true, 'Scope', 'dictionary', 'a03a36a2-09bb-46fe-8ebd-0579af0cade4');
INSERT INTO system.field_label VALUES ('9c58735c-995b-4618-8685-2f15b1bbd30d', '2020-11-25 12:24:53.035039', '2020-11-25 12:24:53.035039', 'maint', 'maint', 'field_label', 'system', 0, true, 'GUID', 'user', 'bf112be6-d303-407f-8353-4e8b251b5010');
INSERT INTO system.field_label VALUES ('0b2eb05f-8937-47f7-bc22-f63823f65165', '2020-11-25 12:24:53.0353', '2020-11-25 12:24:53.0353', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created By', 'user', '37164924-f276-4fe9-8828-1a756ac74360');
INSERT INTO system.field_label VALUES ('12f0445d-569e-44b4-9b72-c0e90cb88dc7', '2020-11-25 12:24:53.035541', '2020-11-25 12:24:53.035541', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated By', 'user', '47b23cbf-c930-4518-8fbe-a4dff2ceda2b');
INSERT INTO system.field_label VALUES ('c45c1241-ebab-4625-919e-33f05a10174d', '2020-11-25 12:24:53.043738', '2020-11-25 12:24:53.043738', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created', 'user', 'ab4404cc-164a-46a7-9859-6aad7157899f');
INSERT INTO system.field_label VALUES ('101e9b1b-ef83-4c83-b672-ac8ab0d7f59c', '2020-11-25 12:24:53.043932', '2020-11-25 12:24:53.043932', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated', 'user', '44dfbc10-0719-4b07-bd01-1830ba2b6616');
INSERT INTO system.field_label VALUES ('b47296c0-a25b-4699-b0c8-709a414df734', '2020-11-25 12:24:53.045092', '2020-11-25 12:24:53.045092', 'maint', 'maint', 'field_label', 'system', 0, true, 'Class Name', 'user', 'f22a045f-015b-4e39-82cb-ff5eb0d0f241');
INSERT INTO system.field_label VALUES ('9da17880-93f8-4d93-8994-80148ef40f1d', '2020-11-25 12:24:53.050118', '2020-11-25 12:24:53.050118', 'maint', 'maint', 'field_label', 'system', 0, true, 'Update count', 'user', '70947a64-7bfa-46b0-92d1-58b94f736bf1');
INSERT INTO system.field_label VALUES ('83044a74-96b9-41b5-9243-0571117f7546', '2020-11-25 12:24:53.050457', '2020-11-25 12:24:53.050457', 'maint', 'maint', 'field_label', 'system', 0, true, 'Scope', 'user', '023bcd38-98b6-4410-a002-8690cc7b26ab');
INSERT INTO system.field_label VALUES ('4b84609e-86fc-43fb-9a8c-330c7d826a96', '2020-11-25 12:24:53.065797', '2020-11-25 12:24:53.065797', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated By', 'acl', 'e32749c8-2b48-402d-b6f3-a16a072898a8');
INSERT INTO system.field_label VALUES ('149f7fd4-5261-461a-9c02-c20789ee2fa0', '2020-11-25 12:24:53.065446', '2020-11-25 12:24:53.065446', 'maint', 'maint', 'field_label', 'system', 0, true, 'GUID', 'acl', '78b87188-1ef8-41d3-a5df-988c156c1709');
INSERT INTO system.field_label VALUES ('b06bb1ec-8428-4907-bd65-36e1728d34be', '2020-11-25 12:24:53.06563', '2020-11-25 12:24:53.06563', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created By', 'acl', 'd68422d6-0fa1-4701-b59e-799d5ebdd690');
INSERT INTO system.field_label VALUES ('febbe22d-e34b-4072-a646-0ec3a921ab3e', '2020-11-25 12:24:53.071073', '2020-11-25 12:24:53.071073', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created', 'acl', '3ae879d8-f3da-4e51-ac6e-a83692773cd4');
INSERT INTO system.field_label VALUES ('f96facae-9c89-4dc7-b3b6-178695ed92fa', '2020-11-25 12:24:53.071292', '2020-11-25 12:24:53.071292', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated', 'acl', 'b5612a71-d56c-4f81-a133-71c02d996005');
INSERT INTO system.field_label VALUES ('fa767c5f-fdf2-412e-b209-34a47e49b28b', '2020-11-25 12:24:53.073164', '2020-11-25 12:24:53.073164', 'maint', 'maint', 'field_label', 'system', 0, true, 'Class Name', 'acl', '53e15844-cb41-4638-9d1d-3d7c565d25e8');
INSERT INTO system.field_label VALUES ('cc00b8f2-c8e2-40e0-bf09-6136810a1e7c', '2020-11-25 12:24:53.078196', '2020-11-25 12:24:53.078196', 'maint', 'maint', 'field_label', 'system', 0, true, 'Scope', 'acl', '96d0246f-3bfe-42a0-9005-7e6c96bd5949');
INSERT INTO system.field_label VALUES ('91f3aad8-6a4e-4b3d-b4a2-693ce8d2f05f', '2020-11-25 12:24:53.077833', '2020-11-25 12:24:53.077833', 'maint', 'maint', 'field_label', 'system', 0, true, 'Update count', 'acl', 'fe7d7b30-15f7-4d02-99e9-c5330763eb4f');
INSERT INTO system.field_label VALUES ('8aa1618a-492d-48fc-8d2d-3680a151b742', '2020-11-25 12:24:53.087351', '2020-11-25 12:24:53.087351', 'maint', 'maint', 'field_label', 'system', 0, true, 'GUID', 'acl_requires_role', 'ff51f5b0-f1c5-4f6b-9435-7696d56470b5');
INSERT INTO system.field_label VALUES ('36893eef-8e74-4528-a26b-9231dbe1b6a6', '2020-11-25 12:24:53.087569', '2020-11-25 12:24:53.087569', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created By', 'acl_requires_role', '57d0e5cf-a46b-4195-bc1c-50c4876ca544');
INSERT INTO system.field_label VALUES ('c8a8610b-8972-4521-b2ae-53c82577a104', '2020-11-25 12:24:53.08777', '2020-11-25 12:24:53.08777', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated By', 'acl_requires_role', '27fa8f7e-fd8b-41a7-9f2a-5e8a8dfd5fac');
INSERT INTO system.field_label VALUES ('e110d929-dae8-4331-bfe1-644c0c9175c4', '2020-11-25 12:24:53.095946', '2020-11-25 12:24:53.095946', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created', 'acl_requires_role', '51d9c078-bd9c-404b-bf72-0681fce75e84');
INSERT INTO system.field_label VALUES ('8f38471f-53fc-44b6-9ad5-5653bade6f25', '2020-11-25 12:24:53.096548', '2020-11-25 12:24:53.096548', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated', 'acl_requires_role', '7ead2598-2dc3-4f9a-a527-2ac1640e0035');
INSERT INTO system.field_label VALUES ('b49e2c4f-c773-4d82-a0d4-ae92ae138d9d', '2020-11-25 12:24:53.096871', '2020-11-25 12:24:53.096871', 'maint', 'maint', 'field_label', 'system', 0, true, 'Class Name', 'acl_requires_role', '6c110d55-de34-4778-a32e-10389d70514e');
INSERT INTO system.field_label VALUES ('174b1ba5-9c7d-4e3d-a80b-f64dc89a42dc', '2020-11-25 12:24:53.103826', '2020-11-25 12:24:53.103826', 'maint', 'maint', 'field_label', 'system', 0, true, 'Update count', 'acl_requires_role', '284e390f-2ed3-41d9-ba67-2dac750aa80f');
INSERT INTO system.field_label VALUES ('b6edb2e3-e98d-4cef-a339-53918215807c', '2020-11-25 12:24:53.104035', '2020-11-25 12:24:53.104035', 'maint', 'maint', 'field_label', 'system', 0, true, 'Scope', 'acl_requires_role', 'a18e60c8-e958-4875-8312-8e30aecda93f');
INSERT INTO system.field_label VALUES ('3ce2063b-1e97-4430-891a-13efc3c347c7', '2020-11-25 12:24:53.11083', '2020-11-25 12:24:53.11083', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated By', 'field_label', '085e2292-009e-4b7f-99db-453378036fd5');
INSERT INTO system.field_label VALUES ('7e920f90-27e5-4610-82c0-3c34d6cda986', '2020-11-25 12:24:53.110472', '2020-11-25 12:24:53.110472', 'maint', 'maint', 'field_label', 'system', 0, true, 'GUID', 'field_label', 'bd202f16-3aa6-4b78-950e-7efaf1e5c3f9');
INSERT INTO system.field_label VALUES ('958729ed-307a-459f-8b7a-9235589994cd', '2020-11-25 12:24:53.110652', '2020-11-25 12:24:53.110652', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created By', 'field_label', '73a067ed-a105-40bb-9c73-55a5e2ade9ce');
INSERT INTO system.field_label VALUES ('4be9dd0a-61bf-4e8d-ba8d-541ed9ba1394', '2020-11-25 12:24:53.116126', '2020-11-25 12:24:53.116126', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated', 'field_label', '6cd4f5d4-29dd-4521-9b4e-9c170c39ccaa');
INSERT INTO system.field_label VALUES ('fcbf283f-ea13-45e7-b2c5-3c2e58162d7e', '2020-11-25 12:24:53.115944', '2020-11-25 12:24:53.115944', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created', 'field_label', '41bf3bf4-85d4-4eb4-9a24-2dd2aaaee85e');
INSERT INTO system.field_label VALUES ('0b4e5be2-f621-407d-87bc-dd10620be09b', '2020-11-25 12:24:53.118088', '2020-11-25 12:24:53.118088', 'maint', 'maint', 'field_label', 'system', 0, true, 'Class Name', 'field_label', '64996039-dfe4-431e-9a53-a6688c16b08b');
INSERT INTO system.field_label VALUES ('b48aa505-6a5e-47a5-bf1e-59db0de93bfe', '2020-11-25 12:24:53.122128', '2020-11-25 12:24:53.122128', 'maint', 'maint', 'field_label', 'system', 0, true, 'Update count', 'field_label', '7dba90be-38ad-4345-80ce-3a3a3bef896e');
INSERT INTO system.field_label VALUES ('86f685f4-1902-4987-856f-f95fd88c35d1', '2020-11-25 12:24:53.123974', '2020-11-25 12:24:53.123974', 'maint', 'maint', 'field_label', 'system', 0, true, 'Scope', 'field_label', 'e0368e78-2328-4d49-9d7b-734177991094');
INSERT INTO system.field_label VALUES ('e91bac1b-263b-4b1e-846a-048e27a35d59', '2020-11-25 12:24:53.137388', '2020-11-25 12:24:53.137388', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated By', 'group', '28b3022c-55bd-4bcc-8281-959e0085fee1');
INSERT INTO system.field_label VALUES ('fd2b8f08-0ca5-4512-a6ff-7518bcb52edb', '2020-11-25 12:24:53.137054', '2020-11-25 12:24:53.137054', 'maint', 'maint', 'field_label', 'system', 0, true, 'GUID', 'group', '2b0ccb9d-d5fc-4f1b-a481-e0df6b363c86');
INSERT INTO system.field_label VALUES ('9b022695-9300-4bd6-893d-de285b496974', '2020-11-25 12:24:53.137229', '2020-11-25 12:24:53.137229', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created By', 'group', 'f7e3a94a-39cf-4014-8e71-e1d8f8a5f6e8');
INSERT INTO system.field_label VALUES ('8e99252c-3e0f-43f4-80db-b8f9de96fa13', '2020-11-25 12:24:53.144325', '2020-11-25 12:24:53.144325', 'maint', 'maint', 'field_label', 'system', 0, true, 'Class Name', 'group', '20d43e09-38c6-4863-866c-b0e6cf929e1a');
INSERT INTO system.field_label VALUES ('9247bc8f-8ade-427d-8575-1c8c14bb2e37', '2020-11-25 12:24:53.143957', '2020-11-25 12:24:53.143957', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created', 'group', 'b751ef22-b727-4e09-97ad-9e89311645cf');
INSERT INTO system.field_label VALUES ('9407ee06-8741-44b5-9ba1-505092732cfb', '2020-11-25 12:24:53.144157', '2020-11-25 12:24:53.144157', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated', 'group', '1449da82-3ae0-42d5-b880-b0048962d3c0');
INSERT INTO system.field_label VALUES ('6d3460d2-1127-4834-9a60-4c161e0a9a33', '2020-11-25 12:24:53.150757', '2020-11-25 12:24:53.150757', 'maint', 'maint', 'field_label', 'system', 0, true, 'Update count', 'group', 'db056ed3-0f62-4754-8549-880eb7168ead');
INSERT INTO system.field_label VALUES ('97602e7d-4e99-4a33-9a59-605541f25cd0', '2020-11-25 12:24:53.150935', '2020-11-25 12:24:53.150935', 'maint', 'maint', 'field_label', 'system', 0, true, 'Scope', 'group', '0302ad74-ec25-4bad-b385-f9a6e6ba3fc7');
INSERT INTO system.field_label VALUES ('f927dc1b-1fca-4161-a532-2911abd31e88', '2020-11-25 12:24:53.15814', '2020-11-25 12:24:53.15814', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated By', 'group_membership', '6db58b22-86c6-4f9b-8436-31294697f99e');
INSERT INTO system.field_label VALUES ('2dbc09b5-7ec8-4a08-a711-e32287e40f97', '2020-11-25 12:24:53.157778', '2020-11-25 12:24:53.157778', 'maint', 'maint', 'field_label', 'system', 0, true, 'GUID', 'group_membership', '73cce3be-fceb-4c17-be42-decb865a643a');
INSERT INTO system.field_label VALUES ('27de0f22-053a-4c33-a556-fa2e999b66ee', '2020-11-25 12:24:53.157958', '2020-11-25 12:24:53.157958', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created By', 'group_membership', '9699aa7f-c26b-4863-a1ab-7ade4b65fdef');
INSERT INTO system.field_label VALUES ('18d1a35e-2acf-4bbf-939f-198d65df60eb', '2020-11-25 12:24:53.167618', '2020-11-25 12:24:53.167618', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created', 'group_membership', '32426ec2-fe59-4844-b657-6381a931c610');
INSERT INTO system.field_label VALUES ('da700f6f-4e2b-41c6-b18e-d619d0eb4b45', '2020-11-25 12:24:53.167947', '2020-11-25 12:24:53.167947', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated', 'group_membership', 'a0e04508-59f4-4214-8a93-1c2d827d3905');
INSERT INTO system.field_label VALUES ('5a5c1c50-cf83-42f5-988d-5576fffc39ec', '2020-11-25 12:24:53.176428', '2020-11-25 12:24:53.176428', 'maint', 'maint', 'field_label', 'system', 0, true, 'Scope', 'group_membership', 'fdc85c14-7e5b-4027-8546-a5ccff2bba9b');
INSERT INTO system.field_label VALUES ('b840ee79-d428-492a-97a9-511e72ebee06', '2020-11-25 12:24:53.181881', '2020-11-25 12:24:53.181881', 'maint', 'maint', 'field_label', 'system', 0, true, 'GUID', 'ui_action', 'e33a0bed-3faf-4efd-962d-d62d75b62824');
INSERT INTO system.field_label VALUES ('1625643a-5129-46d4-8d67-e43d22df34d9', '2020-11-25 12:24:53.18728', '2020-11-25 12:24:53.18728', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created', 'ui_action', 'e66858c5-3944-4f90-bc43-23d9cdae9f86');
INSERT INTO system.field_label VALUES ('ec163d99-11b8-4703-8447-480ed141a31c', '2020-11-25 12:24:53.192665', '2020-11-25 12:24:53.192665', 'maint', 'maint', 'field_label', 'system', 0, true, 'Update count', 'ui_action', '9cb701a2-688c-4311-84d0-ac6e0e398d19');
INSERT INTO system.field_label VALUES ('009a14dd-0d76-4664-bdd1-81e126603119', '2020-11-25 12:24:53.207406', '2020-11-25 12:24:53.207406', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated By', 'ui_action_requires_role', '40d6407f-a990-42ce-86ef-bd4edf1bda8e');
INSERT INTO system.field_label VALUES ('d9c2baa8-26cc-402a-8734-6e8f35860217', '2020-11-25 12:24:53.214259', '2020-11-25 12:24:53.214259', 'maint', 'maint', 'field_label', 'system', 0, true, 'Class Name', 'ui_action_requires_role', 'ed44af53-6213-4538-941a-85ae35430aad');
INSERT INTO system.field_label VALUES ('cc0eb677-8460-4f57-bf47-5d8176fcd163', '2020-11-25 12:24:53.228255', '2020-11-25 12:24:53.228255', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated By', 'server_script', 'c2805035-fbd6-402e-be77-a1ec9b89ead2');
INSERT INTO system.field_label VALUES ('c617d891-11fe-48e0-8335-02032558beec', '2020-11-25 12:24:53.235014', '2020-11-25 12:24:53.235014', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created', 'server_script', 'fc5efe73-0425-4d7c-92a6-0a52786099bb');
INSERT INTO system.field_label VALUES ('08742d9e-5735-45d0-8908-f8dd17341192', '2020-11-25 12:24:53.244356', '2020-11-25 12:24:53.244356', 'maint', 'maint', 'field_label', 'system', 0, true, 'Scope', 'server_script', '43a50164-3f17-4ca0-97d6-0d55e1e66bd2');
INSERT INTO system.field_label VALUES ('263bdaa6-5225-434a-8e5f-e10d62c045d3', '2020-11-25 12:24:53.251604', '2020-11-25 12:24:53.251604', 'maint', 'maint', 'field_label', 'system', 0, true, 'GUID', 'role', '344e4378-ff49-476d-a9fb-0087fd8969dd');
INSERT INTO system.field_label VALUES ('7fc86b96-75e9-4111-b242-c72ff658ca9f', '2020-11-25 12:24:53.257003', '2020-11-25 12:24:53.257003', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated', 'role', 'a0cb8344-176c-4675-949b-ae31c4d1abc8');
INSERT INTO system.field_label VALUES ('893262ac-7e8d-4f5e-9ae3-448912c797c6', '2020-11-25 12:24:53.262248', '2020-11-25 12:24:53.262248', 'maint', 'maint', 'field_label', 'system', 0, true, 'Scope', 'role', '8402efaf-e679-4e87-9d57-e43e1f74c4fa');
INSERT INTO system.field_label VALUES ('eda25f43-59af-4488-aed3-87fecaf5ca54', '2020-11-25 12:24:53.169008', '2020-11-25 12:24:53.169008', 'maint', 'maint', 'field_label', 'system', 0, true, 'Class Name', 'group_membership', 'c51fd136-0d72-441f-9170-b6e3ab1a936d');
INSERT INTO system.field_label VALUES ('7bee9e88-f764-49ff-b9bf-d564473ec8ef', '2020-11-25 12:24:53.182057', '2020-11-25 12:24:53.182057', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created By', 'ui_action', '5afc98e7-01f7-4382-8c5b-981a31114dd6');
INSERT INTO system.field_label VALUES ('ac0ffefe-372d-41f6-8c7f-2d9ac002fa15', '2020-11-25 12:24:53.188553', '2020-11-25 12:24:53.188553', 'maint', 'maint', 'field_label', 'system', 0, true, 'Class Name', 'ui_action', 'f0e306b2-ed44-43fc-848e-4baf814dd8e0');
INSERT INTO system.field_label VALUES ('1ada5a21-6d48-4c52-a18b-cbd67d5ce412', '2020-11-25 12:24:53.207227', '2020-11-25 12:24:53.207227', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created By', 'ui_action_requires_role', 'd007db92-c2ae-4262-8fad-8886d22eceea');
INSERT INTO system.field_label VALUES ('bfe2446f-5dc5-42d7-806a-265ebc420855', '2020-11-25 12:24:53.213226', '2020-11-25 12:24:53.213226', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated', 'ui_action_requires_role', '3b71540d-77db-4dc1-962e-01625ca90876');
INSERT INTO system.field_label VALUES ('3e833b48-c166-40be-a4b5-0b16d23cda26', '2020-11-25 12:24:53.219504', '2020-11-25 12:24:53.219504', 'maint', 'maint', 'field_label', 'system', 0, true, 'Scope', 'ui_action_requires_role', 'b49d830c-dffe-4e66-8020-84ac86df3579');
INSERT INTO system.field_label VALUES ('6623e0b8-8199-4281-ad5d-6d7e162f8b9a', '2020-11-25 12:24:53.227905', '2020-11-25 12:24:53.227905', 'maint', 'maint', 'field_label', 'system', 0, true, 'GUID', 'server_script', '1d814240-287b-432b-88ae-fa4b42817585');
INSERT INTO system.field_label VALUES ('da50a6ca-4317-412c-9550-b1098aea0fdf', '2020-11-25 12:24:53.235225', '2020-11-25 12:24:53.235225', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated', 'server_script', '85ac5513-a92c-4b89-93cb-430d8bd44952');
INSERT INTO system.field_label VALUES ('ab7996b4-30b3-44fc-8221-d69146b6e7ca', '2020-11-25 12:24:53.251946', '2020-11-25 12:24:53.251946', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated By', 'role', '43651aea-42cd-43dd-bdb9-218a0685769f');
INSERT INTO system.field_label VALUES ('151ce042-51c0-4a3e-b5da-24cd8f51689e', '2020-11-25 12:24:53.256819', '2020-11-25 12:24:53.256819', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created', 'role', '52de1bb4-669c-4d62-9a23-0b2f6585f87c');
INSERT INTO system.field_label VALUES ('b10f0cdb-8e0d-4639-8d18-59e25b217f8b', '2020-11-25 12:24:53.262051', '2020-11-25 12:24:53.262051', 'maint', 'maint', 'field_label', 'system', 0, true, 'Update count', 'role', '4b49ec35-cd39-42da-95de-5d2c5f754175');
INSERT INTO system.field_label VALUES ('b9c1e39c-9376-4cd5-a112-104edae16eb4', '2020-11-25 12:24:53.174404', '2020-11-25 12:24:53.174404', 'maint', 'maint', 'field_label', 'system', 0, true, 'Update count', 'group_membership', 'dc6df829-79f0-43a2-a478-4ee54e0ab12f');
INSERT INTO system.field_label VALUES ('2d21f1ef-ba01-4285-b321-441b82dbc4ef', '2020-11-25 12:24:53.182222', '2020-11-25 12:24:53.182222', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated By', 'ui_action', '45972b44-91bc-4047-acb5-e7deba24cc0d');
INSERT INTO system.field_label VALUES ('7a9c30bf-2d7a-4ee8-81c2-fd71c183d7db', '2020-11-25 12:24:53.187501', '2020-11-25 12:24:53.187501', 'maint', 'maint', 'field_label', 'system', 0, true, 'Updated', 'ui_action', '0284d3fe-7252-423b-a2d8-3fafac73aaa1');
INSERT INTO system.field_label VALUES ('981f3605-33fe-4601-98e7-76b241e05a60', '2020-11-25 12:24:53.192843', '2020-11-25 12:24:53.192843', 'maint', 'maint', 'field_label', 'system', 0, true, 'Scope', 'ui_action', 'c5ea0243-cb0f-455e-ba49-0d290eb05585');
INSERT INTO system.field_label VALUES ('e7d54509-7743-47a4-b88b-08c482fa2de7', '2020-11-25 12:24:53.207015', '2020-11-25 12:24:53.207015', 'maint', 'maint', 'field_label', 'system', 0, true, 'GUID', 'ui_action_requires_role', 'd87450bc-a90f-4336-b45e-1ec98d357a5d');
INSERT INTO system.field_label VALUES ('42fbc541-fe0f-44fc-b2c5-5a31c02a76e9', '2020-11-25 12:24:53.213046', '2020-11-25 12:24:53.213046', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created', 'ui_action_requires_role', '54c636a5-42b3-4d0b-b4e1-923a5decf2cf');
INSERT INTO system.field_label VALUES ('b17d5f44-de5a-42ae-a12e-e392d7b20640', '2020-11-25 12:24:53.219322', '2020-11-25 12:24:53.219322', 'maint', 'maint', 'field_label', 'system', 0, true, 'Update count', 'ui_action_requires_role', '05d25512-1d47-4c54-be63-7a1669d4bc3d');
INSERT INTO system.field_label VALUES ('b255763a-7c62-406e-81a9-4c94dec60a9e', '2020-11-25 12:24:53.228089', '2020-11-25 12:24:53.228089', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created By', 'server_script', '3b4c72df-9f01-4003-87d9-e1ca8f2c1b60');
INSERT INTO system.field_label VALUES ('5b51b2da-49c3-4c53-9792-3e49f812a61c', '2020-11-25 12:24:53.235464', '2020-11-25 12:24:53.235464', 'maint', 'maint', 'field_label', 'system', 0, true, 'Class Name', 'server_script', 'b5ef259f-576a-4930-8267-dd117ef48459');
INSERT INTO system.field_label VALUES ('8c5dc54e-0619-4e34-ac08-860a0ce965e4', '2020-11-25 12:24:53.244099', '2020-11-25 12:24:53.244099', 'maint', 'maint', 'field_label', 'system', 0, true, 'Update count', 'server_script', '605aad5c-f77f-4a51-b485-45f0739944b5');
INSERT INTO system.field_label VALUES ('85936bd7-3ae2-425c-9282-161d5fa30fae', '2020-11-25 12:24:53.251783', '2020-11-25 12:24:53.251783', 'maint', 'maint', 'field_label', 'system', 0, true, 'Created By', 'role', '96d8eff2-7604-4995-9179-f54788d78934');
INSERT INTO system.field_label VALUES ('5271d7d9-e976-4b78-8087-b27fe78fb4df', '2020-11-25 12:24:53.258004', '2020-11-25 12:24:53.258004', 'maint', 'maint', 'field_label', 'system', 0, true, 'Class Name', 'role', '5bc5112b-8c49-4f42-b338-72d7105fa8ec');


--
-- Data for Name: group_contains_role; Type: TABLE DATA; Schema: system; Owner: maint
--



--
-- Data for Name: group_membership; Type: TABLE DATA; Schema: system; Owner: maint
--



--
-- Data for Name: script_library; Type: TABLE DATA; Schema: system; Owner: maint
--



--
-- Data for Name: server_script; Type: TABLE DATA; Schema: system; Owner: maint
--



--
-- Data for Name: ui_action; Type: TABLE DATA; Schema: system; Owner: maint
--



--
-- Data for Name: ui_action_requires_role; Type: TABLE DATA; Schema: system; Owner: maint
--



--
-- Data for Name: user_has_role; Type: TABLE DATA; Schema: system; Owner: maint
--



--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: maint
--

SELECT pg_catalog.setval('public.migrations_id_seq', 1, true);


--
-- PostgreSQL database dump complete
--

