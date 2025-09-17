import React, {useCallback, useEffect, useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    CircularProgress
} from "@mui/material";
import {jobRepository} from "../../../../repository/jobRepository.js";

const initialFormData = {
    title: '',
    company: '',
    location: '',
    description: '',
    fieldOfInterest: '',
    position:'',
    workMode: '',
    workType: '',
    companyWebsite:'',
    openDate: '',
    closeDate: '',
    status: 'NOT_APPLIED_YET',
}

const initialEnumState = {
    fieldsOfInterest: [],
    workTypes: [],
    workModes: [],
    positionLevels: [],
}

const AddJobDialog = ({open, onClose, onAdd}) => {
    const [formData, setFormData] = useState(initialFormData);
    const [enumOptions, setEnumOptions] = useState(initialEnumState);
    const [loading, setLoading] = useState({
        fieldsOfInterest: false,
        workTypes: false,
        workModes: false,
        positionLevels: false,
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = () => {
        console.log('Form data being sent:', formData);
        onAdd(formData);
        setFormData(initialFormData);
        onClose();
    };

    // Fetch all enum options
    const fetchEnumOptions = useCallback(async () => {
        try {
            setLoading({
                fieldsOfInterest: true,
                workTypes: true,
                workModes: true,
                positionLevels: true,
            });

            // Fetch all enum options in parallel
            const [fieldsOfInterestRes, workTypesRes, workModesRes, positionLevelsRes] = await Promise.all([
                jobRepository.getAllPossibleFieldsOfInterest(),
                jobRepository.getAllPossibleWorkTypes(),
                jobRepository.getAllPossibleWorkModes(),
                jobRepository.getAllPossibleJobPositionLevels()

            ]);

            setEnumOptions({
                fieldsOfInterest: fieldsOfInterestRes.data || [],
                workTypes: workTypesRes.data || [],
                workModes: workModesRes.data || [],
                positionLevels: positionLevelsRes.data || []
            });

        } catch (error) {
            console.error('Error fetching enum options:', error);
        } finally {
            setLoading({
                fieldsOfInterest: false,
                workTypes: false,
                workModes: false,
                positionLevels: false,
            });
        }
    }, []);

    useEffect(() => {
        if (open) {
            fetchEnumOptions()
                .then(() => {
                    console.log('Enum options loaded successfully');
                })
                .catch((error) => {
                    console.error('Failed to load enum options:', error);
                });
        }
    }, [open, fetchEnumOptions]); // Only fetch when dialog opens

    // Helper function to render select fields
    const renderSelectField = (name, label, options, isLoading) => (
        <FormControl fullWidth margin="dense">
            <InputLabel>{label}</InputLabel>
            <Select
                name={name}
                value={formData[name] || ''}
                onChange={handleChange}
                label={label}
                variant="outlined"
                disabled={isLoading}>
                {isLoading ? (
                    <MenuItem disabled>
                        <CircularProgress size={20} style={{marginRight: 8}} />
                        Loading...
                    </MenuItem>
                ) : (
                    options.map((option) => (
                        <MenuItem
                            key={option.value || option}
                            value={option.value || option}>
                            {option.label || option.name ||
                                (typeof option === 'string' ?
                                    option.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) :
                                    option)}
                        </MenuItem>
                    ))
                )}
            </Select>
        </FormControl>
    );

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Add Job</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Description"
                    name="description"
                    type="text"
                    value={formData.description}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={3}
                />

                {/* Field of Interest Select */}
                {renderSelectField(
                    'fieldOfInterest',
                    'Field of Interest',
                    enumOptions.fieldsOfInterest,
                    loading.fieldsOfInterest
                )}

                {/* Position Levels Select */}
                {renderSelectField(
                    'position',
                    'Position Level',
                    enumOptions.positionLevels,
                    loading.positionLevels
                )}

                {/* Work Type Select */}
                {renderSelectField(
                    'workType',
                    'Work Type',
                    enumOptions.workTypes,
                    loading.workTypes
                )}

                {/* Work Mode Select */}
                {renderSelectField(
                    'workMode',
                    'Work Mode',
                    enumOptions.workModes,
                    loading.workModes
                )}

                <TextField
                    margin="dense"
                    label="Open Date"
                    name="openDate"
                    type="datetime-local"
                    value={formData.openDate}
                    onChange={handleChange}
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    margin="dense"
                    label="Close Date"
                    name="closeDate"
                    type="datetime-local"
                    value={formData.closeDate}
                    onChange={handleChange}
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    margin="dense"
                    label="Company Website"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">
                    Add Job
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddJobDialog;